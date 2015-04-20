define([
    'html!./rb-loading.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbLoading
     * @module rb-loading
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-loading item-label="People"></rb-loading>
     * </hljs>
     *
     * @ngInject
     */
    function rbLoadingDirective () {

        return {
            scope: {
                itemLabel: '@'
            },
            restrict: 'E',
            replace: true,
            template: template
        };
    }

    return rbLoadingDirective;
});