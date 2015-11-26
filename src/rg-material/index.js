define([
    'angular-animate',
    'angular-aria',
    'angular-material/core/core.js',
    'angular-material/core/core.css',
    'angular-material/core/default-theme.js'
], function () {
    var material = angular
        .module('rg-material', [
            'ngAnimate',
            'ngAria',
            'material.core',
            'material.core.theming.palette',
            'material.core.theming'
        ]);

    return material;
});
