"user strict;"
angular
    .module('app')
    .controller('ModController', ModController);

function ModController($rootScope, $state, $timeout, Fullscreen, devOps, defaultSettingService, userdataService, modalService, navService, prizeService, i18nService, uxService, Analytics, audioService) {
    var $ctrl = this;

    $ctrl.$onInit = function() {
        $('#loader').show();
        Analytics.log('visit_mod', 'Init');

        $ctrl.lockUI = true;
        $timeout(function() {
            if ($ctrl.lockUI) {
                Analytics.log('error', 'Init Customize', 'Timeout');
                navService('customize', 'reload');
            }
        }, 6000);

        $ctrl.user = userdataService;
        $ctrl.user.load().then(function(resolve) {
            $ctrl.lockUI = false;
            $ctrl.lightOff = false;

            $ctrl.data = $ctrl.user.member.data;
            $ctrl.setting = $ctrl.user.member.setting;

            $ctrl.ux = uxService;
            $ctrl.modals = modalService;
            $ctrl.navigate = navService;
            $ctrl.devOps = devOps;

            $ctrl.appState = $state.current;
            $ctrl.defaultSetting = defaultSettingService;
            $ctrl.prizes = prizeService.load($ctrl.setting, true);

            $ctrl.animClass = {}; // object that hold animated class name for elements, to inject via ng-class
            $ctrl.longestIdLen = 3;

            if (!$ctrl.data.ids || !$ctrl.data.ids.length) {
                // id list empty
                $ctrl.longestIdLen = 6;
            } else if (!$ctrl.setting.runtime || !$ctrl.setting.runtime.longestIdLen) {
                // has id list, but no record of max id length
                angular.forEach($ctrl.data.ids, function(id, k) {
                    id = String(id).replace(/\s+/g, '');
                    if (id.length > $ctrl.longestIdLen) $ctrl.longestIdLen = id.length;
                });
            } else if ($ctrl.setting.runtime.longestIdLen > $ctrl.longestIdLen) {
                // recorded max length > 3
                $ctrl.longestIdLen = $ctrl.setting.runtime.longestIdLen;
            }

            $ctrl.machineSlots = _.range(0, $ctrl.longestIdLen);
            $ctrl.slotsCss = devOps.slotsCss($ctrl.longestIdLen);

            $ctrl.clpkopbr = $ctrl.devOps.colorPickerOp('bottom right');
            $ctrl.clpkoptl = $ctrl.devOps.colorPickerOp('top left');

            $ctrl.changed = {
                infoname: false,
                infocompany: false
            }

            $ctrl.colorEvents = {
                onClose: function(api, color, $event) {
                    // if (!navigator.onLine) return;
                    $ctrl.user.save('setting', 'colorPicker');
                    Analytics.log('customize', 'Custom Color Picked', color);
                }
            }

            // init slot machines
            $ctrl.characters = [];
            $ctrl.machines = [];
            $ctrl.state = devOps.states.ready;

            $ctrl.setPrize(0);
            $ctrl.ux.setcssIntro(userdataService.member.setting);

            i18nService.setLang();
            $rootScope.theme = $ctrl.user.getRuntimeOpt('theme', null);
            $rootScope.background = $ctrl.setting.info.background || defaultSettingService.info.background;

            audioService.init($ctrl.longestIdLen);

            setTimeout(function() {
                $('#loader').fadeOut();
                if (!$ctrl.modals.doLoginOpen()) {
                    if (!$ctrl.data.ids || !$ctrl.data.ids.length)
                        $ctrl.modals.open('Id');
                }
            }, 500);
            Analytics.log('visit_mod', 'Loaded');
        });
    }

    $ctrl.setPrize = function(index) {
        if ($ctrl.state !== devOps.states.ready || index < 0 || index >= $ctrl.prizes.length)
            return;
        $ctrl.state = devOps.states.setprize;

        if (index < $ctrl.prizeIndex)
            $ctrl.animClass.setprize = 'prize-prev';
        else if ($ctrl.prizeIndex >= 0)
            $ctrl.animClass.setprize = 'prize-next';

        $ctrl.prizeIndex = index;
        $ctrl.prize = $ctrl.prizes[index];

        $timeout(function() {
            $ctrl.animClass.setprize = null;
            $ctrl.state = devOps.states.ready;
        }, devOps.timeout.ready);
        if ($ctrl.animClass.setprize) Analytics.log('customize', 'Prize Switched', $ctrl.prize.key);
    }

    $ctrl.setPrevPrize = function() {
        $ctrl.setPrize($ctrl.prizeIndex - 1);
    }

    $ctrl.setNextPrize = function() {
        $ctrl.setPrize($ctrl.prizeIndex + 1);
    }

    $ctrl.uploadLogo = function($file) {
        if ($ctrl.user.editing.infologo) return;
        $ctrl.user.upload($file, '', 'info', 'logo');
        Analytics.log('customize', 'Logo Upload');
    }

    $ctrl.removeLogo = function() {
        $ctrl.setting.info.logo = '';
        $ctrl.user.editing.infologo = true;
        $timeout(function() {
            $ctrl.user.save('setting', 'infologo');
            Analytics.log('customize', 'Logo Removed');
        }, 1000);
    }

    $ctrl.saveSetting = function(item) {
        if (!$ctrl.changed[item]) {
            $ctrl.user.editing[item] = false;
            Analytics.log('ui_action', 'Edit Without Changes', item);
        } else {
            $ctrl.user.save('setting', item);
            $ctrl.changed[item] = false;
            Analytics.log('customize', item + ' changed');
        }
    }

    $ctrl.goPresentation = function() {
        $ctrl.ux.mLeave('pres');
        if (!$ctrl.data.ids || !$ctrl.data.ids.length) {
            Analytics.log('ui_action', 'Fail to Go Presentation', 'Ids Empty');
            $ctrl.modals.open('Id');
        } else {
            Analytics.log('ui_action', 'Go Presentation', 'From Customize');
            $ctrl.navigate('presentation');
        }
    }
}