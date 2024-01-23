"use strict";
angular
    .module('app')
    .component('modalForgotPassword', {
        templateUrl: 'components/modal-forgot-password.html',
        bindings: {
            modalInstance: '<',
            resolve: '<',
            close: '&',
            dismiss: '&'
        },
        controller: ForgotPasswordController
    });

function ForgotPasswordController(authService, modalService, Analytics) {
    var $ctrl = this;
    $ctrl.analytics = Analytics;

    $ctrl.forgotPassword = function() {
        if ($ctrl.loading) return;
        $ctrl.loading = true;
        authService.$sendPasswordResetEmail($ctrl.email)
            .then(function() {
                modalService.alert('Done', 'Please check your email for reset password instruction')
                $ctrl.close();
                Analytics.log('forgotpw', 'Reset Password Submitted');
            })
            .catch(function(error) {
                $ctrl.loading = false;
                $ctrl.error = error.message + ' (code: ' + error.code + ')';
                Analytics.log('forgotpw', 'Fail to Reset Password', error.message);
            });
    };
}