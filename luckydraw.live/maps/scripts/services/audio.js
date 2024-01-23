"use strict";
angular
    .module('app')
    .factory('audioService', function(defaultSettingService, devOps, Analytics, userdataService) {
        var tracks = null,
            countSlots = 0,
            schedules = {},
            controller = {};

        controller.mode = parseInt(userdataService.getRuntimeOpt('audioMode', 0));
        controller.icon = devOps.audioIcons[controller.mode];

        /**
         * init
         */
        var init = function(slots, reinit) {
            if (tracks !== null && slots === countSlots && !reinit) return;
            var files = defaultSettingService.audio,
                keys = Object.keys(files).length;
            tracks = null;
            countSlots = slots;
            tracks = {};
            for (var au in files) {
                if (au === 'spin') {
                    tracks['spinHigh'] = new Audio(files.spin.High);
                    // tracks['spinAverage'] = new Audio(files.spin.Average);
                    // tracks['spinLow'] = new Audio(files.spin.Low);
                    for (var i = 0; i < slots; i++) {
                        tracks['spinHigh' + i] = new Audio(files.spin.High);
                        // tracks['spinAverage'+i] = new Audio(files.spin.Average);
                        // tracks['spinLow'+i] = new Audio(files.spin.Low);
                    }
                } else if (files[au] === '') {
                    tracks[au] = new Audio();
                } else {
                    tracks[au] = new Audio(files[au]);
                }
            }
            controller.mute();
        }

        /**
         * Check valid track
         */
        var valid = function(track) {
            return (tracks[track] && tracks[track].src);
        }

        /**
         * Set Loop
         */
        var setLoop = function(track, loop) {
            tracks[track].loop = (loop === 'loop' || loop === true);
        }

        /**
         * Perform Track Action
         */
        var perform = function(action, track, delay) {
            if (schedules[track]) {
                clearTimeout(schedules[track]);
                schedules[track] = null;
            }
            if (delay) {
                schedules[track] = setTimeout(function() {
                    if (action == 'play' && track != 'background') stop(track);
                    try {
                        tracks[track][action]();
                        schedules[track] = null;
                    } catch (error) {}
                }, delay);
            } else {
                if (action == 'play' && track != 'background') stop(track);
                tracks[track][action]();
            }
        }

        /**
         * API Play
         */
        var play = function(track, delay, loop) {
            if (!valid(track)) return false;
            setLoop(track, loop);
            perform('play', track, delay);
        }

        /**
         * API Pause
         */
        var pause = function(track, delay) {
            if (!valid(track)) return false;
            perform('pause', track, delay);
        }

        /**
         * API Stop
         */
        var stop = function(track, delay) {
            if (!valid(track)) return false;
            perform('pause', track, delay);
            tracks[track]['currentTime'] = 0;
        }

        /**
         * API Reset
         */
        var reset = function(track) {
            if (!valid(track)) return false;
            tracks[track]['currentTime'] = 0;
        }

        /** Mode Controller */
        controller.toggle = function() {
            controller.mode++;
            if (controller.mode >= devOps.audioIcons.length) controller.mode = 0;
            controller.icon = devOps.audioIcons[controller.mode];
            controller.mute();
            // log and save
            userdataService.setRuntimeOpt('audioMode', controller.mode);
            Analytics.log('ui_action', 'Set Audio Mode', controller.mode + '. ' + controller.icon);
        }

        // mute controller
        controller.mute = function() {
            if (controller.mode === 0) {
                for (var k in tracks) {
                    tracks[k].muted = false;
                }
            } else if (controller.mode === 1) {
                tracks.background.muted = true;
            } else {
                for (var k in tracks) {
                    tracks[k].muted = true;
                }
            }
        }

        /**
         * Expose APIs
         */
        return {
            init: init,
            play: play,
            pause: pause,
            stop: stop,
            reset: reset,
            controller: controller
        }
    });