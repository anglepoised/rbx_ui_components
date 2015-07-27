define([
    'html!./rb-editor-wrapper.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbEditorWrapper
     * @module rb-editor-wrapper
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-editor-wrapper>
     *     </rb-editor-wrapper>
     * </hljs>
     *
     * @ngInject
     */
    function rbEditorWrapperDirective () {

        return {
            scope: {
            },
            restrict: 'E',
            replace: true,
            template: template
        };
    }

    return rbEditorWrapperDirective;
});
