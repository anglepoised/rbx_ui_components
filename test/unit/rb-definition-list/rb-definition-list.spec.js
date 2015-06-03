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

            it('should render with a "div" tagname', function () {
                compileTemplate('<rb-definition-list></rb-definition-list>');

                expect(element[0].tagName.toLowerCase()).toEqual('div');
            });

            it('should render with a "ul" tag', function () {
                compileTemplate('<rb-definition-list></rb-definition-list>');

                expect(element.find('ul').length).toBe(1);
            });

            it('should render transcluded elements', function () {
                compileTemplate('<rb-definition-list><dt>Some transcluded dt</dt></rb-definition-list>');

                var dt = angular.element(element.find('dt'));
                expect(dt[0].innerHTML).toEqual('Some transcluded dt');
            });

        });

        describe('button', function () {

            it('should take button-text from attribute', function () {
                compileTemplate('<rb-definition-list button-text="Action"></rb-definition-list>');

                var buttons = element.find('button'),
                    button = angular.element(element.find('button')[0]);

                expect(buttons.length).toBe(1);
                expect(button.text()).toContain('Action');
            });

            it('should not render button if button-text is missing', function () {
                compileTemplate('<rb-definition-list></rb-definition-list>');

                expect(element.find('button').length).toBe(0);
            });

            it('should set button ng-click to button-click', function () {
                $scope.onButtonClick = function () {};
                spyOn($scope, 'onButtonClick');
                compileTemplate(
                    '<rb-definition-list button-text="Test" button-click="onButtonClick()"></rb-definition-list>'
                );

                isolatedScope.buttonClick();
                expect($scope.onButtonClick).toHaveBeenCalled();
            });
        });
    });
});
