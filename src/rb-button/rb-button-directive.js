define([
    'html!./rb-button.tpl.html',
    'html!./rb-button-link.tpl.html',
    'html!./rb-button-submit.tpl.html'
], function (template, linkTemplate, submitTemplate) {

    /**
     * @ngdoc directive
     * @name rbButton
     * @module directives.buttons.rb-button
     *
     * @restrict E
     *
     * @description
     * `<rb-button>` is a plain button directive
     *
     * If you supply a `type` attribute with `submit` as value, it will become
     * a submit button `<button type="submit"/>`. If you supply a `href`, `ng-href`
     * or `ui-sref` attribute, it will become an anchor element `<a>`. Otherwise
     * it will default to a `button` element.
     *
     * If you supply a `block` attribute with `yes` value, it will become
     * a button with full-width.
     *
     * If you supply an `outline` attribute with `yes` value, it will become
     * a button with an outline modifier to be used for less important actions.
     *
     * If you supply a `state` attribute with a value, i.e. `positive`,`warning`,
     * `danger`, it will become a button with a different colour.
     * Positive buttons are green.
     * Warning buttons are orange.
     * Danger buttons are red.
     *
     * @param {expression=} ng-disabled En-Disable based on the expression
     *
     * @usage
     * <hljs lang="html">
     *   <rb-button>
     *     Button
     *   </rb-button>
     *   <rb-button type="submit" state="warning" block="yes">
     *     Button
     *   </rb-button>
     *   <rb-button type="submit" state="warning" outline="yes">
     *     Button
     *   </rb-button>
     * </hljs>
     *
     * @ngInject
    */

    function rbButtonDirective () {

        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            template: getTemplate,
            link: link
        };

        function isAnchor (attr) {
            return angular.isDefined(attr.href) || angular.isDefined(attr.ngHref) ||
            angular.isDefined(attr.uiSref);
        }

        function isSubmit (attr) {
            return angular.isDefined(attr.type) &&
                angular.equals(angular.lowercase(attr.type), 'submit');
        }

        function isBlock (attr) {
            return angular.isDefined(attr.block) &&
                angular.equals(angular.lowercase(attr.block), 'yes');
        }

        function isOutline (attr) {
            return angular.isDefined(attr.outline) &&
                angular.equals(angular.lowercase(attr.outline), 'yes');
        }

        function getTemplate (elem, attr) {
            if (isAnchor(attr)) {
                return linkTemplate;
            } else if (isSubmit(attr)) {
                return submitTemplate;
            } else {
                return template;
            }
        }

        function link (scope, elem, attr) {

            // Defaults to standard modifier
            if (isOutline(attr)) {
                elem.addClass('Button--outline');
            } else {
                elem.addClass('Button--standard');
            }

            // Defaults to blue colour when no
            // state is supplied (Default state)
            if (angular.isDefined(attr.state)) {
                elem.addClass('Button--' + attr.state);
            }

            if (isBlock(attr)) {
                elem.addClass('Button--block');
            }

            // Since disabled is not a valid attribute for anchor tags
            // Index tabbing and event handlers are removed in case
            // ngDisabled expression evaluates to true.
            if (isAnchor(attr) && angular.isDefined(attr.ngDisabled)) {
                scope.$watch(attr.ngDisabled, function (isDisabled) {
                    elem.attr('tabindex', isDisabled ? -1 : 0);
                    if (isDisabled) {
                        elem.on('click', function (event) {
                            event.preventDefault();
                        });
                    }
                });
            }
        }
    }

    return rbButtonDirective;
});
