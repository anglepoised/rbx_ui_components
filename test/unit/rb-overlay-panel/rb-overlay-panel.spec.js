define([
    'components/rb-overlay-panel'
], function (rbOverlayPanel) {
    describe('rb-overlay-panel', function () {

        var $rootScope,
            $scope,
            isolatedScope,
            $compile,
            element,
            compileTemplate;

        beforeEach(angular.mock.module(rbOverlayPanel.name));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $rootScope = _$rootScope_;
            $scope = _$rootScope_.$new({});
            $compile = _$compile_;

            // Compile directive, apply scope and fetch new isolated scope
            compileTemplate = function (template) {
                element = $compile(template)($scope);
                $scope.$apply();
                isolatedScope = element.isolateScope();
            };
        }));

        it('should render using the overlay modal', function () {
            compileTemplate('<rb-overlay-panel>Some content</rb-overlay-panel>');

            expect(element[0].getElementsByClassName('OverlayModal').length).toBe(1);
        });

        it('should add content to the panel of the overlay', function () {
            var contentEle;
            compileTemplate('<rb-overlay-panel>Some content</rb-overlay-panel>');

            contentEle = angular.element(element[0].getElementsByClassName('OverlayPanel')[0]);

            expect(element[0].getElementsByClassName('OverlayPanel').length).toBe(1);
            expect(contentEle.html()).toContain('Some content');
        });

        it('should render a close button in the overlay', function () {
            compileTemplate('<rb-overlay-panel></rb-overlay-panel>');

            expect(element[0].getElementsByClassName('OverlayPanel-close').length).toBe(1);
        });

        it('should fire a function on the click of the close button', function () {
            var closeEle;
            $scope.closing = function () {
                return true;
            };

            spyOn($scope, 'closing');

            compileTemplate('<rb-overlay-panel overlay-close="closing()">Some content</rb-overlay-panel>');

            closeEle = angular.element(element[0].getElementsByClassName('OverlayPanel-close')[0]);

            // Click on the close button
            closeEle.triggerHandler('click');

            expect($scope.closing).toHaveBeenCalled();
        });
    });
});
