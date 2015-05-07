define([
    'components/rb-definition-list'
], function (rbDefinitionList) {
    describe('rb-definition-list', function () {

        var $rootScope,
            $scope,
            isolatedScope,
            $compile,
            element,
            compileTemplate;

        beforeEach(angular.mock.module(rbDefinitionList.name));

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

        describe('rendering', function () {

            it('should render with a "dl" tagname', function () {
                compileTemplate('<rb-definition-list></rb-definition-list>');

                expect(element[0].tagName.toLowerCase()).toEqual('dl');
            });

            it('should render transcluded elements', function () {
                compileTemplate('<rb-definition-list><dt>Some transcluded dt</dt></rb-definition-list>');

                var dt = angular.element(element.find('dt'));
                expect(dt[0].innerHTML).toEqual('Some transcluded dt');
            });

        });

    });
});
