define([
    'components/rb-data-summary',
    'html!./rb-data-summary.tpl.html'
], function (rbDataSummary, template) {
    describe('rb-data-summary', function () {

        var $scope,
            $compile,
            textControl,
            element;

        beforeEach(angular.mock.module('rb-data-summary'));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $scope = _$rootScope_.$new({});
            $compile = _$compile_;
            rbDataSummary = angular.element(template);
            element = $compile(rbDataSummary)($scope);
            $scope.$apply();
        }));

        describe('attribute generation', function () {

            it('should convert attributes on a rb-data-summary to attributes on the generated summary',
                function () {
                    var rbDataSummary = $compile('<rb-data-summary anyattr any-attr></rb-data-summary>')($scope);

                    $scope.$apply();
                    expect(rbDataSummary[0].hasAttribute('anyattr')).toBe(true);
                    expect(rbDataSummary[0].hasAttribute('any-attr')).toBe(true);
                });
        });

        describe('rendering', function () {

            it('should render with a "div" tagname', function () {
                expect(element[0].tagName.toLowerCase()).toEqual('div');
            });
        });

        describe('with type', function () {

            it('should attach a class `DataSummary--<type>` when type is present', function () {
                var dataSummary = angular.element('<rb-data-summary type="anytype"></rb-data-summary>'),
                    element = $compile(dataSummary)($scope);

                $scope.$apply();
                expect(dataSummary.hasClass('DataSummary--anytype')).toBe(true);
            });
        });
    });
});
