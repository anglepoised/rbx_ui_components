define([
    './rb-canvas-directive',
    './rb-canvas.css'
], function (rbCanvasDirective, css) {
    /**
     * @ngdoc module
     * @name rb-canvas
     * @description
     *
     * rbCanvas
     *
     */
    var rbCanvas = angular
        .module('rb-canvas', [])
        .directive('rbCanvas', rbCanvasDirective);

    return rbCanvas;

});
