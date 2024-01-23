"use strict";
angular
    .module('app')
    .component('modalNotify', {
        templateUrl: 'components/modal-notify.html',
        bindings: {
            modalInstance: '<',
            resolve: '<',
            close: '&',
            dismiss: '&',
            error: '<'
        },
        controller: NotifyController
    });

function NotifyController() {
    var $ctrl = this;
    $ctrl.$onInit = function() {
        $ctrl.notification = $ctrl.resolve.notification;
    };
}