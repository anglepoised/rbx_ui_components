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
        ])
        .config(function ($mdThemingProvider) {
            $mdThemingProvider.definePalette('scootaGreen', {
                '50': '#3EB980',
                '100': '#3EB980',
                '200': '#3EB980',
                '300': '#3EB980',
                '400': '#3EB980',
                '500': '#3EB980',
                '600': '#3EB980',
                '700': '#3EB980',
                '800': '#3EB980',
                '900': '#3EB980',
                'A100': '#3EB980',
                'A200': '#3EB980',
                'A400': '#3EB980',
                'A700': '#3EB980'
            });

            $mdThemingProvider.definePalette('scootaBlue', {
                '50': '#068DCB',
                '100': '#068DCB',
                '200': '#068DCB',
                '300': '#068DCB',
                '400': '#068DCB',
                '500': '#068DCB',
                '600': '#068DCB',
                '700': '#068DCB',
                '800': '#068DCB',
                '900': '#068DCB',
                'A100': '#068DCB',
                'A200': '#068DCB',
                'A400': '#068DCB',
                'A700': '#068DCB'
            });

            $mdThemingProvider.theme('default')
                .primaryPalette('scootaBlue')
                .accentPalette('scootaGreen');
        });

    return material;
});
