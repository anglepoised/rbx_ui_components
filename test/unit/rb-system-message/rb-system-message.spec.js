define([
    'components/rb-system-message',
    'html!./rb-system-message.tpl.html'
], function (rbSystemMessage, template) {
    describe('rb-system-message', function () {

        var $scope,
            $compile,
            textControl,
            element;

        beforeEach(angular.mock.module('rb-system-message'));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $scope = _$rootScope_.$new({});
            $compile = _$compile_;
            rbSystemMessage = angular.element(template);
            element = $compile(rbSystemMessage)($scope);
            $scope.$apply();
        }));

        it('should do something', function () {
        });

    });
});
