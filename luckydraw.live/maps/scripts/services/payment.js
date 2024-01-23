'use strict'
angular
    .module('app')

    .factory('paymentService', function($translate, $window) {
        var providers = {
            paypal: {
                url: 'https://www.paypal.com/cgi-bin/webscr',
                prices: {
                    event1day: 80,
                    event3days: 150,
                    event5days: 200
                },
                buttons: {
                    event1day: '69PXXC753L4R6', // lucky_event1day
                    event3days: 'L3LX5AGBBVMTS', // lucky_event3days
                    event5days: 'VTGTC3KMK7ECC' // lucky_event5days
                }
            },

            // soha is simply a legacy name for vn payment controller like WePay, 1Pay
            // that process payment via redirection
            soha: {
                // api to get payment url
                url: 'https://b2m6exn2df.execute-api.ap-southeast-1.amazonaws.com/prod/initSoha',
                // post to server when there is redirect back from payment service
                ipn: 'https://b2m6exn2df.execute-api.ap-southeast-1.amazonaws.com/prod/ipnSoha',
                prices: {
                    event1day: 1900000,
                    event3days: 3500000,
                    event5days: 4600000
                },
                // payment service name to be used
                ps: '1Pay'
            }
        }

        // configure payment handler by user's language
        var local = {
            en: 'paypal',
            vi: 'paypal'
        }

        var loadingIcon = function(on) {
            if (on) {
                $('<div class="paypal-loading"></div>').appendTo('body')
            } else {
                $('div.paypal-loading').remove()
            }
        }

        var times = {
            event1day: 30,
            event3days: 6,
            event5days: 9
        }

        return {
            provider: providers,
            local: local,
            loadingIcon: loadingIcon,
            times: times
        }
    })