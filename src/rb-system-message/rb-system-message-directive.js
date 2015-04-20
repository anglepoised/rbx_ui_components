define([
    'html!./rb-system-message.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbSystemMessage
     * @module rb-system-message
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-system-message>
     *     </rb-system-message>
     * </hljs>
     *
     * @ngInject
     */
    function rbSystemMessageDirective () {

        return {
            scope: {
            },
            restrict: 'E',
            replace: true,
            template: template
        };
    }

    return rbSystemMessageDirective;
});
