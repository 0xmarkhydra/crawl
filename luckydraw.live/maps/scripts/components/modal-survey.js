"use strict";
angular
    .module('app')
    .component('modalSurvey', {
        templateUrl: 'components/modal-survey.html',
        bindings: {
            modalInstance: '<',
            resolve: '<',
            close: '&',
            dismiss: '&'
        },
        controller: SurveyController
    });

function SurveyController($state, Analytics) {
    var $ctrl = this;

    $ctrl.select = function(item) {
        Analytics.log('survey', item);
        localStorage.setItem('survey.' + $ctrl.resolve.surveyId, Date.now());
        $ctrl.dismiss();
        if (item === 'Planning Event') $state.go('register');
    }
}