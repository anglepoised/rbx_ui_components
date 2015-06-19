define([
    'components/rb-deep-search'
], function (rbDeepSearch) {
    describe('rb-deep-search', function () {

        var $rootScope,
            $scope,
            isolatedScope,
            $compile,
            compileTemplate,
            element,
            ngModel;

        beforeEach(angular.mock.module(rbDeepSearch.name));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $rootScope = _$rootScope_;
            $scope = _$rootScope_.$new({});
            $compile = _$compile_;

            // Compile directive, apply scope and fetch new isolated scope
            compileTemplate = function (template) {
                $scope.ngModel = ngModel;
                element = $compile(template)($scope);
                $scope.$apply();
                isolatedScope = element.isolateScope();
            };
        }));

        beforeEach(function () {
            compileTemplate('<rb-deep-search ng-model="ngModel"></rb-deep-search>');
        });

        describe('searchable tree', function () {
            it('should be defined', function () {
                expect(isolatedScope.tree).toBeDefined();
                expect(typeof isolatedScope.tree.search).toBe('function');
            });
        });

        describe('search method', function () {
            it('should call tree.search', function () {
                var query = 'extraterrestrial beings';
                spyOn(isolatedScope.tree, 'search');

                isolatedScope.search('extraterrestrial beings');

                expect(isolatedScope.tree.search).toHaveBeenCalledWith(query);
            });

            it('should assign the original categories to ngModel', function () {
                expect(isolatedScope.ngModel).toBe(isolatedScope.ngModel);
            });
        });
    });
});
