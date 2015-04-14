define([
    'components/rb-main'
], function (rbMain) {
    describe('rb-main', function () {

        var $scope,
            $compile,
            template = '<rb-main><div></div></rb-main>';

        beforeEach(angular.mock.module(rbMain.name));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $scope = _$rootScope_.$new({});
            $compile = _$compile_;
        }));

        describe('attribute generation', function () {

            it('should convert attributes on rb-main to attributes on the generated wrapper',
                function () {
                    var main = $compile('<rb-main anyattr any-attr></rb-main>')($scope);

                    $scope.$apply();
                    expect(main[0].hasAttribute('anyattr')).toBe(true);
                    expect(main[0].hasAttribute('any-attr')).toBe(true);
                });
        });

        describe('rendering', function () {

            it('should render with a "main" tagname', function () {
                var main = angular.element(template),
                    element = $compile(main)($scope);

                $scope.$apply();
                expect(element[0].tagName.toLowerCase()).toEqual('main');
            });

            it('should render transcluded elements', function () {
                var main = angular.element(template),
                    element = $compile(main)($scope),
                    div = angular.element(element.find('div'));

                $scope.$apply();
                expect(div[0].tagName.toLowerCase()).toEqual('div');
            });
        });
    });
});
