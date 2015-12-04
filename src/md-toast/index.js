define([
    '../rg-material',
    'angular-material/button/button.js',
    'angular-material/button/button.css',
    'angular-material/toast/toast.js',
    'angular-material/toast/toast.css'
], function (rgMaterial, buttonJs, buttonCss, toastJs, toastCss) {
    var mdToast = angular
        .module('md-toast', [
            rgMaterial.name,
            'material.components.button',
            'material.components.toast'
        ]);

    return mdToast;
});
