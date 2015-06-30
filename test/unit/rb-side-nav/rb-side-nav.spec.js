define([
    'components/rb-side-nav'
], function (rbSideNav) {
    describe('rb-side-nav', function () {

        var $rootScope,
            $scope,
            isolatedScope,
            $compile,
            element,
            compileTemplate;

        beforeEach(angular.mock.module(rbSideNav.name));

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
            it('should render with class', function () {
                compileTemplate('<rb-side-nav></rb-side-nav>');

                expect(element.hasClass('SideNav')).toBe(true);
            });

            it('should transclude content inside ul element', function () {
                compileTemplate('<rb-side-nav><li>test</li></rb-side-nav>');

                var ul = angular.element(element.find('ul')[0]);

                expect(ul.html()).toContain('<li class="ng-scope">test</li>');
            });
        });

        describe('title attribute', function () {

            it('should be used for title when specified', function () {
                compileTemplate('<rb-side-nav title="Menu"></rb-side-nav>');

                expect(element.find('h3').text()).toContain('Menu');
            });
        });

        describe('`rb-action-bar` subcomponent', function () {
            it('should have `primaryAction` attr set by `rb-side-nav` `onSave`', function () {
                compileTemplate('<rb-side-nav on-save="console.log(document.window)"></rb-side-nav>');
                var rbActionBar = angular.element(element[0].getElementsByClassName('ActionBar'));
                expect(rbActionBar.attr('primary-action')).toBe('onSave()');
            });

            it('should have `primaryLabel` attr set by `rb-side-nav` `save-label`', function () {
                compileTemplate('<rb-side-nav save-label="Save Me"></rb-side-nav>');
                var rbActionBar = angular.element(element[0].getElementsByClassName('ActionBar'));
                expect(rbActionBar.attr('primary-label')).toBe('Save Me');
            });

            it('should have `primaryDisabled` attr set by `rb-side-nav` `save-button-disabled`', function () {
                compileTemplate('<rb-side-nav save-button-disabled="true"></rb-side-nav>');
                var rbActionBar = angular.element(element[0].getElementsByClassName('ActionBar'));
                expect(rbActionBar.attr('primary-disabled')).toBe('true');
            });

            it('should have `cancelAction` attr set by `rb-side-nav` `onCancel`', function () {
                compileTemplate('<rb-side-nav on-cancel="console.log(document.window)"></rb-side-nav>');
                var rbActionBar = angular.element(element[0].getElementsByClassName('ActionBar'));
                expect(rbActionBar.attr('cancel-action')).toBe('onCancel()');
            });

            it('should have `message` attr set by `rb-side-nav` `action-help-text`', function () {
                compileTemplate('<rb-side-nav action-help-text="Be careful, now."></rb-side-nav>');
                var rbActionBar = angular.element(element[0].getElementsByClassName('ActionBar'));
                expect(rbActionBar.attr('message')).toBe('Be careful, now.');
            });
        });

        describe('submit button', function () {
            it('should be disabled when save-button-disabled is true', function () {
                compileTemplate('<rb-side-nav title="A Menu" on-save="demoCtrl.save()" on-cancel="demoCtrl.cancel()"' +
                    ' save-button-disabled="true"></rb-side-nav>');

                var button = angular.element(element.find('button')[0]);

                expect(button.attr('disabled')).toBe('disabled');
            });

            it('should not disable when false', function () {
                compileTemplate('<rb-side-nav title="A Menu" on-save="demoCtrl.save()" on-cancel="demoCtrl.cancel()"' +
                    ' save-button-disabled="false"></rb-side-nav>');

                var button = angular.element(element.find('button')[0]);

                expect(button.attr('disabled')).toBeUndefined();
            });

            it('should not disable when not passed', function () {
                compileTemplate('<rb-side-nav title="A Menu" on-save="demoCtrl.save()" on-cancel="demoCtrl.cancel()">' +
                    '</rb-side-nav>');

                var button = angular.element(element.find('button')[0]);

                expect(button.attr('disabled')).toBeUndefined();
            });
        });
    });
});
