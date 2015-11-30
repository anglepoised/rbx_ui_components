define([
    '../rg-material',
    'angular-material/checkbox/checkbox.js',
    'angular-material/checkbox/checkbox.css',
    'angular-material/switch/switch.js',
    'angular-material/switch/switch.css'
], function (rgMaterial, checkboxJs, checkboxCss, switchJs, switchCss) {
    var rgMatSelect = angular
        .module('md-switch', [
            rgMaterial.name,
            'material.components.checkbox',
            'material.components.switch'
        ]);

    return rgMatSelect;
});
