"use strict";
angular
    .module('app')

    /**
     * uxService
     */
    .factory('uxService', function($firebaseObject, $timeout, firebaseRef, initSettingService, authService, devOps, modalService, $q, Analytics) {
        var hint = {
            prevnext: false,
            spin: false,
            stop: false,
            confirm: false,
            IdResult: false,
            pres: false
        };

        var cssIntro = {
            infologo: '',
            infoname: '',
            colorsname: '',
            infocompany: '',
            prizes: '',
            dataids: '',
            messages: '',
            colorsaction_msg: '',
            buttons: ''
        };

        var mouseOver = function(el) {
            hint[el] = true;
            // Analytics.log('ui_action', 'Mouse Over', el);
        }

        var mouseLeave = function(el) {
            hint[el] = false;
        }

        var focusOn = function(el) {
            setTimeout(function() {
                $(el).focus();
            }, 200);
        }

        var setcssIntro = function(setting) {
            var el = '';
            angular.copy({}, cssIntro);

            if (setting.runtime.longestIdLen === undefined)
                el = 'dataids';
            else if (setting.info.background === undefined)
                el = 'infobackground';
            else if (setting.runtime.theme === undefined)
                el = 'runtimetheme';
            else if (Object.keys(setting.icons).length <= 1)
                el = 'prizes';

            if (el) {
                $timeout(function() {
                    cssIntro[el] = 'look-at-me';
                });
                // Analytics.log('onboarding', 'Look-at-me Animation', el);
            }
        }

        var customStyle = function(textcolor, shadow) {
            if (!textcolor) return {};
            var style = {
                'color': textcolor,
                'text-shadow': shadow ? contrastBW(textcolor) + ' 1px 1px 1px' : ''
            }
            return style;
        }

        var contrastBW = function(hex) {
            var r = parseInt(hex.substr(1, 2), 16),
                g = parseInt(hex.substr(3, 2), 16),
                b = parseInt(hex.substr(5, 2), 16),
                yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
            return (yiq >= 128) ? 'black' : 'white';
        }

        return {
            hint: hint,
            mOver: mouseOver,
            mLeave: mouseLeave,
            focus: focusOn,
            cssIntro: cssIntro,
            setcssIntro: setcssIntro,
            style: customStyle
        }
    });