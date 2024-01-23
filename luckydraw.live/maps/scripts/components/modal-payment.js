'use strict'
angular
    .module('app')
    .component('modalPayment', {
        templateUrl: 'components/modal-payment.html',
        bindings: {
            modalInstance: '<',
            resolve: '<',
            close: '&',
            dismiss: '&',
            error: '<'
        },
        controller: PaymentController
    })
    .component('paymentIntro', {
        templateUrl: 'templates/payment-form/payment-intro.html',
        bindings: {},
        controller: PaymentIntroController
    })
    .component('paymentButton', {
        templateUrl: 'templates/payment-form/payment-button.html',
        bindings: {},
        controller: PaymentButtonController
    })
    .component('paypalPaymentForm', {
        templateUrl: 'templates/payment-form/paypal.html',
        bindings: {},
        controller: PaypalPaymentController
    })
    .component('sohaPaymentForm', {
        templateUrl: 'templates/payment-form/soha.html',
        bindings: {},
        controller: SohaPaymentController
    })

function PaymentController($interval, $state, modalService, userdataService, i18nService, paymentService, devOps, $compile, $scope) {
    var $ctrl = this
    $ctrl.$onInit = function() {
        $ctrl.modals = modalService
        $ctrl.user = userdataService
        $ctrl.dismissCountDown = null

        var lang = i18nService.getLang()
        if (!paymentService.local[lang]) lang = devOps.runtime.language

        var directive = paymentService.local[lang] + '-payment-form'
        var html = '<' + directive + '></' + directive + '>'
        var newScope = $scope.$new(true, $scope)
        $('div#payment-form').html($compile(html)(newScope))
    }
}

function PaymentIntroController($state, userdataService) {
    var $ctrl = this
    $ctrl.$onInit = function() {
        $ctrl.appState = $state.current
        $ctrl.user = userdataService
    }
}

function PaymentButtonController(userdataService) {
    var $ctrl = this
    $ctrl.$onInit = function() {
        $ctrl.user = userdataService
    }
}

function PaypalPaymentController($sce, $state, $http, authService, Analytics, userService, userdataService, paymentService, modalService) {
    var $ctrl = this

    $ctrl.$onInit = function() {
        var auth = authService.$getAuth() || {}
        $ctrl.email = auth.email
        $ctrl.custom = auth.uid

        $ctrl.paypal = paymentService.provider.paypal
        $ctrl.paypal.action = $sce.trustAsResourceUrl($ctrl.paypal.url)
        $ctrl.package = 'event1day'

        $ctrl.modals = modalService
        $ctrl.appState = $state.current
        $ctrl.userService = userService
        $ctrl.user = userdataService

        $ctrl.timingStart = Date.now() + (10 * 60 * 1000) // estimate 10 mins to complete payment
        $ctrl.times = paymentService.times
    }

    $ctrl.submit = function() {
        paymentService.loadingIcon(true)
        Analytics.log('payment', 'Init', 'Paypal')
    }
}

function SohaPaymentController($state, $http, authService, Analytics, userService, userdataService, paymentService, modalService) {
    var $ctrl = this

    $ctrl.$onInit = function() {
        var auth = authService.$getAuth() || {}
        $ctrl.uid = auth.uid
        $ctrl.email = auth.email

        $ctrl.soha = paymentService.provider.soha
        $ctrl.paymentGuide = $ctrl.soha.ps + ' Payment Guide'
        $ctrl.package = 'event1day'

        $ctrl.modals = modalService
        $ctrl.appState = $state.current
        $ctrl.userService = userService
        $ctrl.user = userdataService

        $ctrl.timingStart = Date.now() + (10 * 60 * 1000) // estimate 10 mins to complete payment
        $ctrl.times = paymentService.times
    }

    $ctrl.submit = function() {
        paymentService.loadingIcon(true)
        Analytics.log('payment', 'Init', 'Soha')
        window.$luckydraw = window.$luckydraw || {}
        window.$luckydraw.initPayment = {
            uid: $ctrl.uid,
            contact_email: $ctrl.email,
            package: $ctrl.package
        }
        $http
            .post(paymentService.provider.soha.url, window.$luckydraw.initPayment)
            .then(function(response) {
                window.$luckydraw.initSoha = response.data
                if (response.data.url) {
                    window.location.href = response.data.url
                } else {
                    _err('response.data.url is null')
                }
            })
            .catch(_err)

        function _err(error) {
            window.$luckydraw.error = error
            paymentService.loadingIcon(false)
            modalService.alert('', 'Unable to init payment process. Please try again.')
            Analytics.log('error', 'Init Payment - Soha', error)
        }
    }
}