define([
    'components/rb-select'
], function (rbSelect) {
    describe('rb-select', function () {

        var $rootScope,
            $scope,
            isolatedScope,
            $compile,
            element,
            compileTemplate;

        beforeEach(angular.mock.module(rbSelect.name));

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

            $scope.selected = null;
            $scope.items = [
                {
                    id: 1,
                    name: 'Volvo'
                },
                {
                    id: 2,
                    name: 'Audi'
                },
                {
                    id: 3,
                    name: 'BMW'
                },
                {
                    id: 4,
                    name: 'Mercedes'
                }
            ];
        }));

        it('should set a placeholder', function () {
            var optionEle;
            compileTemplate('<rb-select placeholder="My Placeholder"></rb-select>');

            optionEle = element.find('option');

            expect(optionEle[0].innerHTML).toBe('My Placeholder');
        });

        it('should output items', function () {
            var optionEle,
                firstOption;

            compileTemplate('<rb-select items="items" value="id" display="name"></rb-select>');

            optionEle = element.find('option');
            firstOption = angular.element(optionEle[1]);

            expect(optionEle.length).toBe(5);
            expect(firstOption.html()).toBe('Volvo');
        });

        it('should add a label', function () {
            var labelEle;

            compileTemplate('<rb-select items="items" value="id" display="name" label="Some title"></rb-select>');

            labelEle = element.find('label');

            expect(labelEle.length).toBe(1);
            expect(labelEle.html()).toContain('Some title');
        });

        it('should add a help message', function () {
            var helpEle;

            compileTemplate('<rb-select items="items" value="id" display="name" help-message="Some help text.">' +
                '</rb-select>');

            helpEle = element[0].getElementsByClassName('TextControl-message')[0];

            expect(angular.element(helpEle).html()).toContain('Some help text.');
        });

        describe('attributes', function () {
            it('should add a ng-required attribute to the element with a value of true', function () {
                var selectEle;
                compileTemplate('<rb-select items="items" value="id" display="name" is-required="true"></rb-select>');

                selectEle = element.find('select');

                expect(selectEle.attr('ng-required')).toBe('true');
            });

            it('should add a ng-required attribute to the element with a value of false', function () {
                var selectEle;
                compileTemplate('<rb-select items="items" value="id" display="name" is-required="false"></rb-select>');

                selectEle = element.find('select');

                expect(selectEle.attr('ng-required')).toBe('false');
            });

            it('should add a disabled attribute to the element', function () {
                compileTemplate('<rb-select items="items" value="id" display="name" is-disabled="true"></rb-select>');

                var selectEle = element.find('select');

                expect(selectEle.attr('ng-disabled')).toBe('true');
            });

            it('should add a ng-required attribute to the element with a value of false', function () {
                var selectEle;
                compileTemplate('<rb-select items="items" value="id" display="name" is-disabled="false"></rb-select>');

                selectEle = element.find('select');

                expect(selectEle.attr('ng-disabled')).toBe('false');
            });
        });
    });
});
