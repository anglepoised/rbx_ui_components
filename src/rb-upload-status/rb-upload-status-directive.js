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
            transclude: true,
            replace: true,
            template: template,
            link: function (scope, ele, attrs) {
                scope.modifier = '';
                scope.loading = false;

                if (angular.isDefined(attrs.modifier)) {
                    scope.modifier = 'UploadStatus--' + attrs.modifier;

                    if (attrs.modifier === 'processing') {
                        scope.loading = true;
                    }
                }
            }
        };
    }

    return rbUploadStatusDirective;
});
