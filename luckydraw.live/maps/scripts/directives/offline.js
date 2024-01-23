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