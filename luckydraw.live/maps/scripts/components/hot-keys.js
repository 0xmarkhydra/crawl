"use strict";
angular
    .module('app')
    .component('hotKeys', {
        bindings: {
            enter: '&',
            confirm: '&',
            cancel: '&',
            prev: '&',
            next: '&',
            nextstep: '&'
        },
        controller: HotKeysController
    });

function HotKeysController(hotkeys, modalService, navService, Analytics, audioService) {
    var $ctrl = this;

    $ctrl.$onInit = function() {
        hotkeys.add({
            combo: 'enter',
            callback: function() {
                Analytics.log('ui_action', 'Hotkey', 'Enter');
                $ctrl.enter();
            }
        });

        hotkeys.add({
            combo: 'f10',
            callback: function() {
                Analytics.log('ui_action', 'Hotkey', 'Next Step');
                $ctrl.nextstep();
            }
        });

        hotkeys.add({
            combo: 'left',
            callback: function() {
                Analytics.log('ui_action', 'Hotkey', 'Prev - Left');
                $ctrl.prev();
            }
        });
        hotkeys.add({
            combo: '4',
            callback: function() {
                Analytics.log('ui_action', 'Hotkey', 'Prev - 4');
                $ctrl.prev();
            }
        });

        hotkeys.add({
            combo: 'right',
            callback: function() {
                Analytics.log('ui_action', 'Hotkey', 'Next - Right');
                $ctrl.next();
            }
        });
        hotkeys.add({
            combo: '6',
            callback: function() {
                Analytics.log('ui_action', 'Hotkey', 'Next - 6');
                $ctrl.next();
            }
        });

        /*hotkeys.add({
          combo: 'space',
          callback: function() {
            $ctrl.confirm();
          }
        });*/
        hotkeys.add({
            combo: '+',
            callback: function() {
                Analytics.log('ui_action', 'Hotkey', 'Confirm - Plus');
                $ctrl.confirm();
            }
        });

        /*hotkeys.add({
          combo: 'del',
          callback: function() {
            $ctrl.cancel();
          }
        });*/
        hotkeys.add({
            combo: '-',
            callback: function() {
                Analytics.log('ui_action', 'Hotkey', 'Cancel - Minus');
                $ctrl.cancel();
            }
        });

        hotkeys.add({
            combo: 'r',
            callback: function() {
                Analytics.log('ui_action', 'Hotkey', 'R');
                modalService.open('IdResult');
            }
        });

        hotkeys.add({
            combo: 'm',
            callback: function() {
                Analytics.log('ui_action', 'Hotkey', 'M');
                audioService.controller.toggle();
            }
        });
    };
}