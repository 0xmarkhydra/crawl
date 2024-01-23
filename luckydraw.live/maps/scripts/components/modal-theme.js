"use strict";
angular
    .module('app')
    .component('modalTheme', {
        templateUrl: 'components/modal-theme.html',
        bindings: {
            modalInstance: '<',
            resolve: '<',
            close: '&',
            dismiss: '&'
        },
        controller: ThemeController
    });

function ThemeController($rootScope, devOps, userdataService) {
    var $ctrl = this;

    $ctrl.$onInit = function() {
        $ctrl.theme = $rootScope.theme;
        $ctrl.themes = devOps.themes;
    };

    $ctrl.changeTheme = function(theme) {
        $ctrl.theme = theme;
        $rootScope.theme = theme;
        userdataService.setRuntimeOpt('theme', theme);
        $ctrl.close();
        Analytics.log('customize', 'Theme Changed', theme);
    };
}