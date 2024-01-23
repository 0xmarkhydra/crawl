"use strict";
angular
    .module('app')

    .factory('Analytics', function($window, devOps, authService, trackingEvents) {
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
    })

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