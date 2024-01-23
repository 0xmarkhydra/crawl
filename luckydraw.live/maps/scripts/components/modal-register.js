"use strict";
angular
    .module('app')
    .component('modalRegister', {
        templateUrl: 'components/modal-register.html',
        bindings: {
            modalInstance: '<',
            resolve: '<',
            close: '&',
            dismiss: '&',
            error: '<'
        },
        controller: RegisterController
    });

function RegisterController($state, $http, authService, devOps, i18nService, Analytics) {
    var $ctrl = this;

    $ctrl.$onInit = function() {
        $ctrl.analytics = Analytics;
        $ctrl.newsletter = true;
    }

    $ctrl.register = function() {
        if ($ctrl.loading) return;
        $ctrl.loading = true;
        authService.$createUserWithEmailAndPassword($ctrl.email, $ctrl.password)
            .then(function(auth) {
                Analytics.id('alias', auth.uid, auth.email);
                return auth.updateProfile({
                    displayName: $ctrl.company,
                    contactPhone: $ctrl.phone
                });
            })
            .then(function() {
                Analytics.log('register', 'Done', 'Email');
                $http.post(devOps.api.welcome, {
                    contact_email: $ctrl.email,
                    contact_name: $ctrl.company,
                    newsletter: $ctrl.newsletter,
                    language: i18nService.getLang()
                });
                $ctrl.loading = false;
                $ctrl.company = $ctrl.email = $ctrl.password = null;
                $state.go('customize');
            })
            .catch(function(error) {
                $ctrl.loading = false;
                $ctrl.error = error.message + ' (code: ' + error.code + ')';
                Analytics.log('register', 'Fail', error.message);
            });
    };
}