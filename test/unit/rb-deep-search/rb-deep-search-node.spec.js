define([
    'components/rb-deep-search/demo/demo-categories-pokedex',
    'components/rb-deep-search/rb-deep-search-node'
], function (categories, Node) {
    describe('rb-deep-search-node', function () {
        var node,
            mockCategories = categories[0],
            type;

        beforeEach(function () {
            type = angular.copy(mockCategories.items[0]);
            node = new Node(type);
        });

        describe('property', function () {
            describe('_protected', function () {
                it('should be true if hidden', function () {
                    var node = new Node({
                            hidden: true
                        });

                    expect(node._protected).toBe(true);
                });

                it('should be false if not hidden', function () {
                    expect(node._protected).toBe(false);
                });
            });

            it('_node', function () {
                expect(node._node).toBe(type);
            });

            it('_parent', function () {
                var child = node.items[0]; // Child node to test parent

                expect(child._parent).toBe(node);
            });

            it('items should be an array', function () {
                expect(node.items.length).toBeDefined();
            });

            it('label should be the same', function () {
                expect(node.label).toBe('Electric');
            });
        });

        describe('init', function () {
            it('should have the correct number of child nodes', function () {
                expect(node.items.length).toBe(5);
            });
        });

        describe('reset', function () {
            it('should iterate through items', function () {
                spyOn(node, 'each');

                node.reset(node);

                expect(node.each).toHaveBeenCalled();
            });

            it('should set hidden false on all items', function () {
                // Set all items to be hidden true
                angular.forEach(node.items, function (item) {
                    item.hidden = true;
                });

                node.reset(node);

                angular.forEach(node.items, function (item) {
                    expect(item.hidden).toBe(false);
                });
            });

            it('should recursively call reset', function () {
                spyOn(node, 'reset').and.callThrough();

                node.reset(node);

                expect(node.items.length).toBe(5);
                angular.forEach(node.items, function (item) {
                    expect(node.reset).toHaveBeenCalledWith(item);
                });
            });

            it('should not modify a _protected item node', function () {
                var child = node.items[0];

                child._node.hidden = true;
                child._protected = true;

                node.reset(node);

                expect(child.hidden).toBe(true);
            });
        });

        describe('search', function () {
            it('should set hidden as false if search is successful', function () {
                node.search('elec');

                expect(node.hidden).toBe(false);
            });

            it('should set hidden as true if search is unsuccessful', function () {
                node.search('Ash');

                expect(node.hidden).toBe(true);
            });

            it('should continue searching child node if match is not found', function () {
                spyOn(node, 'each');

                node.search('misty');

                expect(node.each).toHaveBeenCalled();
            });

            it('should not modify a _protected node', function () {
                node._node.hidden = true;
                node._protected = true;

                node.search('Electric'); // Matching string

                expect(node.hidden).toBe(true);
            });
        });

        describe('hidden property', function () {
            it('should get and set the same value as _node.hidden', function () {
                node._node.hidden = true;
                expect(node.hidden).toBe(true);

                node._node.hidden = false;
                expect(node.hidden).toBe(false);
            });

            it('should set the parent hidden the same', function () {
                var child = node.items[0]; // Child node to test parent

                child.hidden = true;

                expect(child._parent.hidden).toBe(true);
                expect(child._node.hidden).toBe(true);
            });

            it('should not set if node is _protected', function () {
                var node = new Node({
                        hidden: true
                    });

                node.hidden = false;

                expect(node.hidden).toBe(true);
            });
        });
    });
});
