"use strict";
angular
    .module('app')
    .component('modalBackground', {
        templateUrl: 'components/modal-background.html',
        bindings: {
            modalInstance: '<',
            resolve: '<',
            close: '&',
            dismiss: '&'
        },
        controller: BackgroundController
    });

function BackgroundController($rootScope, $timeout, $interval, userService, userdataService, modalService, Analytics) {
    var $ctrl = this;

    $ctrl.$onInit = function() {
        $ctrl.user = userService;
        $ctrl.modals = modalService;
        if ($ctrl.user.authenticated) {
            $ctrl.editing = userdataService.editing;
            $ctrl.info = userdataService.member.setting.info;
        } else {
            $ctrl.editing = {
                infobackground: false
            };
            $ctrl.info = {
                background: null
            };
        }
    };

    $ctrl.removeBackground = function() {
        userdataService.remove('info', 'background');
        $timeout(function() {
            $rootScope.background = '';
            $rootScope.url_background = '';
        });
        Analytics.log('customize', 'Background Delete');
    };

    $ctrl.uploadBackground = function($file) {
        if ($ctrl.editing.infobackground) return;
        $ctrl.uploadProgress = 0;
        var uP = $interval(function() {
            if ($ctrl.uploadProgress < 100) $ctrl.uploadProgress++;
        }, 300);
        Analytics.log('customize', 'Background Uploading');
        userdataService.upload($file, 'Background', 'info', 'background').then(
            function(resolve) {
                $rootScope.background = resolve;
                $interval.cancel(uP);
                uP = undefined;
                Analytics.log('customize', 'Background Uploaded');
            },
            function(reject) {
                // console.error('Background upload failed. ', reject);
                $interval.cancel(uP);
                uP = undefined;
            }
        );
    };
}