'use strict'
angular
    .module('app')
    .controller('MainController', MainController)

function MainController($rootScope, $http, $location, $translate, paymentService, modalService, defaultSettingService, defaultIdService, initSettingService, defaultResultService, i18nService, userdataService, Analytics) {
    var $ctrl = this

    $ctrl.$onInit = function() {
        $ctrl.data = defaultIdService()
        $ctrl.setting = initSettingService
        $ctrl.results = defaultResultService
        i18nService.setLang()
        $rootScope.theme = userdataService.getRuntimeOpt('theme', null)
        $rootScope.background = defaultSettingService.info.background
        Analytics.log('visit_home')
        paymentReturn()
    }

    $ctrl.isLimited = function(r) {
        return false
    }

    /**
     * Check payment return from provider
     */
    function paymentReturn() {
        var params = $location.search() || {}
        params.referrer = document.referrer
        window.$luckydraw = window.$luckydraw || {}
        window.$luckydraw.paymentReturn = params
        var ps = (params.referrer && params.amount) ? 'soha' : ''
        if (ps) {
            $http
                .post(paymentService.provider[ps].ipn, params)
                .then(function(response) {
                    if (response.data.ok) {
                        window.location.href = '/customize'
                    } else {
                        $('#loader').fadeOut()
                    }
                })
                .catch(function(e) {
                    $('#loader').fadeOut()
                    modalService.alert('', $translate.instant('Please contact LuckyDraw to manually activate your payment'))
                    Analytics.log('error', 'Process Payment', params)
                })
        } else {
            setTimeout(function() {
                $('#loader').fadeOut()
            }, 500)
        }
    }
}