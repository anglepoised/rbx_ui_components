define([
    'components/rb-main'
], function (rbMain) {
    describe('rb-main', function () {

        var $scope,
            $compile,
            template = '<rb-main></rb-main>';

        beforeEach(angular.mock.module(rbMain.name));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $scope = _$rootScope_.$new({});
            $compile = _$compile_;
        }));

        it('should convert attributes on rb-main to attributes on the generated wrapper',
            function () {
                var main = $compile('<rb-main anyattr any-attr></rb-main>')($scope);

                $scope.$apply();
                expect(main[0].hasAttribute('anyattr')).toBe(true);
                expect(main[0].hasAttribute('any-attr')).toBe(true);
            });

        describe('rendering', function () {

            it('should render with a "div" tagname', function () {
                var main = angular.element(template),
                    element = $compile(main)($scope);

                $scope.$apply();
                expect(element[0].tagName.toLowerCase()).toEqual('main');
            });

        });
    });
});
