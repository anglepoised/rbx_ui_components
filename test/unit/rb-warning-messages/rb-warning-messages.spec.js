define([
    'components/rb-warning-messages'
], function (rbWarningMessages) {
    describe('rb-warning-messages', function () {

        var $scope,
            $compile,
            warningList,
            element,
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
            _onIssueClick = function (warning) {
                return warning;
            },
            _onDismiss = function (id) {
                return id;
            },
            template = '<rb-warning-messages warnings="warnings" ' +
                'on-issue-clicked="onIssueClick(warning)" ' +
                'on-dismiss="onDismiss(id)"></rb-warning-messages>';

        beforeEach(angular.mock.module(rbWarningMessages.name));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $scope = _$rootScope_.$new({});
            $compile = _$compile_;
            $scope.warnings = _warnings;
            $scope.onIssueClick = _onIssueClick;
            $scope.onDismiss = _onDismiss;
            warningList = angular.element(template);
            element = $compile(warningList)($scope);
            $scope.$apply();
        }));

        describe('attribute generation', function () {

            it('should convert attributes on a rb-warning-messages to attributes on the generated warning list',
                function () {
                    var warnings = $compile('<rb-warning-messages anyattr any-attr></rb-warning-messages>')($scope);

                    expect(warnings[0].hasAttribute('anyattr')).toBe(true);
                    expect(warnings[0].hasAttribute('any-attr')).toBe(true);
                });
        });

        describe('rendering', function () {

            it('should render with a "div" tagname', function () {

                expect(element[0].tagName.toLowerCase()).toEqual('div');
            });

            it('should show warnings as a list', function () {

                expect(element.find('li').length).toBe(2);
            });

            it('should attach an onIssueClick function to the warnings', function () {

                var warnings = angular.element(element.find('li'));

                expect(warnings[0].outerHTML).toContain('ng-click="onIssueClick(');
                expect(warnings[1].outerHTML).toContain('ng-click="onIssueClick(');
            });

            it('should attach an onDismiss function to the warnings', function () {

                var warnings = angular.element(element.find('li'));

                expect(warnings[0].outerHTML).toContain('ng-click="onDismiss(');
                expect(warnings[1].outerHTML).toContain('ng-click="onDismiss(');
            });
        });
    });
});
