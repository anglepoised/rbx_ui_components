define([
    'ui-components/rb-section'
], function (rbSection) {
    describe('rb-section', function () {

        var $rootScope,
            $scope,
            isolatedScope,
            $compile,
            element,
            compileTemplate;

        beforeEach(angular.mock.module(rbSection.name));

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
            it('should transclude', function () {
                compileTemplate('<rb-section>Great!</rb-section>');

                expect(element.hasClass('Section')).toBe(true);

                var ele = angular.element(element[0].querySelector('.Section-body'));

                expect(ele.length).toBe(1);
                expect(ele.text()).toBe('Great!');
            });

            it('should set heading from attribute', function () {
                compileTemplate('<rb-section heading="A great thing"></rb-section>');

                expect(element.find('h2').length).toBe(1);
                expect(element.find('h2').hasClass('u-textHeading2')).toBe(true);
                expect(element.find('h2').text()).toBe('A great thing');
            });
        });

        describe('gutterless attribute', function () {

            it('should set gutterless when attribute true', function () {
                compileTemplate('<rb-section gutterless="true"></rb-section>');

                expect(element.hasClass('Section--gutterless')).toBe(true);
            });

            it('should not set gutterless when attribute false', function () {
                compileTemplate('<rb-section gutterless="false"></rb-section>');

                expect(element.hasClass('Section--gutterless')).toBe(false);
            });

            it('should not set gutterless when no attribute', function () {
                compileTemplate('<rb-section></rb-section>');

                expect(element.hasClass('Section--gutterless')).toBe(false);
            });
        });

        describe('hide heading attribute', function () {

            it('should hide heading when the value is true', function () {
                compileTemplate('<rb-section hide-heading="true"></rb-section>');

                var ele = angular.element(element[0].querySelector('.Section-heading'));

                expect(ele.hasClass('u-hiddenVisually')).toBe(true);
            });

            it('should not hide heading when the value is false', function () {
                compileTemplate('<rb-section hide-heading="false"></rb-section>');

                expect(element.find('h2').hasClass('u-hiddenVisually')).toBe(false);
            });

            it('should not hide heading when no value', function () {
                compileTemplate('<rb-section></rb-section>');

                expect(element.find('h2').hasClass('u-hiddenVisually')).toBe(false);
            });
        });

        describe('centered attribute', function () {
            it('should set a modifier of centered when the value is true', function () {
                compileTemplate('<rb-section centered="true"></rb-section>');

                expect(element.hasClass('Section--centered')).toBeTruthy();
            });

            it('should not set a modifier of centered when the value is false', function () {
                compileTemplate('<rb-section centered="false"></rb-section>');

                expect(element.hasClass('Section--centered')).toBeFalsy();
            });

            it('should not set a modifier of centered when no value is passed', function () {
                compileTemplate('<rb-section></rb-section>');

                expect(element.hasClass('Section--centered')).toBeFalsy();
            });
        });
    });
});
