define([
    '../rg-material',
    'angular-material/button/button.js',
    'angular-material/button/button.css',
    'angular-material/backdrop/backdrop.js',
    'angular-material/backdrop/backdrop.css',
    'angular-material/dialog/dialog.js',
    'angular-material/dialog/dialog.css'
], function (rgMaterial, buttonJs, buttonCss, backdropJs, backdropCss, dialogJs, dialogCss) {
    var mdDialog = angular
        .module('md-toolbar', [
            rgMaterial.name,
            'material.components.button',
            'material.components.backdrop',
            'material.components.dialog'
        ]);

    return mdDialog;
});
