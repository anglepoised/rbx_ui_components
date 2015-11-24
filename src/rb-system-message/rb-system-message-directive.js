define([
    './rb-system-message.tpl.html'
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
     *     <rb-system-message
     *         title="Something happened"
     *         message="Here is the message"
     *         technical-details="SIGILL"
     *         dismiss-message="Close me"
     *         on-dismiss="alert('Dismissed!')"
     *         modifier="danger"
     *         contact="support@example.com">
     *     </rb-system-message>
     * </hljs>
     *
     * @ngInject
     */
    function rbSystemMessageDirective () {

        return {
            scope: {
                contact: '@',
                dismissMessage: '@',
                message: '@',
                modifier: '@',
                onDismiss: '&',
                technicalDetails: '@',
                title: '@'
            },
            restrict: 'E',
            replace: true,
            template: template
        };
    }

    return rbSystemMessageDirective;
});
