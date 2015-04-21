define([
], function () {

    // @ngInject
    function demoCtrl ($rootScope, $state, $injector, $q, $timeout, warningStates) {

        var $this = this;
        // FOR DEMO PURPOSES ONLY
        this.warningList = [
            {
                'id': 1,
                'message': 'This is warning number ONE',
                'identifier': 'PARTIAL_TRACKING',
                'url_params': {
                    'campaign_id': 1073741824
                }
            },
            {
                'id': 2,
                'message': 'This is warning number TWO',
                'identifier': 'PARTIAL_TRACKING',
                'url_params': {
                    'campaign_id': 1073741824
                }
            },
            {
                'id': 3,
                'message': 'This is warning number THREE',
                'identifier': 'OTHER_STATE',
                'url_params': {
                    'campaign_id': 1073741824
                }
            },
            {
                'id': 4,
                'message': 'This is warning number FOUR',
                'identifier': 'PARTIAL_TRACKING',
                'url_params': {
                    'campaign_id': 1073741824
                }
            },
            {
                'id': 5,
                'message': 'This is warning number FIVE',
                'identifier': 'PARTIAL_TRACKING',
                'url_params': {
                    'campaign_id': 1073741824
                }
            }

        ];

        // FOR DEMO PURPOSES ONLY
        this.clicky = function (warning) {
            var state = warning['identifier'];
            console.log(angular.toJson(warning));
            console.log('redirecting to state: ' + warningStates[state]);
        };

        // FOR DEMO PURPOSES ONLY
        this.dismissy = function (id) {

            console.log('Dismissing the warning with id: ' + id);
            console.log('... and after waiting 2.5 seconds...');
            // REMOVES THE WARNING FROM THE BOUND COLLECTION
            removeWarning(id);
            // CALL A PROMISE THAT SHOULD BE IN A SERVICE
            var promise = dismiss(id);

            promise.then(function (result) {
                console.log(result + ': ... its gone !!!');
            }, function (reason) {
                console.log(reason + ': ... its NOT gone !!!');
            });
        };

        // FOR DEMO PURPOSES ONLY - A SERVICE SHOULD BE IN USE HERE
        function dismiss (id) {

            return $q(function (resolve, reject) {
                setTimeout(function () {
                    // FOR DEMO PURPOSES ONLY
                    // A DISMISS PROCESS MIGHT TAKE 2.5 SECONDS TO COMPLETE
                    // FIFTH WARNING DISMISS PROCESS MIGHT FAIL
                    if (id < 5) {
                        resolve('OK');
                    } else {
                        reject('ERROR');
                    }
                }, 2500);
            });
        }

        // FOR DEMO PURPOSES ONLY - LODASH STILL NOT IN USE HERE
        function removeWarning (id) {

            var _warningList = [],
                warningList = $this.warningList,
                i = 0;
            for (i; i<warningList.length; i++) {
                var warning = warningList[i];
                if (warning['id'] !== id) {
                    _warningList.push(warningList[i]);
                }
            }
            $this.warningList = _warningList;
        }

    }

    return demoCtrl;
});
