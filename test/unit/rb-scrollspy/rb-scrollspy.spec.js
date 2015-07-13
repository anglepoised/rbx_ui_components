define([
    'components/rb-scrollspy'
], function (rbScrollspy) {
    describe('rb-scrollspy', function () {

        var $rootScope,
            $scope,
            isolatedScope,
            $compile,
            element,
            compileTemplate,
            _categories = [
                {
                    'label': 'Countries',
                    'anchor': 'countries',
                    'hidden': false,
                    'items': [
                        {
                            'label': 'A',
                            'anchor': 'A',
                            'items': [
                                {'label':'Afghanistan'},
                                {'label':'Albania'},
                                {'label':'Algeria'},
                                {'label':'Andorra'}
                            ]
                        },
                        {
                            'label': 'B',
                            'anchor': 'B',
                            'items': [
                                {'label':'Bahamas, The'},
                                {'label':'Bahrain'},
                                {'label':'Bangladesh'},
                                {'label':'Barbados'},
                                {'label':'Belarus'}
                            ]
                        },
                        {
                            'label': 'C',
                            'anchor': 'C',
                            'items': [
                                {'label':'Cambodia'},
                                {'label':'Cameroon'},
                                {'label':'Canada'},
                                {'label':'Cape Verde'}
                            ]
                        },
                        {
                            'label': 'D',
                            'anchor': 'D',
                            'items': [
                                {'label':'Denmark'},
                                {'label':'Djibouti'},
                                {'label':'Dominica'},
                                {'label':'Dominican Republic'}
                            ]
                        }
                    ]
                }
            ],
            _offset = 100,
            anchors,
            spans,
            items,
            template = '<rb-scrollspy categories="categories"></rb-scrollspy>',
            templateWithOffset = '<rb-scrollspy categories="categories" offset="100"></rb-scrollspy>';

        beforeEach(angular.mock.module(rbScrollspy.name));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $rootScope = _$rootScope_;
            $scope = _$rootScope_.$new({});
            $compile = _$compile_;
            $scope.categories = _categories;
            $scope.offset = _offset;

            // Compile directive, apply scope and fetch new isolated scope
            compileTemplate = function (template) {
                element = $compile(template)($scope);
                $scope.$apply();
                isolatedScope = element.isolateScope();
            };
        }));

        describe('attribute generation', function () {

            it('should convert attributes on rb-scrollspy to attributes on the generated list',
                function () {
                    compileTemplate('<rb-scrollspy anyattr any-attr></rb-scrollspy>');

                    expect(element[0].hasAttribute('anyattr')).toBe(true);
                    expect(element[0].hasAttribute('any-attr')).toBe(true);
                });
        });

        describe('rendering', function () {

            it('should render with a "div" tagname', function () {
                compileTemplate('<rb-scrollspy></rb-scrollspy>');

                expect(element[0].tagName.toLowerCase()).toEqual('div');
            });

            it('should render all items in the container', function () {
                compileTemplate(template);

                expect(element.find('li').length).toBe(5);
                expect(element.find('a').length).toBe(5);
            });

            it('should place the item labels in the container', function () {
                compileTemplate(template);
                spans = element.find('span');

                expect(angular.element(spans[0]).html()).toEqual('Countries');
                expect(angular.element(spans[1]).html()).toEqual('A');
                expect(angular.element(spans[2]).html()).toEqual('B');
                expect(angular.element(spans[3]).html()).toEqual('C');
                expect(angular.element(spans[4]).html()).toEqual('D');
            });

            describe('anchors and du-scrollspy attribute directive', function () {

                it('should place an href attr per item with its anchor value', function () {
                    compileTemplate(template);
                    anchors = element.find('a');

                    expect(angular.element(anchors[0]).attr('href')).toEqual('#countries');
                    expect(angular.element(anchors[1]).attr('href')).toEqual('#A');
                    expect(angular.element(anchors[2]).attr('href')).toEqual('#B');
                    expect(angular.element(anchors[3]).attr('href')).toEqual('#C');
                    expect(angular.element(anchors[4]).attr('href')).toEqual('#D');
                });

                it('should attach a du-scrollspy attribute directive per item', function () {
                    compileTemplate(template);
                    anchors = element.find('a');

                    expect(anchors[0].hasAttribute('du-scrollspy')).toBe(true);
                    expect(anchors[1].hasAttribute('du-scrollspy')).toBe(true);
                    expect(anchors[2].hasAttribute('du-scrollspy')).toBe(true);
                    expect(anchors[3].hasAttribute('du-scrollspy')).toBe(true);
                    expect(anchors[4].hasAttribute('du-scrollspy')).toBe(true);
                });

                it('should place a du-scrollspy `offset` attribute when offset is present in scope', function () {
                    compileTemplate(templateWithOffset);
                    anchors = element.find('a');

                    expect(angular.element(anchors[0]).attr('offset')).toEqual('128');
                    expect(angular.element(anchors[1]).attr('offset')).toEqual('100');
                    expect(angular.element(anchors[2]).attr('offset')).toEqual('100');
                    expect(angular.element(anchors[3]).attr('offset')).toEqual('100');
                    expect(angular.element(anchors[4]).attr('offset')).toEqual('100');
                });

                it('should attach `du-scroll-container` to <a> elems with val of scroll-id attribute', function () {
                    compileTemplate('<rb-scrollspy categories="categories" offset="100" scroll-id="test-id">' +
                        '</rb-scrollspy>');
                    list = angular.element(element.find('ul')[0]);

                    expect(list.attr('du-scroll-container')).toEqual('test-id');
                });
            });

            describe('category class', function () {

                it('should attach a category class when an item is a category', function () {
                    compileTemplate(template);

                    expect(angular.element(element.find('a')[0]).hasClass('Scrollspy-categoryInner')).toBe(true);
                });

                it('should not display the top category if set as hidden', function () {
                    // Ensure not to amend the categories for other tests therefor copy the main list and re-assign
                    $scope.categories = angular.copy(_categories);
                    $scope.categories[0].hidden = true;
                    compileTemplate(template);

                    expect(angular.element(element.find('a')[0]).hasClass('Scrollspy-categoryInner')).toBeFalsy();
                });

                it('should attach a section class when an item is not a category', function () {
                    compileTemplate(template);
                    anchors = element.find('a');

                    expect(angular.element(anchors[1]).hasClass('Scrollspy-sectionInner')).toBe(true);
                    expect(angular.element(anchors[2]).hasClass('Scrollspy-sectionInner')).toBe(true);
                    expect(angular.element(anchors[3]).hasClass('Scrollspy-sectionInner')).toBe(true);
                    expect(angular.element(anchors[4]).hasClass('Scrollspy-sectionInner')).toBe(true);
                });
            });
        });
    });
});
