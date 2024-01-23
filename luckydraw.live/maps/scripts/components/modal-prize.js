"use strict";
angular
    .module('app')
    .component('modalPrize', {
        templateUrl: 'components/modal-prize.html',
        bindings: {
            modalInstance: '<',
            resolve: '<',
            close: '&',
            dismiss: '&'
        },
        controller: PrizeController
    });

function PrizeController(userdataService, defaultSettingService, prizeService, navService, uxService, Analytics) {
    var $ctrl = this;

    $ctrl.$onInit = function() {
        $ctrl.ux = uxService;
        $ctrl.allPrizes = prizeService.load(userdataService.member.setting, 9999).reverse();

        $ctrl.editing = userdataService.editing;
        $ctrl.setting = userdataService.member.setting;

        $ctrl.prizes = {};
        $ctrl.enabled_prizes = {};
        angular.copy(userdataService.member.setting.prizes, $ctrl.prizes);
        angular.copy(userdataService.member.setting.enabled_prizes, $ctrl.enabled_prizes);

        $ctrl.iconchanged = $ctrl.namechanged = $ctrl.loading = false;
    };

    $ctrl.save = function(reset) {
        if ($ctrl.loading) return;
        if (!$ctrl.namechanged) {
            if (!$ctrl.iconchanged) Analytics.log('ui_action', 'Edit Without Changes', 'Prizes');
            $ctrl.doDismiss();
            return;
        }

        $ctrl.loading = true;

        // prevent bug when all prizes disabled
        var alldisabled = true
        for (var _p in $ctrl.enabled_prizes) {
            if (_p !== 'i' && $ctrl.enabled_prizes[_p]) alldisabled = false
        }
        if (alldisabled) $ctrl.enabled_prizes.x = true

        userdataService.member.setting.prizes = {};
        userdataService.member.setting.enabled_prizes = {};
        if (reset !== 'reset') {
            angular.copy($ctrl.prizes, userdataService.member.setting.prizes);
            angular.copy($ctrl.enabled_prizes, userdataService.member.setting.enabled_prizes);
        }

        userdataService.save('setting', 'prizes').then(
            function(resolve) {
                $ctrl.close();
                if (reset === 'reset')
                    Analytics.log('customize', 'Prizes Name Reseted');
                else
                    Analytics.log('customize', 'Prizes Name Edited', Object.keys($ctrl.enabled_prizes).length - 1);
                navService('customize', 'reload');
            },
            function(reject) {
                // console.error('Saving prizes failed. ', reject);
                $ctrl.loading = false;
            });
    };

    $ctrl.reset = function() {
        $ctrl.namechanged = true;
        $ctrl.prizes = {};
        $ctrl.enabled_prizes = {};
        prizeService.enable_default($ctrl.enabled_prizes);
        $ctrl.save('reset');
    };

    $ctrl.removeIcon = function(prizekey) {
        $ctrl.iconchanged = true;
        userdataService.remove('icons', prizekey);
        Analytics.log('customize', 'Prize Icon Delete', prizekey);
    };

    $ctrl.uploadIcon = function($file, prizekey) {
        $ctrl.iconchanged = true;
        userdataService.upload($file, 'Prize', 'icons', prizekey);
        Analytics.log('customize', 'Prize Icon Upload', prizekey);
    };

    $ctrl.doDismiss = function() {
        $ctrl.dismiss();
        if ($ctrl.iconchanged) navService('customize', 'reload');
    };
}