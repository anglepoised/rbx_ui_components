define([
    './demo-categories-pokedex.js'
], function (categories) {

    // @ngInject
    function demoCtrl () {

        this.categories = categories;

    }

    return demoCtrl;
});
