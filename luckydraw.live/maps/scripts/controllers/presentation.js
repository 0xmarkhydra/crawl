"use strict";
angular
    .module('app')
    .controller('PresentationController', PresentationController);

function PresentationController($rootScope, $timeout, defaultSettingService, navService, userdataService, results, i18nService, Analytics) {
    var $ctrl = this;

    $ctrl.$onInit = function() {
        $('#loader').show();
        Analytics.log('visit_pres', 'Init');

        $ctrl.lockUI = true;
        $timeout(function() {
            if ($ctrl.lockUI) {
                Analytics.log('error', 'Init Presentation', 'Timeout');
                navService('presentation', 'reload');
            }
        }, 6000);

        $ctrl.user = userdataService;
        $ctrl.user.load().then(function(resolve) {
            $ctrl.lockUI = false;
            $ctrl.data = $ctrl.user.member.data;
            $ctrl.setting = $ctrl.user.member.setting;
            $ctrl.results = results;

            navService('presentation', {
                sessionId: $ctrl.results.$id,
                notify: false
            });

            i18nService.setLang();
            $rootScope.theme = $ctrl.user.getRuntimeOpt('theme', null);
            $rootScope.background = $ctrl.setting.info.background || defaultSettingService.info.background;
            setTimeout(function() {
                $('#loader').fadeOut();
            }, 500);
            Analytics.log('visit_pres', 'Loaded');
        });
    }

    $ctrl.isLimited = function(r) {
        return userdataService.status('presentation', r) === 'limited';
    }
}