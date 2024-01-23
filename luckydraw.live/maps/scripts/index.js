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
    .config(function($qProvider, $translateProvider) {
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
    })
    .run(function($rootScope, $state, Fullscreen) {
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
    });

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