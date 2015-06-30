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

            it('should render actions', function () {
                compileTemplate('<rb-side-nav></rb-side-nav>');

                var actiondDiv = element[0].getElementsByClassName('SideNav-actions'),
                    buttons = angular.element(actiondDiv[0]).find('button');

                expect(actiondDiv.length).toBe(1);
                expect(buttons.length).toBe(2);
                expect(angular.element(buttons[0]).text()).toContain('Save');
                expect(angular.element(buttons[1]).text()).toContain('Cancel');
                expect(angular.element(buttons[1]).attr('outline')).toBe('yes');
                expect(angular.element(buttons[0]).attr('ng-click')).toBe('onSave()');
                expect(angular.element(buttons[1]).attr('ng-click')).toBe('onCancel()');
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

        describe('action attributes', function () {
            it('should use save label from attribute', function () {
                compileTemplate('<rb-side-nav save-label="Save & Republish"></rb-side-nav>');

                var actiondDiv = element[0].getElementsByClassName('SideNav-actions'),
                    buttons = angular.element(actiondDiv[0]).find('button');

                expect(angular.element(buttons[0]).text()).toContain('Save & Republish');
            });

            it('should use action help text from attribute', function () {
                compileTemplate('<rb-side-nav action-help-text="Be careful when saving."></rb-side-nav>');

                var actiondDiv = element[0].getElementsByClassName('SideNav-actions'),
                    helpTextP = angular.element(actiondDiv[0]).find('p');

                expect(angular.element(helpTextP[0]).text()).toContain('Be careful when saving.');
            });

            it('should take onSave callback from on-save attribute', function () {
                $scope.mySaveCallback = function () {};
                spyOn($scope, 'mySaveCallback');
                compileTemplate('<rb-side-nav on-save="mySaveCallback()"></rb-side-nav>');

                var childDivs = element.children(),
                    firstChild = angular.element(childDivs[0]);

                isolatedScope.onSave();
                expect($scope.mySaveCallback).toHaveBeenCalled();
            });

            it('should take onCancel callback from on-cancel attribute', function () {
                $scope.myCancelCallback = function () {};
                spyOn($scope, 'myCancelCallback');
                compileTemplate('<rb-side-nav on-cancel="myCancelCallback()"></rb-side-nav>');

                var childDivs = element.children(),
                    firstChild = angular.element(childDivs[0]);

                isolatedScope.onCancel();
                expect($scope.myCancelCallback).toHaveBeenCalled();
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
