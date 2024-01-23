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
                auth: function(authService) {
                    return authService.$requireSignIn();
                }
            }
        })
        .state('presentation', {
            url: '/presentation/:sessionId',
            templateUrl: 'templates/presentation.html',
            controller: 'PresentationController',
            controllerAs: '$ctrl',
            resolve: {
                auth: function(authService) {
                    return authService.$requireSignIn();
                },
                results: function(auth, resultService, $stateParams) {
                    var sessionId = $stateParams.sessionId;
                    return resultService.load('presentation', sessionId);
                }
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