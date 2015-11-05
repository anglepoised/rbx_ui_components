define([
    'html!./rg-tag.tpl.html',
    'html!./rg-tag-remove-button.tpl.html'
], function (template, removeButtonTemplate) {

    /**
     * @ngdoc directive
     * @name rgTag
     * @module directives.tags.rg-tag
     *
     * @restrict E
     *
     * @description
     * `<rg-tag>` is a plain tag directive
     *
     * If you supply a `readonly` attribute with `yes` value, it will become
     * a tag without a remove button.
     *
     * 'onRemove': a custom function to be executed whenever the remove button
     *              is clicked.
     *
     * @usage
     * <hljs lang="html">
     *   <rg-tag>
     *     tag
     *   </rg-tag>
     *   <rg-tag readonly="true">
     *     tag
     *   </rg-tag>
     * </hljs>
     *
     * @ngInject
    */

    function rgTagDirective ($compile) {

        return {
            scope: {
                onRemove: '&'
            },
            restrict: 'E',
            replace: true,
            transclude: true,
            template: template,
            link: link
        };

        function isReadonly (attr) {
            return angular.isDefined(attr.readonly) &&
                angular.equals(angular.lowercase(attr.readonly), 'true');
        }

        function link (scope, element, attr, ctrl, $transclude) {
            if (isReadonly(attr)) {
                element.addClass('rgTag--readonly');
            }
            $transclude(
                function injectRemoveButton (clone, scope) {
                    if (!isReadonly(attr)) {
                        var _removeButton = $compile(removeButtonTemplate)(scope);
                        _removeButton.bind('click', function (event) {
                            event.stopPropagation();
                            scope.$parent.onRemove();
                            scope.$apply();
                        });
                        element.append(_removeButton);
                    }
                }
            );
        }
    }

    return rgTagDirective;
});
