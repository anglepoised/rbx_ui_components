define([
], function (
) {
    /**
     * Move elements from root of a directive to whichever child element contains the `ng-transclude` directive.
     *
     * @param {object} elem - The angular element, generally passed from link or controller directive method
     * @param {object} attrs - The angular attrs, generally passed from link or controller directive method
     * @param {array} targetAttrs - A string array, containing names of the attributes to move
     */
    return function (elem, attrs, targetAttrs) {
        var transcludeTarget = angular.element(elem[0].querySelectorAll('[ng-transclude]'));

        angular.forEach(targetAttrs, function (targetAttr) {
            if (angular.isDefined(attrs[targetAttr])) {
                transcludeTarget.attr(targetAttr, attrs[targetAttr]);
                elem.removeAttr(targetAttr);
            }
        });

        return elem;
    };
});
