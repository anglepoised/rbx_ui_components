define([
    'components/rb-warning-messages'
], function (rbWarningMessages) {
    describe('rb-warning-messages', function () {

        var $scope,
            $compile,
            _warnings = [
                {
                    'id': 1,
                    'message': 'This is warning number ONE',
                    'identifier': 'PARTIAL_TRACKING',
                    'url_params': {
                        'campaign_id': 1073741824
                    }
                },
                {
                    'id': 2,
                    'message': 'This is warning number TWO',
                    'identifier': 'OTHER_STATE',
                    'url_params': {
                        'campaign_id': 1073741824
                    }
                }
            ],
            _onIssueClicked = function (warning) {
                return warning;
            },
            _onDismiss = function (id) {
                return id;
            },
            template = '<rb-warning-messages warnings="warnings" ' +
                'on-issue-clicked="onIssueClicked(warning)" ' +
                'on-dismiss="onDismiss(id)"></rb-warning-messages>';

        beforeEach(angular.mock.module(rbWarningMessages.name));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $scope = _$rootScope_.$new({});
            $compile = _$compile_;
            $scope.warnings = _warnings;
            $scope.onIssueClicked = _onIssueClicked;
            $scope.onDismiss = _onDismiss;
        }));

        describe('attribute generation', function () {

            it('should convert attributes on a rb-warning-messages to attributes on the generated warning list',
                function () {
                    var warnings = $compile('<rb-warning-messages anyattr any-attr></rb-warning-messages>')($scope);

                    $scope.$apply();
                    expect(warnings[0].hasAttribute('anyattr')).toBe(true);
                    expect(warnings[0].hasAttribute('any-attr')).toBe(true);
                });
        });

        describe('rendering', function () {

            it('should render with a "div" tagname', function () {
                var div = angular.element(template),
                    element = $compile(div)($scope);

                $scope.$apply();
                expect(element[0].tagName.toLowerCase()).toEqual('div');
            });

            it('should show warnings as a list', function () {
                var warningList = angular.element(template),
                    element = $compile(warningList)($scope);

                $scope.$apply();
                expect(element.find('li').length).toBe(2);
            });

            it('should attach an onIssueClicked function to the warnings', function () {
                var list = angular.element(template),
                    element = $compile(list)($scope),
                    warnings;

                $scope.$apply();
                warnings = angular.element(element.find('li'));
                expect(warnings[0].outerHTML).toContain('ng-click="onIssueClicked(');
                expect(warnings[1].outerHTML).toContain('ng-click="onDismiss(');
            });

            it('should attach an onDismiss function to the warnings', function () {
                var list = angular.element(template),
                    element = $compile(list)($scope),
                    warnings;

                $scope.$apply();
                warnings = angular.element(element.find('li'));
                expect(warnings[0].outerHTML).toContain('ng-click="onDismiss(');
                expect(warnings[1].outerHTML).toContain('ng-click="onDismiss(');
            });
        });
    });
});
