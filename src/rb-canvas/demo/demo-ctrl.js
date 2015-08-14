define([
], function () {

    // @ngInject
    function demoCtrl ($rootScope, $state, $injector) {
        this.editMode = 'edit';
        this.editMessage = 'Edit Mode';
        this.releaseMessage = 'Release #37';
    }

    return demoCtrl;
});
