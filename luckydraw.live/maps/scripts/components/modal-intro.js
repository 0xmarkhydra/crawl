"use strict";
angular
    .module('app')
    .component('modalIntro', {
        templateUrl: 'components/modal-intro.html',
        bindings: {
            modalInstance: '<',
            resolve: '<',
            close: '&',
            dismiss: '&'
        },
        controller: IntroController
    });

function IntroController(modalService) {
    var $ctrl = this;
    $ctrl.$onInit = function() {
        $ctrl.modals = modalService;
    };
}