define([
], function () {

    // @ngInject
    function demoCtrl ($rootScope, $state, $injector, $q, $timeout) {

        this.itemList = [
            {
                'id': 1,
                'status': 'Pending',
                'name': 'Item #1',
                'description': 'Description #1'
            },
            {
                'id': 2,
                'status': 'Live',
                'name': 'Item #2',
                'description': 'Description #2'
            },
            {
                'id': 3,
                'status': 'Paused',
                'name': 'Item #3',
                'description': 'Description #3'
            },
            {
                'id': 4,
                'status': 'Pending',
                'name': 'Item #4',
                'description': 'Fails to publish'
            }
        ];

        this.start = function (item) {

            var promise = publish(item);

            promise.then(function (result) {
                console.log('Success: ' + result);
                item.status = 'Live';
            }, function (reason) {
                console.log('Failure: ' + reason);
            });

            return promise;
        };

        this.pause = function (item) {

            var promise = pause(item);

            promise.then(function (result) {
                console.log('Success: ' + result);
                item.status = 'Paused';
            }, function (reason) {
                console.log('Failure: ' + reason);
            });

            return promise;
        };

        this.republish = function (item) {

            var promise = publish(item);

            promise.then(function (result) {
                console.log('Success: ' + result);
                item.status = 'Live';
            }, function (reason) {
                console.log('Failure: ' + reason);
            });

            return promise;
        };

        function publish (item) {

            return $q(function (resolve, reject) {
                setTimeout(function () {
                    if (item.id<4) {
                        resolve('LIVE !!!');
                    } else {
                        reject('ERROR.');
                    }
                }, 10000);
            });
        }

        function pause (item) {

            return $q(function (resolve, reject) {
                setTimeout(function () {
                    if (item.id<4) {
                        resolve('PAUSED !!!');
                    } else {
                        reject('ERROR.');
                    }
                }, 10000);
            });
        }

    }

    return demoCtrl;
});
