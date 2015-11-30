define([
    '../rg-material',
    './md-toolbar.css',
    'angular-material/content/content.js',
    'angular-material/content/content.css',
    'angular-material/toolbar/toolbar.js',
    'angular-material/toolbar/toolbar.css'
], function (rgMaterial, contentJs, contentCss, toolbarJs, toolbarCss) {
    var mdToolbar = angular
        .module('md-toolbar', [
            rgMaterial.name,
            'material.components.content',
            'material.components.toolbar'
        ]);

    return mdToolbar;
});
