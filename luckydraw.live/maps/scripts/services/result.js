"use strict";
angular
    .module('app')
    .factory('defaultResultService', function(devOps) {
        var results = {};
        for (var i = devOps.defaultPrizes.length - 1; i >= 0; i--) {
            results[devOps.defaultPrizes[i]] = [];
        }
        return results;
    })

    .factory('resultService', function($firebaseObject, $firebaseArray, firebaseRef, defaultResultService) {
        var ref = {},
            result = {};

        var loadResults = function(state, sessionId, mode) {
            switch (state) {
                case 'presentation':
                    if (!ref.presentation) {
                        if (sessionId)
                            ref.presentation = firebaseRef().child('idDrawResults').child(sessionId);
                        else
                            ref.presentation = firebaseRef().child('idDrawResults').push();
                        result.presentation = $firebaseObject(ref.presentation);
                    }
                    if (mode === 'array')
                        return [result.presentation];
                    else
                        return result.presentation;
                    break;
                case 'customize':
                    if (!ref.customize) {
                        ref.customize = firebaseRef().child('idDrawResults');
                        result.customize = $firebaseArray(ref.customize.orderByKey());
                    }
                    return result.customize;
                    break;
                default:
                    return [defaultResultService];
            }
        }

        var clearResult = function(session, prize) {
            ref.customize.child(session).set({});
        }

        return {
            load: loadResults,
            clear: clearResult
        }
    })

    .factory('prizeService', function(defaultSettingService, devOps) {
        var prizes = {
            guest: [],
            user: [],
            default: []
        };

        var loadPrizes = function(setting, reload) {
            var getAllDefault = reload === 9999;
            if (getAllDefault)
                var owner = 'default';
            else
                var owner = setting.owner === 'guest' ? 'guest' : 'user';

            if (prizes[owner].length > 0 && !reload)
                return prizes[owner];

            prizes[owner] = []; // reset

            var keys = Object.keys(defaultSettingService.prizes),
                idefaults = devOps.defaultPrizes.length - 1,
                key, image, showimage, default_not_disabled, custom_is_enabled;

            for (var i = 0; i < keys.length; i++) {
                key = keys[i];

                default_not_disabled = custom_is_enabled = false;

                if (i <= idefaults) {
                    default_not_disabled = setting.enabled_prizes[key] !== false;
                    if (getAllDefault && default_not_disabled) setting.enabled_prizes[key] = true; // set in advanced for use in modal-prize listing
                } else {
                    custom_is_enabled = setting.enabled_prizes[key] === true;
                }

                if (getAllDefault || default_not_disabled || custom_is_enabled) {
                    showimage = true;
                    if (!getAllDefault && setting.icons && setting.icons[key]) {
                        image = setting.icons[key];
                    } else {
                        var ico = getAllDefault ? 'iconsWithoutBackground' : 'icons';
                        image = defaultSettingService[ico][key] || defaultSettingService[ico].default;
                        showimage = (i <= idefaults);
                    }
                    prizes[owner].unshift({
                        key: key,
                        name: defaultSettingService.prizes[key],
                        image: image,
                        showimage: showimage,
                        confirmed: 0
                    });
                }
            }
            return prizes[owner];
        }

        var enable_default = function(enabled_prizes) {
            for (var i = 0; i < devOps.defaultPrizes.length; i++) {
                enabled_prizes[devOps.defaultPrizes[i]] = true;
            }
        }

        return {
            load: loadPrizes,
            enable_default: enable_default,
            currentTab: 0
        }
    });