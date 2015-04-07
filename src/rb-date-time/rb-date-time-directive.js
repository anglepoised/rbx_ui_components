define([
    'html!./rb-date-time.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbDateTime
     * @module rb-date-time
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-date-time dateTime="1970-01-01T00:00"></rb-date-time>
     *    <rb-date-time dateTime="1970-01-01T00:00" understateTime="true"></rb-date-time>
     *    <rb-date-time dateTime="1970-01-01T00:00" understateTime="true" show-time="false"></rb-date-time>
     * </hljs>
     *
     * @ngInject
     */
    function rbDateTimeDirective () {

        return {
            scope: {
                dateTime: '@',
                understateTime: '@',
                showTime: '@'
            },
            restrict: 'E',
            replace: true,
            transclude: true,
            template: template
        };
    }

    return rbDateTimeDirective;
});
