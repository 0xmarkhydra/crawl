"use strict";
angular
    .module('app')

    /**
     * navService
     */
    .factory('navService', function($state, $stateParams, $window, Fullscreen, modalService, Analytics) {
        var navigate;

        /**
         * navigate
         */
        navigate = function(to, params) {
            if (params === 'reload') {
                $state.go(to, {}, {
                    reload: true
                });
                return;
            } else if (params === 'reload.browser') {
                if ($state.current.name !== to) $state.go(to);
                setTimeout(function() {
                    $window.location.reload(true);
                }, 1000);
                return;
            }
            var transition = $state.current.name + '>' + to;
            switch (transition) {
                case 'presentation>customize':
                    if (!navigator.onLine) {
                        modalService.alert('', 'Only Exit Presentation when Online');
                    } else {
                        Analytics.log('ui_action', 'Presentation Finished');
                        $state.go('customize');
                        Fullscreen.cancel();
                    }
                    break;
                case 'customize>presentation':
                    if (!navigator.onLine) {
                        modalService.alert('', 'Only Switch to Presentation when Online');
                    } else {
                        $('#loader').show();
                        $state.go('presentation');
                        Fullscreen.all();
                    }
                    break;
                case 'presentation>presentation':
                    if (!navigator.onLine) {
                        modalService.alert('', 'Only Switch to Presentation when Online');
                        $state.go('customize');
                        Fullscreen.cancel();
                    } else {
                        if (!$stateParams.sessionId) {
                            $state.go('presentation', {
                                sessionId: params.sessionId
                            }, {
                                notify: params.notify
                            });
                        }
                    }
                    break;
                default:
                    $state.go(to);
            }
        }

        /**
         * return
         */
        return navigate;
    });