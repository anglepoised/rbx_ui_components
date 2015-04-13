define([
    'html!./rb-badge.tpl.html',
], function (template) {

    /**
     * Details string lookup.
     * @type Object
     */
    var STATE_DETAILS = {
        'warning': 'Warnings on this item',
        'statusIncomplete': 'Incomplete',
        'statusLive': 'Live',
        'statusPaused': 'Paused',
        'statusPending': 'Pending',
        'statusFinished': 'Finished'
    }

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
     * </hljs>
     *
     * @ngInject
     */
    function rbBadgeDirective () {

        return {
            scope: {
            },
            restrict: 'E',
            replace: true,
            link: link,
            template: template
        };
    }

    function link (scope, elem, attr) {

        // Set state class and details string
        // Only set states defined in STATE_DETAILS
        if (angular.isDefined(attr.state) && attr.state in STATE_DETAILS) {
            elem.addClass('Badge--' + attr.state);
            scope.details = STATE_DETAILS[attr.state];
        }

        // Set body text. Defaults to &nbsp; in template
        if (angular.isDefined(attr.body)) {
            scope.body = attr.body;
        }

        // Set is-collapsed class
        if (angular.isDefined(attr.collapsed)) {
            elem.addClass('is-collapsed');
        }
    }

    return rbBadgeDirective;
});
