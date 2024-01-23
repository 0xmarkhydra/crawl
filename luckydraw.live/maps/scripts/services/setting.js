"use strict";
angular
    .module('app')

    /**
     * DevOp
     */
    .factory('devOps', function() {
        var devOp = {};

        devOp.version = "1.5015";
        devOp.domain = 'www.luckydraw.live';
        devOp.sitename = 'LuckyDraw.live';

        /** Default Runtime Opts */
        devOp.runtime = {
            theme: 'purple',
            language: "en",
            audioMode: 0
        }

        /** Machine */
        devOp.max_prizes = 23;
        devOp.specialPrizes = ['gold', 'diamond', 'x'];
        devOp.defaultPrizes = ['bronze', 'silver', 'gold', 'diamond', 'x'];
        devOp.maxLengthId = 23;
        devOp.spinDirection = 'down';
        devOp.favNum = '9';
        devOp.freeSpins = 2;
        devOp.freeSaves = 1;
        devOp.cssSlotRanges = [6, 9, 11, 16];
        devOp.loginTimeout = 60 * 60 * 1000;

        devOp.slotsCss = function(longestIdLen) {
            var thresholds = devOp.cssSlotRanges;
            for (var i = 0; i < thresholds.length; i++) {
                if (longestIdLen <= thresholds[i])
                    return thresholds[i];
            }
            // or return the last element as default
            return thresholds[i - 1];
        }

        /** States */
        devOp.states = {
            setprize: 'setprize', // switch prize
            ready: 'ready', // next: spin
            tospin: 'tospin', // init-spin
            spin: 'spin', // spinning
            stop: 'stop', // init-stop
            reveal: 'reveal', // stopped, revealing name
            complete: 'complete', // name revealed, confirm or retry?
            toconfirm: 'toconfirm', // init-confirm
            confirmed: 'confirmed', // confirmed, next: ready
            cancel: 'cancel', // next: ready,
            null: 'null'
        };

        /** Timeout */
        devOp.mdelay = {
            min: 600,
            max: 1100
        }

        devOp.timeout = {
            ready: 1000,
            spin: 1000,
            revealLoading: 1800,
            revealName: 3300,
            revealNameHigh: 4500,
            revealId: 1000,
            confirmed: 800
        }

        /** Machine Characters */
        devOp.checkChars = [{
                chars: '0123456789',
                regexp: '[0-9]'
            },
            {
                chars: 'bdfhnprtyz',
                regexp: '[a-z]'
            },
            {
                chars: 'ABFGHKNSVX',
                regexp: '[A-Z]'
            },
            {
                chars: '~@#$%&*+-=',
                regexp: '\\W'
            }
        ];

        /** Customize: color picker */
        devOp.colorPickerOp = function(pos) {
            return {
                pos: pos || 'bottom right',
                format: 'hex',
                alpha: false,
                swatchOnly: true,
                close: {
                    show: true,
                    label: 'Ok',
                    class: ''
                },
                clear: {
                    show: true,
                    label: 'Reset',
                    class: ''
                }
            }
        }

        /** Themes */
        devOp.themes = {
            purple: 'Theme Purple',
            navy: 'Theme Navy',
            olive: 'Theme Olive',
            orange: 'Theme Orange',
            black: 'Theme Black',
            blue: 'Theme Blue',
            green: 'Theme Green',
            red: 'Theme Red',
            silver: 'Theme Silver',
            aqua: 'Theme Aqua',
            yellow: 'Theme Yellow',
            white: 'Theme White'
        }

        /** APIs */
        devOp.api = {
            contact: 'https://nqm8b544zg.execute-api.us-east-1.amazonaws.com/v1/contact',
            welcome: 'https://vzk6bx8b8b.execute-api.us-east-1.amazonaws.com/v1',
            ipinfo: 'https://ipinfo.io/?token=991b2bb97a554e'
        }

        /** Audio Icons: full audio - no background - mute all */
        devOp.audioIcons = ['ion-ios-musical-notes', 'ion-ios-musical-note', 'ion-volume-mute'];

        return devOp;
    })

    /**
     * settings of authenticated user
     */
    .factory('settingService', function($firebaseObject, initSettingService, firebaseRef) {
        var defaultSetting = initSettingService;
        var Setting = $firebaseObject.$extend({
            $$defaults: defaultSetting
        });
        return new $firebaseObject(firebaseRef().child('setting'));
    })

    /**
     * default settings for guests
     */
    .factory('initSettingService', function() {
        return {
            audio: {
                spin: {
                    i: 1
                }
            },
            info: {
                i: 1
            },
            icons: {
                i: 1
            },
            colors: {
                i: 1
            },
            prizes: {
                i: 1
            },
            enabled_prizes: {
                i: 1
            },
            messages: {
                i: 1
            },
            buttons: {
                i: 1
            },
            runtime: {
                i: 1
            }
        }
    })
    .factory('defaultSettingService', function(devOps) {
        var setting = {
            owner: 'guest',
            audio: {
                background: '/audio/v1/background.mp3',
                spin: {
                    High: '/audio/v1/sm-roller-loop.mp3'
                    // Average: '',
                    // Low: ''
                },
                setPrize: '/audio/v1/swoosh.mp3',
                turnoffSlots: '/audio/v1/sm-turnoff.mp3',
                turnonSlots: '/audio/v1/sm-turnon.mp3',
                start: '/audio/v1/sm-spin.mp3',
                stop: '/audio/v1/sm-bet.mp3',
                onGoing: '/audio/v1/game-bonus.mp3',
                comingWinner: '/audio/v1/game-countdown.mp3',
                comingWinnerHigh: '/audio/v1/game-sm-jackpot-coming.mp3',
                tada: '/audio/v1/game-tada.mp3',
                tadaHigh: '/audio/v1/game-sm-jackpot-win.mp3',
                confirm: '/audio/v1/fanfare-winner.mp3',
                confirmSpecial: '/audio/v1/fanfare-brass.mp3',
                prizeIncreased: '/audio/v1/game-levelup-s3.mp3',
                retry: '/audio/v1/game-over.mp3',
                na: '/audio/v1/game-click-s2.mp3',
                actionButtons: '/audio/v1/game-correct-s2.mp3',
                batchStart: '/audio/v1/sm-autoplay.mp3'
            },
            info: {
                background: '', // '../images/backgrounds/5lights_131_half_cut.jpg',
                logo: '',
                name: 'Amazing Event',
                company: ''
            },
            icons: {
                default: '/images/temp/custom-prize.svg',
                x: '/images/temp/x-prize.svg',
                diamond: '/images/temp/diamond-prize.svg',
                gold: '/images/temp/gold-prize.svg',
                silver: '/images/temp/silver-prize.svg',
                bronze: '/images/temp/bronze-prize.svg'
            },
            iconsWithoutBackground: {
                default: '/images/temp/custom-icon.svg',
                x: '/images/temp/x-icon.svg',
                diamond: '/images/temp/diamond-icon.svg',
                gold: '/images/temp/gold-icon.svg',
                silver: '/images/temp/silver-icon.svg',
                bronze: '/images/temp/bronze-icon.svg'
            },
            colors: {
                name: '',
                action_msg: ''
            },
            prizes: {
                x: 'X Prize',
                diamond: 'Diamond Prize',
                gold: 'Gold Prize',
                silver: 'Silver Prize',
                bronze: 'Bronze Prize'
                //...
            },
            enabled_prizes: {
                x: true,
                diamond: true,
                gold: true,
                silver: true,
                bronze: true
                //...
            },
            messages: {
                start: 'Press the Spin button to start',
                wait: 'Winner is coming...'
            },
            buttons: {
                spin: 'Spin',
                stop: 'Stop',
                confirm: 'Confirm',
                retry: 'Retry'
            },
            runtime: {}
        }

        // custom prizes
        var key;
        for (var i = 4; i <= devOps.max_prizes; i++) {
            key = 'p' + i;
            setting.prizes[key] = 'Prize ' + i;
            setting.enabled_prizes[key] = false;
        }

        return setting;
    });