"use strict";
angular
    .module('app')
    .component('modalAccount', {
        templateUrl: 'components/modal-account.html',
        bindings: {
            modalInstance: '<',
            resolve: '<',
            close: '&',
            dismiss: '&'
        },
        controller: AccountController
    });

function AccountController($scope, modalService, authService, userdataService, devOps, uxService, Analytics) {
    var $ctrl = this;

    $ctrl.$onInit = function() {
        $ctrl.auth = authService.$getAuth();
        $ctrl.ux = uxService;
        $ctrl.user = userdataService;
        $ctrl.member = userdataService.member.membership;
        $ctrl.modals = modalService;
        $ctrl.version = devOps.version;
        $ctrl.datachanged = $ctrl.edit = $ctrl.saving = false;
    };

    $ctrl.updateProfile = function() {
        if (!$ctrl.datachanged) {
            $ctrl.edit = $ctrl.saving = false;
            Analytics.log('ui_action', 'Edit Without Changes', 'User Profile - Company');
            return;
        }
        if ($ctrl.saving) return;
        $ctrl.saving = true;
        $ctrl.auth.updateProfile({
            displayName: $ctrl.company
        }).then(function() {
            $scope.$apply(function() {
                $ctrl.datachanged = $ctrl.edit = $ctrl.saving = false;
                Analytics.log('edit_profile', 'Company Name Changed');
            });
        }, function(error) {
            // console.error('Error change company name: ', error);
            $scope.$apply(function() {
                $ctrl.datachanged = true;
                $ctrl.edit = true;
                $ctrl.saving = false;
            });
            Analytics.log('error', 'Changing Company Name', error);
        });
    };

    $ctrl.updatePassword = function() {
        if ($ctrl.loading) return;
        $ctrl.loading = true;
        var credential = firebase.auth.EmailAuthProvider.credential(
            $ctrl.auth.email,
            $ctrl.password
        );
        $ctrl.auth.reauthenticate(credential).then(function() {
            if ($ctrl.rePassword != $ctrl.newPassword) {
                $ctrl.loading = false;
                $ctrl.error = 'Password does not match the confirm password';
                Analytics.log('edit_profile', 'Fail to Change Password', 'Passwords not match');
            } else {
                authService.$updatePassword($ctrl.newPassword)
                    .then(function() {
                        $ctrl.loading = false;
                        $ctrl.success = 'Your password has been changed successfully';
                        Analytics.log('edit_profile', 'Password Changed');
                    })
                    .catch(function(error) {
                        // console.error('Error change password: ', error);
                        $ctrl.loading = false;
                        $ctrl.error = error.message;
                        Analytics.log('error', 'Changing Password', error.message);
                    });
            }
        }, function(error) {
            console.error('Error reauthenticate: ', error);
            $ctrl.loading = false;
            $ctrl.error = error.message;
            Analytics.log('error', 'Changing Password - Reauthenticating', error.message);
        });
    };
}