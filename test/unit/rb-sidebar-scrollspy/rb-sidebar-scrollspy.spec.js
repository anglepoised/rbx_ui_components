define([
    'components/rb-sidebar-scrollspy'
], function (rbSidebarscrollspy) {
    describe('rb-sidebar-scrollspy', function () {

        var $rootScope,
            $scope,
            isolatedScope,
            $compile,
            element,
            compileTemplate,
            _list = [
                {label:'A', anchor:'A', category: true},
                {label:'B', anchor:'B'},
                {label:'C', anchor:''},
                {label:'D'},
                {label:'E', anchor:'E'}
            ],
            _offset = 100,
            anchors,
            spans,
            items,
            template = '<rb-sidebar-scrollspy list="list"></rb-sidebar-scrollspy>',
            templateWithOffset = '<rb-sidebar-scrollspy list="list" offset="100"></rb-sidebar-scrollspy>';

        beforeEach(angular.mock.module(rbSidebarscrollspy.name));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $rootScope = _$rootScope_;
            $scope = _$rootScope_.$new({});
            $compile = _$compile_;
            $scope.list = _list;
            $scope.offset = _offset;

            // Compile directive, apply scope and fetch new isolated scope
            compileTemplate = function (template) {
                element = $compile(template)($scope);
                $scope.$apply();
                isolatedScope = element.isolateScope();
            };
        }));

        describe('attribute generation', function () {

            it('should convert attributes on rb-sidebar-scrollspy to attributes on the generated list',
                function () {
                    compileTemplate('<rb-sidebar-scrollspy anyattr any-attr></rb-sidebar-scrollspy>');

                    expect(element[0].hasAttribute('anyattr')).toBe(true);
                    expect(element[0].hasAttribute('any-attr')).toBe(true);
                });
        });

        describe('rendering', function () {

            it('should render with a "div" tagname', function () {
                compileTemplate('<rb-sidebar-scrollspy></rb-sidebar-scrollspy>');

                expect(element[0].tagName.toLowerCase()).toEqual('div');
            });

            it('should render all items in the sidebar', function () {
                compileTemplate(template);

                expect(element.find('li').length).toBe(5);
                expect(element.find('a').length).toBe(5);
            });

            it('should track all items in the sidebar by index', function () {
                compileTemplate(template);

                items = angular.element(element.find('li'));
                expect(items[0].outerHTML).toContain('track by $index');
            });

            it('should place the item labels in the sidebar', function () {
                compileTemplate(template);
                spans = element.find('span');

                expect(angular.element(spans[0]).html()).toEqual('A');
                expect(angular.element(spans[1]).html()).toEqual('B');
                expect(angular.element(spans[2]).html()).toEqual('C');
                expect(angular.element(spans[3]).html()).toEqual('D');
                expect(angular.element(spans[4]).html()).toEqual('E');
            });

            describe('when anchor is present', function () {

                it('should place an href attr when an item has an anchor', function () {
                    compileTemplate(template);
                    anchors = element.find('a');

                    expect(angular.element(anchors[0]).attr('href')).toEqual('#A');
                    expect(angular.element(anchors[1]).attr('href')).toEqual('#B');
                    expect(angular.element(anchors[4]).attr('href')).toEqual('#E');
                });

                it('should attach a bs-scrollspy attribute directive when an item has an anchor', function () {
                    compileTemplate(template);
                    anchors = element.find('a');

                    expect(anchors[0].hasAttribute('bs-scrollspy')).toBe(true);
                    expect(anchors[1].hasAttribute('bs-scrollspy')).toBe(true);
                    expect(anchors[4].hasAttribute('bs-scrollspy')).toBe(true);
                });

                it('should place a bs-scrollspy `data-target` attribute when an item has an anchor', function () {
                    compileTemplate(template);
                    anchors = element.find('a');

                    expect(angular.element(anchors[0]).attr('data-target')).toEqual('#A');
                    expect(angular.element(anchors[1]).attr('data-target')).toEqual('#B');
                    expect(angular.element(anchors[4]).attr('data-target')).toEqual('#E');
                });

                it('should place a bs-scrollspy `data-offset` attribute when offset is present in scope', function () {
                    compileTemplate(templateWithOffset);
                    anchors = element.find('a');

                    expect(angular.element(anchors[0]).attr('data-offset')).toEqual('100');
                    expect(angular.element(anchors[1]).attr('data-offset')).toEqual('100');
                    expect(angular.element(anchors[4]).attr('data-offset')).toEqual('100');
                });
            });

            describe('when anchor is not present', function () {

                it('should not place an href attr when an item has no anchor', function () {
                    compileTemplate(template);
                    anchors = element.find('a');

                    expect(anchors[2].hasAttribute('href')).toBe(false);
                    expect(anchors[3].hasAttribute('href')).toBe(false);
                });

                it('should not attach a bs-scrollspy attribute directive when an item has no anchor', function () {
                    compileTemplate(template);
                    anchors = element.find('a');

                    expect(anchors[2].hasAttribute('bs-scrollspy')).toBe(false);
                    expect(anchors[3].hasAttribute('bs-scrollspy')).toBe(false);
                });

                it('should not place a bs-scrollspy `data-target` attribute when an item has no anchor', function () {
                    compileTemplate(template);
                    anchors = element.find('a');

                    expect(anchors[2].hasAttribute('data-target')).toBe(false);
                    expect(anchors[3].hasAttribute('data-target')).toBe(false);
                });

                it('should not place a bs-scrollspy `data-offset` attribute when an item has no anchor', function () {
                    compileTemplate(template);
                    anchors = element.find('a');

                    expect(anchors[2].hasAttribute('data-offset')).toBe(false);
                    expect(anchors[3].hasAttribute('data-offset')).toBe(false);
                });
            });

            describe('category class', function () {

                it('should attach a category class when an item has a category property set to true', function () {
                    compileTemplate(template);

                    expect(angular.element(element.find('span')[0]).hasClass('categoryClass')).toBe(true);
                });

                it('should not attach a category class when an item has no category', function () {
                    compileTemplate(template);
                    spans = element.find('span');

                    expect(angular.element(spans[1]).hasClass('categoryClass')).toBe(false);
                    expect(angular.element(spans[2]).hasClass('categoryClass')).toBe(false);
                    expect(angular.element(spans[3]).hasClass('categoryClass')).toBe(false);
                    expect(angular.element(spans[4]).hasClass('categoryClass')).toBe(false);
                });
            });
        });
    });
});
