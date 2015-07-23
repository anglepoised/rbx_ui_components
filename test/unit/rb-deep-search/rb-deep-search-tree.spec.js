define([
    'ui-components/rb-deep-search/demo/demo-categories-pokedex',
    'ui-components/rb-deep-search/rb-deep-search-tree'
], function (categories, Tree) {
    describe('rb-deep-search-tree', function () {
        var tree,
            mockCategory = categories[0];

        beforeEach(function () {
            tree = new Tree(mockCategory.items);
        });

        describe('init', function () {
            it('should have the correct number of child nodes', function () {
                expect(tree.items.length).toBe(4);
            });
        });

        describe('reset', function () {
            it('should call reset on all items', function () {
                angular.forEach(tree.items, function (item) {
                    spyOn(item, 'reset');
                });

                tree.reset();

                angular.forEach(tree.items, function (item) {
                    expect(item.reset).toHaveBeenCalledWith(item);
                });
            });
        });

        describe('search', function () {
            it('should call search on all items', function () {
                angular.forEach(tree.items, function (item) {
                    spyOn(item, 'search');
                });

                tree.search('unicorns');

                angular.forEach(tree.items, function (item) {
                    expect(item.search).toHaveBeenCalledWith('unicorns');
                });
            });
        });
    });
});
