"use strict";
angular
    .module('app')
    .component('modalIdsResult', {
        templateUrl: 'components/modal-ids-result.html',
        bindings: {
            modalInstance: '<',
            resolve: '<',
            close: '&',
            dismiss: '&'
        },
        controller: IdsResultController
    });

function IdsResultController($state, $timeout, $stateParams, resultService, prizeService, userdataService, defaultSettingService, $translate, userService, Analytics) {
    var $ctrl = this;

    $ctrl.$onInit = function() {
        $ctrl.defaultTab = prizeService.currentTab
        $ctrl.state = $state.current.name;
        if (userService.authenticated &&
            ($ctrl.state == 'presentation' || $ctrl.state == 'customize')) {
            $ctrl.custom_prizes = userdataService.member.setting.prizes;
            $ctrl.prizes = prizeService.load(userdataService.member.setting, false);
            $ctrl.results = resultService.load($ctrl.state, $stateParams.sessionId, 'array');
            $timeout(function() {
                $ctrl.resultsLoaded = true;
            }, 3000);
        } else {
            $ctrl.custom_prizes = [];
            $ctrl.prizes = prizeService.load(defaultSettingService, false);
            $ctrl.results = resultService.load('default');
        }
        $ctrl.toggleDel = {};
        $ctrl.gotLengths = [];
        $ctrl.batchStops = {};
    };

    $ctrl.deleteResult = function(session, prize) {
        resultService.clear(session.$id, prize.key);
    };

    $ctrl.getIndex = function(obj, sessionId, prizeKey, index) {
        var key = sessionId + prizeKey
        if (!$ctrl.gotLengths[key]) {
            $ctrl.gotLengths[key] = obj.length || Object.keys(obj).length
        }
        return $ctrl.gotLengths[key] - index
    }

    $ctrl.rowStyle = function(prizeKey, index, status) {
        var matchbatch, evenodds
        if ($ctrl.batchStops[prizeKey] === undefined) {
            if ($ctrl.custom_prizes[prizeKey]) {
                matchbatch = $ctrl.custom_prizes[prizeKey].match(/\([xX][0-9]+\)$/g)
            }
            $ctrl.batchStops[prizeKey] = matchbatch ? parseInt(matchbatch[0].substr(2).slice(0, -1)) : 0;
        }
        if ($ctrl.batchStops[prizeKey] > 1) {
            evenodds = index % $ctrl.batchStops[prizeKey] === 0 ? 'even' : 'odds';
            // presentation, batch prizes: only show current batch winners
            if ($ctrl.state === 'presentation' && index >= $ctrl.batchStops[prizeKey]) {
                evenodds += ' hidden'
            }
        }
        return status + ' ' + evenodds
    }

    $ctrl.download = function() {
        var download = [];
        var row = [
            $translate.instant('Drawing Session'),
            $translate.instant('Prize'),
            $translate.instant('IDs'),
            $translate.instant('Winner Name'),
            $translate.instant('Draw Date'),
            $translate.instant('Status')
        ];
        download.push(row);

        var index = 0;
        angular.forEach($ctrl.results, function(session, s) {
            index++;
            angular.forEach($ctrl.prizes, function(prize) {
                angular.forEach(session[prize.key], function(result) {
                    row = [index,
                        $ctrl.custom_prizes[prize.key] || $translate.instant(prize.name),
                        result.id,
                        result.name,
                        moment(result.time).format('YYYY-MM-DD HH:mm:ss'),
                        $translate.instant(result.status)
                    ];
                    download.push(row);
                });
            });
        });

        var ep = new ExcelPlus();
        var filename = 'LuckyDraw-' + moment(Date.now()).format('YYYYMMMDD-HHmmss') + '.xlsx';
        ep.createFile('LuckyDraw')
            .write({
                content: download
            })
            .saveAs(filename);
        Analytics.log('ui_action', 'Id Result Download', download.length - 1);
        return false;
    };
}