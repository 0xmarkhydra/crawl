"use strict";
angular
    .module('app')

    .factory('i18nService', function($translate, $http, $window, devOps, userdataService) {
        var userLang = navigator.language || navigator.userLanguage;

        var availangs = {
            en: {
                name: 'English',
                flag: 'images/temp/flag-gb.jpg'
            },
            cn: {
                name: '中文',
                flag: 'images/temp/flag-china.jpg'
            },
            kr: {
                name: '한국어',
                flag: 'images/temp/flag-korea.jpg'
            },
            vi: {
                name: 'Tiếng Việt',
                flag: 'images/temp/flag-vietnam.jpg'
            },
            fr: {
                name: 'Français',
                flag: 'images/temp/flag-fr.jpg'
            },
            pt: {
                name: 'Português',
                flag: 'images/temp/flag-por.jpg'
            }
        };

        var languages = {};
        angular.forEach(availangs, function(language, key) {
            if ($window['i18n_' + key]) {
                languages[key] = language;
            }
        });

        var setLang = function(language) {
            var lang = language || userdataService.getRuntimeOpt('language', 'undefined');
            if (lang === 'undefined') {
                $http.get(devOps.api.ipinfo)
                    .then(function(response) {
                        var resp = response || {}
                        var data = resp.data || {}
                        if (data.country === 'VN') {
                            lang = 'vi'
                        } else {
                            lang = userLang.substr(0, 2)
                        }
                        $translate.use(lang);
                        userdataService.setRuntimeOpt('language', lang);
                    })
            } else {
                $translate.use(lang);
                if (language) userdataService.setRuntimeOpt('language', language);
            }
        }

        var getLang = function() {
            return $translate.use();
        }

        return {
            languages: languages,
            setLang: setLang,
            getLang: getLang,
            userLang: userLang
        }
    });