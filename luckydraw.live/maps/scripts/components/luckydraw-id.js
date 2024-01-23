"use strict";
angular
    .module('app')
    .component('idLuckyDraw', {
        templateUrl: 'components/luckydraw-id.html',
        bindings: {
            data: '<',
            setting: '<',
            results: '=',
            isLimited: '&'
        },
        controller: IdLuckyDrawController
    });

function IdLuckyDrawController($state, $timeout, modalService, defaultSettingService, devOps, prizeService, userService, uxService, Analytics, audioService) {
    var $ctrl = this;

    $ctrl.$onInit = function() {
        $ctrl.appState = $state.current;
        $ctrl.ankey = $ctrl.appState.name == 'presentation' ? 'iddraw_pres' : 'iddraw_home';
        $ctrl.defaultSetting = defaultSettingService;
        $ctrl.prizes = prizeService.load($ctrl.setting, true);
        $ctrl.user = userService;
        $ctrl.user.checkin();
        $ctrl.ux = uxService;
        $ctrl.analytics = Analytics;

        $ctrl.animClass = {}; // object that hold animated class name for elements, to inject via ng-class
        $ctrl.ids = []; // clone id list, to prevent live update
        $ctrl.selectedIds = []; // array of selected Ids, all prizes, confirmed or rejected
        $ctrl.names = []; // clone name list
        $ctrl.idChars = []; // dictionary of characters used in ids, use for machine drawing
        $ctrl.longestIdLen = 3; // longest length of id

        // structured prize - id winners
        $ctrl.structured = {
            nan: []
        };

        // prepare for the machine to function properly
        angular.forEach($ctrl.data.ids, function(id, k) {
            // remove spaces from id
            id = String(id).replace(/\s+/g, '');

            var key = 'nan';

            // structured ID & prize
            var _id = id.match(/^(.*)\*(x|diamond|gold|silver|bronze|p[0-9]+)$/i);
            if (_id && _id.length === 3) {
                id = _id[1]; // id
                key = _id[2]; // prize key
                if (!$ctrl.structured[key]) $ctrl.structured[key] = [];
            }

            // ignore duplicate - but will cause structured prize setup to have ID issue
            if ($ctrl.ids.indexOf(id) >= 0) return

            // get the longest id length, prepared for creating machines and css class
            if (id.length > $ctrl.longestIdLen) $ctrl.longestIdLen = id.length;

            // add id chars to bucket
            $ctrl.idChars = _.uniq(_.concat($ctrl.idChars, id.split('')));

            // clone the ID and Names list, to prevent live update will affect this session
            $ctrl.ids.push(id);

            var name = '';
            if ($ctrl.data.names) name = $ctrl.data.names[k] || '';
            $ctrl.names.push(name.trim());

            $ctrl.structured[key].push($ctrl.ids.length - 1);
        });

        // if id list has few unique chars: add more related characters to make the drawing effect looks nice
        if ($ctrl.idChars.length < 9) {
            for (var i = 0; i < devOps.checkChars.length; i++) {
                var re = new RegExp(devOps.checkChars[i].regexp); // check and add related character set
                if ($ctrl.idChars[0].match(re)) {
                    $ctrl.idChars = _.uniq(_.concat($ctrl.idChars, devOps.checkChars[i].chars.split('')));
                    i = devOps.checkChars.length; // add one set is enough, exit on first match
                }
            }
        }

        // remove confirmed index in available ids array
        var confirmed = {};
        $ctrl.totalResults = 0;
        angular.forEach($ctrl.results, function(prize, key) {
            confirmed[key] = 0;
            angular.forEach(prize, function(result) {
                $ctrl.selectedIds.push(result.id)
                if (result.status !== 'Rejected') confirmed[key]++;
                $ctrl.totalResults++;
                var i = $ctrl.ids.indexOf(result.id); // find key of the result.id in $ctrl.ids list
                for (var pk in $ctrl.structured) {
                    var j = $ctrl.structured[pk].indexOf(i);
                    if (j !== -1) $ctrl.structured[pk].splice(j, 1); // remove if found, as one id gets only one prize
                }
            });
        });
        // $ctrl.totalSpins = $ctrl.totalResults;

        // count confirmed prizes if this is a continued session
        for (var i = 0; i < $ctrl.prizes.length; i++) {
            var key = $ctrl.prizes[i].key;
            if (confirmed[key]) $ctrl.prizes[i].confirmed = confirmed[key];
        }

        // init array of slots
        $ctrl.machineSlots = _.range(0, $ctrl.longestIdLen);

        // css class based on slots range
        $ctrl.slotsCss = devOps.slotsCss($ctrl.longestIdLen);

        // audioService
        audioService.init($ctrl.longestIdLen);
        // audioService.play('background', 3000, 'loop');

        // init slot machines
        $ctrl.characters = [];
        $ctrl.machines = [];
        $ctrl.state = devOps.states.ready;

        // what are you doing with Luckydraw.live?
        // if ($ctrl.appState.name !== 'presentation') {
        //     setTimeout(function() {
        //         if (!localStorage.getItem('survey.purpose')) modalService.survey('purpose');
        //     }, 5000);
        // }
    };

    $ctrl.setPrize = function(index) {
        if ($ctrl.state !== devOps.states.ready) return;
        if (index < 0 || index >= $ctrl.prizes.length) {
            audioService.play('na');
            return;
        }

        $ctrl.state = devOps.states.setprize;
        if ($ctrl.prizeIndex >= 0) {
            audioService.play('setPrize');
            audioService.stop('turnonSlots');
            audioService.stop('actionButtons');
        }
        $ctrl.ux.mLeave('prevnext');

        if (index < $ctrl.prizeIndex)
            $ctrl.animClass.setprize = 'prize-prev';
        else if ($ctrl.prizeIndex >= 0)
            $ctrl.animClass.setprize = 'prize-next';

        prizeService.currentTab = index
        $ctrl.prizeIndex = index;
        $ctrl.prize = $ctrl.prizes[index];

        // clean up selected id from structured prize
        var _sprize = $ctrl.structured[$ctrl.prize.key];
        if (_sprize && _sprize.length) {
            for (var j = 0; j < _sprize.length; j++) {
                if ($ctrl.selectedIds.indexOf($ctrl.ids[_sprize[j]]) !== -1) {
                    _sprize.splice(j, 1);
                    j--;
                }
            }
        }

        $timeout(function() {
            audioService.play('turnonSlots', 150);
            $ctrl.animClass.setprize = null;
            $ctrl.state = devOps.states.ready;
            audioService.play('actionButtons', 1000);
            audioService.stop('setPrize');
        }, devOps.timeout.ready);
        if ($ctrl.animClass.setprize) Analytics.log($ctrl.ankey, 'Set Prize', $ctrl.prize.key);
    };

    $ctrl.setPrevPrize = function() {
        $ctrl.setPrize($ctrl.prizeIndex - 1);
    };

    $ctrl.setNextPrize = function() {
        $ctrl.setPrize($ctrl.prizeIndex + 1);
    };

    $ctrl.createMachines = function(shuffle) {
        if ($ctrl.machines && $ctrl.machines.length) return;

        $ctrl.characters = [];
        for (var i = 0; i < $ctrl.longestIdLen; i++) {
            var arr = _.shuffle($ctrl.idChars).map(function(i) {
                return String(i);
            });
            arr.unshift(' ');
            $ctrl.characters.push(arr);
        }

        $timeout(function() {
            $ctrl.machines = [];
            $ctrl.machinesDelay = [];
            $('.slots .slot').each(function(k, slot) {
                $ctrl.machinesDelay[k] = _.random(devOps.mdelay.min, devOps.mdelay.max);
                $ctrl.machines[k] = $(slot).slotMachine({
                    active: $ctrl.characters[k].indexOf(devOps.favNum),
                    delay: $ctrl.machinesDelay[k],
                    direction: devOps.spinDirection
                });
                if (shuffle) {
                    $ctrl.machines[k].shuffle();
                    audioService.play('spinHigh' + k, k * 144 + 233, 'loop');
                }
            });
        });
    };

    $ctrl.shuffleMachines = function() {
        angular.forEach($ctrl.machines, function(machine, k) {
            machine.shuffle();
            audioService.play('spinHigh' + k, k * 144 + 233, 'loop');
        });
    };

    $ctrl.destroyMachines = function() {
        angular.forEach($ctrl.machines, function(machine, index) {
            machine.stop();
            machine.destroy();
        });
        $ctrl.machines = null;
        $ctrl.characters = null;
    };

    $ctrl.startstop = function() {
        var matchbatch, batchStop
        if ($ctrl.state == devOps.states.ready) {
            $ctrl.spin();
        } else if ($ctrl.state == devOps.states.spin) {
            // detect batch stop
            if ($ctrl.setting.prizes[$ctrl.prize.key]) {
                matchbatch = $ctrl.setting.prizes[$ctrl.prize.key].match(/\([xX][0-9]+\)$/g);
            } else if ($ctrl.appState.name !== 'presentation' && $ctrl.defaultSetting.prizes[$ctrl.prize.key]) {
                matchbatch = $ctrl.defaultSetting.prizes[$ctrl.prize.key].match(/\([xX][0-9]+\)$/g);
            }
            batchStop = matchbatch ? parseInt(matchbatch[0].substr(2).slice(0, -1)) : 0;
            if (batchStop > 1)
                $ctrl.stopBatch(batchStop);
            else
                $ctrl.stop();
        }
    };

    $ctrl.spin = function() {
        if (savedEnough() || $ctrl.state !== devOps.states.ready) return;

        var structured = $ctrl.structured[$ctrl.prize.key] && $ctrl.structured[$ctrl.prize.key].length;
        $ctrl.prize.skey = !structured ? 'nan' : $ctrl.prize.key;

        if (!structured && !$ctrl.structured.nan.length) {
            modalService.alert('', 'Everybody Win!');
            return;
        }

        $ctrl.state = devOps.states.tospin;
        audioService.play('start');
        audioService.pause('background');
        audioService.play('spinHigh', 0, 'loop');
        $ctrl.ux.mLeave('spin');

        $ctrl.iAIDs = $ctrl.id = $ctrl.name = null;

        if (!$ctrl.machines || !$ctrl.machines.length)
            $ctrl.createMachines(true);
        else
            $ctrl.shuffleMachines();

        if ($ctrl.appState.name == 'presentation') $ctrl.lightOff = true;
        $timeout(function() {
            $ctrl.state = devOps.states.spin;
            audioService.play('onGoing');
            // audioService.play('actionButtons');
        }, devOps.timeout.spin);
        Analytics.log($ctrl.ankey, 'Spin', $ctrl.prize.key);

        // $ctrl.totalSpins++;
        // if ($ctrl.isLimited({
        //         r: $ctrl.totalSpins
        //     })) {
        //     modalService.open('Payment', true, true);
        // }
    };

    var getaWinner = function() {
        var found
        while (!found) {
            var ln = $ctrl.structured[$ctrl.prize.skey].length;
            if (!ln) {
                // structured out of length
                $ctrl.prize.skey = 'nan'
                ln = $ctrl.structured[$ctrl.prize.skey].length
            }
            $ctrl.structured[$ctrl.prize.skey] = _.shuffle($ctrl.structured[$ctrl.prize.skey]); // randomize

            var d = new Date(),
                n = d.getSeconds(),
                j = _.random(0, ln * n) % ln, // random index of a item in available ids array
                i = $ctrl.structured[$ctrl.prize.skey][j]; // [j] is key of a item in $ctrl.ids

            $ctrl.iAIDs = j;
            $ctrl.id = $ctrl.ids[i];

            if ($ctrl.selectedIds.indexOf($ctrl.id) >= 0) {
                $ctrl.structured[$ctrl.prize.skey].splice(j, 1)
            } else {
                found = true
            }
        }
        $ctrl.name = ($ctrl.names && $ctrl.names[i]) ? $ctrl.names[i] : '';
        $ctrl.namex = $ctrl.name.replace('|', '<br/>');

        // remember the selected id
        $ctrl.selectedIds.push($ctrl.id);

        if (devOps.specialPrizes.indexOf($ctrl.prize.key) == -1)
            $ctrl.remainStops = 1;
        else
            $ctrl.remainStops = 2;
    }

    $ctrl.stopBatch = function(qty) {
        if ($ctrl.state !== devOps.states.spin) return;

        $ctrl.state = devOps.states.stop;
        audioService.play('stop');
        $ctrl.ux.mLeave('stop');

        var delay
        if (250 * qty > 30000) // no more than 30s in total
            delay = Math.round(30000 / qty)
        else if ((10000 / qty) > 2000) // no more than 2s per id
            delay = 2000
        else
            delay = 250

        // get winners
        for (var index = 0; index < qty; index++) {
            $timeout(function() {
                var ln = $ctrl.structured[$ctrl.prize.skey].length;
                if (!ln) return // gameover

                var d = new Date(),
                    n = d.getSeconds(),
                    j = _.random(0, ln * n) % ln, // random index of a item in available ids array
                    i = $ctrl.structured[$ctrl.prize.skey][j]; // [j] is key of a item in $ctrl.ids

                var iAIDs = j;
                var id = $ctrl.ids[i];
                var name = ($ctrl.names && $ctrl.names[i]) ? $ctrl.names[i] : '';

                // remember the selected id
                $ctrl.selectedIds.push(id);

                $ctrl.prizes[$ctrl.prizeIndex].confirmed++;
                $ctrl.animClass.prizecount = 'prize-increase';
                audioService.play('prizeIncreased');

                // saveResult
                var rs = {
                    name: name || null,
                    id: id,
                    time: '',
                    status: 'Confirmed'
                }
                if ($ctrl.appState.name === 'presentation') {
                    rs.time = firebase.database.ServerValue.TIMESTAMP;
                    $ctrl.results.$ref().child($ctrl.prize.key).push(rs);
                } else {
                    rs.time = Date.now();
                    $ctrl.results[$ctrl.prize.key].push(rs); // home, dry run
                }
                $ctrl.totalResults++;
                $ctrl.structured[$ctrl.prize.skey].splice(iAIDs, 1);
            }, index * delay + 500);
        }

        // cleanup
        var cleanup = 600;
        if (delay >= 1000)
            cleanup += (qty - 1) * delay;
        else
            cleanup += qty * delay;
        $timeout(function() {
            angular.forEach($ctrl.machines, function(machine, k) {
                machine.stop();
                audioService.stop('spinHigh' + k, $ctrl.machinesDelay[k] + 800);
                if (k === $ctrl.longestIdLen - 1) audioService.stop('spinHigh', $ctrl.machinesDelay[k]);
            });
            $ctrl.animClass.message = null;
            $ctrl.animClass.prizecount = null;
            $ctrl.lightOff = false;
            $ctrl.state = devOps.states.ready;
            modalService.open('IdResult');
            Analytics.log($ctrl.ankey, 'Batch Confirm', $ctrl.prize.key);
        }, cleanup);
    }

    $ctrl.stop = function() {
        if ($ctrl.state !== devOps.states.spin) return;

        $ctrl.state = devOps.states.stop;
        audioService.play('stop');
        $ctrl.ux.mLeave('stop');

        if (!$ctrl.id) getaWinner();

        $ctrl.remainStops--;

        // stop the machines
        var padId = _.padStart($ctrl.id, $ctrl.longestIdLen);
        angular.forEach($ctrl.machines, function(machine, k) {
            if (k < $ctrl.longestIdLen - $ctrl.remainStops && machine.running) {
                machine.setRandomize(function() {
                    return $ctrl.characters[k].indexOf(padId[k]);
                });
                machine.stop();
                audioService.stop('spinHigh' + k, $ctrl.machinesDelay[k] + 800);
                if (k === $ctrl.longestIdLen - 1) audioService.stop('spinHigh', $ctrl.machinesDelay[k]);
            }
        });

        if ($ctrl.remainStops > 0) {
            $timeout(function() {
                $ctrl.state = devOps.states.spin;
                audioService.play('onGoing');
            }, devOps.timeout.spin + 900);
        } else {
            var high = devOps.specialPrizes.indexOf($ctrl.prize.key) == -1 ? '' : 'High';
            if ($ctrl.name) {
                // reveal spinner
                $timeout(function() {
                    $ctrl.state = devOps.states.reveal;
                    audioService.play('comingWinner' + high, 0, 'loop');
                }, devOps.timeout.revealLoading);
                // time to show name after all machines stopped
                var timing = devOps.timeout['revealName' + high];
            } else {
                // no winner name
                var timing = devOps.timeout.revealId;
            }
            $timeout(function() {
                $ctrl.animClass.message = 'winner-reveal';
                $ctrl.state = devOps.states.complete;
                audioService.stop('comingWinner' + high);
                audioService.play('tada' + high);
                audioService.play('actionButtons', 1500);
            }, timing);
        }
        Analytics.log($ctrl.ankey, 'Stop', $ctrl.prize.key);
    };

    $ctrl.save = function() {
        if ($ctrl.state !== devOps.states.complete) return;

        $ctrl.ux.mLeave('confirm');

        $ctrl.state = devOps.states.toconfirm;
        if (devOps.specialPrizes.indexOf($ctrl.prize.key) >= 0)
            audioService.play('confirmSpecial');
        else
            audioService.play('confirm');

        $ctrl.animClass.message = 'winner-confirm';
        // if (!savedEnough()) {
        $timeout(function() {
            $ctrl.prizes[$ctrl.prizeIndex].confirmed++;
            $ctrl.state = devOps.states.confirmed;
            $ctrl.animClass.prizecount = 'prize-increase';
            audioService.play('prizeIncreased');
        }, devOps.timeout.confirmed);
        saveResult('Confirmed');
        // }

        $timeout(function() {
            $ctrl.state = devOps.states.null;
            $ctrl.animClass.message = null;
            $ctrl.animClass.prizecount = null;
            audioService.play('turnoffSlots', 350);
            $timeout(function() {
                $ctrl.lightOff = false;
                $ctrl.state = devOps.states.ready;
                // audioService.stop('confirm');
                // audioService.stop('confirmSpecial');
                audioService.play('turnonSlots', 150);
                audioService.play('actionButtons', 1100);
                audioService.play('background', 2000, 'loop');
            }, 1000);
        }, 1500);
        Analytics.log($ctrl.ankey, 'Confirm', $ctrl.prize.key);
    };

    $ctrl.retry = function() {
        if ($ctrl.state !== devOps.states.complete) return;
        $ctrl.ux.mLeave('confirm');
        $ctrl.state = devOps.states.cancel;
        audioService.play('retry');
        // if (!savedEnough()) saveResult('Rejected');
        $ctrl.animClass.message = 'winner-cancel';
        $timeout(function() {
            $ctrl.state = devOps.states.null;
            $ctrl.animClass.message = null;
            $ctrl.animClass.prizecount = null;
            audioService.play('turnoffSlots', 350);
            $timeout(function() {
                $ctrl.lightOff = false;
                $ctrl.state = devOps.states.ready;
                // audioService.stop('retry');
                audioService.play('turnonSlots', 150);
                audioService.play('actionButtons', 1100);
                audioService.play('background', 2000, 'loop');
            }, 1000);
        }, 500);
        Analytics.log($ctrl.ankey, 'Reject', $ctrl.prize.key);
    };

    var saveResult = function(status) {
        var rs = {
            name: $ctrl.name || null,
            id: $ctrl.id,
            time: '',
            status: status
        }
        if ($ctrl.appState.name === 'presentation') {
            rs.time = firebase.database.ServerValue.TIMESTAMP;
            $ctrl.results.$ref().child($ctrl.prize.key).push(rs);
        } else {
            rs.time = Date.now();
            $ctrl.results[$ctrl.prize.key].push(rs); // home, dry run
        }
        if (status === 'Confirmed') $ctrl.totalResults++;
        $ctrl.structured[$ctrl.prize.skey].splice($ctrl.iAIDs, 1);
    }

    var savedEnough = function() {
        if ($ctrl.isLimited({
                r: $ctrl.totalResults
            })) {
            audioService.play('na');
            Analytics.log('milestone', 'Over Free Results', $ctrl.totalResults, {
                prize: $ctrl.prize.key
            });
            modalService.open('Payment', true, true);
            return true;
        } else {
            return false;
        }
    }

    $ctrl.$onDestroy = function() {
        $ctrl.destroyMachines();
        audioService.stop('background');
    };
}