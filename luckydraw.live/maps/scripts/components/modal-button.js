"use strict";
angular
    .module('app')
    .component('modalButton', {
        templateUrl: 'components/modal-button.html',
        bindings: {
            modalInstance: '<',
            resolve: '<',
            close: '&',
            dismiss: '&'
        },
        controller: ButtonController
    });

function ButtonController(userdataService, Analytics) {
    var $ctrl = this;

    $ctrl.$onInit = function() {
        $ctrl.buttons = {};
        angular.copy(userdataService.member.setting.buttons, $ctrl.buttons);
    };

    $ctrl.save = function(reset) {
        if ($ctrl.loading) return;
        if (!$ctrl.datachanged) {
            $ctrl.close();
            Analytics.log('ui_action', 'Edit Without Changes', 'Buttons');
            return;
        }
        $ctrl.loading = true;
        userdataService.member.setting.buttons = {};
        angular.copy($ctrl.buttons, userdataService.member.setting.buttons);
        userdataService.save('setting', 'buttons').then(
            function(resolve) {
                $ctrl.close();
                if (reset === 'reset')
                    Analytics.log('customize', 'Buttons Reseted');
                else
                    Analytics.log('customize', 'Buttons Edited');
            },
            function(reject) {
                // console.error('Buttons saving failed. ', reject);
                $ctrl.loading = false;
            });
    };

    $ctrl.reset = function() {
        $ctrl.datachanged = true;
        $ctrl.buttons = {};
        $ctrl.save('reset');
    };
}