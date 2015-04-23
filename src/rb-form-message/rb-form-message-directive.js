define([
    'html!./rb-form-message.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbFormMessage
     * @module rb-form-message
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-form-message>
     *     </rb-form-message>
     * </hljs>
     *
     * @ngInject
     */
    function rbFormMessageDirective () {

        return {
            scope: {
            },
            restrict: 'E',
            replace: true,
            transclude: true,
            template: template
        };
    }

    return rbFormMessageDirective;
});
