define([
    'html!./rb-upload-status.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbUploadStatus
     * @module rb-upload-status
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-upload-status>
     *     </rb-upload-status>
     * </hljs>
     *
     * @ngInject
     */
    function rbUploadStatusDirective () {

        return {
            scope: {
            },
            restrict: 'E',
            replace: true,
            template: template
        };
    }

    return rbUploadStatusDirective;
});
