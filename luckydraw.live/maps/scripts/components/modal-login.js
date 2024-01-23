"use strict";
angular
    .module('app')
    .component('modalLogin', {
        templateUrl: 'components/modal-login.html',
        bindings: {
            modalInstance: '<',
            resolve: '<',
            close: '&',
            dismiss: '&'
        },
        controller: LoginController
    });

function LoginController($state, authService, Analytics) {
    var $ctrl = this;

    $ctrl.$onInit = function() {
        $ctrl.analytics = Analytics;
    }

    $ctrl.login = function() {
        if ($ctrl.loading) return;
        $ctrl.loading = true;
        authService.$signInWithEmailAndPassword($ctrl.email, $ctrl.password)
            .then(function(auth) {
                Analytics.id('identify', auth.uid, auth.email);
                Analytics.log('login', 'Logged In');
                $ctrl.email = $ctrl.password = null;
                $state.go('customize');
            })
            .catch(function(error) {
                $ctrl.loading = false;
                $ctrl.error = error.message + ' (code: ' + error.code + ')';
                Analytics.log('login', 'Fail to Login', error.message);
            });
    };

    $ctrl.loginGoogle = function() {
        $ctrl.loading = true;
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/plus.login');
        firebase.auth().signInWithRedirect(provider);
    }
}