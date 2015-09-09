define([], function () {

    // @ngInject
    function demoCtrl ($rootScope, $state, $injector) {

        this.selections = [{
            title: 'one',
            body: 'one body',
            value: 'value1'
        }, {
            title: 'two',
            body: 'two body',
            value: 'value2'
        }, {
            title: 'three',
            body: 'three body',
            value: 'value3'
        }];

        this.selections2 = angular.copy(this.selections);

        this.selections2.push({
            title: 'four',
            body: 'four body',
            value: 'value4'
        });

        this.selections3 = angular.copy(this.selections2);

        this.selections3.push({
            title: 'five',
            body: 'five body',
            value: 'value5'
        });

        this.demoModel = this.selections[0];

        this.demoModel3 = this.selections[2];
    }

    return demoCtrl;
});
