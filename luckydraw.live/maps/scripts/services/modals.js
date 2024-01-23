"use strict";
angular
    .module('app')
    .factory('modalService', function($uibModal, $state, userService, Analytics) {
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
    });