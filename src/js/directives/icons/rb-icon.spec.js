describe('rb-icon', function () {

    var $scope,
        $compile,
        _icon = 'icon',
        template = '<rb-icon icon="icon">Rockabox</rb-icon>';

    beforeEach(module('icons/rb-icon.tpl.html',
        'directives.icons.rb-icon'
    ));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
        $scope = _$rootScope_.$new({});
        $compile = _$compile_;
        $scope.icon = _icon;
    }));

    it('should convert attributes on a rb-icon to attributes on the generated icon',
        function () {
            var icon = $compile('<rb-icon anyattr any-attr></rb-icon>')($scope);

            $scope.$apply();
            expect(icon[0].hasAttribute('anyattr')).toBe(true);
            expect(icon[0].hasAttribute('any-attr')).toBe(true);
        });

    describe('rendering', function () {

        it('should render with a "div" tagname', function () {
            var icon = angular.element(template),
                element = $compile(icon)($scope);

            $scope.$apply();
            expect(element[0].tagName.toLowerCase()).toEqual('div');
        });

        it('should be able to render a text for the icon', function () {
            var icon = angular.element(template),
                element = $compile(icon)($scope);

            $scope.$apply();
            expect(element.find('span').html()).toEqual('Rockabox');
        });

        it('should attach an icon class', function () {
            var icon = angular.element(template),
                element = $compile(icon)($scope);

            $scope.$apply();
            expect(icon.hasClass('Icon--icon')).toBe(true);
        });

    });
});
