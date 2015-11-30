define([
], function () {

    // @ngInject
    function demoCtrl ($rootScope, $scope, $state, $injector, $mdDialog) {
        // this is md-switch demo ctrl
        var alert;
        $scope.showAlert = showAlert;
        // Internal method
        function showAlert () {
            alert = $mdDialog.alert({
                title: 'Attention',
                content: 'This is an example of how easy dialogs can be!',
                ok: 'Close'
            });
            $mdDialog
                .show(alert)
                .finally(function () {
                    alert = undefined;
                });
        }
    }

    return demoCtrl;
});
