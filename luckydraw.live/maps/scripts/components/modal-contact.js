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