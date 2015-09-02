define([
    'ui-components/rb-upload-status'
], function (rbUploadStatus) {
    describe('rb-upload-status', function () {

        var $rootScope,
            $scope,
            isolatedScope,
            $compile,
            element,
            compileTemplate;

        beforeEach(angular.mock.module(rbUploadStatus.name));

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

        it('should attach a modifier', function () {
            template = '<rb-upload-status modifier="fail"></rb-upload-status>';
            compileTemplate(template);

            expect(angular.element(element).hasClass('UploadStatus--fail')).toBeTruthy();
        });

        it('should pass through text', function () {
            template = '<rb-upload-status modifier="fail">Hi there</rb-upload-status>';
            compileTemplate(template);

            expect(angular.element(element).text()).toContain('Hi there');
        });

        it('should use the rb-loading component when processing modifier used', function () {
            template = '<rb-upload-status modifier="processing">We are processing</rb-upload-status>';
            compileTemplate(template);

            var ele = element[0].getElementsByClassName('Loading');

            expect(ele.length).toBe(1);
        });
    });
});
