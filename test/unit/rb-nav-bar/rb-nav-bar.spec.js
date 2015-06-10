define([
    'components/rb-nav-bar'
], function (rbNavBar) {
    describe('rb-nav-bar', function () {

        var $compile,
            $scope,
            _options = [
                {'text': 'Option 1'},
                {'text': 'Option 2', 'state': 'test-state'},
                {'text': 'Option 3', 'url': 'http://example.com', 'target': '_self'}
            ],
            compileTemplate,
            isolateScope,
            template = '<rb-nav-bar options="options"></rb-nav-bar>';

        beforeEach(function () {
            angular.mock.module(rbNavBar.name);

            inject(function (_$compile_, _$rootScope_) {
                $scope = _$rootScope_.$new({});
                $compile = _$compile_;

                compileTemplate = function (tpl) {
                    $scope.options = _options;
                    element = $compile(tpl)($scope);
                    $scope.$apply();
                    isolateScope = element.isolateScope();
                };
            });
        });

        it('should convert attributes on a rb-nav-bar to attributes on the generated nav bar',
            function () {
                compileTemplate('<rb-nav-bar anyattr any-attr></rb-nav-bar>');

                expect(element[0].hasAttribute('anyattr')).toBe(true);
                expect(element[0].hasAttribute('any-attr')).toBe(true);
            });

        describe('rendering', function () {

            it('should render with a "nav" tagname', function () {
                compileTemplate(template);

                expect(element[0].tagName.toLowerCase()).toEqual('nav');
            });

            it('should place navigation options in the navigation bar', function () {
                compileTemplate(template);

                expect(element.find('a').length).toBe(3);
            });

            it('should set ui-sref if option has a state', function () {
                compileTemplate(template);

                var options = angular.element(element.find('a'));
                expect(angular.element(options[1]).attr('ui-sref')).toBe('test-state');
            });

            it('should set href if option has a url', function () {
                compileTemplate(template);

                var options = angular.element(element.find('a'));
                expect(angular.element(options[2]).attr('href')).toBe('http://example.com');
            });

            it('should set the target if set', function () {
                compileTemplate(template);

                var options = angular.element(element.find('a'));
                expect(angular.element(options[2]).attr('target')).toBe('_self');
            });
        });
    });
});
