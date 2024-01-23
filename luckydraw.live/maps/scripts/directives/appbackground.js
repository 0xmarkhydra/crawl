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