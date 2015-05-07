define([
    'components/rb-definition-list'
], function (rbDefinitionList) {
    describe('rb-definition-list-item', function () {

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

            it('should render with a "rb-definition-list-item" tagname', function () {
                compileTemplate('<rb-definition-list-item></rb-definition-list-item>');

                expect(element[0].tagName.toLowerCase()).toEqual('rb-definition-list-item');
            });

            it('should attach an icon to the dt when present', function () {
                compileTemplate('<rb-definition-list-item icon="any-icon"></rb-definition-list-item>');

                expect(element.find('dt').html()).toContain('icon="any-icon"');
            });

            it('should not attach an icon to the dt when not present', function () {
                compileTemplate('<rb-definition-list-item></rb-definition-list-item>');

                expect(element.find('dt').html()).not.toContain('rb-icon');
            });

            it('should display a label for the dt', function () {
                compileTemplate('<rb-definition-list-item label="any-label"></rb-definition-list-item>');

                expect(element.find('dt').html()).toContain('any-label');
            });

            it('should render transcluded elements into the details', function () {
                compileTemplate('<rb-definition-list-item><span>Transcluded detail</span></rb-definition-list-item>');

                expect(element.find('dd').html()).toContain('Transcluded detail');
            });

        });

    });
});
