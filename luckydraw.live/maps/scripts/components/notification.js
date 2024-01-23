"use strict";
angular
    .module('app')
    .component('notification', {
        controller: notificationController
    });

function notificationController($uibModal, $firebaseObject, authService, firebaseRef, Analytics) {
    var $ctrl = this;
    authService.$onAuthStateChanged(function(firebaseUser) {
        var unwatch;
        if (firebaseUser) {
            $ctrl.notification = $firebaseObject(firebaseRef().child('notification'));
            unwatch = $ctrl.notification.$watch(function(event) {
                if ($ctrl.notification.$value !== null) {
                    $uibModal.open({
                            component: 'modalNotify',
                            size: 'edit',
                            animation: false,
                            windowClass: 'animation-modal-x',
                            resolve: {
                                notification: function() {
                                    return $ctrl.notification;
                                }
                            }
                        })
                        .result.then(function() {
                            $ctrl.notification.$remove();
                        }, function(error) {
                            console.error('Error receiving notification: ', error);
                            $ctrl.notification.$remove();
                        });
                    Analytics.log('payment', 'Paid');
                }
            });
        } else {
            if (unwatch) {
                unwatch();
            }
            if ($ctrl.notification) {
                $ctrl.notification.$destroy();
            }
        }
    });
}