define([
    './rb-loading-directive',
    './rb-loading.css'
], function (rbLoadingDirective, css) {
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
