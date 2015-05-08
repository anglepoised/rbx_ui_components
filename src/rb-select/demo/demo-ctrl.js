define([
], function () {

    // @ngInject
    function demoCtrl ($rootScope, $state, $injector) {
        this.items = [
            {
                id: 1,
                name: 'Volvo'
            },
            {
                id: 2,
                name: 'Audi'
            },
            {
                id: 3,
                name: 'BMW'
            },
            {
                id: 4,
                name: 'Mercedes'
            }
        ];

        this.emptySelect = null;
        this.previouslySelected = this.items[1].id;
    }

    return demoCtrl;
});
