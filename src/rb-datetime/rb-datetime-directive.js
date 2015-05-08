define([
    'html!./rb-datetime.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbDateTime
     * @module rb-datetime
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-datetime date-time="1970-01-01T00:00"></rb-datetime>
     *    <rb-datetime date-time="1970-01-01T00:00" understate-time="true"></rb-datetime>
     *    <rb-datetime date-time="1970-01-01T00:00" show-time="false"></rb-datetime>
     * </hljs>
     *
     * @ngInject
     */
    function rbDatetimeDirective () {

        return {
            scope: {
                dateTime: '@',
                understateTime: '@',
                showTime: '@'
            },
            restrict: 'E',
            replace: true,
            template: template
        };
    }

    return rbDatetimeDirective;
});
