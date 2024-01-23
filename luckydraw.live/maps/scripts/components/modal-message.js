"use strict";
angular
    .module('app')
    .component('modalMessage', {
        templateUrl: 'components/modal-message.html',
        bindings: {
            modalInstance: '<',
            resolve: '<',
            close: '&',
            dismiss: '&'
        },
        controller: MessageController
    });

function MessageController(userdataService, Analytics) {
    var $ctrl = this;

    $ctrl.$onInit = function() {
        $ctrl.messages = {};
        angular.copy(userdataService.member.setting.messages, $ctrl.messages);
    };

    $ctrl.save = function(reset) {
        if ($ctrl.loading) return;
        if (!$ctrl.datachanged) {
            $ctrl.close();
            Analytics.log('ui_action', 'Edit Without Changes', 'Action Messages');
            return;
        }
        $ctrl.loading = true;
        userdataService.member.setting.messages = {};
        angular.copy($ctrl.messages, userdataService.member.setting.messages)
        userdataService.save('setting', 'messages').then(
            function(resolve) {
                $ctrl.close();
                if (reset === 'reset')
                    Analytics.log('customize', 'Action Messages Reseted');
                else
                    Analytics.log('customize', 'Action Messages Edited');
            },
            function(reject) {
                // console.error('Saving action messages failed. ', reject);
                $ctrl.loading = false;
            });
    };

    $ctrl.reset = function() {
        $ctrl.datachanged = true;
        $ctrl.messages = {};
        $ctrl.save('reset');
    };
}