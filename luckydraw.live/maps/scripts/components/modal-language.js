"use strict";
angular
    .module('app')
    .component('modalLanguage', {
        templateUrl: 'components/modal-language.html',
        bindings: {
            modalInstance: '<',
            resolve: '<',
            close: '&',
            dismiss: '&'
        },
        controller: LanguageController
    });

function LanguageController(i18nService, Analytics) {
    var $ctrl = this;

    $ctrl.$onInit = function() {
        $ctrl.language = i18nService.getLang();
        $ctrl.languages = i18nService.languages;
    };

    $ctrl.changeLanguage = function(language) {
        $ctrl.language = language;
        i18nService.setLang(language);
        Analytics.log('customize', 'Language Changed', language)
        $ctrl.close();
    };
}