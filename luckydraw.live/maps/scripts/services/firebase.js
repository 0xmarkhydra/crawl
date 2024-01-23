"use strict";
angular
    .module('app')
    .factory('authService', function($firebaseAuth) {
        return $firebaseAuth();
    })
    .factory('firebaseRef', function(authService) {
        var firebaseRef = firebase.database().ref();

        return function() {
            var auth = authService.$getAuth();
            if (!auth) {
                throw new Error('User not logged in!');
            } else {
                return firebaseRef.child(auth.uid);
            }
        }
    });