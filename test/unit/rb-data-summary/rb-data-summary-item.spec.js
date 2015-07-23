define([
    'ui-components/rb-data-summary',
    'html!./rb-data-summary-item.tpl.html'
], function (rbDataSummary, template) {
    describe('rb-data-summary-item', function () {

        var $scope,
            $compile,
            textControl,
            element;

        beforeEach(angular.mock.module('rb-data-summary'));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $scope = _$rootScope_.$new({});
            $compile = _$compile_;
            rbDataSummaryItem = angular.element(template);
            element = $compile(rbDataSummaryItem)($scope);
            $scope.$apply();
        }));

        describe('attribute generation', function () {

            it('should convert attributes on a rb-data-summary-item to attributes on the generated item',
                function () {
                    var rbDataSummaryItem = $compile('<rb-data-summary-item ' +
                        'anyattr any-attr></rb-data-summary-item>')($scope);

                    $scope.$apply();
                    expect(rbDataSummaryItem[0].hasAttribute('anyattr')).toBe(true);
                    expect(rbDataSummaryItem[0].hasAttribute('any-attr')).toBe(true);
                });
        });

        describe('rendering', function () {

            it('should render with a "div" tagname', function () {
                expect(element[0].tagName.toLowerCase()).toEqual('div');
            });

            it('should render with a "header" text', function () {
                expect(element.find('h3').html()).toEqual('any text');
            });

        });

    });
});
