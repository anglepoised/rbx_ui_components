describe('rb-footer', function () {

    var $scope,
        $compile,
        _links = [
            {'id': '31', 'text': 'Footer Link 1'},
            {'id': '37', 'text': 'Footer Link 2'},
            {'id': '41', 'text': 'Footer Link 3'}
        ],
        _copyright = 'Copyright 2015 Rockabox Limited',
        _clickfunction = function (id) {
            return id;
        },
        template = '<rb-footer copyright="copyright" ' +
            'links="links" clickfunction="clickfunction(id)"></rb-footer>';

    beforeEach(module('directives.footers.rb-footer'));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
        $scope = _$rootScope_.$new({});
        $compile = _$compile_;
        $scope.copyright = _copyright;
        $scope.links = _links;
        $scope.clickfunction = _clickfunction;
    }));

    it('should convert attributes on a rb-footer to attributes on the generated footer',
        function () {
            var footer = $compile('<rb-footer anyattr any-attr></rb-footer>')($scope);

            $scope.$apply();
            expect(footer[0].hasAttribute('anyattr')).toBe(true);
            expect(footer[0].hasAttribute('any-attr')).toBe(true);
        });

    describe('rendering', function () {

        it('should render with a "footer" tagname', function () {
            var footer = angular.element(template),
                element = $compile(footer)($scope);

            $scope.$apply();
            expect(element[0].tagName.toLowerCase()).toEqual('footer');
        });

        it('should place a copyright notice in the footer', function () {
            var footer = angular.element(template),
                element = $compile(footer)($scope);

            $scope.$apply();
            expect(element.find('p').html()).toEqual(_copyright);
        });

        it('should place links in the footer', function () {
            var footer = angular.element(template),
                element = $compile(footer)($scope);

            $scope.$apply();
            expect(element.find('a').length).toBe(3);
        });

        it('should attach a clickfunction to the links', function () {
            var footer = angular.element(template),
                element = $compile(footer)($scope),
                links;

            $scope.$apply();
            links = angular.element(element.find('a'));
            expect(links[0].outerHTML).toContain('ng-click="clickfunction(');
        });
    });
});
