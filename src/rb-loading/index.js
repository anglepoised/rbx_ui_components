define([
    './rb-loading-directive'
], function (rbLoadingDirective) {
    /**
     * @ngdoc module
     * @name rb-loading
     * @description
     *
     * rbLoading
     *
     */
    var rbLoading = angular
        .module('rb-loading', [])
        .directive('rbLoading', rbLoadingDirective);

    return rbLoading;

});
