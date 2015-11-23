define([
    'html!./rb-badge.tpl.html'
], function (template) {

    /**
     * Details string lookup.
     * @type Object
     */
    var STATE_DETAILS = {
        'warning': 'Warning(s) on this item',
        'statusIncomplete': 'Incomplete',
        'statusIn Build': 'Incomplete',
        'statusLive': 'Live',
        'statusPaused': 'Paused',
        'statusPending': 'Pending',
        'statusReady': 'Ready',
        'statusScheduled': 'Scheduled',
        'statusFinished': 'Finished'
    };

    /**
     * @ngdoc directive
     * @name rbBadge
     * @module directives.buttons.rb-badge
     *
     * @restrict E
     *
     * @description
     * `<rb-badge>` is a badge directive
     *
     * A badge directive that takes a required 'state' attribute. The state
     * refrers to a predefined state specified in STATE_DETAILS. If a state is
     * passed that is not already defined no state class will be set.
     *
     * Optionally if a 'body' attribute is supplied the given string will be
     * outputted into the body part of the badge.
     *
     * Optionally if 'collapsed' attribute is supplied collapsed version of
     * badge will be rendered with 'is-collapsed' class
     *
     * @usage
     * <hljs lang="html">
     *    <rb-badge state="warning" body="6!"></rb-badge>
     *    <rb-badge state="statusComplete"></rb-badge>
     *    <rb-badge state="warning" body="6!" collapsed="true"></rb-badge>
     * </hljs>
     *
     * @ngInject
     */
    function rbBadgeDirective () {

        return {
            scope: {
                state: '@',
                body: '@'
            },
            restrict: 'E',
            replace: true,
            link: link,
            template: template,
            controller: controller
        };
    }

    // @ngInject
    function controller ($scope) {

        // Allow template to check a state is valid.
        $scope.validState = function (state) {
            return state in STATE_DETAILS;
        };
    }

    function link (scope, elem, attr) {

        // Pass details lookup to scope.
        scope.details = STATE_DETAILS;

        scope.$watch('state', function (newVal, oldVal) {
            scope.badge = scope.state;

            if (scope.state === 'statusIn Build') {
                scope.badge = 'statusIncomplete';
            }
        });

        // Evaluate 'collapsed' attribute as Boolean.
        scope.collapsed = scope.$eval(attr.collapsed);

        // Set 'title' for use on 'title' attribute
        if (scope.collapsed) {
            scope.title = STATE_DETAILS[scope.state];

            if (scope.state === 'warning') {
                // Prepend body e.g. '6 Warnings on this item'
                scope.title = scope.body + ' ' + scope.title;
            }
        }
    }

    return rbBadgeDirective;
});
