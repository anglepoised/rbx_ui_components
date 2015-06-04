define([
    './rb-demo-block-directive',
    './rb-demo-block.css'
], function (rbDemoBlockDirective, css) {
    /**
     * @ngdoc module
     * @name rb-demo-block
     * @description
     *
     * rbDemoBlock
     *
     */
    var rbDemoBlock = angular
        .module('rb-demo-block', [])
        .directive('rbDemoBlock', rbDemoBlockDirective);

    return rbDemoBlock;

});
