define([
    './rb-datetime-display.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbDateTimeDisplay
     * @module rb-datetime-display
     *
     * @restrict E
     *
     * @description
     *
     * @usage
     * <hljs lang="html">
     *    <rb-datetime-display date-time="1970-01-01T00:00"></rb-datetime-display>
     *    <rb-datetime-display date-time="1970-01-01T00:00" understate-time="true"></rb-datetime-display>
     *    <rb-datetime-display date-time="1970-01-01T00:00" show-time="false"></rb-datetime-display>
     * </hljs>
     *
     * @ngInject
     */
    function rbDatetimeDisplayDirective () {

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

    return rbDatetimeDisplayDirective;
});
