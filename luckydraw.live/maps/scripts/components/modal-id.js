"use strict";
angular
    .module('app')
    .component('modalId', {
        templateUrl: 'components/modal-id.html',
        bindings: {
            modalInstance: '<',
            resolve: '<',
            close: '&',
            dismiss: '&'
        },
        controller: IdController
    });

function IdController($state, navService, userdataService, devOps, Analytics) {
    var $ctrl = this;

    $ctrl.$onInit = function() {
        $ctrl.start = 1;
        $ctrl.end = 20;
        $ctrl.data = userdataService.member.data;
        $ctrl.ids = [];
        $ctrl.names = [];
        angular.copy($ctrl.data.ids, $ctrl.ids);
        angular.copy($ctrl.data.names, $ctrl.names);
        // console.log(JSON.stringify($ctrl.ids))
        // hide the secret
        // var _ids = [];
        // for (var i = 0; i < $ctrl.ids.length; i++) {
        //   $ctrl.ids[i] = $ctrl.ids[i].replace(/\*(x|diamond|gold|silver|bronze|p[0-9]+)$/, '')
        //   if (_ids.indexOf($ctrl.ids[i]) === -1) _ids.push($ctrl.ids[i]);
        // }
        // $ctrl.ids = _ids;
        $ctrl.loading = $ctrl.datachanged = $ctrl.maxLength = false;
        $ctrl.currentIdLen = $ctrl.longestIdLen = userdataService.member.setting.runtime.longestIdLen || 0;
    };

    $ctrl.save = function(presentation) {
        if ($ctrl.loading) return;

        if (!$ctrl.datachanged) {
            if (!presentation) {
                $ctrl.close();
                Analytics.log('ui_action', 'Edit Without Changes', 'Data Ids');
            } else if ($ctrl.ids && $ctrl.ids.length > 0) {
                $ctrl.close();
                Analytics.log('ui_action', 'Go Presentation', 'From Modal Id');
                navService('presentation');
            } else {
                Analytics.log('ui_action', 'Fail to Go Presentation', 'Ids Empty');
            }
            return;
        }

        $ctrl.checkMaxLength();
        if ($ctrl.maxLength) {
            Analytics.log('customize', 'Fail to Save Data Ids', 'Id Max Length: ' + $ctrl.longestIdLen + '/' + devOps.maxLengthId);
            return;
        }

        $ctrl.loading = true;

        $ctrl.data.ids = [];
        $ctrl.data.names = [];
        angular.copy($ctrl.ids, $ctrl.data.ids);
        angular.copy($ctrl.names, $ctrl.data.names);

        userdataService.member.setting.runtime.longestIdLen = $ctrl.longestIdLen;

        userdataService.save('data', 'ids').then(function(resolve) {
            if ($ctrl.ids.length > 0)
                Analytics.log('customize', 'Data Ids Saved', $ctrl.ids.length, {
                    names: $ctrl.names.length
                });
            else
                Analytics.log('customize', 'Data Ids Emptied');
            userdataService.save('setting', 'longestIdLen').then(function(resolve) {
                if ($ctrl.ids.length > 0) {
                    $ctrl.close();
                    if (presentation) {
                        Analytics.log('ui_action', 'Go Presentation', 'From Modal Id');
                        navService('presentation');
                    } else if ($ctrl.longestIdLen !== $ctrl.currentIdLen)
                        navService('customize', 'reload');
                } else {
                    $ctrl.loading = false;
                    $ctrl.datachanged = false;
                    if (presentation) Analytics.log('ui_action', 'Fail to Go Presentation', 'Ids Empty');
                }
            }, function(reject) {
                // console.error('Saving longestIdLen failed. ', reject);
                $ctrl.loading = false;
            });
        }, function(reject) {
            // console.error('Saving data IDs failed. ', reject);
            $ctrl.loading = false;
        });
    };

    $ctrl.generate = function(start, end) {
        $ctrl.datachanged = true;
        start = parseInt(start);
        end = parseInt(end);
        if (!start) start = 1;
        if (!end) end = 20;
        if (start > end) {
            var tmp = start;
            start = end;
            end = tmp;
        }
        $ctrl.start = start;
        $ctrl.end = end;
        $ctrl.ids = _.range(start, end + 1).map(function(i) {
            return _.padStart(i, 6, '0');
        });
        Analytics.log('customize', 'Data Ids Generated', start + ' - ' + end);
    };

    $ctrl.checkMaxLength = function() {
        $ctrl.maxLength = false;
        $ctrl.longestIdLen = 0;
        if (!$ctrl.ids) $ctrl.ids = [];
        if (!$ctrl.names) $ctrl.names = [];
        angular.forEach($ctrl.ids, function(id) {
            id = String(id).replace(/\s+/g, '');
            var _id = id.match(/^(.*)\*(x|diamond|gold|silver|bronze|p[0-9]+)$/i);
            if (_id && _id.length === 3) id = _id[1];
            if (!$ctrl.maxLength && id.length > devOps.maxLengthId)
                $ctrl.maxLength = true;
            if (id.length > $ctrl.longestIdLen)
                $ctrl.longestIdLen = id.length;
        });
    };
}