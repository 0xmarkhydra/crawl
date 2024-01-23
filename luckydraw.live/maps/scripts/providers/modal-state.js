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