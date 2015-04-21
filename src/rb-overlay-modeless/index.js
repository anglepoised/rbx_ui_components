define([
    './rb-overlay-modeless-directive',
    './rb-overlay-modeless.css'
], function (rbOverlayModelessDirective, css) {
    /**
     * @ngdoc module
     * @name rb-overlay-modeless
     * @description
     *
     * rbOverlayModeless
     *
     */
    var rbOverlayModeless = angular
        .module('rb-overlay-modeless', [])
        .directive('rbOverlayModeless', rbOverlayModelessDirective);

    return rbOverlayModeless;

});
