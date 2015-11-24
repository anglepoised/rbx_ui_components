define([
    './rb-release-version.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbReleaseVersion
     * @module rb-release-version
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-release-version>
     *     </rb-release-version>
     * </hljs>
     *
     * @ngInject
     */
    function rbReleaseVersionDirective () {

        return {
            scope: {
            },
            restrict: 'E',
            replace: true,
            template: template
        };
    }

    return rbReleaseVersionDirective;
});
