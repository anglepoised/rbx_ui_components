define([
    './rb-editor-wrapper-directive',
    './rb-editor-wrapper.css'
], function (rbEditorWrapperDirective, css) {
    /**
     * @ngdoc module
     * @name rb-editor-wrapper
     * @description
     *
     * rbEditorWrapper
     *
     */
    var rbEditorWrapper = angular
        .module('rb-editor-wrapper', [])
        .directive('rbEditorWrapper', rbEditorWrapperDirective);

    return rbEditorWrapper;

});
