define([
    'components/rb-deep-search/demo/demo-categories-pokedex',
    'components/rb-deep-search/rb-deep-search-each'
], function (categories, each) {
    describe('rb-deep-search-each', function () {
        var mockCategory = categories[0];

        it('should iterate through an array', function () {
            var iteratee = jasmine.createSpy('iteratee');

            each(mockCategory.items, iteratee);

            expect(iteratee.calls.count()).toBe(4);
        });
    });
});
