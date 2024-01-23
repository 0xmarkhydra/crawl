"use strict";
angular
    .module('app')
    .component('modalAlert', {
        templateUrl: 'components/modal-alert.html',
        bindings: {
            modalInstance: '<',
            resolve: '<',
            close: '&',
            dismiss: '&'
        },
        controller: AlertController
    });

function AlertController(userService, $interval) {
    var $ctrl = this;
    $ctrl.$onInit = function() {
        $ctrl.dismissCountDown = null;
        if ($ctrl.resolve.dismissLogout) {
            $ctrl.dismissCountDown = -9;
            var uP = $interval(function() {
                $ctrl.dismissCountDown++;
                if ($ctrl.dismissCountDown === 0) {
                    $interval.cancel(uP);
                    uP = undefined;
                    $ctrl.dismiss();
                    userService.logout();
                }
            }, 1000);
        }
    }
}