"use strict";
angular
    .module('app')
    .component('appFooter', {
        templateUrl: 'components/footer.html',
        bindings: {
            lightOff: '<',
        },
        controller: FooterController
    });

function FooterController($state, userService, modalService, navService, uxService, Analytics, audioService) {
    var $ctrl = this;
    $ctrl.$onInit = function() {
        $ctrl.appState = $state.current;
        $ctrl.user = userService;
        $ctrl.modals = modalService;
        $ctrl.navigate = navService;
        $ctrl.ux = uxService;
        $ctrl.analytics = Analytics;
        $ctrl.audio = audioService;
    };
}