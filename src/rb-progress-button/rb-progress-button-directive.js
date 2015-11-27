define([
    './rb-progress-button.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbProgressButton
     * @module rb-progress-button
     *
     * @restrict A
     *
     * @description
     * `<rb-progress-button>` is an attribute directive that changes the default
     * behaviour of a `<button>` from a single click to a click event that
     * triggers an execution process that changes the button text between two
     * states (messages) every given time interval elapses.
     *
     * If you supply an `action-label` attribute, it will be set as the first
     * message to replace the current button label. Defaults to `Executing`
     *
     * If you supply a `progress-label` attribute, it will be set as the second
     * message to replace the button action label after a time interval elapses.
     * Defaults to `Please Wait`
     *
     * If you supply an `interval` attribute with a number as a value, it will set
     * the amount of time for the button label to change between two states (messages)
     * Defaults to 2000 milliseconds (2 seconds)
     *
     * @scope
     *  'onExecute': a custom function -that returns a promise- to be executed
     *               when button is clicked.
     *
     * @usage
     * <hljs lang="html">
     *   <rb-button state="positive" outline="yes"
     *       rb-progress-button on-execute="demoCtrl.publish()"
     *       interval="500"
     *       action-label="Publishing"
     *       progress-label="Please Wait">Publish</rb-button>
     * </hljs>
     *
     * @ngInject
     */
    function rbProgressButtonDirective ($interval) {

        return {
            scope: {
                onExecute: '&'
            },
            restrict: 'A',
            replace: true,
            link: link
        };

        function link (scope, elem, attr) {

            var stopInterval,
                originalLabel,
                currentLabel,
                // Default interval of 2000 milliseconds
                interval = 2000,
                // Default action message
                actionLabel = 'Executing',
                // Default progress message
                progressLabel = 'Please Wait';

            // Overrides the default interval attribute
            // if an interval attribute is present
            // with a numeric value.
            if (angular.isDefined(attr.interval) &&
                    !isNaN(parseInt(attr.interval)) &&
                    isFinite(attr.interval)) {

                interval = attr.interval;
            }

            if (angular.isDefined(attr.actionLabel) && !angular.equals(attr.actionLabel, '')) {
                actionLabel = attr.actionLabel;
            }

            if (angular.isDefined(attr.progressLabel) && !angular.equals(attr.progressLabel, '')) {
                progressLabel = attr.progressLabel;
            }

            function onClick () {

                originalLabel = elem.text();
                currentLabel = actionLabel;

                if (!(angular.isDefined(attr.outline) && angular.equals(attr.outline, 'yes'))) {
                    elem.addClass('Button--outline');
                    elem.removeClass('Button--standard');
                }

                elem.text(currentLabel);
                elem[0].blur();

                stopInterval = $interval(function () {
                    if (currentLabel === progressLabel) {
                        currentLabel = actionLabel;
                    } else {
                        currentLabel = progressLabel;
                    }
                    elem.text(currentLabel);
                }, interval);

                startExecution();
            }

            function startExecution () {

                scope.onExecute().then(function (result) {
                    tearDown();
                }, function (error) {
                    tearDown();
                });
            }

            function tearDown () {

                $interval.cancel(stopInterval);
                stopInterval = undefined;
                if (!(angular.isDefined(attr.outline) && angular.equals(attr.outline, 'yes'))) {
                    elem.addClass('Button--standard');
                    elem.removeClass('Button--outline');
                }
                elem.text(originalLabel);
            }

            elem.on('click', function (event) {

                // Execution not allowed if any execution is under way
                // or execute function is not present
                if (angular.isDefined(stopInterval) ||
                        angular.isUndefined(attr.onExecute) ||
                        angular.equals(attr.onExecute, '')) {

                    return;
                }

                onClick();
            });

            elem.on('$destroy', function () {
                $interval.cancel(stopInterval);
                stopInterval = undefined;
            });

        }
    }

    return rbProgressButtonDirective;
});
