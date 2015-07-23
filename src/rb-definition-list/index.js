define([
    '../rb-button',
    '../rb-icon',
    './rb-definition-list-directive',
    './rb-definition-list-item-directive',
    './rb-definition-list.css'
], function (rbButton, rbIcon, rbDefinitionListDirective, rbDefinitionListItemDirective, css) {
    /**
     * @ngdoc module
     * @name rb-definition-list
     * @description
     *
     * rbDefinitionList
     *
     */
    var rbDefinitionList = angular
        .module('rb-definition-list', [rbButton.name, rbIcon.name])
        .directive('rbDefinitionList', rbDefinitionListDirective)
        .directive('rbDefinitionListItem', rbDefinitionListItemDirective);

    return rbDefinitionList;

});
