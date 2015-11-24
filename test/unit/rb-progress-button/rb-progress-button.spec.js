define([
    'ui-components/rb-progress-button',
    './rb-progress-button.tpl.html',
    './rb-progress-button-no-function.tpl.html'
], function (rbProgressButton, template, templateNoFunction) {
    describe('rb-progress-button', function () {

        var $scope,
            $compile,
            $timeout,
            $interval,
            $q,
            deferredResolution,
            element,
            isolatedScope;

        beforeEach(angular.mock.module('rb-progress-button'));

        beforeEach(inject(function (_$compile_, _$rootScope_, _$timeout_, _$interval_, _$q_) {
            $scope = _$rootScope_.$new({});
            $compile = _$compile_;
            $timeout = _$timeout_;
            $interval = _$interval_;
            $q = _$q_;
            deferredResolution = $q.defer();
            rbProgressButton = angular.element(template);
            element = $compile(rbProgressButton)($scope);
            $scope.$apply();
            isolatedScope = element.isolateScope();
            isolatedScope.onExecute = function () {
                return $q(function (resolve, reject) {
                    setTimeout(function () {
                        angular.noop();
                    }, 2500);
                });
            };
            isolatedScope.$apply();
            spyOn(isolatedScope, 'onExecute').and.returnValue(deferredResolution.promise);
        }));

        describe('attribute generation', function () {

            it('should convert attributes on a rb-progress-button to attributes on the generated button',
                function () {
                    var button = $compile('<rb-button rb-progress-button anyattr any-attr></rb-button>')($scope);

                    expect(button[0].hasAttribute('anyattr')).toBe(true);
                    expect(button[0].hasAttribute('any-attr')).toBe(true);
                });
        });

        describe('rendering', function () {

            it('should have a function bound to the onExecute property', function () {

                expect(element[0].hasAttribute('on-execute')).toBe(true);
                expect(element.attr('on-execute')).toEqual('executeFunction()');
            });

            it('should have a time interval value if interval attribute is present', function () {

                expect(element[0].hasAttribute('interval')).toBe(true);
                expect(element.attr('interval')).toEqual('2000');
            });

            it('should have an action label value if actionLabel attribute is present', function () {

                expect(element[0].hasAttribute('action-label')).toBe(true);
                expect(element.attr('action-label')).toEqual('Publishing');
            });

            it('should have a progress label value if progressLabel attribute is present', function () {

                expect(element[0].hasAttribute('progress-label')).toBe(true);
                expect(element.attr('progress-label')).toEqual('Please Wait');
            });

        });

        describe('link function', function () {

            it('should not change button text on a click if onExecute attribute is not present', function () {

                rbProgressButton = angular.element(templateNoFunction);
                element = $compile(rbProgressButton)($scope);

                expect(element.text()).toBe('Publish');
                element.triggerHandler('click');
                $interval.flush(100);
                expect(element.text()).toBe('Publish');
            });

            it('should change button text (every 2 seconds) when clicked and onExecute attr present', function () {

                expect(element.text()).toBe('Publish');
                element.triggerHandler('click');
                $interval.flush(1);
                expect(element.text()).toBe('Publishing');
                $interval.flush(1999);
                expect(element.text()).toBe('Please Wait');
            });

            it('should not add the class `Button--outline` when clicked and onExecute attr present', function () {

                rbProgressButton = angular.element(templateNoFunction);
                element = $compile(rbProgressButton)($scope);

                expect(rbProgressButton.hasClass('Button--outline')).toBe(false);
                element.triggerHandler('click');
                $interval.flush(1);
                expect(rbProgressButton.hasClass('Button--outline')).toBe(false);
            });

            it('should add the class `Button--outline` when clicked and onExecute attr present', function () {

                expect(rbProgressButton.hasClass('Button--outline')).toBe(false);
                element.triggerHandler('click');
                $interval.flush(1);
                expect(rbProgressButton.hasClass('Button--outline')).toBe(true);
            });

            it('should not call `onExecute` function when clicked and onExecute attr not present', function () {

                rbProgressButton = angular.element(templateNoFunction);
                element = $compile(rbProgressButton)($scope);

                element.triggerHandler('click');
                deferredResolution.resolve();
                isolatedScope.$digest();

                expect(isolatedScope.onExecute).not.toHaveBeenCalled();
            });

            it('should call the `onExecute` function when button is clicked and onExecute attr present', function () {

                element.triggerHandler('click');
                deferredResolution.resolve();
                isolatedScope.$digest();

                expect(isolatedScope.onExecute).toHaveBeenCalled();
            });

            it('should show the original button label when execution finishes', function () {

                element.triggerHandler('click');
                $interval.flush(1);
                expect(element.text()).toBe('Publishing');
                $interval.flush(1999);
                expect(element.text()).toBe('Please Wait');

                deferredResolution.resolve();
                isolatedScope.$digest();

                expect(element.text()).toBe('Publish');
            });

            it('should have the class `Button--standard` when execution finishes', function () {

                element.triggerHandler('click');
                $interval.flush(1);
                expect(rbProgressButton.hasClass('Button--standard')).toBe(false);

                deferredResolution.resolve();
                isolatedScope.$digest();

                expect(rbProgressButton.hasClass('Button--standard')).toBe(true);
            });

        });
    });
});
