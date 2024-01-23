routesConfig.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider", "$modalStateProvider"];
notificationController.$inject = ["$uibModal", "$firebaseObject", "authService", "firebaseRef", "Analytics"];
ThemeController.$inject = ["$rootScope", "devOps", "userdataService"];
SurveyController.$inject = ["$state", "Analytics"];
RegisterController.$inject = ["$state", "$http", "authService", "devOps", "i18nService", "Analytics"];
PrizeController.$inject = ["userdataService", "defaultSettingService", "prizeService", "navService", "uxService", "Analytics"];
PaymentController.$inject = ["$interval", "$state", "modalService", "userdataService", "i18nService", "paymentService", "devOps", "$compile", "$scope"];
PaymentIntroController.$inject = ["$state", "userdataService"];
PaymentButtonController.$inject = ["userdataService"];
PaypalPaymentController.$inject = ["$sce", "$state", "$http", "authService", "Analytics", "userService", "userdataService", "paymentService", "modalService"];
SohaPaymentController.$inject = ["$state", "$http", "authService", "Analytics", "userService", "userdataService", "paymentService", "modalService"];
MessageController.$inject = ["userdataService", "Analytics"];
LoginController.$inject = ["$state", "authService", "Analytics"];
LanguageController.$inject = ["i18nService", "Analytics"];
IntroController.$inject = ["modalService"];
IdsResultController.$inject = ["$state", "$timeout", "$stateParams", "resultService", "prizeService", "userdataService", "defaultSettingService", "$translate", "userService", "Analytics"];
IdController.$inject = ["$state", "navService", "userdataService", "devOps", "Analytics"];
ForgotPasswordController.$inject = ["authService", "modalService", "Analytics"];
ContactController.$inject = ["$http", "modalService", "devOps", "Analytics"];
ButtonController.$inject = ["userdataService", "Analytics"];
BackgroundController.$inject = ["$rootScope", "$timeout", "$interval", "userService", "userdataService", "modalService", "Analytics"];
AlertController.$inject = ["userService", "$interval"];
AccountController.$inject = ["$scope", "modalService", "authService", "userdataService", "devOps", "uxService", "Analytics"];
IdLuckyDrawController.$inject = ["$state", "$timeout", "modalService", "defaultSettingService", "devOps", "prizeService", "userService", "uxService", "Analytics", "audioService"];
HotKeysController.$inject = ["hotkeys", "modalService", "navService", "Analytics", "audioService"];
FooterController.$inject = ["$state", "userService", "modalService", "navService", "uxService", "Analytics", "audioService"];
appbackgroundDirective.$inject = ["$rootScope"];
PresentationController.$inject = ["$rootScope", "$timeout", "defaultSettingService", "navService", "userdataService", "results", "i18nService", "Analytics"];
ModController.$inject = ["$rootScope", "$state", "$timeout", "Fullscreen", "devOps", "defaultSettingService", "userdataService", "modalService", "navService", "prizeService", "i18nService", "uxService", "Analytics", "audioService"];
MainController.$inject = ["$rootScope", "$http", "$location", "$translate", "paymentService", "modalService", "defaultSettingService", "defaultIdService", "initSettingService", "defaultResultService", "i18nService", "userdataService", "Analytics"];
angular
    .module('app', [
        'ui.router',
        'ui.bootstrap',
        'firebase',
        'pascalprecht.translate',
        'angularMoment',
        'FBAngular',
        'ngSanitize',
        'ngCookies',
        'ngAnimate',
        'ngFileUpload',
        'ngSanitize',
        'ngCsv',
        'cfp.hotkeys',
        'angular.filter',
        'color.picker'
    ])
    .config(["$qProvider", "$translateProvider", function($qProvider, $translateProvider) {
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyATfmr6y4QBfiTaeWo-K8Bkb9lNpdMzJYU",
            authDomain: "luckydraw-fd117.firebaseapp.com",
            databaseURL: "https://luckydraw-fd117.firebaseio.com",
            storageBucket: "luckydraw-fd117.appspot.com",
            messagingSenderId: "537953130117"
        };

        firebase.initializeApp(config);

        $qProvider.errorOnUnhandledRejections(false);

        $translateProvider.translations('en', i18n_en);
        $translateProvider.translations('vi', i18n_vi);
        $translateProvider.preferredLanguage("en");
        $translateProvider.useLocalStorage();
    }])
    .run(["$rootScope", "$state", "Fullscreen", function($rootScope, $state, Fullscreen) {
        $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
            if (error === 'AUTH_REQUIRED') {
                event.preventDefault();
                $state.go('login');
            }
        });
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, error) {
            // if (fromState.name == 'presentation') {
            //   Fullscreen.cancel();
            // }
        });
        Fullscreen.$on('FBFullscreen.change', function(event, isEnabled) {
            // if (!isEnabled && $state.current.name == 'presentation') {
            //   $state.go('customize');
            // }
            // console.log(isEnabled)
        });
    }]);

(function() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('service-worker.js').then(function(reg) {
            reg.onupdatefound = function() {
                var installingWorker = reg.installing;

                installingWorker.onstatechange = function() {
                    switch (installingWorker.state) {
                        case 'installed':
                            if (navigator.serviceWorker.controller) {
                                console.log('New or updated content is available.');
                            } else {
                                console.log('Content is now available offline!');
                            }
                            break;

                        case 'redundant':
                            console.error('The installing service worker became redundant.');
                            break;
                    }
                };
            };
        }).catch(function(e) {
            console.error('Error during service worker registration:', e);
        });
    }
})();

(function($, window, document, undefined) {
    var $win = $(window);
    var $doc = $(document);

    function viewportMetaContent() {
        var viewportMeta = document.getElementById('viewportMeta');

        if (screen.width < 768) {
            viewportMeta.setAttribute('content', 'width=device-width, user-scalable=no');
        } else {
            viewportMeta.setAttribute('content', 'width=1280, initial-scale=1.0');
        };
    };

    viewportMetaContent();
    window.addEventListener('resize', viewportMetaContent, false);
})(jQuery, window, document);

"use strict";
angular
    .module('app')

    /**
     * uxService
     */
    .factory('uxService', ["$firebaseObject", "$timeout", "firebaseRef", "initSettingService", "authService", "devOps", "modalService", "$q", "Analytics", function($firebaseObject, $timeout, firebaseRef, initSettingService, authService, devOps, modalService, $q, Analytics) {
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
    }]);
"use strict";
angular
    .module('app')

    /**
     * userdataService
     */
    .factory('userdataService', ["$firebaseObject", "firebaseRef", "initSettingService", "authService", "devOps", "modalService", "uxService", "$q", "Analytics", function($firebaseObject, firebaseRef, initSettingService, authService, devOps, modalService, uxService, $q, Analytics) {
        var user = {
                guest: {},
                member: {}
            },
            editing = {}, // e.g. editing.name = true/false
            auth = authService;

        var setMember = function() {
            user.member.setting = $firebaseObject(firebaseRef().child('setting'));
            user.member.membership = $firebaseObject(firebaseRef().child('member'));
            user.member.data = $firebaseObject(firebaseRef().child('idDraw'));
        }

        var setGuest = function() {
            user.guest.setting = {};
            user.guest.membership = {};
            user.guest.data = {
                ids: [],
                names: []
            }
            angular.copy(initSettingService, user.guest.setting);
        }

        var initSettingSet = function() {
            for (var s in initSettingService) {
                if (user.member.setting[s] === undefined) {
                    user.member.setting[s] = initSettingService[s];
                }
            }
        }

        var load = function() {
            return $q(function(resolve, reject) {
                if (user.member.data === undefined) setMember();
                var keys = Object.keys(user.member),
                    s = '',
                    l = -1;
                for (var uk in user.member) {
                    if (uk == 'setting') s = 'setting';
                    user.member[uk].$loaded().then(function() {
                        l++;
                        if (s == 'setting') initSettingSet();
                        if (l == keys.length - 1) resolve(l);
                    }); //$loaded()
                }
            }); //.$q
        }

        /** Init Service **/
        setGuest();

        if (auth.$getAuth()) {
            setMember();
            load();
        }

        auth.$onAuthStateChanged(function(firebaseUser) {
            if (firebaseUser && user.member.data === undefined) {
                setMember();
                load();
            }
        });
        /** .Init **/

        var save = function(child, ed) {
            return $q(function(resolve, reject) {
                if (!user.member[child]) {
                    reject(undefined);
                    return;
                }
                user.member[child].$save()
                    .then(function() {
                        if (ed) editing[ed] = false;
                        uxService.setcssIntro(user.member.setting);
                        resolve(true);
                    })
                    .catch(function(error) {
                        // console.error('Error saving user setting', error);
                        Analytics.log('error', 'Saving ' + child + '/' + ed, error);
                        reject(false);
                    });
            });
        }

        var removeFile = function(folder, item) {
            if (!user.member.setting) return undefined;
            if (!user.member.setting[folder]) return false;
            editing[folder + item] = true;
            user.member.setting[folder][item] = null;
            save('setting', folder + item);
            return true;
        }

        var uploadFile = function($file, origin, folder, item) {
            return $q(function(resolve, reject) {
                if (!modalService.isOnLine('alert', 'data') ||
                    !modalService.isAuthenticated('login', origin)) { // origin = 'Prize' modal
                    reject(false);
                    return;
                } else if (editing[folder + item]) {
                    reject('already uploading this item');
                    return;
                } else if (!user.member.setting) {
                    reject(undefined);
                    return;
                }

                editing[folder + item] = true;

                // start
                var dest = firebase.storage().ref().child(folder + '/' + item).child(auth.$getAuth().uid);
                var uploadTask = dest.put($file, {});
                uploadTask.on('state_changed', function(snapshot) {
                    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.debug('Upload is ' + progress + '% done');
                }, function(error) {
                    // console.error('Upload failed: ', error);
                    editing[folder + item] = false;
                    Analytics.log('error', 'Uploading ' + folder + '/' + item, error);
                    reject('upload failed');
                }, function() {
                    var metadata = uploadTask.snapshot.metadata;
                    var downloadURL = metadata.downloadURLs[0];
                    if (!user.member.setting[folder]) user.member.setting[folder] = {};
                    user.member.setting[folder][item] = downloadURL;
                    user.member.setting.$save()
                        .then(function() {
                            editing[folder + item] = false;
                            uxService.setcssIntro(user.member.setting);
                            resolve(downloadURL);
                        })
                        .catch(function(error) {
                            // console.error('Error saving uploaded file url', error);
                            editing[folder + item] = false;
                            Analytics.log('error', 'Saving setting/' + child + '/' + item, error);
                            reject('save failed');
                        });
                });
            })
        }

        var getRuntimeOpt = function(opt, def) {
            var val = localStorage.getItem('setting.runtime.' + opt) || def || devOps.runtime[opt];
            if (user.member.setting && user.member.setting.runtime)
                return user.member.setting.runtime[opt] || val;
            else
                return val;
        }

        var setRuntimeOpt = function(opt, value) {
            localStorage.setItem('setting.runtime.' + opt, value);
            if (user.member.setting && user.member.setting.runtime) {
                user.member.setting.runtime[opt] = value;
                save('setting', opt);
            }
        }

        var userStatus = function(mode, results) {
            var d = Date.now();
            if (!user.member.membership || !user.member.membership.lastPayment) {
                var type = 'Free Account';
            } else {
                var type = d < user.member.membership.expiration ? 'Paid Account' : 'Expired Account';
            }
            if (mode === 'presentation' && results >= devOps.freeSaves && type !== 'Paid Account')
                return 'limited'; // free limit reached
            else
                return type;
        }

        return {
            guest: user.guest, // guest data
            member: user.member, // referenced firebase user data
            status: userStatus, // check user drawing limits

            load: load, // load user data, membership, setting from firebase
            save: save, // save setting
            editing: editing, // remember user is editing something

            upload: uploadFile, // upload file and save setting
            remove: removeFile, // remove file

            getRuntimeOpt: getRuntimeOpt, // get setting.runtime options
            setRuntimeOpt: setRuntimeOpt // set setting.runtime options
        }
    }])

    /**
     * userService
     */
    .factory('userService', ["authService", "firebaseRef", "devOps", "Analytics", "$uibModal", "$window", "$rootScope", function(authService, firebaseRef, devOps, Analytics, $uibModal, $window, $rootScope) {
        var user = {
                authenticated: false,
                email: '',
                uid: ''
            },
            client = {},
            auth = authService;

        /**
         * user.logout
         */
        user.logout = function() {
            $('#loader').show();
            if (!client.multipleLogin) {
                client.ref.set({
                    signature: null
                });
            }
            // Analytics.trackUnload(false);
            setTimeout(function() {
                auth.$signOut()
                    .then(function() {
                        $window.location.href = $window.location.origin;
                    });
            }, 500);
        }

        function mySignature() {
            var S4 = function() {
                return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
            };
            return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
        }

        user.checkin = function() {
            if (!client.signature) {
                client.signature = localStorage.getItem('client.signature') || mySignature();
                localStorage.setItem('client.signature', client.signature);
            }
            if (!user.authenticated || client.multipleLogin) return;
            if (!client.ref) client.ref = firebaseRef().child('client');
            client.ref.once('value').then(function(snapshot) {
                var cli = snapshot.val();
                if (!cli || !cli.signature || cli.signature === client.signature ||
                    (Date.now() - cli.moment > devOps.loginTimeout)) {
                    client.multipleLogin = false;
                    client.ref.set({
                        signature: client.signature,
                        moment: Date.now()
                    });
                    if (!client.setonDisconnect) {
                        client.setonDisconnect = true;
                        client.ref.onDisconnect().set({
                            signature: null
                        });
                    }
                } else {
                    client.multipleLogin = true;
                    Analytics.log('misused', 'Multiple Devices Login');
                    var cfg = {
                        component: 'modalAlert',
                        size: 'account-info',
                        backdrop: 'static',
                        keyboard: false,
                        animation: false,
                        windowClass: 'animation-modal-x',
                        resolve: {
                            title: function() {
                                return 'Account is being used';
                            },
                            message: function() {
                                return 'Someone logged-in somewhere!';
                            },
                            dismissLogout: function() {
                                return true;
                            }
                        }
                    };
                    $uibModal.open(cfg);
                    setTimeout(function() {
                        user.logout();
                    }, 11000);
                }
            });
        }

        /**
         * user.authenticated
         */
        var authed = auth.$getAuth();
        if (authed) {
            user.authenticated = true;
            user.email = authed.email;
            user.uid = authed.uid;
            user.checkin();
        }

        auth.$onAuthStateChanged(function(firebaseUser) {
            $rootScope.$apply(function() {
                if (firebaseUser) {
                    authed = auth.$getAuth();
                    user.authenticated = true;
                    user.email = authed.email;
                    user.uid = authed.uid;
                    user.checkin();
                } else {
                    user.authenticated = false;
                }
            });
        });

        /**
         * return
         */
        return user;
    }]);
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
    .factory('settingService', ["$firebaseObject", "initSettingService", "firebaseRef", function($firebaseObject, initSettingService, firebaseRef) {
        var defaultSetting = initSettingService;
        var Setting = $firebaseObject.$extend({
            $$defaults: defaultSetting
        });
        return new $firebaseObject(firebaseRef().child('setting'));
    }])

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
    .factory('defaultSettingService', ["devOps", function(devOps) {
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
    }]);

"use strict";
angular
    .module('app')
    .factory('defaultResultService', ["devOps", function(devOps) {
        var results = {};
        for (var i = devOps.defaultPrizes.length - 1; i >= 0; i--) {
            results[devOps.defaultPrizes[i]] = [];
        }
        return results;
    }])

    .factory('resultService', ["$firebaseObject", "$firebaseArray", "firebaseRef", "defaultResultService", function($firebaseObject, $firebaseArray, firebaseRef, defaultResultService) {
        var ref = {},
            result = {};

        var loadResults = function(state, sessionId, mode) {
            switch (state) {
                case 'presentation':
                    if (!ref.presentation) {
                        if (sessionId)
                            ref.presentation = firebaseRef().child('idDrawResults').child(sessionId);
                        else
                            ref.presentation = firebaseRef().child('idDrawResults').push();
                        result.presentation = $firebaseObject(ref.presentation);
                    }
                    if (mode === 'array')
                        return [result.presentation];
                    else
                        return result.presentation;
                    break;
                case 'customize':
                    if (!ref.customize) {
                        ref.customize = firebaseRef().child('idDrawResults');
                        result.customize = $firebaseArray(ref.customize.orderByKey());
                    }
                    return result.customize;
                    break;
                default:
                    return [defaultResultService];
            }
        }

        var clearResult = function(session, prize) {
            ref.customize.child(session).set({});
        }

        return {
            load: loadResults,
            clear: clearResult
        }
    }])

    .factory('prizeService', ["defaultSettingService", "devOps", function(defaultSettingService, devOps) {
        var prizes = {
            guest: [],
            user: [],
            default: []
        };

        var loadPrizes = function(setting, reload) {
            var getAllDefault = reload === 9999;
            if (getAllDefault)
                var owner = 'default';
            else
                var owner = setting.owner === 'guest' ? 'guest' : 'user';

            if (prizes[owner].length > 0 && !reload)
                return prizes[owner];

            prizes[owner] = []; // reset

            var keys = Object.keys(defaultSettingService.prizes),
                idefaults = devOps.defaultPrizes.length - 1,
                key, image, showimage, default_not_disabled, custom_is_enabled;

            for (var i = 0; i < keys.length; i++) {
                key = keys[i];

                default_not_disabled = custom_is_enabled = false;

                if (i <= idefaults) {
                    default_not_disabled = setting.enabled_prizes[key] !== false;
                    if (getAllDefault && default_not_disabled) setting.enabled_prizes[key] = true; // set in advanced for use in modal-prize listing
                } else {
                    custom_is_enabled = setting.enabled_prizes[key] === true;
                }

                if (getAllDefault || default_not_disabled || custom_is_enabled) {
                    showimage = true;
                    if (!getAllDefault && setting.icons && setting.icons[key]) {
                        image = setting.icons[key];
                    } else {
                        var ico = getAllDefault ? 'iconsWithoutBackground' : 'icons';
                        image = defaultSettingService[ico][key] || defaultSettingService[ico].default;
                        showimage = (i <= idefaults);
                    }
                    prizes[owner].unshift({
                        key: key,
                        name: defaultSettingService.prizes[key],
                        image: image,
                        showimage: showimage,
                        confirmed: 0
                    });
                }
            }
            return prizes[owner];
        }

        var enable_default = function(enabled_prizes) {
            for (var i = 0; i < devOps.defaultPrizes.length; i++) {
                enabled_prizes[devOps.defaultPrizes[i]] = true;
            }
        }

        return {
            load: loadPrizes,
            enable_default: enable_default,
            currentTab: 0
        }
    }]);
'use strict'
angular
    .module('app')

    .factory('paymentService', ["$translate", "$window", function($translate, $window) {
        var providers = {
            paypal: {
                url: 'https://www.paypal.com/cgi-bin/webscr',
                prices: {
                    event1day: 80,
                    event3days: 150,
                    event5days: 200
                },
                buttons: {
                    event1day: '69PXXC753L4R6', // lucky_event1day
                    event3days: 'L3LX5AGBBVMTS', // lucky_event3days
                    event5days: 'VTGTC3KMK7ECC' // lucky_event5days
                }
            },

            // soha is simply a legacy name for vn payment controller like WePay, 1Pay
            // that process payment via redirection
            soha: {
                // api to get payment url
                url: 'https://b2m6exn2df.execute-api.ap-southeast-1.amazonaws.com/prod/initSoha',
                // post to server when there is redirect back from payment service
                ipn: 'https://b2m6exn2df.execute-api.ap-southeast-1.amazonaws.com/prod/ipnSoha',
                prices: {
                    event1day: 1900000,
                    event3days: 3500000,
                    event5days: 4600000
                },
                // payment service name to be used
                ps: '1Pay'
            }
        }

        // configure payment handler by user's language
        var local = {
            en: 'paypal',
            vi: 'paypal'
        }

        var loadingIcon = function(on) {
            if (on) {
                $('<div class="paypal-loading"></div>').appendTo('body')
            } else {
                $('div.paypal-loading').remove()
            }
        }

        var times = {
            event1day: 30,
            event3days: 6,
            event5days: 9
        }

        return {
            provider: providers,
            local: local,
            loadingIcon: loadingIcon,
            times: times
        }
    }])

"use strict";
angular
    .module('app')

    /**
     * navService
     */
    .factory('navService', ["$state", "$stateParams", "$window", "Fullscreen", "modalService", "Analytics", function($state, $stateParams, $window, Fullscreen, modalService, Analytics) {
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
    }]);
"use strict";
angular
    .module('app')
    .factory('modalService', ["$uibModal", "$state", "userService", "Analytics", function($uibModal, $state, userService, Analytics) {
        var modals = {},
            user = userService,
            openWhenLogin

        // call this in customize init, so modal will open properly
        var doLoginOpen = function() {
            if (openWhenLogin) {
                dismiss('*', true);
                openModal(openWhenLogin, true);
                openWhenLogin = null;
                return true;
            } else {
                dismiss('Login', true);
                dismiss('Register', true);
                return false;
            }
        }

        /**
         * Check Online
         */
        var isOnLine = function(alertWhenOffline, purpose) {
            if (navigator.onLine) return true;
            if (alertWhenOffline === 'alert') {
                var message;
                switch (purpose) {
                    case 'data':
                        message = 'Not Editable When Disconnected';
                        break;
                    case 'function':
                        message = 'Not Doable When Disconnected';
                        break;
                    default:
                        message = 'Disconnected';
                }
                openModalAlert('', message);
            }
            return false;
        }

        /**
         * Check Authenticated
         */
        var isAuthenticated = function(showLogin, target) {
            if (user.authenticated) return true;
            if (showLogin === 'login') {
                openWhenLogin = target;
                openModalLogin();
            } else if (showLogin === 'register') {
                openWhenLogin = target;
                openModalRegister();
            }
            return false;
        }

        /**
         * Dismiss Modals
         */
        var dismiss = function(name, internalCall) {
            modalDo('dismiss', name);
            if (!internalCall) Analytics.log('modals', 'Dismiss', name);
        }

        /**
         * Close Modals
         */
        var close = function(name, internalCall) {
            modalDo('close', name);
            if (!internalCall) Analytics.log('modals', 'Close', name);
        }

        /**
         * General Modal Action
         */
        var modalDo = function(action, name) {
            var m, keys;
            if (name === '*')
                keys = Object.keys(modals);
            else
                keys = [name];
            for (var k in keys) {
                m = keys[k];
                if (modals[m] && typeof(modals[m][action]) === 'function') {
                    modals[m][action]();
                }
                modals[m] = null;
            }
        }

        /**
         * Execute uibModal.open()
         */
        var uibOpen = function(cfg, clean, persistent) {
            if (clean) dismiss('*', true);
            cfg.animation = false;
            cfg.windowClass = 'animation-modal-x';
            if (persistent) {
                cfg.backdrop = 'static';
                cfg.keyboard = false;
            }
            return $uibModal.open(cfg);
        }

        /**
         * Account
         */
        var openModalAccount = function() {
            if (!isOnLine('alert', 'function') || !isAuthenticated('login', 'Account'))
                return false;
            var cfg = {
                component: 'modalAccount',
                size: 'account-info'
            };
            modals.Account = uibOpen(cfg, true);
        }

        /**
         * Alert
         */
        var openModalAlert = function(title, message) {
            var cfg = {
                component: 'modalAlert',
                size: 'account-info',
                resolve: {
                    title: function() {
                        return title;
                    },
                    message: function() {
                        return message;
                    }
                }
            };
            modals.Alert = uibOpen(cfg, true);
        }

        /**
         * Background
         */
        var openModalBackground = function() {
            if (!isOnLine('alert', 'data'))
                return false;

            var cfg = {
                component: 'modalBackground',
                size: 'account-info'
            };

            modals.Background = uibOpen(cfg, true);
        }

        /**
         * Buttons
         */
        var openModalButton = function() {
            if (!isOnLine('alert', 'data') || !isAuthenticated('login', 'Button'))
                return false;
            var cfg = {
                component: 'modalButton',
                size: 'secondary'
            };
            modals.Button = uibOpen(cfg, true);
        };

        /**
         * Contact
         */
        var openModalContact = function() {
            var cfg = {
                component: 'modalContact',
                size: 'contact-us'
            };
            modals.Contact = uibOpen(cfg, true);
        }

        /**
         * Forgot Password
         */
        var openModalForgotPassword = function() {
            if (!isOnLine('alert', 'function') || user.authenticated)
                return false;
            dismiss('*', true);
            $state.go('forgotPassword');
            /*var cfg = {
                component: 'modalForgotPassword',
                size: 'login-register'
            };
            modals.ForgotPassword = uibOpen(cfg, true);*/
        }

        /**
         * Id
         */
        var openModalId = function() {
            if (!isOnLine('alert', 'data') || !isAuthenticated('login', 'Id'))
                return false;
            var cfg = {
                component: 'modalId',
                size: 'edit'
            };
            modals.Id = uibOpen(cfg, true);
        }

        /**
         * Id Result
         */
        var openModalIdResult = function() {
            var cfg = {
                component: 'modalIdsResult',
                size: 'result'
            }
            modals.IdResult = uibOpen(cfg, true);
        }

        /**
         * Intro
         */
        var openModalIntro = function() {
            var cfg = {
                component: 'modalIntro',
                size: 'intro'
            };
            modals.Intro = uibOpen(cfg, true);
        }

        /**
         * Language
         */
        var openModalLanguage = function() {
            var cfg = {
                component: 'modalLanguage',
                size: 'language'
            };
            modals.Language = uibOpen(cfg, true);
        }

        /**
         * Login
         */
        var openModalLogin = function() {
            if (!isOnLine('alert', 'function') || user.authenticated)
                return false;
            dismiss('*', true);
            $state.go('login');
            /*var cfg = {
                component: 'modalLogin',
                size: 'login-register'
            };
            modals.Login = uibOpen(cfg, true);*/
        }

        /**
         * Message
         */
        var openModalMessage = function() {
            if (!isOnLine('alert', 'data') || !isAuthenticated('login', 'Message'))
                return false;
            var cfg = {
                component: 'modalMessage',
                size: 'secondary'
            };
            modals.Message = uibOpen(cfg, true);
        };

        /**
         * Notify - Reseved
         */
        var openModalNotify = function(what, to, notify) {

        }

        /**
         * Payment
         * 
         * Note: call $ctrl.dismiss() first at controller scope
         */
        var openModalPayment = function(persistent) {
            // if (!isAuthenticated('login', 'Payment'))
            //     return false;
            var cfg = {
                component: 'modalPayment',
                size: 'edit'
            };
            modals.Payment = uibOpen(cfg, true, persistent);
        }

        /**
         * Prize
         */
        var openModalPrize = function() {
            if (!isOnLine('alert', 'data') || !isAuthenticated('login', 'Prize'))
                return false;
            var cfg = {
                component: 'modalPrize',
                size: 'secondary'
            };
            modals.Prize = uibOpen(cfg, true);
        }

        /**
         * Register
         */
        var openModalRegister = function() {
            if (!isOnLine('alert', 'function') || user.authenticated)
                return false;
            dismiss('*', true);
            $state.go('register');
            /*var cfg = {
                component: 'modalRegister',
                size: 'login-register'
            };
            modals.Register = uibOpen(cfg, true);*/
        }

        /**
         * Theme
         */
        var openModalTheme = function() {
            var cfg = {
                component: 'modalTheme',
                size: 'change-theme'
            };
            modals.Theme = uibOpen(cfg, true);
        }

        /**
         * Survey
         */
        var openModalSurvey = function(id) {
            var cfg = {
                component: 'modalSurvey',
                size: 'login-register',
                resolve: {
                    surveyId: function() {
                        return id;
                    }
                }
            };
            modals.Theme = uibOpen(cfg, true, true);
        }

        /**
         * Abbreviation
         */
        var _call = {
            // Alert: openModalAlert,
            Account: openModalAccount,
            Background: openModalBackground,
            Button: openModalButton,
            Contact: openModalContact,
            ForgotPassword: openModalForgotPassword,
            Id: openModalId,
            IdResult: openModalIdResult,
            Intro: openModalIntro,
            Language: openModalLanguage,
            Login: openModalLogin,
            Message: openModalMessage,
            // Notify: openModalNotify,
            Payment: openModalPayment,
            Prize: openModalPrize,
            Register: openModalRegister,
            Theme: openModalTheme
        }

        /**
         * Return
         */
        var openModal = function(name, internalCall, persistent, params) {
            if (!name || !_call[name]) return undefined;
            if ($('div#modal-' + name).length) {
                return false;
                // dismiss(name);
            } else {
                _call[name](persistent, params);
                if (!internalCall) Analytics.log('modals', 'Open', name);
                return true;
            }
        }

        return {
            open: openModal,
            dismiss: dismiss,
            close: close,
            alert: openModalAlert,
            notify: openModalNotify,
            isOnLine: isOnLine,
            isAuthenticated: isAuthenticated,
            doLoginOpen: doLoginOpen,
            survey: openModalSurvey
        }
    }]);
"use strict";
angular
    .module('app')

    /**
     * defaultIdService
     */
    .factory('defaultIdService', ["$translate", function($translate) {
        var initialId = {
            vi: {
                "137481": "Trần Phú Quang",
                "144364": "Kiều Thanh Sơn",
                "146729": "Nguyễn Thị Thu Trang",
                "152268": "Phạm Năng Thành",
                "154756": "Lê Duy Khang",
                "174993": "Cao Xuân Hà",
                "177793": "Đỗ Anh Tú",
                "181545": "Lê Thị Bảo Ngân",
                "181840": "Vương Minh Thái",
                "187918": "Nguyễn Ngọc Khánh",
                "199515": "Nguyễn Duy Đông",
                "208694": "Trần Mạnh Tiến",
                "211567": "Phạm Minh Hải",
                "212656": "Nguyễn Thị Thủy Anh",
                "213340": "Bùi Hoàng Hà",
                "215002": "Nguyễn Thành Công",
                "215206": "Trịnh Văn Phúc",
                "215307": "Luân Đức Thuận",
                "216249": "Nguyễn Ngọc Triệu",
                "216445": "Lê Phương Thảo",
                "223470": "Trịnh Thị Lê",
                "227877": "Bùi Văn Sơn",
                "230471": "Lê Trần Trung Hiếu",
                "231414": "Nguyễn Quang Long",
                "234478": "Bùi Viết Khải",
                "235366": "Nguyễn Bá Cương",
                "236085": "Vùi Thị Quyền",
                "236201": "Nguyễn Tuấn Dũng",
                "237984": "Nguyễn Như Đạt",
                "253777": "Nguyễn Thanh Sơn",
                "254945": "Nguyễn Gia Đăng",
                "255140": "Ngô Việt Dương",
                "260200": "Phạm Gia Huy",
                "261713": "Phan Tuấn Anh",
                "265576": "Chu Kim Vang",
                "266376": "Vũ Trần Phương Nam",
                "270273": "Trần Thị Thùy Giang",
                "272373": "Nguyễn Đức Quang",
                "276032": "Nguyễn Trọng Việt",
                "276963": "Mai Văn Bình",
                "277481": "Đoàn Ngọc Quang",
                "279025": "Nguyễn Văn Tưởng",
                "279287": "Nguyễn Thành Trung",
                "279701": "Nguyễn Hồng Trung",
                "283769": "Nguyễn Văn Phú",
                "284779": "Đàm Thị Ngân",
                "286842": "Nguyễn Minh Tuấn",
                "292367": "Lê Việt Anh",
                "296228": "Nguyễn Hoàng Tiến",
                "298694": "Đào Khánh Linh",
                "300091": "Nguyễn Thị Bích Ngọc",
                "303526": "Đào Trung Kiên",
                "305988": "Đặng Thị Mai",
                "307964": "Lê Thị Thủy",
                "309309": "Đinh Văn Chiến",
                "315652": "Nguyễn Nhật Hồng",
                "315706": "Nguyễn Đức Minh",
                "321177": "Trịnh Minh Đức",
                "325766": "Lê Thị Thảo",
                "327532": "Bùi Thế Vũ",
                "334536": "Nguyễn Thành Trung",
                "340102": "Phạm Quang Huy",
                "346858": "Trần Ngọc Sơn",
                "347194": "Trần Đức Mạnh",
                "347577": "Lê Thế Tình",
                "349226": "Đào Bá Huỳnh",
                "349380": "Nguyễn Thị Dung",
                "349704": "Nguyễn Việt Cường",
                "350360": "Nguyễn Hưng Tuấn",
                "354039": "Trần Văn Duy",
                "364991": "Nguyễn Văn Quý",
                "370571": "Nguyễn Thành Nam",
                "376616": "Trần Thị Thu Hương",
                "378632": "Nguyễn Văn Trọng",
                "379235": "Nguyễn Bá Hùng",
                "379683": "Đặng Quốc Đạt",
                "380507": "Bùi Minh Nghĩa",
                "382098": "Nguyễn Văn Vương",
                "387785": "Phùng Tiến Thành",
                "390904": "Phạm Thùy Linh",
                "393921": "Lương Trung Tín",
                "396264": "Phan Xuân Đông",
                "400555": "Phạm Minh Tuấn",
                "402517": "Lều Đức Anh",
                "407581": "Nguyễn Thị Lan",
                "407591": "Ngô Văn Hiến",
                "409532": "Hoàng Thị Chinh",
                "411091": "Tăng Tuấn Anh",
                "416790": "Lê Thị Phúc",
                "421536": "Vũ Diệu Ngọc",
                "421925": "Trịnh Thị Ánh Tuyết",
                "423336": "Nguyễn Thị Phượng",
                "424186": "Nguyễn Minh Vương",
                "434924": "Đào Thị Uyên",
                "435143": "Nguyễn Bá Trịnh",
                "437006": "Lê Thị Ngọc Châm",
                "439847": "Trần Mỹ Chiến",
                "440899": "Nguyễn Minh Quang",
                "446745": "Trần Thị Hiền",
                "446929": "Vũ Liên Hương",
                "447982": "Hoàng Anh Tuấn",
                "449896": "Trần Đăng Hoàng",
                "450209": "Lê Cao Nguyên",
                "450992": "Nguyễn Như Tuân",
                "454244": "Đào Mạnh Hùng",
                "456245": "Nguyễn Thị Hồng Thúy",
                "457424": "Nguyễn Anh Tuấn",
                "465368": "Trần Văn Đạt",
                "466612": "Vũ Huy Hoàng",
                "467676": "Phạm Thị Hằng",
                "468043": "Hoàng Thị Huyền",
                "470130": "Trịnh Văn Thành",
                "473670": "Trịnh Kim Long",
                "475006": "Lê Công Linh",
                "475081": "Đỗ Hữu Tuấn",
                "477690": "Nguyễn Thị Thùy Trang",
                "480770": "Ngô Thị Thu Hồng",
                "481649": "Đinh Văn Hợp",
                "482085": "Nguyễn Thị Huế",
                "483133": "Nguyễn Ngọc Lâm",
                "486774": "Bùi Thành Lộc",
                "488727": "Lê Tây Trọng",
                "494136": "Nguyễn Thọ Bảo",
                "495770": "Nguyễn Trường Chinh",
                "499781": "Vũ Công Văn",
                "501990": "Nguyễn Danh Quyết",
                "502435": "Vũ Thành Cung",
                "502663": "Nguyễn Quỳnh Anh",
                "502735": "Đào Anh Sang",
                "503457": "Nguyễn Đăng Lam",
                "505060": "Phạm Đình Khánh",
                "507516": "Trần Anh Minh",
                "507995": "Hoàng Hồng Phúc",
                "510923": "Nguyễn Thị Hồng",
                "525081": "Nguyễn Tá Anh",
                "525837": "Nguyễn Thị Ngọc Huyền",
                "526838": "Nguyễn Đình Triều",
                "533850": "Nguyễn Văn Thao",
                "534571": "Nguyễn Quang Khải",
                "534723": "Lê Quỳnh Phước",
                "539524": "Trần Văn Tuyên",
                "541048": "Trần Văn Tín",
                "542329": "Lê Văn Trường",
                "544289": "Trần Trọng Nguyên",
                "547511": "Trần Thị Lan Anh",
                "551497": "Đặng Thanh Tùng",
                "551586": "Bùi Văn Vượng",
                "553286": "Nguyễn Đăng Trung",
                "554011": "Nguyễn Hữu Tuấn",
                "556355": "Nguyễn Văn Tiến",
                "558276": "Vũ Thị Thu Hà",
                "559277": "Lê Đắc Kiên",
                "563983": "Lê Minh Hoàng",
                "567325": "Mai Thị Phương Thảo",
                "567534": "Nguyễn Văn Phát",
                "567979": "Trần Hà Ngọc Thiện",
                "568926": "Nguyễn Văn Đại",
                "572674": "Lê Trường Giang",
                "573923": "Đoàn Văn Chiến",
                "578071": "Nguyễn Trung Kiên",
                "581880": "Trần Xuân Quang",
                "591574": "Nguyễn Hồng Nhu",
                "591635": "Nguyễn Trung Long",
                "599529": "Nguyễn Bá Ngọc",
                "600737": "Bùi Văn Du",
                "601459": "Lê Bá Hoàng",
                "604425": "Giang Hùng Việt",
                "613145": "Phan Thị Hà Trang",
                "613697": "Nguyễn Huy Tiến",
                "617191": "Đinh Thị Vân Trang",
                "619158": "Vũ Thị Lĩnh",
                "620598": "Nguyễn Thế Anh",
                "620714": "Vũ Thị Nhung",
                "620878": "Nguyễn Viết Đức",
                "623243": "Nguyễn Thanh Huyền",
                "624940": "Lại Thị Ngọc",
                "626404": "Đào Thị Hải Ninh",
                "626918": "Nguyễn Thanh Tuấn",
                "632387": "Trần Thị Tuyết",
                "633001": "Nguyễn Hữu Hoàn",
                "633489": "Trương Văn Long",
                "635725": "Hoàng Mạnh Tấn",
                "639789": "Trần Văn Sáng",
                "645903": "Văn Phú Điệp",
                "655873": "Khổng Thị Mai Hương",
                "657913": "Nguyễn Thị Thu Hương",
                "658285": "Phạm Hải Yến",
                "658872": "Phùng Mạnh Cường",
                "659085": "Bùi Toàn Thắng",
                "660824": "Bùi Thị Thùy Dương",
                "661198": "Trần Thị Hồng Liễu",
                "665413": "Hoàng Quốc Quân",
                "667068": "Nguyễn Công Cường",
                "668092": "Nguyễn Tiến Đạt",
                "671856": "Phạm Văn Tùng",
                "673211": "Đào Thị Thu Huyền",
                "675145": "Đào Đức Thành",
                "678436": "Nguyễn Trần Nam Anh",
                "679155": "Viên Tuấn Hùng",
                "679698": "Lê Trọng Hòa",
                "682310": "Phạm Duy Tùng",
                "684794": "Nguyễn Thị Thúy Nga",
                "685527": "Nguyễn Văn Hà",
                "685935": "Mai Đức Toàn",
                "687290": "Nguyễn Văn Phượng",
                "691152": "Phạm Thị Thu",
                "696044": "Trần Thanh Sơn",
                "697500": "Nguyễn Tiến Dũng",
                "700497": "Trương Trần Tuấn",
                "709110": "Nguyễn Tuấn Anh",
                "713562": "Nguyễn Duy Khánh",
                "713616": "Nguyễn Hoàng Nam",
                "715168": "Phạm Thị Gấm",
                "718143": "Nguyễn Quyết Thắng",
                "720638": "Cao Ngọc Anh",
                "726672": "Trần Thị Thiết",
                "728348": "Tống Đình Đồng",
                "732898": "Bạch Hồng Quân",
                "736691": "Phùng Thị Diệu Vi",
                "739514": "Phạm Thúy Anh",
                "740496": "Phạm Đình Vương",
                "743575": "Trần Thúy Nga",
                "745279": "Phạm Đức Huy",
                "748369": "Nguyễn Thị Hiền",
                "749722": "Vũ Minh Hiếu",
                "751844": "Trần Ngọc Vượng",
                "756682": "Nguyễn Đức Thanh",
                "759290": "Bùi Công Trình",
                "760100": "Khuất Thị Ngọc Trâm",
                "761254": "Nguyễn Bắc Hải",
                "762319": "Đặng Thị Ngọc Trâm",
                "762968": "Phí Hà Duy",
                "767360": "Nguyễn Lan Anh",
                "772304": "Trịnh Quốc Anh",
                "774647": "Nguyễn Xuân Trường",
                "775011": "Nguyễn Huy Cường",
                "775928": "Nguyễn Văn Ly",
                "789879": "Tạ Anh Tuấn",
                "791198": "Nguyễn Khắc Dũng",
                "792263": "Ngô Đình Tạo",
                "798895": "Phạm Trung Nguyên",
                "807437": "Nguyễn Công Nam",
                "809211": "Nguyễn Hữu Đức",
                "811562": "Đặng Văn Đà",
                "814843": "Nguyễn Quý Đạt",
                "816411": "Bùi Trung Nghĩa",
                "816812": "Lê Duy Hiệp",
                "819836": "Nguyễn Quốc Học",
                "820836": "Ngô Thị Hiền",
                "826644": "Nguyễn Thị Thu Hà",
                "828039": "Nguyễn Duy Phong",
                "830129": "Lê Anh Hào",
                "833243": "Nguyễn Hoài Nam",
                "836084": "Nguyễn Thu Hường",
                "837364": "Lê Văn Cảnh",
                "840075": "Trịnh Mạnh Dũng",
                "843694": "Nguyễn Thị Hương",
                "847978": "Nguyễn Đức Anh Tuấn",
                "849206": "Trần Thị Thu Hằng",
                "850415": "Trịnh Đức Duy",
                "851314": "Đào Hải Yến",
                "854077": "Lương Thị Lệ Chi",
                "855635": "Tống Tuấn Anh",
                "858621": "Nguyễn Hà Quy",
                "861673": "Nguyễn Sỹ Tài",
                "868106": "Nguyễn Kim Long",
                "868176": "Nguyễn Thị Diệu Linh",
                "868260": "Nguyễn Hữu Tiến",
                "871844": "Trần Đức Hùng",
                "872367": "Lương Văn Tuyên",
                "874028": "Trịnh Thị Thu Hường",
                "877015": "Đặng Việt Hưng",
                "878471": "Lê Việt Trung",
                "879219": "Nguyễn Đình Đoạt",
                "882020": "Trần Ngọc Sơn",
                "887609": "Nguyễn Khắc Quả",
                "889079": "Nghiêm Quang Duy",
                "890158": "Lưu Thị Minh Thúy",
                "892354": "Dương Bá Tùng",
                "893870": "Trần Mạnh Linh",
                "895941": "Bùi Công Hoàng",
                "899733": "Trần Văn Thắng",
                "903604": "Hồ Đức Hòa",
                "904319": "Phạm Văn Kim",
                "910952": "Vũ Đăng Trong",
                "910989": "Nguyễn Thị Mai",
                "913153": "Bùi Ngọc Anh",
                "914819": "Phạm Tiến Anh",
                "916678": "Nghiêm Xuân Tá",
                "926111": "Bùi Xuân Lai",
                "930678": "Trương Thị Thùy",
                "933511": "Bùi Đức Bình",
                "933583": "Phạm Thị Phương Hoa",
                "933979": "Lê Hữu Dũng",
                "939222": "Đinh Xuân Trung",
                "941879": "Phạm Hoàng Long",
                "944848": "Phạm Thành Tâm",
                "945598": "Nguyễn Văn Toàn",
                "951452": "Lê Ngọc Toàn",
                "951588": "Lê Văn Biên",
                "953564": "Nguyễn Đăng Thịnh",
                "954821": "Nguyễn Thị Diệm",
                "960304": "Lê Thị Ngân",
                "962650": "Nguyễn Hồng Hải",
                "963240": "Đào Minh Đức",
                "968254": "Nguyễn Minh Hoàng"
            },
            en: {
                "137481": "Steve J. Zhang",
                "144364": "Emma Wood",
                "146729": "Janet C. Hernandez",
                "152268": "Kellie W. Jimenez",
                "154756": "Katherine M. Murphy",
                "169700": "Lisa J. He",
                "174993": "Kendra Torres",
                "177793": "Eddie Blanco",
                "181545": "Stephanie Lopez",
                "181840": "Sabrina P. Ortega",
                "183951": "Gabriel K. Edwards",
                "186545": "Casey Bhat",
                "187918": "Eduardo B. Wright",
                "199515": "Ramon Wang",
                "202380": "Jonathan W. Simmons",
                "208694": "Damien R. Gao",
                "211567": "Nancy L. Madan",
                "212656": "Levi D. Srini",
                "213340": "Priscilla Xie",
                "215002": "Darren Gomez",
                "215206": "Sydney L. Martin",
                "215307": "Lucas N. James",
                "216249": "Luis D. King",
                "221861": "Sebastian Rivera",
                "222075": "Gabrielle Richardson",
                "223470": "Cassie Pal",
                "227877": "Devin E. Scott",
                "230471": "Orlando K. Navarro",
                "231414": "Ann Perez",
                "234478": "Candace R. Lopez",
                "235366": "Evan L. Morris",
                "236085": "Casey Romero",
                "236201": "Jade R. Ramirez",
                "237984": "Alyssa E. Williams",
                "238811": "Cindy Chandra",
                "243937": "Dakota A. Coleman",
                "250176": "Alicia Chande",
                "253777": "Julia Scott",
                "254945": "Adam Coleman",
                "255140": "Kristi A. Alonso",
                "260200": "Lacey Nath",
                "261713": "Rosa Xu",
                "265576": "David Sharma",
                "266376": "Gregory C. Deng",
                "270273": "Stacy Romero",
                "272373": "Riley Ross",
                "276032": "Terrance M. Patel",
                "276963": "Andre A. Rodriguez",
                "277481": "Mario C. Yuan",
                "279025": "Marshall Zhang",
                "279287": "Terrance G. Verma",
                "283769": "Paula L. Suarez",
                "284779": "Hunter J. Alexander",
                "286842": "Jarrod Sai",
                "288273": "Anna Wilson",
                "292367": "Arturo J. Bhat",
                "296228": "Brianna Wilson",
                "300091": "Mitchell Tang",
                "303526": "Darryl S. Huang",
                "305988": "Alexa Ramirez",
                "307964": "Andre R. Fernandez",
                "309309": "Roy A. Gomez",
                "315652": "Christy Sharma",
                "315706": "Tanya Hernandez",
                "321177": "Caitlin C. Cook",
                "327532": "Hunter Martin",
                "334536": "Marshall Nath",
                "340102": "Shawna M. Nath",
                "342889": "Lauren Stewart",
                "346858": "Jennifer R. Flores",
                "349226": "Haley C. Baker",
                "349380": "Jon Xie",
                "349704": "Steven S. Ward",
                "350360": "Alexis M. Jackson",
                "354039": "Angel C. Bell",
                "370571": "Sydney E. Griffin",
                "376616": "Olivia R. Ross",
                "378632": "Megan R. Perry",
                "379235": "Connor F. Carter",
                "379683": "Hailey P. Sanchez",
                "380507": "Jose Powell",
                "387785": "Derek C. Aggarwal",
                "390904": "Ruth A. Kapoor",
                "393921": "Zachary Li",
                "396264": "Monica Engineer",
                "396578": "Andy Ruiz",
                "400555": "Jeremiah E. Williams",
                "402517": "Patrick Cooper",
                "407581": "Christina Kelly",
                "407591": "Rachel W. Watson",
                "409532": "Albert Gutierrez",
                "411091": "Samuel Li",
                "416790": "Trinity Peterson",
                "421925": "Dalton E. Allen",
                "423336": "Melinda B. Munoz",
                "424186": "Noah B. Li",
                "434924": "Michele Alonso",
                "435143": "Denise Sai",
                "437006": "Christine Lal",
                "439164": "Miranda Perry",
                "439847": "Adam R. Yang",
                "440899": "Elizabeth Foster",
                "446745": "Caroline Jenkins",
                "446929": "Caleb Jai",
                "447982": "Leah Zhao",
                "449896": "Arianna M. Perry",
                "450209": "Bryan C. Peterson",
                "450992": "Erick L. Raman",
                "454244": "Sheila T. Jimenez",
                "456245": "Tabitha A. Rubio",
                "457424": "Raquel Jimenez",
                "465368": "Billy Ramos",
                "466612": "Jason M. Henderson",
                "467676": "Angel L. Collins",
                "468043": "Sheila Dominguez",
                "470130": "Felicia J. Hernandez",
                "473670": "Douglas Chandra",
                "475006": "Michael B. Johnson",
                "475081": "Dylan L. Johnson",
                "477690": "Christopher C. Thompson",
                "480770": "Ariana J. Torres",
                "481649": "Jared E. Cooper",
                "482085": "Damien D. Kumar",
                "483133": "Arthur A. Arun",
                "486774": "Darrell K. Nara",
                "488727": "Rachael J. Garcia",
                "494136": "Lauren C. Martin",
                "495770": "Marie Hernandez",
                "499781": "Matthew Thompson",
                "499995": "Hunter A. Green",
                "501786": "Tammy Subram",
                "501990": "Orlando Ruiz",
                "502435": "Cedric C. Aggarwal",
                "502663": "Anna S. Bennett",
                "502735": "Henry Sai",
                "503457": "Frederick Mehta",
                "505060": "Roger Li",
                "507516": "Terry Goel",
                "507995": "Joe Munoz",
                "510426": "Christine S. Sharma",
                "510923": "Cameron L. Martin",
                "522823": "Julie L. Rai",
                "525081": "Donald J. Rana",
                "525837": "Julia E. Allen",
                "526838": "Byron Munoz",
                "534571": "Leonard L. Sharma",
                "534723": "Gloria W. Hernandez",
                "535090": "Victoria Robinson",
                "541048": "Gloria Moreno",
                "542329": "Adriana Fernandez",
                "544289": "Walter W. Blanco",
                "547511": "Barbara Shan",
                "551497": "Shawn A. Chande",
                "551586": "Grant M. Chande",
                "554011": "Makayla Richardson",
                "556355": "Angela Bryant",
                "558276": "Amanda Reed",
                "559277": "Xavier A. Reed",
                "563983": "Connor J. Long",
                "565724": "Kristen Liang",
                "567325": "Paula A. Torres",
                "567979": "Adrienne Moreno",
                "568926": "Mary I. Campbell",
                "572674": "Vincent G. Wu",
                "573923": "Clifford D. Rana",
                "578071": "Michele T. Munoz",
                "585363": "Isaac Stewart",
                "586089": "Todd A. Wu",
                "591635": "Bryce K. Kelly",
                "600737": "Mason C. Morgan",
                "601459": "Adrienne E. Castro",
                "604425": "Corey M. Xu",
                "613697": "Isabella Wilson",
                "619158": "Arturo F. She",
                "620598": "Monica Suri",
                "620714": "Kurt E. Nath",
                "620878": "Aimee E. Xu",
                "623243": "Henry F. Malhotra",
                "627546": "Savannah J. Cooper",
                "633001": "Caitlin C. Gray",
                "633489": "Nathan Gonzalez",
                "635725": "Carolyn L. Jimenez",
                "639789": "Lindsey S. She",
                "645903": "Courtney Roberts",
                "655873": "Peter Yuan",
                "656317": "Marshall Zheng",
                "657913": "Tonya M. Yuan",
                "658285": "Louis A. Sharma",
                "658872": "Mya K. Hughes",
                "660824": "Bianca A. Sun",
                "661198": "Sydney E. Taylor",
                "665413": "Kyle Allen",
                "667068": "Bailey Edwards",
                "668092": "Jamie N. Navarro",
                "668384": "Ernest Zheng",
                "671856": "Charles Campbell",
                "673211": "Edwin M. Ma",
                "675145": "Terry L. Anand",
                "678436": "Brittney Yang",
                "679155": "Steve A. Zhu",
                "679698": "Emmanuel E. Mehta",
                "682310": "Derek Deng",
                "684794": "Chris Kelly",
                "685527": "Robyn Martin",
                "685935": "Geoffrey K. Srini",
                "687290": "Cesar S. Patel",
                "691152": "Abby Srini",
                "697500": "Adrienne Alonso",
                "700497": "Carmen Rodriguez",
                "709110": "Miguel M. Lopez",
                "713562": "Connor S. Patterson",
                "713616": "Kristin K. Lal",
                "715168": "Curtis G. Ye",
                "718143": "Brad P. Shen",
                "720638": "Xavier Phillips",
                "728348": "Andrea C. Rivera",
                "732570": "Carson E. Ross",
                "732898": "Christy C. Anand",
                "739514": "Victor L. Alonso",
                "740496": "Autumn Ye",
                "743575": "Melvin Lal",
                "745279": "Jermaine Srini",
                "748369": "Martha R. Cai",
                "749722": "Stacy P. Sanz",
                "751844": "Deborah L. Bhat",
                "756682": "Brandon B. Hughes",
                "759290": "Melody P. Alonso",
                "760100": "Pedro W. Alonso",
                "761254": "Tyler Thomas",
                "762968": "Sophia C. Collins",
                "767360": "Hannah A. Miller",
                "772304": "Nicolas M. Nath",
                "775011": "Jerome M. Alvarez",
                "775928": "Bethany S. Sharma",
                "791198": "Toni C. Chandra",
                "792263": "Philip W. Vazquez",
                "794770": "Tracy Anand",
                "798895": "Raul L. Anand",
                "807437": "Catherine D. Gray",
                "809211": "Jessie C. Lin",
                "811101": "Sarah A. Jenkins",
                "811562": "Janelle M. Verma",
                "812337": "Devin B. Gonzales",
                "814843": "Javier M. Moreno",
                "816411": "Logan A. Russell",
                "816812": "Christine Kelly",
                "819836": "Henry A. Rodriguez",
                "820836": "Joe J. Ruiz",
                "826644": "Christy She",
                "828039": "Kevin E. Allen",
                "830129": "Ronnie Zhou",
                "833243": "Marco B. Sanchez",
                "836084": "Anthony P. Smith",
                "837364": "Monique Alvarez",
                "840075": "Pedro R. Castro",
                "843694": "Dalton Price",
                "849206": "Lacey R. Xie",
                "850415": "Blake L. Smith",
                "851314": "Jasmine K. Howard",
                "854077": "Nelson Munoz",
                "855635": "Stanley Kapoor",
                "858621": "Candace Engineer",
                "861673": "Edward G. Allen",
                "868106": "Meeghan A. Gonzalez",
                "868176": "Gina Ramos",
                "868260": "Tabitha Malhotra",
                "871844": "Trevor L. Griffin",
                "872367": "Sarah Hayes",
                "874028": "Damien P. Wu",
                "877015": "Kelli Zheng",
                "878471": "Ross Chandra",
                "879219": "Erica Li",
                "882020": "Ross Gomez",
                "887609": "Gilbert Lu",
                "889079": "Kristin Sharma",
                "890158": "Geoffrey Mehta",
                "890532": "Jamie Gil",
                "892354": "Kristin Raje",
                "895941": "Patricia L. Sai",
                "903604": "Angel M. Hernandez",
                "904319": "Josue C. Ortega",
                "910952": "Devon S. Nath",
                "910989": "Clarence R. Tang",
                "913153": "Julie J. Raji",
                "914819": "Olivia Bell",
                "916678": "Sebastian W. Kelly",
                "928360": "Shaun R. Xie",
                "930678": "Dawn L. Liang",
                "931306": "Joel E. Suri",
                "933511": "Victor Navarro",
                "933583": "Claudia J. Wu",
                "933979": "Jon M. Anand",
                "936785": "Hailey J. Wright",
                "939222": "Kimberly A. Morris",
                "941879": "Calvin C. Pal",
                "944848": "Trinity B. Ward",
                "945598": "Bianca E. She",
                "951452": "Jon C. Raji",
                "951588": "Shane A. Perez",
                "953564": "Tammy Perez",
                "954821": "Madeline L. Wright",
                "960304": "Denise L. Garcia",
                "962650": "Robert R. Hughes",
                "963240": "Isabel Hughes",
                "966544": "Ricky A. Ortega",
                "968254": "Gilbert D. Chande"
            }
        };

        return function() {
            var language = $translate.use();
            var ids = initialId[language] || initialId.en;
            return {
                ids: _.keys(ids),
                names: _.values(ids)
            }
        }

    }]);
"use strict";
angular
    .module('app')

    .factory('i18nService', ["$translate", "$http", "$window", "devOps", "userdataService", function($translate, $http, $window, devOps, userdataService) {
        var userLang = navigator.language || navigator.userLanguage;

        var availangs = {
            en: {
                name: 'English',
                flag: 'images/temp/flag-gb.jpg'
            },
            cn: {
                name: '中文',
                flag: 'images/temp/flag-china.jpg'
            },
            kr: {
                name: '한국어',
                flag: 'images/temp/flag-korea.jpg'
            },
            vi: {
                name: 'Tiếng Việt',
                flag: 'images/temp/flag-vietnam.jpg'
            },
            fr: {
                name: 'Français',
                flag: 'images/temp/flag-fr.jpg'
            },
            pt: {
                name: 'Português',
                flag: 'images/temp/flag-por.jpg'
            }
        };

        var languages = {};
        angular.forEach(availangs, function(language, key) {
            if ($window['i18n_' + key]) {
                languages[key] = language;
            }
        });

        var setLang = function(language) {
            var lang = language || userdataService.getRuntimeOpt('language', 'undefined');
            if (lang === 'undefined') {
                $http.get(devOps.api.ipinfo)
                    .then(function(response) {
                        var resp = response || {}
                        var data = resp.data || {}
                        if (data.country === 'VN') {
                            lang = 'vi'
                        } else {
                            lang = userLang.substr(0, 2)
                        }
                        $translate.use(lang);
                        userdataService.setRuntimeOpt('language', lang);
                    })
            } else {
                $translate.use(lang);
                if (language) userdataService.setRuntimeOpt('language', language);
            }
        }

        var getLang = function() {
            return $translate.use();
        }

        return {
            languages: languages,
            setLang: setLang,
            getLang: getLang,
            userLang: userLang
        }
    }]);

"use strict";
angular
    .module('app')
    .factory('authService', ["$firebaseAuth", function($firebaseAuth) {
        return $firebaseAuth();
    }])
    .factory('firebaseRef', ["authService", function(authService) {
        var firebaseRef = firebase.database().ref();

        return function() {
            var auth = authService.$getAuth();
            if (!auth) {
                throw new Error('User not logged in!');
            } else {
                return firebaseRef.child(auth.uid);
            }
        }
    }]);
"use strict";
angular
    .module('app')
    .factory('audioService', ["defaultSettingService", "devOps", "Analytics", "userdataService", function(defaultSettingService, devOps, Analytics, userdataService) {
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
    }]);
"use strict";
angular
    .module('app')

    .factory('Analytics', ["$window", "devOps", "authService", "trackingEvents", function($window, devOps, authService, trackingEvents) {
        var last_hotkey = '',
            auth = authService,
            authed = auth.$getAuth(),
            user = {};

        if (authed) {
            user.authenticated = true;
            user.email = authed.email;
            user.uid = authed.uid;
        }

        auth.$onAuthStateChanged(function(firebaseUser) {
            if (firebaseUser) {
                authed = auth.$getAuth();
                user.authenticated = true;
                user.email = authed.email;
                user.uid = authed.uid;
            } else {
                user.authenticated = false;
            }
        });

        var facebook = function(params) {
            if (typeof $window.fbq !== 'undefined') {
                $window.fbq('trackCustom', devOps.sitename, {
                    eventCategory: params.category,
                    eventAction: params.action,
                    eventLabel: params.label
                    // eventValue: params.value
                });
            } else {
                var timer = setTimeout(function() {
                    facebook(params);
                }, 1000);
            }
        }

        var google = function(params) {
            if (typeof $window.ga !== 'undefined' && typeof $window.ga.getAll !== 'undefined') {
                var trackerName = $window.ga.getAll()[0].get('name');
                $window.ga(trackerName + '.send', {
                    hitType: 'event',
                    eventCategory: params.category,
                    eventAction: params.action,
                    eventLabel: params.label
                    // eventValue: p.value
                });
            } else {
                var timer = setTimeout(function() {
                    google(params);
                }, 1000);
            }
        }

        var mixpanel = function(params) {
            if (typeof $window.mixpanel !== 'undefined') {
                $window.mixpanel.track(params.event, params.data);
            } else {
                var timer = setTimeout(function() {
                    mixpanel(params);
                }, 1000);
            }
        }

        var track = function(event, action, label, details) {
            if (!trackingEvents[event]) {
                console.error('Undefined tracking event: ' + event);
                return undefined;
            }

            // remember the hotkey
            if (action == 'Hotkey') {
                last_hotkey = label;
                return true;
            }

            var params = {
                event: trackingEvents[event],
                data: {}
            }

            if (action) params.data.action = action;
            if (typeof label !== 'undefined') params.data.label = (typeof label === 'string') ? label : JSON.stringify(label);
            if (typeof details === 'object') {
                for (var k in details) {
                    params.data[k] = details[k];
                }
            }
            if (last_hotkey) {
                params.data.hotkey = last_hotkey;
                last_hotkey = '';
            }
            if (user.uid) params.data.uid = user.uid;
            var d = new Date();
            params.data.moment = d.toLocaleString();
            params.data.version = devOps.version;

            if (document.domain !== devOps.domain) {
                console.log('Analytics', params);
                return false;
            }

            mixpanel(params);

            var _g = {
                category: params.event,
                action: params.data.action || null,
                label: params.data.label || null
            }
            google(_g);

            return true;
        }

        var identify = function(type, id, email) {
            // type = alias|identify

            if (!id) id = user.uid;
            if (!email) email = user.email

            if (document.domain !== devOps.domain) {
                console.log(type, id, email);
                return id ? false : undefined;
            } else if (!id) {
                return undefined;
            }

            // intercom user email
            if ($window.intercomSettings) {
                $window.intercomSettings.email = email;
            }

            // mix panel identify
            if (typeof $window.mixpanel !== 'undefined' && typeof $window.mixpanel[type] === 'function') {
                $window.mixpanel[type](id);
                var ppl = {
                    "$email": email
                }
                if (type == 'alias')
                    ppl["$created"] = new Date();
                else
                    ppl["$last_login"] = new Date();
                $window.mixpanel.people.set(ppl);
            } else {
                var timer = setTimeout(function() {
                    identify(type, id, email);
                }, 1000);
            }

            return true;
        }

        var trackUnload = function(on) {
            if (on) {
                $window.onbeforeunload = function(e) {
                    track('unload');
                    var confirmationMessage = "\o/";
                    var ee = e || window.event;
                    if (ee) ee.returnValue = confirmationMessage; // Gecko + IE
                    return confirmationMessage; // Webkit, Safari, Chrome
                };
            } else {
                $window.onbeforeunload = function() {}
            }
        }
        // trackUnload(true);

        return {
            log: track,
            id: identify,
            trackUnload: trackUnload
        }
    }])

    .factory('trackingEvents', function() {
        var configEvents = {
            test: 'DevOp',
            default: 'Do Something',
            error: 'Got Error',
            visit_home: 'Visit Home',
            visit_mod: 'Visit Customize',
            visit_pres: 'Visit Presentation',
            iddraw_home: 'ID Draw - Home',
            iddraw_pres: 'ID Draw - Presentation',
            modals: 'Execute Modals',
            login: 'User LogIn',
            register: 'User Register',
            logout: 'User LogOut',
            edit_profile: 'Edit User Profile',
            payment: 'Make Payment',
            customize: 'Customize',
            ui_action: 'Interact UI',
            milestone: 'Reach Milestone',
            contact: 'Make Contact',
            forgotpw: 'Forgot Password',
            onboarding: 'Onboarding',
            misused: 'Misused',
            unload: 'Unload Browser',
            survey: 'Answer Survey'
        }

        return configEvents;
    });

angular
    .module('app')
    .provider('$modalState', ['$stateProvider', function($stateProvider) {
        var provider = this;

        this.$get = function() {
            return provider;
        };

        this.state = function(stateName, options) {
            var modalInstance;

            options.onEnter = onEnter;
            options.onExit = onExit;
            if (!options.resolve) {
                options.resolve = [];
            }

            var resolveKeys = angular.isArray(options.resolve) ? options.resolve : Object.keys(options.resolve);
            $stateProvider.state(stateName, _.omit(options, ['component', 'template', 'templateUrl', 'controller', 'controllerAs']));

            onEnter.$inject = ['$uibModal', '$state', '$timeout'].concat(resolveKeys);

            function onEnter($modal, $state, $timeout) {
                options.resolve = {};

                for (var i = onEnter.$inject.length - resolveKeys.length; i < onEnter.$inject.length; i++) {
                    (function(key, val) {
                        options.resolve[key] = function() {
                            return val;
                        };
                    })(onEnter.$inject[i], arguments[i]);
                }

                $timeout(function() { // to let populate $stateParams
                    options.windowClass = 'animation-modal-x';
                    options.animation = false;
                    modalInstance = $modal.open(options);
                    modalInstance.result.finally(function() {
                        $timeout(function() { // to let populate $state.$current
                            if ($state.$current.name === stateName) {
                                $state.go(options.parent || '^');
                            }
                        });
                    });
                });
            }

            function onExit() {
                if (modalInstance) {
                    modalInstance.close();
                }
            }

            return provider;
        };
    }]);

var i18n_vi = {
    // draw screen
    'Lucky Draw': 'Quay số trúng thưởng',
    'X Prize': 'Giải X',
    'Diamond Prize': 'Giải Đặc Biệt',
    'Gold Prize': 'Giải Nhất',
    'Silver Prize': 'Giải Nhì',
    'Silver Prize': 'Giải Nhì',
    'Bronze Prize': 'Giải Ba',
    'Press the Spin button to start': 'Nhấn nút Quay số để bắt đầu',
    'Press the Presentation button to start': 'Nhấn Trình chiếu để bắt đầu sự kiện',
    'Winner is coming...': 'Đang tìm người may mắn...',
    'Spin': 'Quay số',
    'Stop': 'Chốt',
    'Confirm': 'Xác nhận',
    'Retry': 'Quay lại',
    'Customize': 'Chỉnh sửa',
    'Register Now': 'Đăng ký',
    'Buy Now': 'Mua Phần Mềm',
    'Presentation': 'Trình chiếu!',
    'Draw Now': 'Quay Số',
    'Amazing Event': 'Lucky Draw Software',
    'Your Event Name': 'Tên sự kiện',
    'Winner Name Here': 'Người May Mắn',

    'Save': 'Lưu lại',
    'Cancel': 'Hủy bỏ',
    'Reset Default': 'Mặc định',

    // edit ID
    'Edit ID': 'Danh sách mã quay thưởng của tôi',
    'Update IDs for Presentation': 'Nhập danh sách mã số để quay thưởng',
    'Your Drawing IDs': 'Cập nhật danh sách',
    'Or Auto Generate ID': 'hoặc tự động tạo số',
    'Generate': 'Tạo số',
    'Total': 'Số lượng',
    'IDs': 'Mã số',
    'IDs ( 0-9, A-Z, maximum 16 characters )': 'BƯỚC 1: Copy danh sách Mã số quay thưởng vào đây',
    'ID max length exceeds': 'Mỗi mã quay thưởng không được vượt quá 23 ký tự',
    'Name List': 'BƯỚC 2: Copy danh sách Họ tên vào đây',
    'Names': 'Họ tên',
    'ID/Name pairs will be automatically matched line by line': '',
    'Copy Paste lists of IDs/ Names in to corresponding column': '',
    'You’ve reached 15 IDs limit': 'Tài khoản thử nghiệm bị giới hạn 3 lần quay ở chế độ Trình chiếu!',
    'Upgrade to Remove Your Account Limits': '',
    'Upgrade to Continue Lucky Drawing': '',
    'Pay to Extend Usage Time': 'Gia hạn thời gian sử dụng cho sự kiện tiếp theo của bạn',
    'Pay to Extend Lucky Drawing Time': 'Gia hạn để lưu được kết quả quay thưởng',
    'Usage Days': 'Quay thưởng không giới hạn trong',
    'per Event': '/ sự kiện',
    'Service Price Guide': '',
    'Upgrade Account Now': 'Nâng cấp tài khoản',
    'Return to editing': 'Danh sách mã quay thưởng của tôi',
    'Upgrade Account': 'Nâng cấp tài khoản',
    'WePay Payment Guide': "Bạn sẽ được chuyển sang cổng thanh toán WePay để thực hiện thanh toán an toàn. Tại trang sohapay.vn, nhấn vào mục 'Thanh toán không cần đăng nhập' để thanh toán nhanh. Tài khoản của bạn sẽ được tự động nâng cấp ngay sau khi hoàn tất giao dịch.",
    '1Pay Payment Guide': 'Bạn sẽ được chuyển sang cổng thanh toán 1Pay để thực hiện thanh toán an toàn. Tài khoản của bạn sẽ được tự động nâng cấp ngay sau khi hoàn tất giao dịch.',
    'Paypal Payment Guide': 'Bạn sẽ được chuyển sang cổng thanh toán PayPal để thực hiện thanh toán an toàn. Tài khoản của bạn sẽ được tự động nâng cấp ngay sau khi hoàn tất giao dịch.',
    '1 day event': 'Event 1 ngày',
    '3 days event': 'Event 3 ngày',
    '5 days event': 'Event 5 ngày',
    '24 hours': '24 giờ',
    '3 days': '3 ngày',
    '5 days': '5 ngày',
    'event1day': 'Tặng 2 ngày',
    'event3days': 'Tặng 3 ngày',
    'event5days': 'Tặng 4 ngày',
    'for pre-event testing': 'sử dụng miễn phí để chuẩn bị trước sự kiện',
    'estimated usage time': 'Thời hạn sử dụng (ước tính):',
    'until': 'đến',
    'Please contact LuckyDraw to manually activate your payment': 'Vui lòng liên hệ theo số 0904.131.696 để hoàn tất giao dịch của bạn',

    // payment success
    'Payment Complete': 'Thanh toán thành công',
    'Payment completed successfully': 'Bạn đã thanh toán và nâng cấp tài khoản thành công',
    'Thanks for being awesome with Lucky Draw': 'Cảm ơn bạn đã sử dụng LuckyDraw!',
    'Your subscription': 'Ngày nâng cấp tiếp theo',
    'Now you’ll return to edit your custom Photos/ IDs': '',

    // payment failure
    'Unable to init payment process. Please try again.': 'Không kết nối được tới cổng thanh toán. Vui lòng nhấn F5 và thử lại!',

    // cusomize
    'Customize Action Message': 'Chỉnh sửa thông báo',
    'Customize name of Prizes': 'Đổi tên giải thưởng',
    'Customize Button': 'Đổi tên nút bấm',
    'Select Checkbox to Enable Prize': 'Hướng dẫn: Đánh dấu chọn để sử dụng các cơ cấu giải.<br />Nhấn vào biểu tượng giải thưởng để thay thế hình ảnh.',

    // links
    'Pricing': 'Phí sử dụng',

    // result
    'Result': 'Kết quả',
    'Rejected': 'Bỏ qua',
    'Confirmed': 'Đã xác nhận',
    'ID Drawing Winner': 'Kết quả quay số may mắn',
    'Drawing Session': 'Phiên quay thưởng',
    'This will delete all prizes in session': 'Xóa toàn bộ kết quả trong phiên',
    'or': 'hay',
    'Draw Date': 'Ngày',
    'Winner Name': 'Họ tên',
    'No result': '-',
    'Download Results': 'Download',
    'Diamond': 'Đặc biệt',
    'Gold': 'Giải Nhất',
    'Silver': 'Giải Nhì',
    'Bronze': 'Giải Ba',
    'X-Prize': 'Giải X',
    'Everybody Win!': 'Không còn mã số để quay thưởng. Toàn bộ mã số hoặc đã trúng thưởng, hoặc đã bị loại.',
    'Prize': 'Giải',
    'Prize 4': 'Giải 4',
    'Prize 5': 'Giải 5',
    'Prize 6': 'Giải 6',
    'Prize 7': 'Giải 7',
    'Prize 8': 'Giải 8',
    'Prize 9': 'Giải 9',
    'Prize 10': 'Giải 10',
    'Prize 11': 'Giải 11',
    'Prize 12': 'Giải 12',
    'Prize 13': 'Giải 13',
    'Prize 14': 'Giải 14',
    'Prize 15': 'Giải 15',
    'Prize 16': 'Giải 16',
    'Prize 17': 'Giải 17',
    'Prize 18': 'Giải 18',
    'Prize 19': 'Giải 19',
    'Prize 20': 'Giải 20',
    'Prize 21': 'Giải 21',
    'Prize 22': 'Giải 22',
    'Prize 23': 'Giải 23',

    // introduction
    'How-to': 'Hướng dẫn',
    'Introduction': 'Giới thiệu', // "Hướng dẫn",
    'About Us': 'Về LuckyDraw.live', // "LuckyDraw",
    'FAQ': 'Câu hỏi thường gặp', // "Câu hỏi thường gặp",
    'Term of Service': 'Quy định sử dụng', // "Quy định sử dụng",
    'Privacy Policy': 'Chính sách bảo mật', // "Chính sách bảo mật",
    'Contact and Support': 'Liên hệ và Hỗ trợ', // "Liên hệ và Hỗ trợ",
    'templates/tab-about.html': 'templates/vi/tab-about.html',
    'templates/tab-faq.html': 'templates/vi/tab-faq.html',
    'templates/tab-term.html': 'templates/tab-term.html',
    'templates/tab-policy.html': 'templates/tab-policy.html',
    'templates/tab-contact.html': 'templates/tab-contact.html',

    // login
    'Login': 'Đăng nhập',
    'Email': 'Email',
    'Password': 'Mật khẩu',
    'Not a member': 'Bạn chưa có tài khoản',
    'Sign up now': 'Đăng ký ngay',
    "Don't have an account?": '',
    'Account is being used': 'Tài khoản đang được sử dụng ở một nơi khác',
    'Someone logged-in somewhere!': 'Tài khoản của bạn đã được đăng nhập và sử dụng ở một nơi khác. Để đảm bảo an toàn dữ liệu, vui lòng chỉ đăng nhập tài khoản trên một máy tính tại một thời điểm.',
    'Login to continue': 'Đăng nhập để tiếp tục',

    // register
    'Register': 'Đăng ký tài khoản',
    'Company': 'Tên công ty',
    'Your Name': 'Họ tên',
    'ABC Company': 'họ và tên của bạn',
    'abcd@gmail.com': 'nhập email của bạn',
    'Send me LuckyDraw newsletters': 'Gửi cho tôi các bản tin LuckyDraw (3 email / 365 ngày)',
    'Return to Login form': 'Quay trở lại form đăng nhập',
    'Return to': 'Bạn đã có tài khoản?',
    'Login form': 'Đăng nhập',
    'Already have an account?': 'Bạn đã có tài khoản?',
    'Login / Register': 'Đăng nhập',
    'You can create your own lucky drawing list after registration': 'Bạn có thể tự tạo danh sách quay thưởng sau khi đăng ký tài khoản',

    // forgot password
    'Forgot password': 'Quên mật khẩu',
    'Send email': 'Gửi Email',
    'Reset Password': 'Khôi phục mật khẩu',
    'Please check your email for reset password instruction': 'Hướng dẫn khôi phục mật khẩu đã được gửi tới email của bạn. Vui lòng kiểm tra và làm theo hướng dẫn để thiết lập lại mật khẩu và đăng nhập vào tài khoản của bạn.',
    'Enter your registered email': 'Nhập email bạn đã dùng khi đăng ký tài khoản',

    // logout
    'Logout': 'Đăng xuất',

    'Exit': 'Thoát',
    'Finish': 'Kết thúc',

    // account info
    'Account Info': 'Tài khoản',
    'Account information': 'Tài khoản của tôi',
    'Account Type': 'Loại tài khoản',
    'Paid Account': 'VIP',
    'Free Account': 'Thử nghiệm',
    'Expired Account': 'Hết hạn sử dụng',
    'Last Payment': 'Ngày nâng cấp',
    'Expiration Date': 'Ngày hết hạn',
    'Change Password': 'Đổi mật khẩu',
    'Current password': 'Mật khẩu hiện tại',
    'New password': 'Mật khẩu mới',
    'Re-enter': 'Nhập lại',
    'Logo': 'Logo',
    'Pay to Extend': 'Gia hạn Sử dụng',
    'Pay to Upgrade': 'Nâng cấp Tài khoản',
    'Pay Now': 'Thanh Toán',

    // theme
    'Change theme': 'LuckyDraw Theme',
    'Select a color theme that match your brand or event': 'Thay đổi màu sắc phù hợp với thương hiệu, sự kiện của bạn',

    // language
    'Change language': 'Language',

    // background
    'Change Background': 'Thay đổi hình nền',
    'Upload New Background': 'Upload hình mới',
    'Remove Background': 'Xóa hình nền',

    // contact us
    'Contact us': 'Liên hệ / Hỗ trợ',
    'Contact Name': 'Người liên hệ',
    'Inquiry': 'Nội dung',
    'Submit': 'Gửi đi',
    'Your message has been sent successfully to LuckyDraw team!': 'Yêu cầu của bạn đã được gửi tới LuckyDraw team!',
    'Unable to send your message': 'Xin lỗi bạn, chức năng gửi yêu cầu tạm thời bị gián đoạn. Vui lòng gửi yêu cầu qua email tới địa chỉ hi@luckydraw.live',

    // theme
    'Theme Purple': 'Tím',
    'Theme Navy': 'Xanh Navy',
    'Theme Olive': 'Màu Olive',
    'Theme Orange': 'Cam',
    'Theme Black': 'Đen',
    'Theme Blue': 'Xanh da trời',
    'Theme Green': 'Xanh lá cây',
    'Theme Red': 'Đỏ',
    'Theme Silver': 'Bạc',
    'Theme Aqua': 'Màu Aqua',
    'Theme Yellow': 'Vàng',
    'Theme White': 'Trắng',

    // date time format
    'DateTimeFormat': 'DD/MM/YYYY, HH:mm:ss',
    'shortDateTimeFormat': 'DD/MM/YYYY',

    // alert
    'Done': 'Hoàn thành',
    'Info': 'Thông báo',

    // guide
    'guide_shortcut_Enter': 'Phím tắt: bấm Enter trên bàn phím để Quay số',
    'guide_shortcut_EnterAgain': 'Nhấn Enter lần nữa để Chốt số',
    'guide_shortcut_AcceptCancel': 'Nhấn phím + để Xác nhận; phím - để Quay lại',
    'guide_shortcut_LeftRight': 'Dùng phím Trái/Phải hoặc 4/6 để chọn giải',
    'guide_Completed': 'Tuyệt vời! Bạn hãy đăng nhập để tải danh sách quay số riêng.',
    'Reload to Update New Version': 'Có bản cập nhật mới của LuckyDraw! Vui lòng nhấn đồng thời hai phím Ctrl+F5 để tải lại trang web với các tính năng mới nhất.',
    'Please open customize page with WiFi': 'Vui lòng truy cập trang này khi đang có kết nối Internet để tải dữ liệu trước, nếu không chế độ quay số offline sẽ không thể hoạt động.',
    'Not Editable When Disconnected': 'Bạn cần kết nối mạng để có thể cập nhật dữ liệu.',
    'Not Doable When Disconnected': 'Bạn cần kết nối mạng để thực hiện thao tác này.',
    'Disconnected': 'Bạn đang bị mất kết nối Internet!',
    'Only Switch to Presentation when Online': 'Vui lòng kết nối Internet trước khi chuyển sang chế độ Quay số (Trình chiếu). Sau đó bạn có thể ngắt kết nối và phần mềm vẫn hoạt động bình thường.',
    'Only Exit Presentation when Online': 'Để ngừng chế độ Quay số bạn cần kết nối máy tính vào mạng Internet.'
}

var i18n_en = {
    // draw screen
    'Lucky Draw': 'Lucky Draw',
    'X Prize': 'X Prize',
    'Diamond Prize': 'Diamond Prize',
    'Gold Prize': 'Gold Prize',
    'Silver Prize': 'Silver Prize',
    'Silver Prize': 'Silver Prize',
    'Bronze Prize': 'Bronze Prize',
    'Press the Spin button to start': 'Press the Spin button to start',
    'Press the Presentation button to start': 'Press the button below to start the show',
    'Winner is coming...': 'Winner is coming...',
    'Spin': 'Spin',
    'Stop': 'Stop',
    'Confirm': 'Confirm',
    'Retry': 'Reject',
    'Customize': 'Customize',
    'Register Now': 'Register',
    'Buy Now': 'Buy Now',
    'Presentation': 'Presentation',
    'Draw Now': 'Draw Now',
    'Amazing Event': 'Lucky Draw Software',
    'Your Event Name': 'Your event name',
    'Winner Name Here': 'Winner Name Here',

    'Save': 'Save',
    'Cancel': 'Cancel',
    'Reset Default': 'Reset',

    // edit ID
    'Edit ID': 'My ID List',
    'Update IDs for Presentation': 'You Need A Few IDs To Start Lucky Drawing',
    'Your Drawing IDs': 'Update IDs',
    'Or Auto Generate ID': 'or auto generate',
    'Generate': 'Generate',
    'Total': 'Total',
    'IDs': 'IDs',
    'IDs ( 0-9, A-Z, maximum 16 characters )': 'STEP 1: Paste your ID list here',
    'ID max length exceeds': 'A single ID can not exceeds 23 characters',
    'Name List': 'STEP 2: Paste your Name list here',
    'Names': 'Names',
    'ID/Name pairs will be automatically matched line by line': '',
    'Copy Paste lists of IDs/ Names in to corresponding column': '',
    'You’ve reached 15 IDs limit': 'Free account is limited to 3 trial drawings!',
    'Upgrade to Remove Your Account Limits': '',
    'Upgrade to Continue Lucky Drawing': '',
    'Pay to Extend Usage Time': 'Pay Now to Extend Usage Time For Your Next Event',
    'Pay to Extend Lucky Drawing Time': 'Pay Now to Save Drawing Results',
    'Usage Days': 'Unlimited lucky drawing results for',
    'per Event': 'per Event',
    'Service Price Guide': '',
    'Upgrade Account Now': 'Upgrade Account Now',
    'Return to editing': 'Edit my ID list',
    'Upgrade Account': 'Upgrade Account',
    'WePay Payment Guide': 'You will be redirected to the WePay website to complete your secure payment.',
    '1Pay Payment Guide': 'You will be redirected to the 1Pay website to complete your secure payment.',
    'Paypal Payment Guide': 'You will be redirected to the Paypal website to complete your secure payment.',
    '1 day event': '1 day event',
    '3 days event': '3 days event',
    '5 days event': '5 days event',
    '24 hours': '24 hours',
    '3 days': '3 days',
    '5 days': '5 days',
    'event1day': '+2 days free',
    'event3days': '+3 days free',
    'event5days': '+4 days free',
    'for pre-event testing': 'for pre-event testing',
    'estimated usage time': 'Estimated usage time:',
    'until': 'until',
    'Please contact LuckyDraw to manually activate your payment': 'Please contact LuckyDraw to manually activate your payment',

    // payment success
    'Payment Complete': 'Payment Completed',
    'Payment completed successfully': "You've Upgraded Your Account Successfully",
    'Thanks for being awesome with Lucky Draw': 'Thank You For Being Awesome with Lucky Draw!',
    'Your subscription': 'Valid until',
    'Now you’ll return to edit your custom Photos/ IDs': '',

    // payment failure
    'Unable to init payment process. Please try again.': 'Unable to init payment process. Please try again.',

    // cusomize
    'Customize Action Message': 'Customize Messages',
    'Customize name of Prizes': 'Customize Prizes',
    'Customize Button': 'Customize Buttons',
    'Select Checkbox to Enable Prize': 'Hint: Select check boxes to enable the prizes.<br />Click the icons on the right to upload replacements.',

    // links
    'Pricing': 'Pricing',

    // result
    'Result': 'Result',
    'Rejected': 'Rejected',
    'Confirmed': 'Confirmed',
    'ID Drawing Winner': 'Lucky IDs',
    'Drawing Session': 'Session',
    'This will delete all prizes in session': 'This will delete all prizes in session',
    'or': 'or',
    'Draw Date': 'Date',
    'Winner Name': 'Name',
    'No result': '-',
    'Download Results': 'Download',
    'Diamond': 'Diamond',
    'Gold': 'Gold',
    'Silver': 'Silver',
    'Bronze': 'Bronze',
    'X-Prize': 'X Prize',
    'Everybody Win!': 'No IDs available to draw. All IDs are either won or rejected.',
    'Prize': 'Prize',
    'Prize 4': 'Prize 4',
    'Prize 5': 'Prize 5',
    'Prize 6': 'Prize 6',
    'Prize 7': 'Prize 7',
    'Prize 8': 'Prize 8',
    'Prize 9': 'Prize 9',
    'Prize 10': 'Prize 10',
    'Prize 11': 'Prize 11',
    'Prize 12': 'Prize 12',
    'Prize 13': 'Prize 13',
    'Prize 14': 'Prize 14',
    'Prize 15': 'Prize 15',
    'Prize 16': 'Prize 16',
    'Prize 17': 'Prize 17',
    'Prize 18': 'Prize 18',
    'Prize 19': 'Prize 19',
    'Prize 20': 'Prize 20',
    'Prize 21': 'Prize 21',
    'Prize 22': 'Prize 22',
    'Prize 23': 'Prize 23',

    // introduction
    'How-to': 'How-to',
    'Introduction': 'Introduction',
    'About Us': 'About Us',
    'FAQ': 'FAQ',
    'Term of Service': 'Terms of Service',
    'Privacy Policy': 'Privacy Policy',
    'Contact and Support': 'Contact and Support',
    'templates/tab-about.html': 'templates/tab-about.html',
    'templates/tab-faq.html': 'templates/tab-faq.html',
    'templates/tab-term.html': 'templates/tab-term.html',
    'templates/tab-policy.html': 'templates/tab-policy.html',
    'templates/tab-contact.html': 'templates/tab-contact.html',

    // login
    'Login': 'Login',
    'Email': 'Email',
    'Password': 'Password',
    'Not a member': 'Not a member',
    'Sign up now': 'Sign up now',
    "Don't have an account?": "Don't have an account?",
    'Account is being used': 'Your account is being used somewhere else',
    'Someone logged-in somewhere!': "Your account is being logged-in on a different device elsewhere. To keep your account's data safe, please only log-in on one device at a time.",
    'Login to continue': 'Login to continue',

    // register
    'Register': 'Register',
    'Company': 'Company',
    'Your Name': 'Your Name',
    'ABC Company': 'enter your name',
    'abcd@gmail.com': 'enter your email',
    'Send me LuckyDraw newsletters': 'Send me LuckyDraw newsletters (3 emails / year)',
    'Return to Login form': 'Return to Login form',
    'Return to': 'Return to',
    'Login form': 'Login form',
    'Already have an account?': 'Already have an account?',
    'Login / Register': 'Login',
    'You can create your own lucky drawing list after registration': 'You can create your own lucky drawing list after registration',

    // forgot password
    'Forgot password': 'Forgot password',
    'Send email': 'Send email',
    'Reset Password': 'Reset Password',
    'Please check your email for reset password instruction': 'Please check your inbox for an email we just sent you with instructions for how to reset your password and log into your account.',
    'Enter your registered email': 'Enter your registered email',

    // logout
    'Logout': 'Logout',

    'Exit': 'Exit',
    'Finish': 'Finish',

    // account info
    'Account Info': 'Account',
    'Account information': 'My Account',
    'Account Type': 'Account Type',
    'Paid Account': 'Paid',
    'Free Account': 'Free',
    'Expired Account': 'Expired',
    'Last Payment': 'Last Payment',
    'Expiration Date': 'Expiration Date',
    'Change Password': 'Change Password',
    'Current password': 'Current Password',
    'New password': 'New Password',
    'Re-enter': 'Re-enter Password',
    'Logo': 'Logo',
    'Pay to Extend': 'Extend Usage Time',
    'Pay to Upgrade': 'Upgrade Account',
    'Pay Now': 'Pay Now',

    // theme
    'Change theme': 'LuckyDraw Theme',
    'Select a color theme that match your brand or event': 'Select a color theme that match your brand',

    // language
    'Change language': 'Language',

    // background
    'Change Background': 'Change Background',
    'Upload New Background': 'Upload New',
    'Remove Background': 'Remove Background',

    // contact us
    'Contact us': 'Contact us',
    'Contact Name': 'Your Name',
    'Inquiry': 'Message',
    'Submit': 'Submit',
    'Your message has been sent successfully to LuckyDraw team!': 'Your message has been sent successfully to LuckyDraw team!',
    'Unable to send your message': 'It looks like an unexpected technical issue is preventing the submission of your form. Please send you request via email to hi@luckydraw.live instead.',

    // theme
    'Theme Purple': 'Purple',
    'Theme Navy': 'Navy',
    'Theme Olive': 'Olive',
    'Theme Orange': 'Orange',
    'Theme Black': 'Black',
    'Theme Blue': 'Blue',
    'Theme Green': 'Green',
    'Theme Red': 'Red',
    'Theme Silver': 'Silver',
    'Theme Aqua': 'Aqua',
    'Theme Yellow': 'Yellow',
    'Theme White': 'White',

    // date time format
    'DateTimeFormat': 'MMM Do YYYY, HH:mm:ss',
    'shortDateTimeFormat': 'MMM Do YYYY',

    // alert
    'Done': 'Done',
    'Info': 'Info',

    // guide
    'guide_shortcut_Enter': 'Hint: press Enter on the keyboard to Spin',
    'guide_shortcut_EnterAgain': 'Press Enter again to Stop',
    'guide_shortcut_AcceptCancel': 'Press + or Space key to Accept; - or Del to Cancel',
    'guide_shortcut_LeftRight': 'Press Left/Right or 4/6 keys to switch prize',
    'guide_Completed': "You're Awesome! Now login to upload your own drawing IDs.",
    'Reload to Update New Version': 'LuckyDraw updates available! Please press Ctrl+F5 to reload the website with latest features.',
    'Please open customize page with WiFi': 'No Internet connection available! Please visit this page while being connected to the Internet to load your data first, otherwise the offline mode will not work.',
    'Not Editable When Disconnected': 'Please connect to the Internet to edit data.',
    'Not Doable When Disconnected': 'Please connect to the Internet for this function to work.',
    'Disconnected': 'You have no Internet connection available!',
    'Only Switch to Presentation when Online': 'Please connect to the Internet first to switch to Presentation mode. After that you can disconnect and perform lucky drawing in offline mode.',
    'Only Exit Presentation when Online': 'Unable to exit Presentation mode while working offline.'
}

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

"use strict";
angular
    .module('app')
    .component('modalTheme', {
        templateUrl: 'components/modal-theme.html',
        bindings: {
            modalInstance: '<',
            resolve: '<',
            close: '&',
            dismiss: '&'
        },
        controller: ThemeController
    });

function ThemeController($rootScope, devOps, userdataService) {
    var $ctrl = this;

    $ctrl.$onInit = function() {
        $ctrl.theme = $rootScope.theme;
        $ctrl.themes = devOps.themes;
    };

    $ctrl.changeTheme = function(theme) {
        $ctrl.theme = theme;
        $rootScope.theme = theme;
        userdataService.setRuntimeOpt('theme', theme);
        $ctrl.close();
        Analytics.log('customize', 'Theme Changed', theme);
    };
}

"use strict";
angular
    .module('app')
    .component('modalSurvey', {
        templateUrl: 'components/modal-survey.html',
        bindings: {
            modalInstance: '<',
            resolve: '<',
            close: '&',
            dismiss: '&'
        },
        controller: SurveyController
    });

function SurveyController($state, Analytics) {
    var $ctrl = this;

    $ctrl.select = function(item) {
        Analytics.log('survey', item);
        localStorage.setItem('survey.' + $ctrl.resolve.surveyId, Date.now());
        $ctrl.dismiss();
        if (item === 'Planning Event') $state.go('register');
    }
}
"use strict";
angular
    .module('app')
    .component('modalRegister', {
        templateUrl: 'components/modal-register.html',
        bindings: {
            modalInstance: '<',
            resolve: '<',
            close: '&',
            dismiss: '&',
            error: '<'
        },
        controller: RegisterController
    });

function RegisterController($state, $http, authService, devOps, i18nService, Analytics) {
    var $ctrl = this;

    $ctrl.$onInit = function() {
        $ctrl.analytics = Analytics;
        $ctrl.newsletter = true;
    }

    $ctrl.register = function() {
        if ($ctrl.loading) return;
        $ctrl.loading = true;
        authService.$createUserWithEmailAndPassword($ctrl.email, $ctrl.password)
            .then(function(auth) {
                Analytics.id('alias', auth.uid, auth.email);
                return auth.updateProfile({
                    displayName: $ctrl.company,
                    contactPhone: $ctrl.phone
                });
            })
            .then(function() {
                Analytics.log('register', 'Done', 'Email');
                $http.post(devOps.api.welcome, {
                    contact_email: $ctrl.email,
                    contact_name: $ctrl.company,
                    newsletter: $ctrl.newsletter,
                    language: i18nService.getLang()
                });
                $ctrl.loading = false;
                $ctrl.company = $ctrl.email = $ctrl.password = null;
                $state.go('customize');
            })
            .catch(function(error) {
                $ctrl.loading = false;
                $ctrl.error = error.message + ' (code: ' + error.code + ')';
                Analytics.log('register', 'Fail', error.message);
            });
    };
}

"use strict";
angular
    .module('app')
    .component('modalPrize', {
        templateUrl: 'components/modal-prize.html',
        bindings: {
            modalInstance: '<',
            resolve: '<',
            close: '&',
            dismiss: '&'
        },
        controller: PrizeController
    });

function PrizeController(userdataService, defaultSettingService, prizeService, navService, uxService, Analytics) {
    var $ctrl = this;

    $ctrl.$onInit = function() {
        $ctrl.ux = uxService;
        $ctrl.allPrizes = prizeService.load(userdataService.member.setting, 9999).reverse();

        $ctrl.editing = userdataService.editing;
        $ctrl.setting = userdataService.member.setting;

        $ctrl.prizes = {};
        $ctrl.enabled_prizes = {};
        angular.copy(userdataService.member.setting.prizes, $ctrl.prizes);
        angular.copy(userdataService.member.setting.enabled_prizes, $ctrl.enabled_prizes);

        $ctrl.iconchanged = $ctrl.namechanged = $ctrl.loading = false;
    };

    $ctrl.save = function(reset) {
        if ($ctrl.loading) return;
        if (!$ctrl.namechanged) {
            if (!$ctrl.iconchanged) Analytics.log('ui_action', 'Edit Without Changes', 'Prizes');
            $ctrl.doDismiss();
            return;
        }

        $ctrl.loading = true;

        // prevent bug when all prizes disabled
        var alldisabled = true
        for (var _p in $ctrl.enabled_prizes) {
            if (_p !== 'i' && $ctrl.enabled_prizes[_p]) alldisabled = false
        }
        if (alldisabled) $ctrl.enabled_prizes.x = true

        userdataService.member.setting.prizes = {};
        userdataService.member.setting.enabled_prizes = {};
        if (reset !== 'reset') {
            angular.copy($ctrl.prizes, userdataService.member.setting.prizes);
            angular.copy($ctrl.enabled_prizes, userdataService.member.setting.enabled_prizes);
        }

        userdataService.save('setting', 'prizes').then(
            function(resolve) {
                $ctrl.close();
                if (reset === 'reset')
                    Analytics.log('customize', 'Prizes Name Reseted');
                else
                    Analytics.log('customize', 'Prizes Name Edited', Object.keys($ctrl.enabled_prizes).length - 1);
                navService('customize', 'reload');
            },
            function(reject) {
                // console.error('Saving prizes failed. ', reject);
                $ctrl.loading = false;
            });
    };

    $ctrl.reset = function() {
        $ctrl.namechanged = true;
        $ctrl.prizes = {};
        $ctrl.enabled_prizes = {};
        prizeService.enable_default($ctrl.enabled_prizes);
        $ctrl.save('reset');
    };

    $ctrl.removeIcon = function(prizekey) {
        $ctrl.iconchanged = true;
        userdataService.remove('icons', prizekey);
        Analytics.log('customize', 'Prize Icon Delete', prizekey);
    };

    $ctrl.uploadIcon = function($file, prizekey) {
        $ctrl.iconchanged = true;
        userdataService.upload($file, 'Prize', 'icons', prizekey);
        Analytics.log('customize', 'Prize Icon Upload', prizekey);
    };

    $ctrl.doDismiss = function() {
        $ctrl.dismiss();
        if ($ctrl.iconchanged) navService('customize', 'reload');
    };
}

'use strict'
angular
    .module('app')
    .component('modalPayment', {
        templateUrl: 'components/modal-payment.html',
        bindings: {
            modalInstance: '<',
            resolve: '<',
            close: '&',
            dismiss: '&',
            error: '<'
        },
        controller: PaymentController
    })
    .component('paymentIntro', {
        templateUrl: 'templates/payment-form/payment-intro.html',
        bindings: {},
        controller: PaymentIntroController
    })
    .component('paymentButton', {
        templateUrl: 'templates/payment-form/payment-button.html',
        bindings: {},
        controller: PaymentButtonController
    })
    .component('paypalPaymentForm', {
        templateUrl: 'templates/payment-form/paypal.html',
        bindings: {},
        controller: PaypalPaymentController
    })
    .component('sohaPaymentForm', {
        templateUrl: 'templates/payment-form/soha.html',
        bindings: {},
        controller: SohaPaymentController
    })

function PaymentController($interval, $state, modalService, userdataService, i18nService, paymentService, devOps, $compile, $scope) {
    var $ctrl = this
    $ctrl.$onInit = function() {
        $ctrl.modals = modalService
        $ctrl.user = userdataService
        $ctrl.dismissCountDown = null

        var lang = i18nService.getLang()
        if (!paymentService.local[lang]) lang = devOps.runtime.language

        var directive = paymentService.local[lang] + '-payment-form'
        var html = '<' + directive + '></' + directive + '>'
        var newScope = $scope.$new(true, $scope)
        $('div#payment-form').html($compile(html)(newScope))
    }
}

function PaymentIntroController($state, userdataService) {
    var $ctrl = this
    $ctrl.$onInit = function() {
        $ctrl.appState = $state.current
        $ctrl.user = userdataService
    }
}

function PaymentButtonController(userdataService) {
    var $ctrl = this
    $ctrl.$onInit = function() {
        $ctrl.user = userdataService
    }
}

function PaypalPaymentController($sce, $state, $http, authService, Analytics, userService, userdataService, paymentService, modalService) {
    var $ctrl = this

    $ctrl.$onInit = function() {
        var auth = authService.$getAuth() || {}
        $ctrl.email = auth.email
        $ctrl.custom = auth.uid

        $ctrl.paypal = paymentService.provider.paypal
        $ctrl.paypal.action = $sce.trustAsResourceUrl($ctrl.paypal.url)
        $ctrl.package = 'event1day'

        $ctrl.modals = modalService
        $ctrl.appState = $state.current
        $ctrl.userService = userService
        $ctrl.user = userdataService

        $ctrl.timingStart = Date.now() + (10 * 60 * 1000) // estimate 10 mins to complete payment
        $ctrl.times = paymentService.times
    }

    $ctrl.submit = function() {
        paymentService.loadingIcon(true)
        Analytics.log('payment', 'Init', 'Paypal')
    }
}

function SohaPaymentController($state, $http, authService, Analytics, userService, userdataService, paymentService, modalService) {
    var $ctrl = this

    $ctrl.$onInit = function() {
        var auth = authService.$getAuth() || {}
        $ctrl.uid = auth.uid
        $ctrl.email = auth.email

        $ctrl.soha = paymentService.provider.soha
        $ctrl.paymentGuide = $ctrl.soha.ps + ' Payment Guide'
        $ctrl.package = 'event1day'

        $ctrl.modals = modalService
        $ctrl.appState = $state.current
        $ctrl.userService = userService
        $ctrl.user = userdataService

        $ctrl.timingStart = Date.now() + (10 * 60 * 1000) // estimate 10 mins to complete payment
        $ctrl.times = paymentService.times
    }

    $ctrl.submit = function() {
        paymentService.loadingIcon(true)
        Analytics.log('payment', 'Init', 'Soha')
        window.$luckydraw = window.$luckydraw || {}
        window.$luckydraw.initPayment = {
            uid: $ctrl.uid,
            contact_email: $ctrl.email,
            package: $ctrl.package
        }
        $http
            .post(paymentService.provider.soha.url, window.$luckydraw.initPayment)
            .then(function(response) {
                window.$luckydraw.initSoha = response.data
                if (response.data.url) {
                    window.location.href = response.data.url
                } else {
                    _err('response.data.url is null')
                }
            })
            .catch(_err)

        function _err(error) {
            window.$luckydraw.error = error
            paymentService.loadingIcon(false)
            modalService.alert('', 'Unable to init payment process. Please try again.')
            Analytics.log('error', 'Init Payment - Soha', error)
        }
    }
}

"use strict";
angular
    .module('app')
    .component('modalNotify', {
        templateUrl: 'components/modal-notify.html',
        bindings: {
            modalInstance: '<',
            resolve: '<',
            close: '&',
            dismiss: '&',
            error: '<'
        },
        controller: NotifyController
    });

function NotifyController() {
    var $ctrl = this;
    $ctrl.$onInit = function() {
        $ctrl.notification = $ctrl.resolve.notification;
    };
}

"use strict";
angular
    .module('app')
    .component('modalMessage', {
        templateUrl: 'components/modal-message.html',
        bindings: {
            modalInstance: '<',
            resolve: '<',
            close: '&',
            dismiss: '&'
        },
        controller: MessageController
    });

function MessageController(userdataService, Analytics) {
    var $ctrl = this;

    $ctrl.$onInit = function() {
        $ctrl.messages = {};
        angular.copy(userdataService.member.setting.messages, $ctrl.messages);
    };

    $ctrl.save = function(reset) {
        if ($ctrl.loading) return;
        if (!$ctrl.datachanged) {
            $ctrl.close();
            Analytics.log('ui_action', 'Edit Without Changes', 'Action Messages');
            return;
        }
        $ctrl.loading = true;
        userdataService.member.setting.messages = {};
        angular.copy($ctrl.messages, userdataService.member.setting.messages)
        userdataService.save('setting', 'messages').then(
            function(resolve) {
                $ctrl.close();
                if (reset === 'reset')
                    Analytics.log('customize', 'Action Messages Reseted');
                else
                    Analytics.log('customize', 'Action Messages Edited');
            },
            function(reject) {
                // console.error('Saving action messages failed. ', reject);
                $ctrl.loading = false;
            });
    };

    $ctrl.reset = function() {
        $ctrl.datachanged = true;
        $ctrl.messages = {};
        $ctrl.save('reset');
    };
}

"use strict";
angular
    .module('app')
    .component('modalLogin', {
        templateUrl: 'components/modal-login.html',
        bindings: {
            modalInstance: '<',
            resolve: '<',
            close: '&',
            dismiss: '&'
        },
        controller: LoginController
    });

function LoginController($state, authService, Analytics) {
    var $ctrl = this;

    $ctrl.$onInit = function() {
        $ctrl.analytics = Analytics;
    }

    $ctrl.login = function() {
        if ($ctrl.loading) return;
        $ctrl.loading = true;
        authService.$signInWithEmailAndPassword($ctrl.email, $ctrl.password)
            .then(function(auth) {
                Analytics.id('identify', auth.uid, auth.email);
                Analytics.log('login', 'Logged In');
                $ctrl.email = $ctrl.password = null;
                $state.go('customize');
            })
            .catch(function(error) {
                $ctrl.loading = false;
                $ctrl.error = error.message + ' (code: ' + error.code + ')';
                Analytics.log('login', 'Fail to Login', error.message);
            });
    };

    $ctrl.loginGoogle = function() {
        $ctrl.loading = true;
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/plus.login');
        firebase.auth().signInWithRedirect(provider);
    }
}
"use strict";
angular
    .module('app')
    .component('modalLanguage', {
        templateUrl: 'components/modal-language.html',
        bindings: {
            modalInstance: '<',
            resolve: '<',
            close: '&',
            dismiss: '&'
        },
        controller: LanguageController
    });

function LanguageController(i18nService, Analytics) {
    var $ctrl = this;

    $ctrl.$onInit = function() {
        $ctrl.language = i18nService.getLang();
        $ctrl.languages = i18nService.languages;
    };

    $ctrl.changeLanguage = function(language) {
        $ctrl.language = language;
        i18nService.setLang(language);
        Analytics.log('customize', 'Language Changed', language)
        $ctrl.close();
    };
}

"use strict";
angular
    .module('app')
    .component('modalIntro', {
        templateUrl: 'components/modal-intro.html',
        bindings: {
            modalInstance: '<',
            resolve: '<',
            close: '&',
            dismiss: '&'
        },
        controller: IntroController
    });

function IntroController(modalService) {
    var $ctrl = this;
    $ctrl.$onInit = function() {
        $ctrl.modals = modalService;
    };
}

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

"use strict";
angular
    .module('app')
    .component('modalForgotPassword', {
        templateUrl: 'components/modal-forgot-password.html',
        bindings: {
            modalInstance: '<',
            resolve: '<',
            close: '&',
            dismiss: '&'
        },
        controller: ForgotPasswordController
    });

function ForgotPasswordController(authService, modalService, Analytics) {
    var $ctrl = this;
    $ctrl.analytics = Analytics;

    $ctrl.forgotPassword = function() {
        if ($ctrl.loading) return;
        $ctrl.loading = true;
        authService.$sendPasswordResetEmail($ctrl.email)
            .then(function() {
                modalService.alert('Done', 'Please check your email for reset password instruction')
                $ctrl.close();
                Analytics.log('forgotpw', 'Reset Password Submitted');
            })
            .catch(function(error) {
                $ctrl.loading = false;
                $ctrl.error = error.message + ' (code: ' + error.code + ')';
                Analytics.log('forgotpw', 'Fail to Reset Password', error.message);
            });
    };
}

"use strict";
angular
    .module('app')
    .component('modalContact', {
        templateUrl: 'components/modal-contact.html',
        bindings: {
            modalInstance: '<',
            resolve: '<',
            close: '&',
            dismiss: '&'
        },
        controller: ContactController
    });

function ContactController($http, modalService, devOps, Analytics) {
    var $ctrl = this;

    $ctrl.$onInit = function() {
        $ctrl.modals = modalService;
    };

    $ctrl.submit = function() {
        if ($ctrl.loading) return;
        $ctrl.loading = true;
        $http.post(devOps.api.contact, $ctrl.data)
            .then(function() {
                $ctrl.close();
                $ctrl.modals.alert('Done', 'Your message has been sent successfully to LuckyDraw team!');
                Analytics.log('contact', 'Contact Form Submitted');
            })
            .catch(function(error) {
                // console.error('Error submit contact form: ', error);
                $ctrl.dismiss();
                $ctrl.modals.alert('', 'Unable to send your message');
                Analytics.log('error', 'Submitting Contact Form', error);
            });
    };
}

"use strict";
angular
    .module('app')
    .component('modalButton', {
        templateUrl: 'components/modal-button.html',
        bindings: {
            modalInstance: '<',
            resolve: '<',
            close: '&',
            dismiss: '&'
        },
        controller: ButtonController
    });

function ButtonController(userdataService, Analytics) {
    var $ctrl = this;

    $ctrl.$onInit = function() {
        $ctrl.buttons = {};
        angular.copy(userdataService.member.setting.buttons, $ctrl.buttons);
    };

    $ctrl.save = function(reset) {
        if ($ctrl.loading) return;
        if (!$ctrl.datachanged) {
            $ctrl.close();
            Analytics.log('ui_action', 'Edit Without Changes', 'Buttons');
            return;
        }
        $ctrl.loading = true;
        userdataService.member.setting.buttons = {};
        angular.copy($ctrl.buttons, userdataService.member.setting.buttons);
        userdataService.save('setting', 'buttons').then(
            function(resolve) {
                $ctrl.close();
                if (reset === 'reset')
                    Analytics.log('customize', 'Buttons Reseted');
                else
                    Analytics.log('customize', 'Buttons Edited');
            },
            function(reject) {
                // console.error('Buttons saving failed. ', reject);
                $ctrl.loading = false;
            });
    };

    $ctrl.reset = function() {
        $ctrl.datachanged = true;
        $ctrl.buttons = {};
        $ctrl.save('reset');
    };
}

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

"use strict";
angular
    .module('app')
    .component('modalAlert', {
        templateUrl: 'components/modal-alert.html',
        bindings: {
            modalInstance: '<',
            resolve: '<',
            close: '&',
            dismiss: '&'
        },
        controller: AlertController
    });

function AlertController(userService, $interval) {
    var $ctrl = this;
    $ctrl.$onInit = function() {
        $ctrl.dismissCountDown = null;
        if ($ctrl.resolve.dismissLogout) {
            $ctrl.dismissCountDown = -9;
            var uP = $interval(function() {
                $ctrl.dismissCountDown++;
                if ($ctrl.dismissCountDown === 0) {
                    $interval.cancel(uP);
                    uP = undefined;
                    $ctrl.dismiss();
                    userService.logout();
                }
            }, 1000);
        }
    }
}

"use strict";
angular
    .module('app')
    .component('modalAccount', {
        templateUrl: 'components/modal-account.html',
        bindings: {
            modalInstance: '<',
            resolve: '<',
            close: '&',
            dismiss: '&'
        },
        controller: AccountController
    });

function AccountController($scope, modalService, authService, userdataService, devOps, uxService, Analytics) {
    var $ctrl = this;

    $ctrl.$onInit = function() {
        $ctrl.auth = authService.$getAuth();
        $ctrl.ux = uxService;
        $ctrl.user = userdataService;
        $ctrl.member = userdataService.member.membership;
        $ctrl.modals = modalService;
        $ctrl.version = devOps.version;
        $ctrl.datachanged = $ctrl.edit = $ctrl.saving = false;
    };

    $ctrl.updateProfile = function() {
        if (!$ctrl.datachanged) {
            $ctrl.edit = $ctrl.saving = false;
            Analytics.log('ui_action', 'Edit Without Changes', 'User Profile - Company');
            return;
        }
        if ($ctrl.saving) return;
        $ctrl.saving = true;
        $ctrl.auth.updateProfile({
            displayName: $ctrl.company
        }).then(function() {
            $scope.$apply(function() {
                $ctrl.datachanged = $ctrl.edit = $ctrl.saving = false;
                Analytics.log('edit_profile', 'Company Name Changed');
            });
        }, function(error) {
            // console.error('Error change company name: ', error);
            $scope.$apply(function() {
                $ctrl.datachanged = true;
                $ctrl.edit = true;
                $ctrl.saving = false;
            });
            Analytics.log('error', 'Changing Company Name', error);
        });
    };

    $ctrl.updatePassword = function() {
        if ($ctrl.loading) return;
        $ctrl.loading = true;
        var credential = firebase.auth.EmailAuthProvider.credential(
            $ctrl.auth.email,
            $ctrl.password
        );
        $ctrl.auth.reauthenticate(credential).then(function() {
            if ($ctrl.rePassword != $ctrl.newPassword) {
                $ctrl.loading = false;
                $ctrl.error = 'Password does not match the confirm password';
                Analytics.log('edit_profile', 'Fail to Change Password', 'Passwords not match');
            } else {
                authService.$updatePassword($ctrl.newPassword)
                    .then(function() {
                        $ctrl.loading = false;
                        $ctrl.success = 'Your password has been changed successfully';
                        Analytics.log('edit_profile', 'Password Changed');
                    })
                    .catch(function(error) {
                        // console.error('Error change password: ', error);
                        $ctrl.loading = false;
                        $ctrl.error = error.message;
                        Analytics.log('error', 'Changing Password', error.message);
                    });
            }
        }, function(error) {
            console.error('Error reauthenticate: ', error);
            $ctrl.loading = false;
            $ctrl.error = error.message;
            Analytics.log('error', 'Changing Password - Reauthenticating', error.message);
        });
    };
}

"use strict";
angular
    .module('app')
    .component('idLuckyDraw', {
        templateUrl: 'components/luckydraw-id.html',
        bindings: {
            data: '<',
            setting: '<',
            results: '=',
            isLimited: '&'
        },
        controller: IdLuckyDrawController
    });

function IdLuckyDrawController($state, $timeout, modalService, defaultSettingService, devOps, prizeService, userService, uxService, Analytics, audioService) {
    var $ctrl = this;

    $ctrl.$onInit = function() {
        $ctrl.appState = $state.current;
        $ctrl.ankey = $ctrl.appState.name == 'presentation' ? 'iddraw_pres' : 'iddraw_home';
        $ctrl.defaultSetting = defaultSettingService;
        $ctrl.prizes = prizeService.load($ctrl.setting, true);
        $ctrl.user = userService;
        $ctrl.user.checkin();
        $ctrl.ux = uxService;
        $ctrl.analytics = Analytics;

        $ctrl.animClass = {}; // object that hold animated class name for elements, to inject via ng-class
        $ctrl.ids = []; // clone id list, to prevent live update
        $ctrl.selectedIds = []; // array of selected Ids, all prizes, confirmed or rejected
        $ctrl.names = []; // clone name list
        $ctrl.idChars = []; // dictionary of characters used in ids, use for machine drawing
        $ctrl.longestIdLen = 3; // longest length of id

        // structured prize - id winners
        $ctrl.structured = {
            nan: []
        };

        // prepare for the machine to function properly
        angular.forEach($ctrl.data.ids, function(id, k) {
            // remove spaces from id
            id = String(id).replace(/\s+/g, '');

            var key = 'nan';

            // structured ID & prize
            var _id = id.match(/^(.*)\*(x|diamond|gold|silver|bronze|p[0-9]+)$/i);
            if (_id && _id.length === 3) {
                id = _id[1]; // id
                key = _id[2]; // prize key
                if (!$ctrl.structured[key]) $ctrl.structured[key] = [];
            }

            // ignore duplicate - but will cause structured prize setup to have ID issue
            if ($ctrl.ids.indexOf(id) >= 0) return

            // get the longest id length, prepared for creating machines and css class
            if (id.length > $ctrl.longestIdLen) $ctrl.longestIdLen = id.length;

            // add id chars to bucket
            $ctrl.idChars = _.uniq(_.concat($ctrl.idChars, id.split('')));

            // clone the ID and Names list, to prevent live update will affect this session
            $ctrl.ids.push(id);

            var name = '';
            if ($ctrl.data.names) name = $ctrl.data.names[k] || '';
            $ctrl.names.push(name.trim());

            $ctrl.structured[key].push($ctrl.ids.length - 1);
        });

        // if id list has few unique chars: add more related characters to make the drawing effect looks nice
        if ($ctrl.idChars.length < 9) {
            for (var i = 0; i < devOps.checkChars.length; i++) {
                var re = new RegExp(devOps.checkChars[i].regexp); // check and add related character set
                if ($ctrl.idChars[0].match(re)) {
                    $ctrl.idChars = _.uniq(_.concat($ctrl.idChars, devOps.checkChars[i].chars.split('')));
                    i = devOps.checkChars.length; // add one set is enough, exit on first match
                }
            }
        }

        // remove confirmed index in available ids array
        var confirmed = {};
        $ctrl.totalResults = 0;
        angular.forEach($ctrl.results, function(prize, key) {
            confirmed[key] = 0;
            angular.forEach(prize, function(result) {
                $ctrl.selectedIds.push(result.id)
                if (result.status !== 'Rejected') confirmed[key]++;
                $ctrl.totalResults++;
                var i = $ctrl.ids.indexOf(result.id); // find key of the result.id in $ctrl.ids list
                for (var pk in $ctrl.structured) {
                    var j = $ctrl.structured[pk].indexOf(i);
                    if (j !== -1) $ctrl.structured[pk].splice(j, 1); // remove if found, as one id gets only one prize
                }
            });
        });
        // $ctrl.totalSpins = $ctrl.totalResults;

        // count confirmed prizes if this is a continued session
        for (var i = 0; i < $ctrl.prizes.length; i++) {
            var key = $ctrl.prizes[i].key;
            if (confirmed[key]) $ctrl.prizes[i].confirmed = confirmed[key];
        }

        // init array of slots
        $ctrl.machineSlots = _.range(0, $ctrl.longestIdLen);

        // css class based on slots range
        $ctrl.slotsCss = devOps.slotsCss($ctrl.longestIdLen);

        // audioService
        audioService.init($ctrl.longestIdLen);
        // audioService.play('background', 3000, 'loop');

        // init slot machines
        $ctrl.characters = [];
        $ctrl.machines = [];
        $ctrl.state = devOps.states.ready;

        // what are you doing with Luckydraw.live?
        // if ($ctrl.appState.name !== 'presentation') {
        //     setTimeout(function() {
        //         if (!localStorage.getItem('survey.purpose')) modalService.survey('purpose');
        //     }, 5000);
        // }
    };

    $ctrl.setPrize = function(index) {
        if ($ctrl.state !== devOps.states.ready) return;
        if (index < 0 || index >= $ctrl.prizes.length) {
            audioService.play('na');
            return;
        }

        $ctrl.state = devOps.states.setprize;
        if ($ctrl.prizeIndex >= 0) {
            audioService.play('setPrize');
            audioService.stop('turnonSlots');
            audioService.stop('actionButtons');
        }
        $ctrl.ux.mLeave('prevnext');

        if (index < $ctrl.prizeIndex)
            $ctrl.animClass.setprize = 'prize-prev';
        else if ($ctrl.prizeIndex >= 0)
            $ctrl.animClass.setprize = 'prize-next';

        prizeService.currentTab = index
        $ctrl.prizeIndex = index;
        $ctrl.prize = $ctrl.prizes[index];

        // clean up selected id from structured prize
        var _sprize = $ctrl.structured[$ctrl.prize.key];
        if (_sprize && _sprize.length) {
            for (var j = 0; j < _sprize.length; j++) {
                if ($ctrl.selectedIds.indexOf($ctrl.ids[_sprize[j]]) !== -1) {
                    _sprize.splice(j, 1);
                    j--;
                }
            }
        }

        $timeout(function() {
            audioService.play('turnonSlots', 150);
            $ctrl.animClass.setprize = null;
            $ctrl.state = devOps.states.ready;
            audioService.play('actionButtons', 1000);
            audioService.stop('setPrize');
        }, devOps.timeout.ready);
        if ($ctrl.animClass.setprize) Analytics.log($ctrl.ankey, 'Set Prize', $ctrl.prize.key);
    };

    $ctrl.setPrevPrize = function() {
        $ctrl.setPrize($ctrl.prizeIndex - 1);
    };

    $ctrl.setNextPrize = function() {
        $ctrl.setPrize($ctrl.prizeIndex + 1);
    };

    $ctrl.createMachines = function(shuffle) {
        if ($ctrl.machines && $ctrl.machines.length) return;

        $ctrl.characters = [];
        for (var i = 0; i < $ctrl.longestIdLen; i++) {
            var arr = _.shuffle($ctrl.idChars).map(function(i) {
                return String(i);
            });
            arr.unshift(' ');
            $ctrl.characters.push(arr);
        }

        $timeout(function() {
            $ctrl.machines = [];
            $ctrl.machinesDelay = [];
            $('.slots .slot').each(function(k, slot) {
                $ctrl.machinesDelay[k] = _.random(devOps.mdelay.min, devOps.mdelay.max);
                $ctrl.machines[k] = $(slot).slotMachine({
                    active: $ctrl.characters[k].indexOf(devOps.favNum),
                    delay: $ctrl.machinesDelay[k],
                    direction: devOps.spinDirection
                });
                if (shuffle) {
                    $ctrl.machines[k].shuffle();
                    audioService.play('spinHigh' + k, k * 144 + 233, 'loop');
                }
            });
        });
    };

    $ctrl.shuffleMachines = function() {
        angular.forEach($ctrl.machines, function(machine, k) {
            machine.shuffle();
            audioService.play('spinHigh' + k, k * 144 + 233, 'loop');
        });
    };

    $ctrl.destroyMachines = function() {
        angular.forEach($ctrl.machines, function(machine, index) {
            machine.stop();
            machine.destroy();
        });
        $ctrl.machines = null;
        $ctrl.characters = null;
    };

    $ctrl.startstop = function() {
        var matchbatch, batchStop
        if ($ctrl.state == devOps.states.ready) {
            $ctrl.spin();
        } else if ($ctrl.state == devOps.states.spin) {
            // detect batch stop
            if ($ctrl.setting.prizes[$ctrl.prize.key]) {
                matchbatch = $ctrl.setting.prizes[$ctrl.prize.key].match(/\([xX][0-9]+\)$/g);
            } else if ($ctrl.appState.name !== 'presentation' && $ctrl.defaultSetting.prizes[$ctrl.prize.key]) {
                matchbatch = $ctrl.defaultSetting.prizes[$ctrl.prize.key].match(/\([xX][0-9]+\)$/g);
            }
            batchStop = matchbatch ? parseInt(matchbatch[0].substr(2).slice(0, -1)) : 0;
            if (batchStop > 1)
                $ctrl.stopBatch(batchStop);
            else
                $ctrl.stop();
        }
    };

    $ctrl.spin = function() {
        if (savedEnough() || $ctrl.state !== devOps.states.ready) return;

        var structured = $ctrl.structured[$ctrl.prize.key] && $ctrl.structured[$ctrl.prize.key].length;
        $ctrl.prize.skey = !structured ? 'nan' : $ctrl.prize.key;

        if (!structured && !$ctrl.structured.nan.length) {
            modalService.alert('', 'Everybody Win!');
            return;
        }

        $ctrl.state = devOps.states.tospin;
        audioService.play('start');
        audioService.pause('background');
        audioService.play('spinHigh', 0, 'loop');
        $ctrl.ux.mLeave('spin');

        $ctrl.iAIDs = $ctrl.id = $ctrl.name = null;

        if (!$ctrl.machines || !$ctrl.machines.length)
            $ctrl.createMachines(true);
        else
            $ctrl.shuffleMachines();

        if ($ctrl.appState.name == 'presentation') $ctrl.lightOff = true;
        $timeout(function() {
            $ctrl.state = devOps.states.spin;
            audioService.play('onGoing');
            // audioService.play('actionButtons');
        }, devOps.timeout.spin);
        Analytics.log($ctrl.ankey, 'Spin', $ctrl.prize.key);

        // $ctrl.totalSpins++;
        // if ($ctrl.isLimited({
        //         r: $ctrl.totalSpins
        //     })) {
        //     modalService.open('Payment', true, true);
        // }
    };

    var getaWinner = function() {
        var found
        while (!found) {
            var ln = $ctrl.structured[$ctrl.prize.skey].length;
            if (!ln) {
                // structured out of length
                $ctrl.prize.skey = 'nan'
                ln = $ctrl.structured[$ctrl.prize.skey].length
            }
            $ctrl.structured[$ctrl.prize.skey] = _.shuffle($ctrl.structured[$ctrl.prize.skey]); // randomize

            var d = new Date(),
                n = d.getSeconds(),
                j = _.random(0, ln * n) % ln, // random index of a item in available ids array
                i = $ctrl.structured[$ctrl.prize.skey][j]; // [j] is key of a item in $ctrl.ids

            $ctrl.iAIDs = j;
            $ctrl.id = $ctrl.ids[i];

            if ($ctrl.selectedIds.indexOf($ctrl.id) >= 0) {
                $ctrl.structured[$ctrl.prize.skey].splice(j, 1)
            } else {
                found = true
            }
        }
        $ctrl.name = ($ctrl.names && $ctrl.names[i]) ? $ctrl.names[i] : '';
        $ctrl.namex = $ctrl.name.replace('|', '<br/>');

        // remember the selected id
        $ctrl.selectedIds.push($ctrl.id);

        if (devOps.specialPrizes.indexOf($ctrl.prize.key) == -1)
            $ctrl.remainStops = 1;
        else
            $ctrl.remainStops = 2;
    }

    $ctrl.stopBatch = function(qty) {
        if ($ctrl.state !== devOps.states.spin) return;

        $ctrl.state = devOps.states.stop;
        audioService.play('stop');
        $ctrl.ux.mLeave('stop');

        var delay
        if (250 * qty > 30000) // no more than 30s in total
            delay = Math.round(30000 / qty)
        else if ((10000 / qty) > 2000) // no more than 2s per id
            delay = 2000
        else
            delay = 250

        // get winners
        for (var index = 0; index < qty; index++) {
            $timeout(function() {
                var ln = $ctrl.structured[$ctrl.prize.skey].length;
                if (!ln) return // gameover

                var d = new Date(),
                    n = d.getSeconds(),
                    j = _.random(0, ln * n) % ln, // random index of a item in available ids array
                    i = $ctrl.structured[$ctrl.prize.skey][j]; // [j] is key of a item in $ctrl.ids

                var iAIDs = j;
                var id = $ctrl.ids[i];
                var name = ($ctrl.names && $ctrl.names[i]) ? $ctrl.names[i] : '';

                // remember the selected id
                $ctrl.selectedIds.push(id);

                $ctrl.prizes[$ctrl.prizeIndex].confirmed++;
                $ctrl.animClass.prizecount = 'prize-increase';
                audioService.play('prizeIncreased');

                // saveResult
                var rs = {
                    name: name || null,
                    id: id,
                    time: '',
                    status: 'Confirmed'
                }
                if ($ctrl.appState.name === 'presentation') {
                    rs.time = firebase.database.ServerValue.TIMESTAMP;
                    $ctrl.results.$ref().child($ctrl.prize.key).push(rs);
                } else {
                    rs.time = Date.now();
                    $ctrl.results[$ctrl.prize.key].push(rs); // home, dry run
                }
                $ctrl.totalResults++;
                $ctrl.structured[$ctrl.prize.skey].splice(iAIDs, 1);
            }, index * delay + 500);
        }

        // cleanup
        var cleanup = 600;
        if (delay >= 1000)
            cleanup += (qty - 1) * delay;
        else
            cleanup += qty * delay;
        $timeout(function() {
            angular.forEach($ctrl.machines, function(machine, k) {
                machine.stop();
                audioService.stop('spinHigh' + k, $ctrl.machinesDelay[k] + 800);
                if (k === $ctrl.longestIdLen - 1) audioService.stop('spinHigh', $ctrl.machinesDelay[k]);
            });
            $ctrl.animClass.message = null;
            $ctrl.animClass.prizecount = null;
            $ctrl.lightOff = false;
            $ctrl.state = devOps.states.ready;
            modalService.open('IdResult');
            Analytics.log($ctrl.ankey, 'Batch Confirm', $ctrl.prize.key);
        }, cleanup);
    }

    $ctrl.stop = function() {
        if ($ctrl.state !== devOps.states.spin) return;

        $ctrl.state = devOps.states.stop;
        audioService.play('stop');
        $ctrl.ux.mLeave('stop');

        if (!$ctrl.id) getaWinner();

        $ctrl.remainStops--;

        // stop the machines
        var padId = _.padStart($ctrl.id, $ctrl.longestIdLen);
        angular.forEach($ctrl.machines, function(machine, k) {
            if (k < $ctrl.longestIdLen - $ctrl.remainStops && machine.running) {
                machine.setRandomize(function() {
                    return $ctrl.characters[k].indexOf(padId[k]);
                });
                machine.stop();
                audioService.stop('spinHigh' + k, $ctrl.machinesDelay[k] + 800);
                if (k === $ctrl.longestIdLen - 1) audioService.stop('spinHigh', $ctrl.machinesDelay[k]);
            }
        });

        if ($ctrl.remainStops > 0) {
            $timeout(function() {
                $ctrl.state = devOps.states.spin;
                audioService.play('onGoing');
            }, devOps.timeout.spin + 900);
        } else {
            var high = devOps.specialPrizes.indexOf($ctrl.prize.key) == -1 ? '' : 'High';
            if ($ctrl.name) {
                // reveal spinner
                $timeout(function() {
                    $ctrl.state = devOps.states.reveal;
                    audioService.play('comingWinner' + high, 0, 'loop');
                }, devOps.timeout.revealLoading);
                // time to show name after all machines stopped
                var timing = devOps.timeout['revealName' + high];
            } else {
                // no winner name
                var timing = devOps.timeout.revealId;
            }
            $timeout(function() {
                $ctrl.animClass.message = 'winner-reveal';
                $ctrl.state = devOps.states.complete;
                audioService.stop('comingWinner' + high);
                audioService.play('tada' + high);
                audioService.play('actionButtons', 1500);
            }, timing);
        }
        Analytics.log($ctrl.ankey, 'Stop', $ctrl.prize.key);
    };

    $ctrl.save = function() {
        if ($ctrl.state !== devOps.states.complete) return;

        $ctrl.ux.mLeave('confirm');

        $ctrl.state = devOps.states.toconfirm;
        if (devOps.specialPrizes.indexOf($ctrl.prize.key) >= 0)
            audioService.play('confirmSpecial');
        else
            audioService.play('confirm');

        $ctrl.animClass.message = 'winner-confirm';
        // if (!savedEnough()) {
        $timeout(function() {
            $ctrl.prizes[$ctrl.prizeIndex].confirmed++;
            $ctrl.state = devOps.states.confirmed;
            $ctrl.animClass.prizecount = 'prize-increase';
            audioService.play('prizeIncreased');
        }, devOps.timeout.confirmed);
        saveResult('Confirmed');
        // }

        $timeout(function() {
            $ctrl.state = devOps.states.null;
            $ctrl.animClass.message = null;
            $ctrl.animClass.prizecount = null;
            audioService.play('turnoffSlots', 350);
            $timeout(function() {
                $ctrl.lightOff = false;
                $ctrl.state = devOps.states.ready;
                // audioService.stop('confirm');
                // audioService.stop('confirmSpecial');
                audioService.play('turnonSlots', 150);
                audioService.play('actionButtons', 1100);
                audioService.play('background', 2000, 'loop');
            }, 1000);
        }, 1500);
        Analytics.log($ctrl.ankey, 'Confirm', $ctrl.prize.key);
    };

    $ctrl.retry = function() {
        if ($ctrl.state !== devOps.states.complete) return;
        $ctrl.ux.mLeave('confirm');
        $ctrl.state = devOps.states.cancel;
        audioService.play('retry');
        // if (!savedEnough()) saveResult('Rejected');
        $ctrl.animClass.message = 'winner-cancel';
        $timeout(function() {
            $ctrl.state = devOps.states.null;
            $ctrl.animClass.message = null;
            $ctrl.animClass.prizecount = null;
            audioService.play('turnoffSlots', 350);
            $timeout(function() {
                $ctrl.lightOff = false;
                $ctrl.state = devOps.states.ready;
                // audioService.stop('retry');
                audioService.play('turnonSlots', 150);
                audioService.play('actionButtons', 1100);
                audioService.play('background', 2000, 'loop');
            }, 1000);
        }, 500);
        Analytics.log($ctrl.ankey, 'Reject', $ctrl.prize.key);
    };

    var saveResult = function(status) {
        var rs = {
            name: $ctrl.name || null,
            id: $ctrl.id,
            time: '',
            status: status
        }
        if ($ctrl.appState.name === 'presentation') {
            rs.time = firebase.database.ServerValue.TIMESTAMP;
            $ctrl.results.$ref().child($ctrl.prize.key).push(rs);
        } else {
            rs.time = Date.now();
            $ctrl.results[$ctrl.prize.key].push(rs); // home, dry run
        }
        if (status === 'Confirmed') $ctrl.totalResults++;
        $ctrl.structured[$ctrl.prize.skey].splice($ctrl.iAIDs, 1);
    }

    var savedEnough = function() {
        if ($ctrl.isLimited({
                r: $ctrl.totalResults
            })) {
            audioService.play('na');
            Analytics.log('milestone', 'Over Free Results', $ctrl.totalResults, {
                prize: $ctrl.prize.key
            });
            modalService.open('Payment', true, true);
            return true;
        } else {
            return false;
        }
    }

    $ctrl.$onDestroy = function() {
        $ctrl.destroyMachines();
        audioService.stop('background');
    };
}

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
"use strict";
angular
    .module('app')
    .component('appFooter', {
        templateUrl: 'components/footer.html',
        bindings: {
            lightOff: '<',
        },
        controller: FooterController
    });

function FooterController($state, userService, modalService, navService, uxService, Analytics, audioService) {
    var $ctrl = this;
    $ctrl.$onInit = function() {
        $ctrl.appState = $state.current;
        $ctrl.user = userService;
        $ctrl.modals = modalService;
        $ctrl.navigate = navService;
        $ctrl.ux = uxService;
        $ctrl.analytics = Analytics;
        $ctrl.audio = audioService;
    };
}

angular
    .module('app')
    .directive('offline', offlineDirective);

function offlineDirective() {
    return {
        restrict: 'A',
        link: function($scope, $element, $attrs) {
            var connectedRef = firebase.database().ref('.info/connected');
            connectedRef.on('value', function(snap) {
                if (snap.val() === true) {
                    // $element.css('display', 'initial');
                    $element.off('click', disable);
                } else {
                    // $element.css('display', 'none');
                    $element.on('click', disable);
                }
            });

            function disable(event) {
                event.preventDefault();
                return false;
            }
        }
    }
}

angular
    .module('app')
    .directive('appbackground', appbackgroundDirective);

function appbackgroundDirective($rootScope) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('load', function() {
                $rootScope.url_background = 'url(' + attrs.src + ')';
            });
        }
    }
}
"use strict";
angular
    .module('app')
    .controller('PresentationController', PresentationController);

function PresentationController($rootScope, $timeout, defaultSettingService, navService, userdataService, results, i18nService, Analytics) {
    var $ctrl = this;

    $ctrl.$onInit = function() {
        $('#loader').show();
        Analytics.log('visit_pres', 'Init');

        $ctrl.lockUI = true;
        $timeout(function() {
            if ($ctrl.lockUI) {
                Analytics.log('error', 'Init Presentation', 'Timeout');
                navService('presentation', 'reload');
            }
        }, 6000);

        $ctrl.user = userdataService;
        $ctrl.user.load().then(function(resolve) {
            $ctrl.lockUI = false;
            $ctrl.data = $ctrl.user.member.data;
            $ctrl.setting = $ctrl.user.member.setting;
            $ctrl.results = results;

            navService('presentation', {
                sessionId: $ctrl.results.$id,
                notify: false
            });

            i18nService.setLang();
            $rootScope.theme = $ctrl.user.getRuntimeOpt('theme', null);
            $rootScope.background = $ctrl.setting.info.background || defaultSettingService.info.background;
            setTimeout(function() {
                $('#loader').fadeOut();
            }, 500);
            Analytics.log('visit_pres', 'Loaded');
        });
    }

    $ctrl.isLimited = function(r) {
        return userdataService.status('presentation', r) === 'limited';
    }
}

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
'use strict'
angular
    .module('app')
    .controller('MainController', MainController)

function MainController($rootScope, $http, $location, $translate, paymentService, modalService, defaultSettingService, defaultIdService, initSettingService, defaultResultService, i18nService, userdataService, Analytics) {
    var $ctrl = this

    $ctrl.$onInit = function() {
        $ctrl.data = defaultIdService()
        $ctrl.setting = initSettingService
        $ctrl.results = defaultResultService
        i18nService.setLang()
        $rootScope.theme = userdataService.getRuntimeOpt('theme', null)
        $rootScope.background = defaultSettingService.info.background
        Analytics.log('visit_home')
        paymentReturn()
    }

    $ctrl.isLimited = function(r) {
        return false
    }

    /**
     * Check payment return from provider
     */
    function paymentReturn() {
        var params = $location.search() || {}
        params.referrer = document.referrer
        window.$luckydraw = window.$luckydraw || {}
        window.$luckydraw.paymentReturn = params
        var ps = (params.referrer && params.amount) ? 'soha' : ''
        if (ps) {
            $http
                .post(paymentService.provider[ps].ipn, params)
                .then(function(response) {
                    if (response.data.ok) {
                        window.location.href = '/customize'
                    } else {
                        $('#loader').fadeOut()
                    }
                })
                .catch(function(e) {
                    $('#loader').fadeOut()
                    modalService.alert('', $translate.instant('Please contact LuckyDraw to manually activate your payment'))
                    Analytics.log('error', 'Process Payment', params)
                })
        } else {
            setTimeout(function() {
                $('#loader').fadeOut()
            }, 500)
        }
    }
}

angular.module("app").run(["$templateCache", function($templateCache) {
    $templateCache.put("index.html", "<!doctype html>\n<html>\n\n<head>\n  <base href=\"/\">\n  <meta charset=\"utf-8\">\n  \n  <title>Lucky Draw</title>\n  <meta name=\"author\" content=\"luckydraw.live\">\n  <meta name=\"robots\" content=\"index follow\">\n  <meta name=\"googlebot\" content=\"index follow\">\n  <meta name=\"keywords\" content=\"lucky draw, random name picker, random number generator\">\n  <meta name=\"description\" content=\"World\'s most sophisticated random number generator.\">\n\n  \n  <meta property=\"og:title\" content=\"Lucky Draw\">\n  <meta property=\"og:site_name\" content=\"LuckyDraw.live\">\n  <meta property=\"og:url\" content=\"https://www.luckydraw.live\">\n  <meta property=\"og:description\" content=\"World\'s most sophisticated random number generator.\">\n  <meta property=\"og:type\" content=\"website\">\n  <meta property=\"og:image\" content=\"https://www.luckydraw.live/images/luckydraw-v1.png\">\n\n  <meta name=\"viewport\" content=\"width=device-width\" id=\"viewportMeta\">\n  <link rel=\"shortcut icon\" type=\"image/x-icon\" href=\"favicon.ico\">\n\n  <style>\n    .loader-block {\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      width: 100%;\n      height: 100%;\n      display: block;\n      z-index: 999999;\n      position: fixed;\n      text-align: center;\n      background-color: #ffffff;\n      background-image: url(images/loader.svg);\n      background-position: center center;\n      background-repeat: no-repeat;\n    }\n  </style>\n  \n  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({\'gtm.start\':\n  new Date().getTime(),event:\'gtm.js\'});var f=d.getElementsByTagName(s)[0],\n  j=d.createElement(s),dl=l!=\'dataLayer\'?\'&l=\'+l:\'\';j.async=true;j.src=\n  \'https://www.googletagmanager.com/gtm.js?id=\'+i+dl;f.parentNode.insertBefore(j,f);\n  })(window,document,\'script\',\'dataLayer\',\'GTM-NWZ9HX7\');</script>\n  \n</head>\n\n<body ng-app=\"app\" ng-class=\"\'theme-\' + theme\">\n  \n  <noscript><iframe src=\"https://www.googletagmanager.com/ns.html?id=GTM-NWZ9HX7\" height=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"></iframe></noscript>\n  \n\n  <div class=\"loader-block\" id=\"loader\"></div>\n  \n  \n  \n  \n  \n\n  \n  <link rel=\"stylesheet\" href=\"index.css\">\n  \n  <div class=\"wrapper\" ng-style=\"{\'background-image\': url_background}\">\n    <ui-view></ui-view>\n    <notification></notification>\n    <img ng-src=\"{{background}}\" width=\"1\" height=\"1\" appbackground>\n  </div>\n\n  \n  \n  \n  \n  \n\n  \n  \n  \n  \n  \n  \n  \n  \n</body>\n\n</html>\n");
    $templateCache.put("components/footer.html", "<footer class=\"footer\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <nav class=\"footer-nav\" ng-class=\"$ctrl.lightOff ? \'light-off\' : \'light-on\'\">\n          <ul>\n            <li ng-if=\"$ctrl.appState.name !== \'presentation\'\">\n              <a ng-click=\"$ctrl.modals.open(\'IdResult\')\" ng-mouseover=\"$ctrl.ux.mOver(\'IdResult\')\" ng-mouseleave=\"$ctrl.ux.mLeave(\'IdResult\')\">\n                <span class=\"keyboard-key idresult-key\" ng-if=\"$ctrl.ux.hint.IdResult\"><span>R</span></span>\n                <i class=\"ion-android-funnel\"></i>\n                <translate>Result</translate>\n              </a>\n            </li>\n\n            <li ng-if=\"$ctrl.appState.name !== \'presentation\'\">\n              <a ng-click=\"$ctrl.modals.open(\'Intro\')\">\n                <i class=\"ion-android-list\"></i>\n                <translate>How-to</translate>\n              </a>\n            </li>\n\n            <li ng-if=\"$ctrl.appState.name !== \'presentation\'\">\n              <a ng-click=\"$ctrl.modals.open(\'Payment\')\">\n                <i class=\"ion-pricetag\"></i>\n                <translate>Pricing</translate>\n              </a>\n            </li>\n\n            <li ng-if=\"$ctrl.appState.name === \'presentation\'\">\n              <a ng-click=\"$ctrl.navigate(\'customize\', \'\')\">\n                <i class=\"ion-android-exit\"></i>\n                <translate>Finish</translate>\n              </a>\n            </li>\n\n            <li ng-if=\"$ctrl.appState.name !== \'presentation\'\">\n              <a ui-sref=\"customize\" ng-if=\"!$ctrl.user.authenticated\" ng-click=\"$ctrl.analytics.log(\'ui_action\', \'Execute\', \'Link - Footer Login\')\">\n                <i class=\"ion-person\"></i>\n                <translate>Login / Register</translate>\n              </a>\n              <a ng-click=\"$ctrl.modals.open(\'Account\')\" ng-if=\"$ctrl.user.authenticated\">\n                <i class=\"ion-person\"></i>\n                <translate>Account Info</translate>\n              </a>\n            </li>\n\n            <li ng-if=\"$ctrl.appState.name !== \'presentation\' && $ctrl.user.authenticated\">\n              <a ng-click=\"$ctrl.analytics.log(\'logout\');$ctrl.user.logout();\">\n                <i class=\"ion-android-exit\"></i>\n                <translate>Logout</translate>\n              </a>\n            </li>\n          </ul>\n        </nav>\n        \n\n        <ul class=\"list-actions\" ng-if=\"$ctrl.appState.name !== \'presentation\'\">\n          <li>\n            <a ng-click=\"$ctrl.modals.open(\'Background\')\" ng-class=\"$ctrl.ux.cssIntro.infobackground\">\n              <i class=\"ion-image\"></i>\n            </a>\n          </li>\n          <li>\n            <a ng-click=\"$ctrl.modals.open(\'Theme\')\" ng-class=\"$ctrl.ux.cssIntro.runtimetheme\">\n              <i class=\"ion-android-color-palette\"></i>\n            </a>\n          </li>\n          <li>\n            <a ng-click=\"$ctrl.modals.open(\'Language\')\">\n              <i class=\"ion-android-globe\"></i>\n            </a>\n          </li>\n          <li>\n            <a ng-click=\"$ctrl.modals.open(\'Contact\')\">\n              <i class=\"ion-email\"></i>\n            </a>\n          </li>\n          <li>\n            <a ng-click=\"$ctrl.audio.controller.toggle()\" ng-mouseover=\"$ctrl.ux.mOver(\'audio\')\" ng-mouseleave=\"$ctrl.ux.mLeave(\'audio\')\">\n              <i ng-class=\"$ctrl.audio.controller.icon\"></i>\n              <span class=\"keyboard-key audio-key\" ng-if=\"$ctrl.ux.hint.audio\"><span>M</span></span>\n            </a>\n          </li>\n        </ul>\n      </div>\n      \n    </div>\n    \n  </div>\n</footer>\n\n");
    $templateCache.put("components/luckydraw-id.html", "<header class=\"header\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      \n      <div class=\"logo-zone hidden\">\n        <img class=\"logo\" ng-class=\"$ctrl.lightOff ? \'light-off\' : \'light-on\'\" ng-if=\"$ctrl.setting.info.logo\" ng-src=\"{{$ctrl.setting.info.logo}}\">\n      </div>\n      \n\n      <div class=\"col-xs-12\">\n        \n        <h1>\n          <span class=\"event-name\" ng-if=\"$ctrl.appState.name !== \'presentation\'\">\n            {{$ctrl.defaultSetting.info.name | translate}}\n          </span>\n          <span class=\"event-name\" ng-if=\"$ctrl.appState.name === \'presentation\' && $ctrl.setting.info.name\" ng-style=\"{\'color\': $ctrl.setting.colors.name}\">\n            {{$ctrl.setting.info.name}}\n          </span>\n				</h1>\n        \n\n        <div class=\"header-content hidden\">\n          \n          <span class=\"link-company\" ng-if=\"$ctrl.setting.info.company\" ng-style=\"$ctrl.ux.style($ctrl.setting.colors.action_msg, 1)\">\n            {{$ctrl.setting.info.company}}\n          </span>\n          \n        </div>\n      </div>\n    </div>\n  </div>\n</header>\n\n<div ng-class=\"$ctrl.appState.name === \'presentation\' ? \'main-padding\' : \'main\'\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <section class=\"section section-prize\">\n          <header class=\"section-head\" ng-class=\"$ctrl.animClass.setprize\" ng-init=\"$ctrl.setPrize(0)\">\n            \n            <div class=\"coin\">\n              <img class=\"prize-image\" ng-repeat=\"prize in $ctrl.prizes\" ng-src=\"{{prize.image}}\" ng-show=\"$ctrl.prizeIndex == $index && prize.showimage\">\n            </div>\n            \n          </header>\n\n          \n          <div class=\"section-message\">\n            <h2 ng-style=\"$ctrl.ux.style($ctrl.setting.colors.action_msg, 1)\" ng-class=\"$ctrl.animClass.message\" ng-switch on=\"$ctrl.state\">\n              <span ng-switch-when=\"ready\" class=\"state-ready\">{{$ctrl.setting.messages.start || ($ctrl.defaultSetting.messages.start | translate)}}</span>\n              <span ng-switch-when=\"spin\" class=\"state-spin\">{{$ctrl.setting.messages.wait || ($ctrl.defaultSetting.messages.wait | translate)}}</span>\n              <span ng-switch-when=\"reveal\"><i class=\"no-text-shadow ion-load-c rotation\"></i></span>\n              <span ng-switch-when=\"complete|toconfirm|confirmed|cancel\" ng-switch-when-separator=\"|\" class=\"winner-name\" ng-bind-html=\"$ctrl.namex\"></span>\n            </h2>\n          </div>\n          \n\n          <div class=\"section-body\" ng-class=\"$ctrl.animClass.setprize\">\n            <div class=\"section-body-inner section-body-inner-primary\">\n              <ul class=\"slots\">\n                \n                <li class=\"slot\" ng-repeat=\"n in $ctrl.machineSlots\" ng-class=\"\'slot-1of\'+$ctrl.slotsCss + \' state-\'+$ctrl.state\">\n                  <div class=\"slot-item\" ng-repeat=\"i in $ctrl.characters[n]\">\n                    <div class=\"slot-number\" ng-switch on=\"$ctrl.state\">\n                      <span ng-switch-when=\"ready\">\n                        <img ng-src=\"{{$ctrl.prize.image}}\">\n                      </span>\n                      <span ng-switch-when=\"setprize\"></span>\n                      <span ng-switch-default>{{i}}</span>\n                      \n                    </div>\n                  </div>\n                  \n                  <div class=\"slot-item\" ng-if=\"!$ctrl.characters[n]\">\n                    <div class=\"slot-number\">\n                      <span ng-class=\"$ctrl.state !== \'ready\' ? \'not-available\' : \'available\'\"><img ng-src=\"{{$ctrl.prize.image}}\"></span>\n                    </div>\n                  </div>\n                  \n                </li>\n                \n              </ul>\n            </div>\n          </div>\n\n          <div class=\"section-actions\">\n            <div class=\"section-head-actions\">\n              \n              <a class=\"link-prev\" ng-mouseover=\"$ctrl.ux.mOver(\'prevnext\')\" ng-mouseleave=\"$ctrl.ux.mLeave(\'prevnext\')\" ng-class=\"$ctrl.state !== \'ready\' || $ctrl.prizeIndex <= 0 ? \'not-available\' : \'available\'\" ng-click=\"$ctrl.setPrize($ctrl.prizeIndex - 1)\">\n                <span class=\"keyboard-key prev-key\" ng-if=\"$ctrl.ux.hint.prevnext\"><span>&leftarrow;</span></span>\n                <i class=\"ion-chevron-left\"></i>\n              </a>\n              \n  \n              \n              <span class=\"prize-text\">\n                {{$ctrl.setting.prizes[$ctrl.prize.key] || ($ctrl.defaultSetting.prizes[$ctrl.prize.key] | translate)}}\n              </span>\n              \n  \n              \n              <span class=\"prize-text prize-count ion-person-add\" ng-class=\"$ctrl.animClass.prizecount\" ng-show=\"$ctrl.prizes[$ctrl.prizeIndex].confirmed\">\n                {{$ctrl.prizes[$ctrl.prizeIndex].confirmed}}\n              </span>\n              \n  \n              \n              <a class=\"link-next\" ng-mouseover=\"$ctrl.ux.mOver(\'prevnext\')\" ng-mouseleave=\"$ctrl.ux.mLeave(\'prevnext\')\" ng-class=\"$ctrl.state !== \'ready\' || $ctrl.prizeIndex >= $ctrl.prizes.length - 1 ? \'not-available\' : \'available\'\" ng-click=\"$ctrl.setPrize($ctrl.prizeIndex + 1)\">\n                <i class=\"ion-chevron-right\"></i>\n                <span class=\"keyboard-key next-key\" ng-if=\"$ctrl.ux.hint.prevnext\"><span>&rightarrow;</span></span>\n              </a>\n              \n            </div>\n\n            <div ng-switch on=\"$ctrl.state\" class=\"section-button\">\n              <div ng-switch-when=\"ready\" class=\"state-ready\">\n                <a class=\"btn btn-yellow btn-yellow-secondary\" ng-click=\"$ctrl.spin()\" ng-mouseover=\"$ctrl.ux.mOver(\'spin\')\" ng-mouseleave=\"$ctrl.ux.mLeave(\'spin\')\">\n                  <span class=\"keyboard-key spin-key\" ng-if=\"$ctrl.ux.hint.spin\"><span>ENTER</span></span>\n                  {{$ctrl.setting.buttons.spin || ($ctrl.defaultSetting.buttons.spin | translate)}}\n                </a>\n                <span ng-if=\"$ctrl.appState.name !== \'customize\' && $ctrl.appState.name !== \'presentation\'\">\n                  <a ng-if=\"$ctrl.user.authenticated\" ui-sref=\"customize\" ng-click=\"$ctrl.analytics.log(\'ui_action\', \'Execute\', \'Button - Customize\')\" class=\"btn btn-primary\">\n                    <translate>Customize</translate>\n                  </a>\n                  <a ng-if=\"!$ctrl.user.authenticated\" ui-sref=\"register\" ng-click=\"$ctrl.analytics.log(\'ui_action\', \'Execute\', \'Button - Customize\')\" class=\"btn btn-primary\">\n                    <translate>Register Now</translate>\n                  </a>\n                </span>\n              </div>\n\n              <div ng-switch-when=\"spin\" class=\"state-spin\">\n                <a class=\"btn btn-yellow btn-yellow-secondary-alt\" ng-click=\"$ctrl.startstop()\" ng-mouseover=\"$ctrl.ux.mOver(\'stop\')\" ng-mouseleave=\"$ctrl.ux.mLeave(\'stop\')\">\n                  <span class=\"keyboard-key stop-key\" ng-if=\"$ctrl.ux.hint.stop\"><span>ENTER</span></span>\n                  {{$ctrl.setting.buttons.stop || ($ctrl.defaultSetting.buttons.stop | translate)}} {{$ctrl.remainStops > 0 ? \'(\'+$ctrl.remainStops+\')\' : \'\'}}\n                </a>\n              </div>\n\n              <div ng-switch-when=\"complete\" class=\"state-complete\">\n                <a class=\"btn btn-yellow btn-yellow-secondary\" ng-click=\"$ctrl.save()\" ng-mouseover=\"$ctrl.ux.mOver(\'confirm\')\" ng-mouseleave=\"$ctrl.ux.mLeave(\'confirm\')\">\n                  <span class=\"keyboard-key confirm-key\" ng-if=\"$ctrl.ux.hint.confirm\"><span>+</span></span>\n                  {{$ctrl.setting.buttons.confirm || ($ctrl.defaultSetting.buttons.confirm | translate)}}\n                </a>\n                <a class=\"btn btn-primary\" ng-click=\"$ctrl.retry()\" ng-mouseover=\"$ctrl.ux.mOver(\'confirm\')\" ng-mouseleave=\"$ctrl.ux.mLeave(\'confirm\')\">\n                  {{$ctrl.setting.buttons.retry || ($ctrl.defaultSetting.buttons.retry | translate)}}\n                  <span class=\"keyboard-key retry-key\" ng-if=\"$ctrl.ux.hint.confirm\"><span>−</span></span>\n                </a>\n              </div>\n            </div> \n\n          </div> \n        </section>\n      </div>\n    </div>\n  </div>\n</div> \n\n<app-footer light-off=\"$ctrl.lightOff\"></app-footer>\n\n<hot-keys enter=\"$ctrl.startstop()\" nextstep=\"\" confirm=\"$ctrl.save()\" cancel=\"$ctrl.retry()\" prev=\"$ctrl.setPrevPrize()\" next=\"$ctrl.setNextPrize()\">\n</hot-keys>\n");
    $templateCache.put("components/modal-account.html", "<div class=\"modal-header\" id=\"modal-Account\">\n	<h4 class=\"modal-title\">\n		<translate>Account information</translate>\n	</h4>\n	\n\n	<button type=\"button\" class=\"close\" ng-click=\"$ctrl.dismiss()\">\n		<i class=\"ion-close\"></i>\n	</button>\n</div>\n\n\n<div class=\"modal-body\">\n	<div class=\"modal-entry\">\n		<div class=\"modal-entry-head\">\n			<h6><translate>Account info</translate></h6>\n		</div>\n		\n\n		<div class=\"modal-entry-body\">\n			<ul class=\"list-details\">\n				<li>\n					<strong><translate>Email</translate>:</strong>\n\n					<span>{{$ctrl.auth.email}}</span>\n				</li>\n\n				<li>\n					<strong><translate>Your Name</translate>:</strong>\n					<span ng-click=\"$ctrl.edit = true\" ng-hide=\"$ctrl.edit || $ctrl.saving\">{{$ctrl.auth.displayName}}</span>\n					<a href=\"#\" class=\"link-edit\" ng-click=\"$ctrl.edit = true\" ng-hide=\"$ctrl.edit || $ctrl.saving\">\n						<i class=\"ion-compose\"></i>\n					</a>\n\n					<span class=\"ion-load-a rotation\" ng-show=\"$ctrl.saving\"></span>\n					\n					<form class=\"form-change-account-info\" ng-if=\"$ctrl.edit && !$ctrl.saving\" ng-submit=\"$ctrl.updateProfile()\">\n						<div class=\"input-group\">\n							<input type=\"text\" autofocus class=\"field\" id=\"user-company\" ng-init=\"$ctrl.ux.focus(\'#user-company\')\" ng-blur=\"$ctrl.updateProfile()\" ng-value=\"$ctrl.auth.displayName\" ng-model=\"$ctrl.company\" ng-change=\"$ctrl.datachanged = true\">\n							<div class=\"input-group-btn\">\n				                <button type=\"submit\" class=\"btn btn-primary\"><span class=\"ion ion-ios-checkmark-empty\"></span></button>\n							</div>\n						</div>\n					</form>\n				</li>\n\n				<li>\n					<strong><translate>Account Type</translate>:</strong> <translate>{{$ctrl.user.status()}}</translate>\n					<a class=\"link-extent\" ng-click=\"$ctrl.modals.open(\'Payment\')\">\n						<span ng-switch on=\"$ctrl.user.status()\">\n							<span ng-switch-when=\"Free Account\"><translate>Pay to Upgrade</translate></span>\n							<span ng-switch-when=\"Paid Account\"><translate>Pay to Extend</translate></span>\n							<span ng-switch-when=\"Expired Account\"><translate>Pay to Extend</translate></span>\n						</span>\n					</a>\n				</li>\n\n				<li ng-if=\"$ctrl.member.lastPayment\">\n					<strong><translate>Last Payment</translate>:</strong> {{$ctrl.member.lastPayment | amDateFormat: (\'DateTimeFormat\' | translate)}}\n\n				</li>\n\n				<li ng-if=\"$ctrl.member.expiration\">\n					<strong><translate>Expiration Date</translate>:</strong> {{$ctrl.member.expiration | amDateFormat: (\'DateTimeFormat\' | translate)}}\n				</li>\n			</ul>\n			\n		</div>\n		\n	</div>\n	\n\n	<div class=\"modal-entry\">\n		<div class=\"modal-entry-head\">\n			<h6><translate>Change Password</translate><span style=\"float:right\">Build {{$ctrl.version}}</span></h6>\n		</div>\n		\n\n		<div class=\"modal-entry-body\">\n			<div class=\"form-change-password\">\n				<form ng-submit=\"$ctrl.updatePassword()\">\n		      <fieldset ng-disabled=\"$ctrl.loading\">\n						<div class=\"form-body\">\n							<div class=\"form-row\">\n								<label for=\"field-new-password\" class=\"form-label\"><translate>Current password</translate></label>\n\n								<input type=\"password\" class=\"field\" name=\"field-password\" id=\"field-password\" value=\"\" placeholder=\"******\" required ng-model=\"$ctrl.password\">\n							</div>\n							\n\n							<div class=\"form-row\">\n								<label for=\"field-new-password\" class=\"form-label\"><translate>New password</translate></label>\n\n								<input type=\"password\" class=\"field\" name=\"field-new-password\" id=\"field-new-password\" value=\"\" placeholder=\"******\" required ng-model=\"$ctrl.newPassword\">\n							</div>\n							\n\n							<div class=\"form-row\">\n								<label for=\"field-re-enter\" class=\"form-label\"><translate>Re-enter</translate></label>\n\n								<input type=\"password\" class=\"field\" name=\"field-re-enter\" id=\"field-re-enter\" value=\"\" placeholder=\"******\" required ng-model=\"$ctrl.rePassword\">\n\n								<p class=\"form-success\">{{$ctrl.success}}</p>\n								\n								<p class=\"form-error\">{{$ctrl.error}}</p>\n								\n							</div>\n							\n						</div>\n						\n\n						<div class=\"form-actions\">\n							<button type=\"submit\" class=\"btn-alt btn-yellow-alt form-btn\">\n								<translate ng-hide=\"$ctrl.loading\">Change password</translate>\n		            <span class=\"ion-load-a rotation\" ng-show=\"$ctrl.loading\"></span>\n							</button>\n						</div>\n						\n					</fieldset>\n				</form>\n			</div>\n			\n		</div>\n		\n	</div>\n	\n</div>\n\n");
    $templateCache.put("components/modal-alert.html", "<div class=\"modal-header\" id=\"modal-Alert\">\n  <h4 class=\"modal-title\">\n    <i class=\"ion-alert\"></i>\n    {{($ctrl.resolve.title || \'Info\') | translate}}\n	</h4>\n  \n\n  <button type=\"button\" class=\"close\" ng-if=\"$ctrl.dismissCountDown !== null\">\n    {{$ctrl.dismissCountDown}}\n  </button>\n  <button type=\"button\" class=\"close\" ng-click=\"$ctrl.dismiss()\" ng-if=\"$ctrl.dismissCountDown === null\">\n    <i class=\"ion-close\"></i>\n  </button>\n</div>\n\n\n<div class=\"modal-body alert-message\">\n  {{$ctrl.resolve.message | translate}}\n</div>\n\n");
    $templateCache.put("components/modal-background.html", "<div class=\"modal-header\" id=\"modal-Background\">\n  <h4 class=\"modal-title\">\n			<i class=\"ion-image\"></i>\n      <translate>Change Background</translate>\n	</h4>\n  \n\n  <button type=\"button\" class=\"close\" ng-click=\"$ctrl.dismiss()\">\n    <i class=\"ion-close\"></i>\n  </button>\n</div>\n\n\n<div class=\"modal-body\">\n  <ul class=\"list-backgrounds\">\n    <li>\n      <div>\n        <img ng-if=\"$ctrl.info.background\" ng-src=\"{{$ctrl.info.background}}\">\n      </div>\n      <div class=\"tools\">\n        <a ng-if=\"!$ctrl.user.authenticated\" ng-click=\"$ctrl.modals.isAuthenticated(\'login\', \'Background\')\">\n          <span class=\"ion-plus\"></span>\n          <span><translate>Upload New Background</translate></span>\n        </a>\n        <a ng-if=\"$ctrl.user.authenticated && !$ctrl.editing.infobackground\" ngf-select=\"$ctrl.uploadBackground($file)\" ngf-accept=\"\'image/*\'\" ngf-pattern=\"\'image/*\'\" ngf-resize=\"{width: 3100}\">\n          <span class=\"ion-plus\"></span>\n          <span><translate>Upload New Background</translate></span>\n        </a>\n        <a href=\"#\" ng-if=\"$ctrl.editing.infobackground\">\n          <span class=\"ion-load-a rotation\"></span>\n          <span><translate>Uploading...</translate></span>\n          <span>{{$ctrl.uploadProgress}}%</span>\n        </a>\n        <a ng-if=\"$ctrl.info.background && !$ctrl.editing.infobackground\" ng-click=\"$ctrl.removeBackground()\">\n          <span class=\"ion-minus\"></span>\n          <span><translate>Remove Background</translate></span>\n        </a>\n      </div>\n    </li>\n  </ul>\n  \n</div>\n\n");
    $templateCache.put("components/modal-button.html", "<div class=\"modal-header\" id=\"modal-Button\">\n  <h4 class=\"modal-title\">\n						<translate>Customize Button</translate>\n					</h4>\n  \n\n  <button type=\"button\" class=\"close\" ng-click=\"$ctrl.dismiss()\">\n    <i class=\"ion-close\"></i>\n  </button>\n</div>\n\n\n<div class=\"modal-body\">\n  <div class=\"form-edit-text\">\n    <form ng-submit=\"$ctrl.save()\">\n      <fieldset ng-disabled=\"$ctrl.loading\">\n        <div class=\"form-body\">\n          <div class=\"form-row\">\n            <label for=\"field-text1\" class=\"form-label\"><translate>Spin</translate></label>\n\n            <input type=\"text\" autofocus class=\"field\" name=\"field-text1\" id=\"field-text1\" ng-attr-placeholder=\"{{\'Spin\' | translate}}\" ng-model=\"$ctrl.buttons.spin\" ng-change=\"$ctrl.datachanged = true\">\n          </div>\n          \n\n          <div class=\"form-row\">\n            <label for=\"field-text2\" class=\"form-label\"><translate>Stop</translate></label>\n\n            <input type=\"text\" class=\"field\" name=\"field-text2\" id=\"field-text2\" ng-attr-placeholder=\"{{\'Stop\' | translate}}\" ng-model=\"$ctrl.buttons.stop\" ng-change=\"$ctrl.datachanged = true\">\n          </div>\n          \n\n          <div class=\"form-row\">\n            <label for=\"field-text2\" class=\"form-label\"><translate>Confirm</translate></label>\n\n            <input type=\"text\" class=\"field\" name=\"field-text2\" id=\"field-text3\" ng-attr-placeholder=\"{{\'Confirm\' | translate}}\" ng-model=\"$ctrl.buttons.confirm\" ng-change=\"$ctrl.datachanged = true\">\n          </div>\n          \n\n          <div class=\"form-row\">\n            <label for=\"field-text2\" class=\"form-label\"><translate>Retry</translate></label>\n\n            <input type=\"text\" class=\"field\" name=\"field-text2\" id=\"field-text4\" ng-attr-placeholder=\"{{\'Retry\' | translate}}\" ng-model=\"$ctrl.buttons.retry\" ng-change=\"$ctrl.datachanged = true\">\n          </div>\n          \n        </div>\n        \n\n        <div class=\"form-actions\">\n          <button type=\"button\" class=\"btn-alt btn-grey\" ng-click=\"$ctrl.reset()\"><translate>Reset Default</translate></button>\n\n          <button type=\"button\" class=\"btn-alt btn-grey\" ng-click=\"$ctrl.dismiss()\"><translate>Cancel</translate></button>\n\n          <button type=\"submit\" class=\"btn-alt btn-yellow-alt form-btn\">\n            <translate ng-hide=\"$ctrl.loading\">Save</translate>\n            <span class=\"ion-load-a rotation\" ng-show=\"$ctrl.loading\"></span>\n          </button>\n        </div>\n        \n      </fieldset>\n    </form>\n  </div>\n  \n</div>\n\n");
    $templateCache.put("components/modal-contact.html", "<div class=\"modal-header\" id=\"modal-Contact\">\n  <h4 class=\"modal-title\">\n						<translate>Contact us</translate>\n					</h4>\n  \n\n  <button type=\"button\" class=\"close\" ng-click=\"$ctrl.dismiss()\">\n    <i class=\"ion-close\"></i>\n  </button>\n</div>\n\n\n<div class=\"modal-body\">\n  <div class=\"form-login-register form-contact\">\n    <form ng-submit=\"$ctrl.submit()\">\n      <fieldset ng-disabled=\"$ctrl.loading\">\n        <div class=\"form-body\">\n          <div class=\"form-row\">\n            <label for=\"field-name\" class=\"form-label\"><translate>Contact Name</translate></label>\n\n            <div class=\"form-controls\">\n              <i class=\"ion-person\"></i>\n\n              <input type=\"text\" autofocus class=\"field\" name=\"field-name\" id=\"field-name\" value=\"\" ng-model=\"$ctrl.data.contact_name\" required>\n            </div>\n            \n          </div>\n          \n\n          <div class=\"form-row\">\n            <label for=\"field-email\" class=\"form-label\"><translate>Email</translate></label>\n\n            <div class=\"form-controls\">\n              <i class=\"ion-email\"></i>\n\n              <input type=\"email\" class=\"field\" name=\"field-email\" id=\"field-email\" value=\"\" ng-model=\"$ctrl.data.contact_email\" required>\n            </div>\n            \n          </div>\n          \n\n          <div class=\"form-row\">\n            <label for=\"field-inquiry\" class=\"form-label form-label-top\"><translate>Inquiry</translate></label>\n\n            <div class=\"form-controls\">\n              <textarea class=\"textarea\" name=\"field-inquiry\" id=\"field-inquiry\" ng-model=\"$ctrl.data.contact_message\" required></textarea>\n            </div>\n            \n          </div>\n          \n        </div>\n        \n\n        <div class=\"form-actions\">\n          <button type=\"submit\" class=\"btn btn-yellow form-btn\">\n            <translate ng-hide=\"$ctrl.loading\">Submit</translate>\n            <span class=\"ion-load-a rotation\" ng-show=\"$ctrl.loading\"></span>\n          </button>\n        </div>\n        \n\n      </fieldset>\n    </form>\n  </div>\n  \n</div>\n\n");
    $templateCache.put("components/modal-forgot-password.html", "<div class=\"modal-header\" id=\"modal-ForgotPassword\">\n  <h4 class=\"modal-title\">\n		<i class=\"ion-android-person\"></i>\n		<translate>Reset Password</translate>\n	</h4>\n  \n\n  <button type=\"button\" class=\"close\" ng-click=\"$ctrl.dismiss(\'\')\">\n    <i class=\"ion-close\"></i>\n  </button>\n</div>\n\n<div class=\"modal-body\">\n  <div class=\"form-login-register form-login\">\n    <form ng-submit=\"$ctrl.forgotPassword()\">\n      <fieldset ng-disabled=\"$ctrl.loading\">\n        <div class=\"form-body\">\n          <div class=\"form-row\">\n            <p><translate>Enter your registered email</translate></p>\n          </div>\n          <div class=\"form-row\">\n            <label for=\"field-email\" class=\"form-label\"><translate>Email</translate></label>\n\n            <div class=\"form-controls\">\n              <i class=\"ion-email\"></i>\n\n              <input type=\"text\" autofocus class=\"field\" name=\"field-email\" id=\"field-email\" value=\"\" placeholder=\"{{\'abcd@gmail.com\' | translate}}\" autocomplete=\"off\" required ng-model=\"$ctrl.email\">\n            </div>\n            \n            <p class=\"form-error\">{{$ctrl.error}}</p>\n          </div>\n          \n        </div>\n        \n\n        <div class=\"form-actions\">\n          <button type=\"submit\" class=\"btn btn-yellow form-btn\">\n            <translate ng-hide=\"$ctrl.loading\">Send email</translate>\n            <span class=\"ion-load-a rotation\" ng-show=\"$ctrl.loading\"></span>\n          </button>\n        </div>\n        \n      </fieldset>\n    </form>\n  </div>\n  \n\n  <a ui-sref=\"register\" class=\"link-return\" ng-click=\"$ctrl.analytics.log(\'ui_action\', \'Execute\', \'Link - Register\')\">\n    <i class=\"ion-arrow-right-b\"></i>\n    <span>\n      <translate>Return to Login form</translate>.\n		</span>\n  </a>\n</div>\n\n");
    $templateCache.put("components/modal-id.html", "<div class=\"modal-header\" id=\"modal-Id\">\n  <h4 class=\"modal-title\">\n						<translate>{{$ctrl.ids.length ? \'Edit ID\' : \'Update IDs for Presentation\'}}</translate>\n					</h4>\n  \n\n  <button type=\"button\" class=\"close\" ng-click=\"$ctrl.dismiss()\">\n						<i class=\"ion-close\"></i>\n					</button>\n</div>\n\n\n<div class=\"modal-body\">\n  <div class=\"form-edit\">\n    <form ng-submit=\"$ctrl.save(0)\">\n      <fieldset ng-disabled=\"$ctrl.loading\">\n        <div class=\"form-head\">\n          <img src=\"/images/temp/numbers.svg\" alt=\"\" width=\"32\" height=\"15\">\n\n          <strong><translate>Your Drawing IDs</translate></strong>\n\n          \n        </div>\n        \n\n        <div class=\"form-body\">\n          <div class=\"form-row\">\n            <div class=\"id-generator\">\n              <label for=\"field-generate-id\" class=\"form-label\"><translate>Or Auto Generate ID</translate>:</label>\n\n              <input type=\"text\" class=\"field\" name=\"field-generate-id\" id=\"field-generate-id\" ng-value=\"{{$ctrl.start}}\" ng-model=\"$ctrl.start\">\n\n              <span class=\"divider\">-</span>\n\n              <input type=\"text\" class=\"field\" name=\"field-generate-id-2\" id=\"field-generate-id-2\" value=\"{{$ctrl.end}}\" ng-model=\"$ctrl.end\">\n\n              <button type=\"button\" class=\"btn-alt btn-yellow-alt\" ng-click=\"$ctrl.generate($ctrl.start, $ctrl.end)\"><translate>Generate</translate></button>\n            </div>\n            \n          </div>\n          \n\n          <div class=\"form-row\">\n            <div class=\"form-col form-col-1of2\">\n              <textarea class=\"textarea\" autofocus name=\"field-text-id\" id=\"field-text-id\" ng-attr-placeholder=\"{{\'IDs ( 0-9, A-Z, maximum 16 characters )\' | translate}}\" ng-model=\"$ctrl.ids\" ng-list=\"&#10;\" ng-trim=\"false\" ng-change=\"$ctrl.datachanged = true\"></textarea>\n            </div>\n            \n\n            <div class=\"form-col form-col-1of2\">\n              <textarea class=\"textarea\" name=\"field-text-id\" id=\"field-text-names\" ng-attr-placeholder=\"{{\'Name List\' | translate}}\" ng-model=\"$ctrl.names\" ng-list=\"&#10;\" ng-trim=\"false\" ng-change=\"$ctrl.datachanged = true\"></textarea>\n            </div>\n            \n          </div>\n          <p ng-show=\"$ctrl.maxLength\" class=\"text-danger\"><translate>ID max length exceeds</translate></p>\n          \n          <div class=\"form-row\">\n            <div class=\"form-notice\">\n              <h6><translate>Total</translate>: {{$ctrl.ids.length || 0}} <translate>IDs</translate>, {{$ctrl.names.length || 0}} <translate>Names</translate></h6>\n\n              <p><translate>ID/Name pairs will be automatically matched line by line</translate></p>\n            </div>\n            \n          </div>\n          \n        </div>\n        \n\n        <div class=\"form-actions\">\n          <button type=\"button\" class=\"btn-alt btn-grey\" ng-click=\"$ctrl.dismiss()\"><translate>Cancel</translate></button>\n\n          <button type=\"submit\" class=\"btn-alt btn-yellow-alt form-btn\">\n            <translate ng-hide=\"$ctrl.loading\">Save</translate>\n            <span class=\"ion-load-a rotation\" ng-show=\"$ctrl.loading\"></span>\n          </button>\n\n          <button type=\"button\" class=\"btn-alt btn-primary no-shadow form-btn\" ng-click=\"$ctrl.save(1)\">\n            <translate ng-hide=\"$ctrl.loading\">Draw Now</translate>\n            <span class=\"ion-load-a rotation\" ng-show=\"$ctrl.loading\"></span>\n          </button>\n        </div>\n        \n      </fieldset>\n    </form>\n  </div>\n  \n</div>\n\n");
    $templateCache.put("components/modal-ids-result.html", "<div class=\"modal-header\" id=\"modal-IdResult\">\n  <h4 class=\"modal-title\">\n						<translate>ID Drawing Winner</translate>\n					</h4>\n  \n\n  <button type=\"button\" class=\"close\" ng-click=\"$ctrl.dismiss()\">\n    <i class=\"ion-close\"></i>\n  </button>\n</div>\n\n\n<div class=\"modal-body\">\n  <uib-tabset active=\"$ctrl.defaultTab\" class=\"tabs tabs-result\">\n    <uib-tab ng-repeat=\"prize in $ctrl.prizes\" index=\"$index\" heading=\"{{$ctrl.custom_prizes[prize.key] || (prize.name | translate)}}\">\n      <div class=\"tab-pane-inner\">\n        <div ng-if=\"!$ctrl.results.length && !$ctrl.resultsLoaded\" class=\"left50 top40\"><span class=\"ion-load-a rotation\"></span></div>\n        <ol class=\"sessions\">\n          <li class=\"session\" ng-repeat=\"session in $ctrl.results | orderBy: \'$index\' : true\" ng-if=\"session[prize.key]\">\n            <h5 class=\"session-title\">\n              <translate>Drawing Session</translate> {{$ctrl.results.length - $index}} &middot; \n              <a ng-if=\"$ctrl.state === \'customize\'\" ng-click=\"$ctrl.toggleDel[session.$id + prize.key] = true\"><span class=\"ion-ios-trash\"></span></a>\n              <span class=\"toggleDel\" ng-show=\"$ctrl.toggleDel[session.$id + prize.key]\">\n                  <translate>This will delete all prizes in session</translate> {{$ctrl.results.length - $index}}!\n                  <a ng-click=\"$ctrl.deleteResult(session, prize)\"><translate>Confirm</translate></a>\n                  <translate>or</translate>\n                  <a ng-click=\"$ctrl.toggleDel[session.$id + prize.key] = false\"><translate>Cancel</translate></a>?\n              </span>\n            </h5>\n            \n\n            <table class=\"table table-results\">\n              <thead>\n                <tr>\n                  <th><translate>#</translate></th>\n                  <th><translate>ID</translate></th>\n                  <th><translate>Winner Name</translate></th>\n                </tr>\n              </thead>\n\n              <tbody>\n                <tr ng-repeat=\"result in session[prize.key] | toArray | orderBy: \'-time\'\" ng-class=\"$ctrl.rowStyle(prize.key, $index, result.status)\">\n                  <td class=\"stt\">{{$ctrl.getIndex(session[prize.key], session.$id, prize.key, $index)}}</td>\n                  <td class=\"resid\">{{result.id}}</td>\n                  <td>{{result.name}}</td>\n                </tr>\n                <tr ng-if=\"!session[prize.key]\">\n                  <td colspan=\"3\"><translate>No result</translate></td>\n                </tr>\n              </tbody>\n            </table>\n          </li>\n          \n        </ol>\n        \n      </div>\n      \n    </uib-tab>\n  </uib-tabset>\n\n  <a class=\"link-download\" ng-click=\"$ctrl.download()\" href=\"#\">\n    <i class=\"ion-android-download\"></i>\n    <strong><translate>Download Results</translate></strong>\n  </a>\n</div>\n\n");
    $templateCache.put("components/modal-intro.html", "<div class=\"modal-header\" id=\"modal-Intro\">\n  <h4 class=\"modal-title\">\n						<translate>Introduction</translate>\n					</h4>\n  \n\n  <button type=\"button\" class=\"close\" ng-click=\"$ctrl.dismiss()\">\n    <i class=\"ion-close\"></i>\n  </button>\n</div>\n\n\n<div class=\"modal-body\">\n  <div class=\"modal-body\">\n    <uib-tabset active=\"0\" vertical=\"true\" class=\"tabs tabs-intro\">\n      <uib-tab index=\"0\" heading=\"{{\'About Us\' | translate}}\">\n        <div class=\"tab-pane-inner\" ng-include=\"\'templates/tab-about.html\' | translate\"></div>\n      </uib-tab>\n      <uib-tab index=\"1\" heading=\"{{\'FAQ\' | translate}}\">\n        <div class=\"tab-pane-inner\" ng-include=\"\'templates/tab-faq.html\' | translate\"></div>\n      </uib-tab>\n      <uib-tab index=\"2\" heading=\"{{\'Term of Service\' | translate}}\">\n        <div class=\"tab-pane-inner\" ng-include=\"\'templates/tab-term.html\' | translate\"></div>\n      </uib-tab>\n      <uib-tab index=\"3\" heading=\"{{\'Privacy Policy\' | translate}}\">\n        <div class=\"tab-pane-inner\" ng-include=\"\'templates/tab-policy.html\' | translate\"></div>\n      </uib-tab>\n      <uib-tab index=\"4\" heading=\"{{\'Contact and Support\' | translate}}\" select=\"$ctrl.modals.open(\'Contact\')\">\n        <div class=\"tab-pane-inner\" ng-include=\"\'templates/tab-contact.html\' | translate\"></div>\n      </uib-tab>\n    </uib-tabset>\n  </div>\n</div>\n\n");
    $templateCache.put("components/modal-language.html", "<div class=\"modal-header\" id=\"modal-Language\">\n  <h4 class=\"modal-title\">\n			<i class=\"ion-android-globe\"></i>\n      <translate>Change language</translate>\n	</h4>\n  \n\n  <button type=\"button\" class=\"close\" ng-click=\"$ctrl.dismiss()\">\n    <i class=\"ion-close\"></i>\n  </button>\n</div>\n\n\n<div class=\"modal-body\">\n  <ul class=\"list-languages\">\n    <li ng-repeat=\"(key, language) in $ctrl.languages\" ng-class=\"{current: $ctrl.language == key}\">\n      <a href=\"\" ng-click=\"$ctrl.changeLanguage(key)\">\n        <img ng-src=\"{{language.flag}}\">\n        <span>{{language.name}}</span>\n      </a>\n    </li>\n  </ul>\n  \n</div>\n\n");
    $templateCache.put("components/modal-login.html", "<div class=\"modal-header\" id=\"modal-Login\">\n  <h4 class=\"modal-title\">\n		<i class=\"ion-android-person\"></i>\n		<translate>Login to continue</translate>\n	</h4>\n  \n\n  <button type=\"button\" class=\"close\" ng-click=\"$ctrl.dismiss(\'\')\">\n    <i class=\"ion-close\"></i>\n  </button>\n</div>\n\n<div class=\"modal-body\">\n  <div class=\"form-login-register form-login\">\n    <form ng-submit=\"$ctrl.login()\">\n      <fieldset ng-disabled=\"$ctrl.loading\">\n        <div class=\"form-body\">\n          <div class=\"form-row\">\n            <label for=\"field-email\" class=\"form-label\"><translate>Email</translate></label>\n\n            <div class=\"form-controls\">\n              <i class=\"ion-email\"></i>\n\n              <input type=\"text\" class=\"field\" name=\"field-email\" id=\"field-email\" value=\"\" ng-attr-placeholder=\"{{\'abcd@gmail.com\' | translate}}\" autocomplete=\"off\" required autofocus ng-model=\"$ctrl.email\">\n            </div>\n            \n          </div>\n          \n\n          <div class=\"form-row\">\n            <label for=\"field-password\" class=\"form-label\"><translate>Password</translate></label>\n\n            <div class=\"form-controls\">\n              <i class=\"ion-android-lock\"></i>\n\n              <input type=\"password\" class=\"field field-password\" name=\"field-password\" id=\"field-password\" value=\"\" placeholder=\"*******\" autocomplete=\"off\" required ng-model=\"$ctrl.password\">\n\n              <span class=\"form-hint\">\n  											<a ui-sref=\"forgotPassword\" ng-click=\"$ctrl.analytics.log(\'ui_action\', \'Execute\', \'Link - Forgot Password\')\"><translate>Forgot password</translate>?</a>\n  										</span>\n            </div>\n            \n\n            <p class=\"form-error\">{{$ctrl.error}}</p>\n          </div>\n          \n        </div>\n        \n\n        <div class=\"form-actions\">\n          <button type=\"submit\" class=\"btn btn-yellow form-btn\">\n            <translate ng-hide=\"$ctrl.loading\">Login</translate>\n            <span class=\"ion-load-a rotation\" ng-show=\"$ctrl.loading\"></span>\n          </button>\n        </div>\n        \n      </fieldset>\n    </form>\n  </div>\n  \n\n  <a ui-sref=\"register\" class=\"link-return\" ng-click=\"$ctrl.analytics.log(\'ui_action\', \'Execute\', \'Link - Register\')\">\n    <i class=\"ion-arrow-right-b\"></i>\n    <span>\n			<translate>Don\'t have an account?</translate> <strong><translate>Register</translate>.</strong>\n		</span>\n  </a>\n</div>\n\n");
    $templateCache.put("components/modal-message.html", "<div class=\"modal-header\" id=\"modal-Message\">\n  <h4 class=\"modal-title\">\n						<translate>Customize Action Message</translate>\n					</h4>\n  \n\n  <button type=\"button\" class=\"close\" ng-click=\"$ctrl.dismiss()\">\n    <i class=\"ion-close\"></i>\n  </button>\n</div>\n\n\n<div class=\"modal-body\">\n  <div class=\"form-edit-text\">\n    <form ng-submit=\"$ctrl.save()\">\n      <fieldset ng-disabled=\"$ctrl.loading\">\n        <div class=\"form-body\">\n          <div class=\"form-row\">\n            <label for=\"field-text1\" class=\"form-label\"><translate>Press the Spin button to start</translate></label>\n\n            <input type=\"text\" autofocus class=\"field\" name=\"field-text1\" id=\"field-text1\" ng-attr-placeholder=\"{{\'Press the Spin button to start\' | translate}}\" ng-model=\"$ctrl.messages.start\" ng-change=\"$ctrl.datachanged = true\">\n          </div>\n          \n\n          <div class=\"form-row\">\n            <label for=\"field-text2\" class=\"form-label\"><translate>Winner is coming...</translate></label>\n\n            <input type=\"text\" class=\"field\" name=\"field-text2\" id=\"field-text2\" ng-attr-placeholder=\"{{\'Winner is coming...\' | translate}}\" ng-model=\"$ctrl.messages.wait\" ng-change=\"$ctrl.datachanged = true\">\n          </div>\n          \n        </div>\n        \n\n        <div class=\"form-actions\">\n          <button type=\"button\" class=\"btn-alt btn-grey\" ng-click=\"$ctrl.reset()\"><translate>Reset Default</translate></button>\n\n          <button type=\"button\" class=\"btn-alt btn-grey\" ng-click=\"$ctrl.dismiss()\"><translate>Cancel</translate></button>\n\n          <button type=\"submit\" class=\"btn-alt btn-yellow-alt form-btn\">\n            <translate ng-hide=\"$ctrl.loading\">Save</translate>\n            <span class=\"ion-load-a rotation\" ng-show=\"$ctrl.loading\"></span>\n          </button>\n        </div>\n        \n      </fieldset>\n    </form>\n  </div>\n  \n</div>\n\n");
    $templateCache.put("components/modal-notify.html", "<div class=\"modal-header\" id=\"modal-Notify\">\n  <h4 class=\"modal-title\">\n						<translate>Payment Complete</translate>\n					</h4>\n  \n\n  <button type=\"button\" class=\"close\" ng-click=\"$ctrl.dismiss()\">\n						<i class=\"ion-close\"></i>\n					</button>\n</div>\n\n\n<div class=\"modal-body\">\n  <div class=\"subscription subscription-complete\">\n    <h6><translate>Payment completed successfully</translate></h6>\n\n    <img src=\"/images/temp/diamond.svg\" height=\"55\" width=\"65\" alt=\"\">\n\n    <p>\n      <translate>Your subscription</translate>: <strong>{{$ctrl.notification.$value  | amDateFormat:(\'DateTimeFormat\' | translate)}}</strong> <br>\n      <translate>Thanks for being awesome with Lucky Draw</translate> <br>\n      <translate>Now you’ll return to edit your custom Photos/ IDs</translate> <br>\n    </p>\n\n    <a class=\"btn-alt btn-orange\" ng-click=\"$ctrl.close()\">Ok</a>\n  </div>\n  \n</div>\n\n");
    $templateCache.put("components/modal-payment.html", "<div class=\"modal-header\" id=\"modal-Payment\">\n  <h4 class=\"modal-title\">\n						<span ng-switch on=\"$ctrl.user.status()\">\n							<span ng-switch-when=\"Free Account\"><translate>Pay to Upgrade</translate></span>\n							<span ng-switch-when=\"Paid Account\"><translate>Pay to Extend</translate></span>\n							<span ng-switch-when=\"Expired Account\"><translate>Pay to Extend</translate></span>\n						</span>\n					</h4>\n  \n\n  <button type=\"button\" class=\"close\" ng-if=\"$ctrl.dismissCountDown !== null\">\n					{{$ctrl.dismissCountDown}}\n					</button>\n	<button type=\"button\" class=\"close\" ng-if=\"$ctrl.dismissCountDown === null\" ng-click=\"$ctrl.dismiss()\">\n					<i class=\"ion-close\"></i>\n					</button>\n</div>\n\n\n<div class=\"modal-body\">\n  <div class=\"form-edit\" id=\"payment-form\"><span class=\"ion-load-a rotation\"></span></div>\n  \n</div>\n\n");
    $templateCache.put("components/modal-prize.html", "<div class=\"modal-header\" id=\"modal-Prize\">\n  <h4 class=\"modal-title\">\n						<translate>Customize name of Prizes</translate>\n					</h4>\n  \n\n  <button type=\"button\" class=\"close\" ng-click=\"$ctrl.doDismiss()\">\n    <i class=\"ion-close\"></i>\n  </button>\n</div>\n\n\n<div class=\"modal-body\">\n  <div class=\"form-customize-prizes\">\n    <form ng-submit=\"$ctrl.save()\" ng-init=\"$ctrl.ux.focus(\'#field-x-prize\')\">\n      <fieldset ng-disabled=\"$ctrl.loading\">\n        <div class=\"explain\">\n          <small><translate>Select Checkbox to Enable Prize</translate></small>\n        </div>\n        <div class=\"form-body prize-rows\">\n\n          <div class=\"form-row\" ng-repeat=\"p in $ctrl.allPrizes\" index=\"$index\">\n            <label for=\"check-{{p.key}}-prize\" class=\"form-label\">{{p.name | translate}}</label>\n\n            <input type=\"checkbox\" name=\"check-{{p.key}}-prize\" id=\"check-{{p.key}}-prize\" ng-model=\"$ctrl.enabled_prizes[p.key]\" ng-change=\"$ctrl.namechanged = true\">\n            <input type=\"text\" class=\"field\" name=\"field-{{p.key}}-prize\" id=\"field-{{p.key}}-prize\" ng-attr-placeholder=\"{{$index > 4 ? \'\' : (p.name | translate)}}\" ng-model=\"$ctrl.prizes[p.key]\" ng-change=\"$ctrl.namechanged = true\">\n\n            <span ng-if=\"$ctrl.editing[\'icons\'+p.key]\"><i class=\"ion-load-a rotation\"></i></span>\n            <a ng-if=\"!$ctrl.setting.icons[p.key] && !$ctrl.editing[\'icons\'+p.key]\" href=\"#\" ngf-select=\"$ctrl.uploadIcon($file, p.key)\" ngf-accept=\"\'image/*\'\" ngf-pattern=\"\'image/*\'\" ngf-resize=\"{height: 200}\" class=\"custom-prize-icons\">\n              <img ng-src=\"{{p.image}}\" ng-class=\"$index == 0 ? \'att-prizeicons\' : \'\'\">\n              <span class=\"ion-upload\"></span>\n            </a>\n            <a ng-if=\"$ctrl.setting.icons[p.key] && !$ctrl.editing[\'icons\'+p.key]\" href=\"#\" ng-click=\"$ctrl.removeIcon(p.key)\" class=\"custom-prize-icons\">\n              <img ng-src=\"{{$ctrl.setting.icons[p.key]}}\">\n              <span class=\"ion-trash-a\"></span>\n            </a>\n          </div>\n          \n\n        </div>\n        \n\n        <div class=\"form-actions\">\n          <button type=\"button\" class=\"btn-alt btn-grey\" ng-click=\"$ctrl.reset()\"><translate>Reset Default</translate></button>\n\n          <button type=\"button\" class=\"btn-alt btn-grey\" ng-click=\"$ctrl.doDismiss()\"><translate>Cancel</translate></button>\n\n          <button type=\"submit\" class=\"btn-alt btn-yellow-alt form-btn\">\n            <translate ng-hide=\"$ctrl.loading\">Save</translate>\n            <span class=\"ion-load-a rotation\" ng-show=\"$ctrl.loading\"></span>\n          </button>\n        </div>\n        \n      </fieldset>\n    </form>\n  </div>\n  \n</div>\n\n");
    $templateCache.put("components/modal-register.html", "<div class=\"modal-header\" id=\"modal-Register\">\n  <h4 class=\"modal-title\">\n						<i class=\"ion-android-person\"></i>\n\n						<translate>Register</translate>\n					</h4>\n  \n\n  <button type=\"button\" class=\"close\" ng-click=\"$ctrl.dismiss()\">\n    <i class=\"ion-close\"></i>\n  </button>\n</div>\n\n\n<div class=\"modal-body\">\n  <div class=\"form-login-register\">\n    <form ng-submit=\"$ctrl.register()\">\n      <fieldset ng-disabled=\"$ctrl.loading\">\n        <div class=\"form-body\">\n          <div class=\"form-row\">\n            <p><translate>You can create your own lucky drawing list after registration</translate></p>\n          </div>\n          <div class=\"form-row\">\n            <label for=\"field-company\" class=\"form-label\"><translate>Your Name</translate></label>\n\n            <div class=\"form-controls\">\n              <i class=\"ion-person\"></i>\n\n              <input type=\"text\" class=\"field\" name=\"field-company\" id=\"field-company\" value=\"\" ng-attr-placeholder=\"{{\'ABC Company\' | translate}}\" autocomplete=\"off\" required autofocus ng-model=\"$ctrl.company\">\n            </div>\n            \n          </div>\n          \n\n          <div class=\"form-row\">\n            <label for=\"field-email\" class=\"form-label\"><translate>Email</translate></label>\n\n            <div class=\"form-controls\">\n              <i class=\"ion-email\"></i>\n\n              <input type=\"text\" class=\"field\" name=\"field-email\" id=\"field-email\" value=\"\" ng-attr-placeholder=\"{{\'abcd@gmail.com\' | translate}}\" required ng-model=\"$ctrl.email\" autocomplete=\"off\">\n            </div>\n            \n          </div>\n          \n\n          <div class=\"form-row\">\n            <label for=\"field-phone\" class=\"form-label\"><translate>Phone</translate></label>\n\n            <div class=\"form-controls\">\n              <i class=\"ion-android-phone-portrait\"></i>\n\n              <input type=\"text\" class=\"field\" name=\"field-phone\" id=\"field-phone\" value=\"\" ng-attr-placeholder=\"0123456789\" required ng-model=\"$ctrl.phone\" autocomplete=\"off\">\n            </div>\n            \n          </div>\n          \n\n          <div class=\"form-row\">\n            <label for=\"field-password\" class=\"form-label\"><translate>Password</translate></label>\n\n            <div class=\"form-controls\">\n              <i class=\"ion-android-lock\"></i>\n\n              <input type=\"password\" class=\"field field-password\" name=\"field-password\" id=\"field-password\" value=\"\" placeholder=\"*******\" autocomplete=\"off\" required ng-model=\"$ctrl.password\">\n\n            </div>\n            \n\n            <div class=\"checkbox\">\n              <input type=\"checkbox\" name=\"field-updates\" id=\"field-updates\" ng-model=\"$ctrl.newsletter\">\n              <label class=\"form-label\" for=\"field-updates\">\n                {{\'Send me LuckyDraw newsletters\' | translate}}\n              </label>\n            </div>\n            \n            <p class=\"form-error\">{{$ctrl.error}}</p>\n          </div>\n          \n        </div>\n        \n\n        <div class=\"form-actions\">\n          <button type=\"submit\" class=\"btn btn-yellow form-btn\">\n            <translate ng-hide=\"$ctrl.loading\">Register</translate>\n            <span class=\"ion-load-a rotation\" ng-show=\"$ctrl.loading\"></span>\n          </button>\n        </div>\n        \n      </fieldset>\n    </form>\n  </div>\n  \n\n  <a ui-sref=\"login\" class=\"link-return\" ng-click=\"$ctrl.analytics.log(\'ui_action\', \'Execute\', \'Link - Login\')\">\n    <i class=\"ion-arrow-right-b\"></i>\n    <span>\n							<translate>Already have an account?</translate> <strong><translate>Login</translate>.</strong>\n						</span>\n  </a>\n</div>\n\n");
    $templateCache.put("components/modal-survey.html", "<div class=\"modal-header\" id=\"modal-Login\">\n  <h4 class=\"modal-title\">\n		<translate>Hi there, what are you doing with Luckydraw.live?</translate>\n	</h4>\n  \n\n  \n</div>\n\n<div class=\"modal-body\">\n  <div class=\"form-login-register form-login\">\n    <div>\n        <i class=\"ion-ios-list\"></i>\n        <a ng-click=\"$ctrl.select(\'Planning Event\')\"><translate>I\'m planning a lucky draw event</translate></a>\n        <hr>\n    </div>\n    <div>\n        <i class=\"ion-social-usd\"></i>\n        <a ng-click=\"$ctrl.select(\'Play Game\')\"><translate>I want to play online lucky draw</translate></a>\n        <hr>\n    </div>\n    <div>\n        <i class=\"ion-calculator\"></i>\n        <a ng-click=\"$ctrl.select(\'Random Number\')\"><translate>I need some random numbers</translate></a>\n    </div>\n  </div>\n  \n</div>\n\n");
    $templateCache.put("components/modal-theme.html", "<div class=\"modal-header\" id=\"modal-Theme\">\n  <h4 class=\"modal-title\">\n						<i class=\"ion-android-color-palette\"></i>\n						<translate>Change theme</translate>\n					</h4>\n  \n\n  <button type=\"button\" class=\"close\" ng-click=\"$ctrl.dismiss()\">\n    <i class=\"ion-close\"></i>\n  </button>\n</div>\n\n\n<div class=\"modal-body\">\n  <h6><translate>Select a color theme that match your brand or event</translate></h6>\n\n  <ul class=\"theme-previews\">\n    <li class=\"theme-preview theme-preview-purple\" ng-repeat=\"(theme, name) in $ctrl.themes\" ng-class=\"\'theme-preview-\' + theme + ($ctrl.theme == theme ? \' current\' : \'\')\">\n      <a href=\"\" ng-click=\"$ctrl.changeTheme(theme)\">\n        <div class=\"theme-preview-inner\">\n          <i class=\"ion-checkmark-circled\"></i>\n        </div>\n        \n\n        <h6 class=\"theme-preview-title\">{{name | translate}}</h6>\n        \n      </a>\n    </li>\n  </ul>\n  \n  <div class=\"cleafix\"></div>\n</div>\n\n");
    $templateCache.put("templates/main.html", "<id-lucky-draw data=\"$ctrl.data\" setting=\"$ctrl.setting\" results=\"$ctrl.results\" is-limited=\"$ctrl.isLimited(r)\"></id-lucky-draw>\n");
    $templateCache.put("templates/mod.html", "<header class=\"header\" ng-if=\"!$ctrl.lockUI\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      \n      <div class=\"logo-zone hidden\">\n        <a ng-if=\"!$ctrl.user.editing.infologo && !$ctrl.setting.info.logo\" class=\"logo default-logo\" ngf-select=\"$ctrl.uploadLogo($file)\" ngf-accept=\"\'image/*\'\" ngf-pattern=\"\'image/*\'\" ngf-resize=\"{height: 200}\">\n          <span ng-class=\"$ctrl.ux.cssIntro.infologo\"><translate>Logo</translate></span>\n        </a>\n        <a ng-if=\"!$ctrl.user.editing.infologo && $ctrl.setting.info.logo\" class=\"logo\" ng-click=\"$ctrl.removeLogo()\">\n          <img class=\"light-on\" ng-src=\"{{$ctrl.setting.info.logo}}\">\n        </a>\n        <a ng-if=\"$ctrl.user.editing.infologo\" class=\"logo default-logo\">\n          <span class=\"ion-load-a rotation\"></span>\n        <a>\n      </a></a></div>\n      \n\n      <div class=\"col-xs-12\">\n        \n        <h1>\n          <a ng-click=\"$ctrl.user.editing.infoname = true\" ng-if=\"!$ctrl.user.editing.infoname\">\n            <span class=\"event-name\" ng-style=\"{\'color\': $ctrl.setting.colors.name}\">\n              {{$ctrl.setting.info.name || ($ctrl.defaultSetting.info.name | translate)}}\n              <i class=\"btn-customize ion ion-compose\" ng-class=\"$ctrl.ux.cssIntro.infoname\"></i>\n            </span>\n          </a>\n          <span ng-if=\"!$ctrl.user.editing.infoname\">\n            <color-picker class=\"btn-color-picker\" ng-class=\"$ctrl.ux.cssIntro.colorsname\" event-api=\"$ctrl.colorEvents\" options=\"$ctrl.clpkopbr\" ng-model=\"$ctrl.setting.colors.name\">\n            </color-picker>\n          </span>\n          \n          <form ng-submit=\"$ctrl.saveSetting(\'infoname\')\" class=\"form-inline\" ng-if=\"$ctrl.user.editing.infoname\">\n            <div class=\"input-group\">\n              <input type=\"text\" autofocus class=\"form-control\" id=\"setting-infoname\" ng-init=\"$ctrl.ux.focus(\'#setting-infoname\')\" ng-blur=\"$ctrl.saveSetting(\'infoname\')\" placeholder=\"{{\'Your Event Name\' | translate}}\" value=\"{{$ctrl.setting.info.name}}\" ng-model=\"$ctrl.setting.info.name\" ng-change=\"$ctrl.changed.infoname = true\">\n              <div class=\"input-group-btn\">\n                <button type=\"submit\" class=\"btn btn-primary\"><span class=\"ion ion-ios-checkmark-empty\"></span></button>\n              </div>\n            </div>\n          </form>\n				</h1>\n        \n\n        <div class=\"header-content hidden\">\n          \n          <a ng-click=\"$ctrl.user.editing.infocompany = true\" ng-if=\"!$ctrl.user.editing.infocompany\">\n            <span class=\"link-company\" ng-style=\"$ctrl.ux.style($ctrl.setting.colors.action_msg, 1)\">\n              {{$ctrl.setting.info.company || (\'...\' | translate)}}\n              <i class=\"btn-customize ion ion-compose\" ng-class=\"$ctrl.ux.cssIntro.infocompany\"></i>\n            </span>\n          </a>\n          \n          <form ng-submit=\"$ctrl.saveSetting(\'infocompany\')\" class=\"form-inline\" ng-if=\"$ctrl.user.editing.infocompany\">\n            <div class=\"input-group\">\n              <input type=\"text\" autofocus class=\"form-control\" id=\"setting-infocompany\" ng-init=\"$ctrl.ux.focus(\'#setting-infocompany\')\" ng-blur=\"$ctrl.saveSetting(\'infocompany\')\" placeholder=\"{{\'Lucky Draw\' | translate}}\" value=\"{{$ctrl.setting.info.company}}\" ng-model=\"$ctrl.setting.info.company\" ng-change=\"$ctrl.changed.infocompany = true\">\n              <div class=\"input-group-btn\">\n                <button type=\"submit\" class=\"btn btn-primary\"><span class=\"ion ion-ios-checkmark-empty\"></span></button>\n              </div>\n            </div>\n          </form>\n          \n        </div>\n      </div>\n    </div>\n  </div>\n</header>\n\n<div class=\"main-padding\" ng-if=\"!$ctrl.lockUI\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <section class=\"section section-prize\">\n          <header class=\"section-head\" ng-class=\"$ctrl.animClass.setprize\">\n            \n            <div class=\"coin\">\n              <img class=\"prize-image\" ng-repeat=\"prize in $ctrl.prizes\" ng-src=\"{{prize.image}}\" ng-show=\"$ctrl.prizeIndex == $index && prize.showimage\">\n            </div>\n            \n          </header>\n\n          \n          <div class=\"section-message\">\n            <h2 ng-style=\"$ctrl.ux.style($ctrl.setting.colors.action_msg, 1)\" ng-class=\"$ctrl.animClass.message\">\n              <span class=\"winner-name\">\n                <translate>Winner Name Here</translate>\n              </span>\n              <span>\n                <color-picker class=\"btn-color-picker\" ng-class=\"$ctrl.ux.cssIntro.colorsaction_msg\" event-api=\"$ctrl.colorEvents\" options=\"$ctrl.clpkoptl\" ng-model=\"$ctrl.setting.colors.action_msg\">\n                </color-picker>\n              </span>\n            </h2>\n          </div>\n          \n\n          <div class=\"section-body\" ng-class=\"$ctrl.animClass.setprize\">\n            <div class=\"section-body-inner section-body-inner-primary\">\n              <ul class=\"slots\">\n                \n                <a ng-click=\"$ctrl.modals.open(\'Id\')\">\n                  <li class=\"slot\" ng-repeat=\"n in $ctrl.machineSlots\" index=\"$index\" ng-class=\"\'slot-1of\'+$ctrl.slotsCss + \' state-\'+$ctrl.state\">\n                    <div class=\"slot-item\">\n                      <div class=\"slot-number\">\n                        <span ng-class=\"$ctrl.state !== \'ready\' ? \'not-available\' : \'available\'\"><i class=\"btn-customize ion ion-compose\" ng-class=\"$index === 0 ? $ctrl.ux.cssIntro.dataids : \'\'\"></i></span>\n                      </div>\n                    </div>\n                  </li>\n                </a>\n                \n              </ul>\n            </div>\n          </div>\n\n          <div class=\"section-actions\">\n            <div class=\"section-head-actions\">\n              \n              <a class=\"link-prev\" ng-class=\"$ctrl.state !== \'ready\' || $ctrl.prizeIndex <= 0 ? \'not-available\' : \'available\'\" ng-click=\"$ctrl.setPrize($ctrl.prizeIndex - 1)\">\n                <i class=\"ion-chevron-left\"></i>\n              </a>\n              \n  \n              \n              <a ng-click=\"$ctrl.modals.open(\'Prize\')\">\n                <span class=\"prize-text\">\n                  {{$ctrl.setting.prizes[$ctrl.prize.key] || ($ctrl.defaultSetting.prizes[$ctrl.prize.key] | translate)}}\n                  <i class=\"btn-customize ion ion-compose\" ng-class=\"$ctrl.ux.cssIntro.prizes\"></i>\n                </span>\n              </a>\n              \n  \n              \n              \n  \n              \n              <a class=\"link-next\" ng-class=\"$ctrl.state !== \'ready\' || $ctrl.prizeIndex >= $ctrl.prizes.length - 1 ? \'not-available\' : \'available\'\" ng-click=\"$ctrl.setPrize($ctrl.prizeIndex + 1)\">\n                <i class=\"ion-chevron-right\"></i>\n              </a>\n              \n            </div>\n\n            <div class=\"section-button\">\n              <div class=\"state-ready\">\n                <a class=\"btn btn-yellow btn-yellow-secondary\" ng-click=\"$ctrl.goPresentation()\" ng-mouseover=\"$ctrl.ux.mOver(\'pres\')\" ng-mouseleave=\"$ctrl.ux.mLeave(\'pres\')\">\n                  <span class=\"keyboard-key pres-key\" ng-if=\"$ctrl.ux.hint.pres\"><span>F10</span></span>\n                  <translate>Presentation</translate>\n                </a>\n                <a ng-click=\"$ctrl.modals.open(\'Button\')\">\n                  <i class=\"btn-customize yellow ion ion-compose\" ng-class=\"$ctrl.ux.cssIntro.buttons\"></i>\n                </a>\n              </div>\n            </div> \n\n          </div> \n        </section>\n      </div>\n    </div>\n  </div>\n</div> \n\n<app-footer light-off=\"false\"></app-footer>\n\n<hot-keys enter=\"\" nextstep=\"$ctrl.goPresentation()\" confirm=\"\" cancel=\"\" prev=\"$ctrl.setPrevPrize()\" next=\"$ctrl.setNextPrize()\">\n</hot-keys>");
    $templateCache.put("templates/presentation.html", "<id-lucky-draw ng-if=\"!$ctrl.lockUI\" data=\"$ctrl.data\" setting=\"$ctrl.setting\" results=\"$ctrl.results\" is-limited=\"$ctrl.isLimited(r)\"></id-lucky-draw>\n");
    $templateCache.put("templates/tab-about.html", "<ol class=\"tab-items\">\n  <li class=\"tab-item\">\n    <h6>What is LuckyDraw.live?</h6>\n    <p>LuckyDraw.live is the world\'s most sophisticated random number generator.</p>\n  </li>\n\n  <li class=\"tab-item\">\n    <h6>What kind of events this Lucky Draw app is good for?</h6>\n    <p>It could be a marketing program, a sales event, a customer rewarding program, a year end party...</p>\n  </li>\n\n  <li class=\"tab-item\">\n    <h6>Who are you guys?</h6>\n    <p>We\'re a team of entrepreneurs who want to build Internet products that make life easier.</p>\n  </li>\n\n  <li class=\"tab-item\">\n    <h6>Where are you based?</h6>\n    <ul>\n      <li>We\'re based in Hanoi, Vietnam.</li>\n      <li>Address: 8th Floor, 1st Luong Yen Street, Hanoi, Vietnam.</li>\n      <li>Contact number: +84 904-131-696</li>\n      <li>Email: hi@luckydraw.live</li>\n    </ul>\n  </li>\n</ol>\n");
    $templateCache.put("templates/tab-contact.html", "<ol class=\"tab-items\">\n</ol>\n\n");
    $templateCache.put("templates/tab-faq.html", "<ol class=\"tab-items\">\n  <li class=\"tab-item\">\n    <h6>What are keyboard shorcuts?</h6>\n    <ul>\n      <li><strong>ENTER</strong> to Start/Stop Spinning.</li>\n      <li><strong>PLUS key (+)</strong> to Confirm.</li>\n      <li><strong>MINUS key (-)</strong> to Reject.</li>\n      <li><strong>LEFT/RIGHT</strong> to switch between prizes.</li>\n    </ul>\n  </li>\n\n  <li class=\"tab-item\">\n    <h6>Does LuckyDraw.live work offline?</h6>\n    <p>You can disconnect from the Internet  right after switching to Presentation mode. LuckyDraw.live will then work in offline mode. Drawing results will be synced to the server when you\'re connected later.</p>\n  </li>\n\n  <li class=\"tab-item\">\n    <h6>Can I customize the drawing interface?</h6>\n    <p>Everything is customizable. Just <a ng-click=\"$ctrl.modals.open(\'Register\')\">register an account</a> and login to see how it well fit your demand.</p>\n  </li>\n\n  <li class=\"tab-item\">\n    <h6>What are the lucky drawing rules?</h6>\n    <ul>\n      <li>Everytime you hit F5 to fully refresh your browser, a new drawing session is created.</li>\n      <li>Each ID only got lucky once in a drawing session. After an ID is selected for a prize, it will be excluded from the next drawing turns of the running session.</li>\n    </ul>\n  </li>\n\n  <li class=\"tab-item\">\n    <h6>My ID list has numeric and alphabet characters. Will it work?</h6>\n    <p>Sure. An ID can have any kind of characters. Even !@#$%^* will work. And the max acceptable length for a single ID is 23 characters.</p>\n  </li>\n\n  <li class=\"tab-item\">\n    <h6>What\'s the price?</h6>\n    <p>Please <a ng-click=\"$ctrl.modals.open(\'Payment\')\">click here</a> to check the price (you will be asked to login).</p>\n  </li>\n\n  <li class=\"tab-item\">\n    <h6>Can I request for refund?</h6>\n    <p>You can open an account and try everything within LuckyDraw.live at no cost, no limitation. Except drawing results are not saved in the Presentation mode. We assume that you\'re fully sold once you decide to make your payment, so we offer no refund policy.</p>\n  </li>\n</ol>\n\n");
    $templateCache.put("templates/tab-policy.html", "<ol class=\"tab-items\">\n  <li class=\"tab-item\">\n    <h6>Your data is your private property!</h6>\n    <p>The list of IDs/Names and Photos you upload to LuckyDraw.live stays completely private to your own use. We have no usage right to your data.</p>\n  </li>\n\n  <li class=\"tab-item\">\n    <h6>We use website tracking tools</h6>\n    <p>We use website tracking software to understand website traffic and usage pattern. This helps us improve the design and functionality of LuckyDraw.live</p>\n  </li>\n\n  <li class=\"tab-item\">\n    <h6>We have cookies</h6>\n    <p>LuckyDraw.live use cookie only to support your own use. It stores your application settings and drawing data that\'s needed for offline working.</p>\n  </li>\n</ol>\n");
    $templateCache.put("templates/tab-term.html", "<ol class=\"tab-items\">\n  <li class=\"tab-item\">\n    <h6>Prohibited Uses</h6>\n    <p>Effective from December 1, 2016.</p>\n    <p>By accessing this website, you acknowledge and agree that you may use our site only for lawful purposes. You may not use our site for any unlawful purposes, including but not limited to:</p>\n    <ul>\n      <li>In any way that breaches any applicable local, national or international law or regulation;</li>\n      <li>In any way to send, knowingly receive, upload, download, use or re-use any data which does not comply with any applicable local, national or international law or regulation;</li>\n      <li>In any way that is unlawful or fraudulent, or has any unlawful or fraudulent purpose or effect;</li>\n      <li>In any way for the purpose of violance;</li>\n      <li>In any way that harm or attempting to harm any human or any living animal;</li>\n      <li>In any way that be likely to harass, upset, embarrass, alarm, annoy or deceive any other person;</li>\n      <li>In any way for the purpose of promoting illegal activity or discrimination based on race, sex, religion, nationality, disability, sexual orientation or age.</li>\n      <p>Failure to comply with this acceptable use policy will result in immediate withdrawal of your right to use our site. We may disclosure of such information to law enforcement authorities, and we may take further legal action against you as we reasonably feel is necessary.</p>\n    </ul>\n  </li>\n\n  <li class=\"tab-item\">\n    <h6>Change to the acceptable use policy</h6>\n    <p>We may revise this acceptable use policy at any time by amending this page. By accessing this website, you are expected to check this page from time to time to take notice of any changes we make, as they are legally binding on you. Some of the provisions contained in this acceptable use policy may also be superseded by provisions or notices published elsewhere on our site.</p>\n  </li>\n</ol>\n");
    $templateCache.put("templates/payment-form/payment-button.html", "            <button type=\"submit\" class=\"btn-alt btn-orange\">\n              <span ng-switch on=\"$ctrl.user.status()\">\n                <span ng-switch-when=\"Free Account\"><translate>Pay to Upgrade</translate></span>\n                <span ng-switch-when=\"Paid Account\"><translate>Pay to Extend</translate></span>\n                <span ng-switch-when=\"Expired Account\"><translate>Pay to Extend</translate></span>\n              </span>\n            </button>");
    $templateCache.put("templates/payment-form/payment-intro.html", "            <p>\n              <span ng-if=\"$ctrl.appState.name !== \'presentation\'\" ng-switch on=\"$ctrl.user.status()\">\n                <span ng-switch-when=\"Free Account\"><translate>Upgrade to Remove Your Account Limits</translate></span>\n                <span ng-switch-when=\"Paid Account\"><translate>Pay to Extend Usage Time</translate></span>\n                <span ng-switch-when=\"Expired Account\"><translate>Pay to Extend Usage Time</translate></span>\n              </span>\n              <span ng-if=\"$ctrl.appState.name === \'presentation\'\" ng-switch on=\"$ctrl.user.status()\">\n                <span ng-switch-when=\"Free Account\"><translate>Upgrade to Continue Lucky Drawing</translate></span>\n                <span ng-switch-when=\"Paid Account\"><translate>Pay to Extend Lucky Drawing Time</translate></span>\n                <span ng-switch-when=\"Expired Account\"><translate>Pay to Extend Lucky Drawing Time</translate></span>\n              </span>\n            </p>\n\n            <img src=\"/images/temp/diamond-icon.svg\" height=\"55\" width=\"65\" alt=\"\">\n\n            <h2 class=\"subscription-price\"><translate>Service Price</translate></h2>\n\n            <h6>\n							<translate>Usage Days</translate>\n              <br>\n              <em><translate>Service Price Guide</translate></em>\n						</h6>");
    $templateCache.put("templates/payment-form/paypal.html", "    <form ng-attr-action=\"{{$ctrl.paypal.action}}\" method=\"post\" target=\"_top\" ng-submit=\"$ctrl.submit()\">\n      \n      \n\n      <div class=\"form-body\">\n        <div class=\"form-alert\">\n          <div class=\"subscription\">\n            \n            <p>\n              <span ng-if=\"$ctrl.appState.name !== \'presentation\'\" ng-switch on=\"$ctrl.user.status()\">\n                <span ng-switch-when=\"Free Account\"><translate>Upgrade to Remove Your Account Limits</translate></span>\n                <span ng-switch-when=\"Paid Account\"><translate>Pay to Extend Usage Time</translate></span>\n                <span ng-switch-when=\"Expired Account\"><translate>Pay to Extend Usage Time</translate></span>\n              </span>\n              <span ng-if=\"$ctrl.appState.name === \'presentation\'\" ng-switch on=\"$ctrl.user.status()\">\n                <span ng-switch-when=\"Free Account\"><translate>Upgrade to Continue Lucky Drawing</translate></span>\n                <span ng-switch-when=\"Paid Account\"><translate>Pay to Extend Lucky Drawing Time</translate></span>\n                <span ng-switch-when=\"Expired Account\"><translate>Pay to Extend Lucky Drawing Time</translate></span>\n              </span>\n            </p>\n\n            <img src=\"/images/temp/diamond-icon.svg\" height=\"55\" width=\"65\" alt=\"\">\n\n            <h2 class=\"subscription-price\">{{$ctrl.paypal.prices[$ctrl.package] | currency:\"USD $\"}}</h2>\n\n            <h6 style=\"display: none\">\n              <label for=\"event1day\" class=\"formradio\">\n                <input type=\"radio\" ng-model=\"$ctrl.package\" id=\"event1day\" value=\"event1day\" selected=\"selected\">\n                {{\'1 day event\' | translate}}\n              </label>\n            </h6>\n\n            <h6>\n              {{\'estimated usage time\' | translate}} \n              <span>{{$ctrl.timingStart | amDateFormat:(\'shortDateTimeFormat\' | translate)}}</span> \n              {{\'until\' | translate}} \n              <span>{{$ctrl.timingStart + ($ctrl.times[$ctrl.package] * 86400 * 1000) | amDateFormat:(\'shortDateTimeFormat\' | translate)}}</span>\n						</h6>\n            \n\n            \n            <input type=\"hidden\" name=\"cmd\" value=\"_s-xclick\">\n            <input type=\"hidden\" name=\"hosted_button_id\" ng-value=\"$ctrl.paypal.buttons[$ctrl.package]\">\n            <img alt=\"\" border=\"0\" src=\"https://www.paypalobjects.com/en_US/i/scr/pixel.gif\" width=\"1\" height=\"1\">\n            \n            <input type=\"hidden\" name=\"custom\" ng-value=\"$ctrl.custom\">\n            <input type=\"hidden\" name=\"email\" ng-value=\"$ctrl.email\">\n            <button ng-if=\"$ctrl.userService.authenticated\" type=\"submit\" class=\"btn-alt btn-orange\">\n                <translate>Pay Now</translate>\n            </button>\n            <button ng-if=\"!$ctrl.userService.authenticated\" type=\"button\" class=\"btn-alt btn-orange\" ng-click=\"$ctrl.modals.isAuthenticated(\'register\', \'Payment\')\">\n                <translate>Register Now</translate>\n            </button>\n\n            <br>\n\n            <img src=\"/images/temp/cards.jpg\" height=\"21\" width=\"261\" alt=\"\">\n\n            <br><br>\n            <translate>Paypal Payment Guide</translate>\n\n          </div>\n          \n        </div>\n        \n      </div>\n      \n      \n      </form>\n");
    $templateCache.put("templates/payment-form/soha.html", "    <form ng-submit=\"$ctrl.submit()\">\n      \n      \n\n      <div class=\"form-body\">\n        <div class=\"form-alert\">\n          <div class=\"subscription\">\n            \n            <p>\n              <span ng-if=\"$ctrl.appState.name !== \'presentation\'\" ng-switch on=\"$ctrl.user.status()\">\n                <span ng-switch-when=\"Free Account\"><translate>Upgrade to Remove Your Account Limits</translate></span>\n                <span ng-switch-when=\"Paid Account\"><translate>Pay to Extend Usage Time</translate></span>\n                <span ng-switch-when=\"Expired Account\"><translate>Pay to Extend Usage Time</translate></span>\n              </span>\n              <span ng-if=\"$ctrl.appState.name === \'presentation\'\" ng-switch on=\"$ctrl.user.status()\">\n                <span ng-switch-when=\"Free Account\"><translate>Upgrade to Continue Lucky Drawing</translate></span>\n                <span ng-switch-when=\"Paid Account\"><translate>Pay to Extend Lucky Drawing Time</translate></span>\n                <span ng-switch-when=\"Expired Account\"><translate>Pay to Extend Lucky Drawing Time</translate></span>\n              </span>\n            </p>\n\n            <img src=\"/images/temp/diamond-icon.svg\" height=\"55\" width=\"65\" alt=\"\">\n\n            <h2 class=\"subscription-price\">{{$ctrl.soha.prices[$ctrl.package] | currency:\"\":0}} đ</h2>\n\n            <h6 style=\"display: none\">\n              <label for=\"event1day\" class=\"formradio\">\n                <input type=\"radio\" ng-model=\"$ctrl.package\" id=\"event1day\" value=\"event1day\" selected=\"selected\">\n                {{\'1 day event\' | translate}}\n              </label>\n            </h6>\n\n            <h6>\n              {{\'estimated usage time\' | translate}} \n              <span>{{$ctrl.timingStart | amDateFormat:(\'shortDateTimeFormat\' | translate)}}</span> \n              {{\'until\' | translate}} \n              <span>{{$ctrl.timingStart + ($ctrl.times[$ctrl.package] * 86400 * 1000) | amDateFormat:(\'shortDateTimeFormat\' | translate)}}</span>\n						</h6>\n            \n\n            <button ng-if=\"$ctrl.userService.authenticated\" type=\"submit\" class=\"btn-alt btn-orange\">\n                <translate>Pay Now</translate>\n            </button>\n            <button ng-if=\"!$ctrl.userService.authenticated\" type=\"button\" class=\"btn-alt btn-orange\" ng-click=\"$ctrl.modals.isAuthenticated(\'register\', \'Payment\')\">\n                <translate>Register Now</translate>\n            </button>\n\n            <br>\n\n            <img src=\"/images/temp/cards.jpg\" height=\"21\" width=\"261\" alt=\"\">\n\n            <br><br>\n            {{$ctrl.paymentGuide | translate}}\n\n          </div>\n          \n        </div>\n        \n      </div>\n      \n      \n      </form>\n");
    $templateCache.put("templates/vi/tab-about.html", "<ol class=\"tab-items\">\n  <li class=\"tab-item\">\n    <h6>LuckyDraw.live là gì?</h6>\n    <p>LuckyDraw.live là dịch vụ thuê bao phần mềm Quay số trúng thưởng.</p>\n  </li>\n\n  <li class=\"tab-item\">\n    <h6>Có thể sử dụng phần mềm LuckyDraw cho mục đích gì?</h6>\n    <p>Anh/chị có thể sử dụng LuckyDraw.live để tổ chức quay số trúng thưởng trong các sự kiện marketing, tri ân khách hàng hoặc sự kiện cuối năm (Year End Party)...</p>\n  </li>\n\n  <li class=\"tab-item\">\n    <h6>Làm thế nào để liên hệ với LuckyDraw.live?</h6>\n    <ul>\n      <li>Địa chỉ: Tầng 8, số 1 Lương Yên, Hà Nội.</li>\n      <li>Điện thoại: 0904 131 696</li>\n      <li>Email: hi@luckydraw.live</li>\n    </ul>\n  </li>\n</ol>\n");
    $templateCache.put("templates/vi/tab-faq.html", "<ol class=\"tab-items\">\n  <li class=\"tab-item\">\n    <h6>Quay số bằng bàn phím như thế nào?</h6>\n    <ul>\n      <li><strong>Enter</strong> để Bắt đầu hoặc Dừng quay số.</li>\n      <li><strong>Dấu cộng (+)</strong> để Xác nhận kết quả một lần quay số.</li>\n      <li><strong>Dấu trừ (-)</strong> để Hủy bỏ kết quả một lần quay.</li>\n      <li><strong>Phím Trái / Phải</strong> để chuyển qua lại các giải thưởng.</li>\n    </ul>\n  </li>\n\n  <li class=\"tab-item\">\n    <h6>LuckyDraw.live có hoạt động được khi không có Internet?</h6>\n    <p>Sau khi thiết lập mã quay thưởng và các giải thưởng, anh/chị chuyển sang chế độ Trình chiếu để bắt đầu. Sau đó anh/chị có thể ngắt kết nối và phần mềm vẫn hoạt động bình thường.</p>\n  </li>\n\n  <li class=\"tab-item\">\n    <h6>Có thể thay logo, đổi hình nền hoặc thay ảnh các phần thưởng được không?</h6>\n    <p>Anh/chị có thể chủ động chỉnh sửa tất cả mọi thứ cho phù hợp với sự kiện. Sau khi <a ng-click=\"$ctrl.modals.open(\'Register\')\">đăng ký tài khoản</a> và đăng nhập, anh chị sẽ nhìn thấy màn hình chỉnh sửa của LuckyDraw.live</p>\n  </li>\n\n  <li class=\"tab-item\">\n    <h6>Nguyên tắc hoạt động của LuckyDraw.live?</h6>\n    <ul>\n      <li>Mỗi lần anh/chị đăng nhập vào tài khoản, LuckyDraw.live sẽ tính là một phiên quay thưởng.</li>\n      <li>Mỗi mã số quay thưởng (ID) chỉ được nhận một giải thưởng. ID đã trúng một giải sẽ được loại trừ khỏi các lần quay thưởng tiếp theo của cùng một phiên quay thưởng.</li>\n    </ul>\n  </li>\n\n  <li class=\"tab-item\">\n    <h6>Danh sách quay thưởng của tôi có cả chữ số và chữ cái, độ dài 20 ký tự thì có quay được không?</h6>\n    <p>LuckyDraw chấp nhận tất cả các ký tự đặc biệt, bao gồm cả dấu !@#$%^*. Đồng thời phần mềm tự động điều chỉnh các ô quay số cho phù hợp với độ dài mã số quay thưởng, tối đa 23 ký tự.</p>\n  </li>\n\n  <li class=\"tab-item\">\n    <h6>Chi phí thuê bao phần mềm là bao nhiêu?</h6>\n    <p>Vui lòng <a ng-click=\"$ctrl.modals.open(\'Payment\')\">nhấn vào đây</a> để xem phí sử dụng (anh/chị cần đăng nhập tài khoản trước).</p>\n  </li>\n</ol>\n\n");
}]);
angular
    .module('app')
    .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider, $modalStateProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider
        .when(/presentation$/, '/presentation/')
        .when(/customize\/$/, '/customize')
        .when(/v[0-9]+\/(.*)/, '/$1')
        .otherwise('/');

    $stateProvider
        .state('app', {
            url: '/',
            templateUrl: 'templates/main.html',
            controller: 'MainController',
            controllerAs: '$ctrl',
            resolve: {}
        })
        .state('customize', {
            url: '/customize',
            templateUrl: 'templates/mod.html',
            controller: 'ModController',
            controllerAs: '$ctrl',
            resolve: {
                auth: ["authService", function(authService) {
                    return authService.$requireSignIn();
                }]
            }
        })
        .state('presentation', {
            url: '/presentation/:sessionId',
            templateUrl: 'templates/presentation.html',
            controller: 'PresentationController',
            controllerAs: '$ctrl',
            resolve: {
                auth: ["authService", function(authService) {
                    return authService.$requireSignIn();
                }],
                results: ["auth", "resultService", "$stateParams", function(auth, resultService, $stateParams) {
                    var sessionId = $stateParams.sessionId;
                    return resultService.load('presentation', sessionId);
                }]
            }
        });

    $modalStateProvider
        .state('login', {
            parent: 'app',
            url: 'login',
            component: 'modalLogin',
            size: 'login-register'
        })
        .state('register', {
            parent: 'app',
            url: 'register',
            component: 'modalRegister',
            size: 'login-register'
        })
        .state('forgotPassword', {
            parent: 'app',
            url: 'forgot-password',
            component: 'modalForgotPassword',
            size: 'login-register'
        });
}