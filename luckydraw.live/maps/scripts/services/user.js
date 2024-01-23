"use strict";
angular
    .module('app')

    /**
     * userdataService
     */
    .factory('userdataService', function($firebaseObject, firebaseRef, initSettingService, authService, devOps, modalService, uxService, $q, Analytics) {
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
    })

    /**
     * userService
     */
    .factory('userService', function(authService, firebaseRef, devOps, Analytics, $uibModal, $window, $rootScope) {
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
    });