define([
    './rb-deep-search-directive'
], function (rbDeepSearchDirective) {

    /**
     * @ngdoc module
     * @name rb-deep-search
     * @description
     *
     * rbDeepSearch
     *
     */
    var rbDeepSearch = angular
        .module('rb-deep-search', [])
        .directive('rbDeepSearch', rbDeepSearchDirective);

    return rbDeepSearch;

});
