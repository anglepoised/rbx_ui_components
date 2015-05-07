define([
    './rb-definition-list-directive',
    './rb-definition-list-item-directive',
    './rb-definition-list.css'
], function (rbDefinitionListDirective, rbDefinitionListItemDirective, css) {
    /**
     * @ngdoc module
     * @name rb-definition-list
     * @description
     *
     * rbDefinitionList
     *
     */
    var rbDefinitionList = angular
        .module('rb-definition-list', [])
        .directive('rbDefinitionList', rbDefinitionListDirective)
        .directive('rbDefinitionListItem', rbDefinitionListItemDirective);

    return rbDefinitionList;

});
