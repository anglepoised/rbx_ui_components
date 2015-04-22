define([
    'components/rb-system-message'
], function (rbSystemMessage) {
    describe('rb-system-message', function () {

        var $rootScope,
            $scope,
            isolatedScope,
            $compile,
            element;

        // Compile directive, apply scope and fetch new isolated scope
        compileTemplate = function (template) {
            element = $compile(template)($scope);
            $scope.$apply();
            isolatedScope = element.isolateScope();
        };

        beforeEach(angular.mock.module(rbSystemMessage.name));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $rootScope = _$rootScope_;
            $scope = _$rootScope_.$new({});
            $compile = _$compile_;
        }));

        describe('title', function () {
            it('should be set by the title attribute', function () {
                compileTemplate('<rb-system-message title="Something happened"></rb-system-message>');
                expect(element.find('h2').html()).toContain('Something happened');
            });
        });

        describe('message', function () {
            it('should be set by the message attribute', function () {
                compileTemplate('<rb-system-message message="Here is the message"></rb-system-message>');
                expect(element.html()).toContain('Here is the message');
            });
        });

        describe('technical details', function () {
            it('should be in a readonly textarea', function () {
                compileTemplate('<rb-system-message technical-details="SIGILL"></rb-system-message>');
                expect(element.find('textarea').attr('readonly')).toBe('readonly');
            });

            it('should be set by the technical-details attribute', function () {
                compileTemplate('<rb-system-message technical-details="SIGILL"></rb-system-message>');
                expect(element.find('textarea')[0].value).toBe('SIGILL');
            });
        });

        describe('contact address', function () {
            it('should be empty by default', function () {
                compileTemplate('<rb-system-message></rb-system-message>');
                expect(element.find('a').length).toBe(0);
            });

            it('should be an mailto link set by the contact address', function () {
                compileTemplate('<rb-system-message contact="support@example.com"></rb-system-message>');
                expect(element.find('a').attr('href')).toBe('mailto:support@example.com');
                expect(element.find('a').html()).toContain('support@example.com');
            });
        });

        describe('dismiss button', function () {
            it('should have an ng-click attr to fire onDismiss', function () {
                compileTemplate('<rb-system-message></rb-system-message>');
                expect(element.find('button').attr('ng-click')).toBe('onDismiss()');
            });

            it('should have text set as "Okay I understand" by default', function () {
                compileTemplate('<rb-system-message></rb-system-message>');
                expect(element.find('button').html()).toContain('Okay I understand');
            });

            it('should have text set by the dismiss-message attribute', function () {
                compileTemplate('<rb-system-message dismiss-message="Hit me!"></rb-system-message>');
                expect(element.find('button').html()).toContain('Hit me!');
            });
        });

        describe('onDismiss method', function () {
            it('should execute expression in on-dismiss attribute', function () {
                $scope.myVal = 10;
                compileTemplate('<rb-system-message on-dismiss="myVal = 100"></rb-system-message>');
                isolatedScope.onDismiss();
                expect($scope.myVal).toBe(100);
            });

            it('should execute method expressions in on-dismiss attribute', function () {
                $scope.myVal = 10;
                $scope.myFunc = function () {
                    $scope.myVal = 100;
                };

                compileTemplate('<rb-system-message on-dismiss="myFunc()"></rb-system-message>');
                isolatedScope.onDismiss();
                expect($scope.myVal).toBe(100);
            });
        });

        describe('root element', function () {
            it('should have class "SystemMessage--danger" if modifier attribute is "danger"', function () {
                compileTemplate('<rb-system-message modifier="danger"></rb-system-message>');
                expect(element.hasClass('SystemMessage--danger')).toBe(true);
            });

            it('should have class "SystemMessage--positive" if modifier attribute is "primary"', function () {
                compileTemplate('<rb-system-message modifier="positive"></rb-system-message>');
                expect(element.hasClass('SystemMessage--positive')).toBe(true);
            });

            it('should not accept undefined modifiers', function () {
                compileTemplate('<rb-system-message modifier="kapow"></rb-system-message>');
                expect(element.hasClass('SystemMessage--kapow')).toBe(false);
            });
        });

    });
});
