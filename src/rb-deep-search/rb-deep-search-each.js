define([
], function () {

    /**
     * Iterate through objects or arrays.
     *
     * @param {Object|Array} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     */
    function each (collection, iteratee) {
        for (var c in collection) {
            if (collection.hasOwnProperty(c)) {
                iteratee(collection[c], c);
            }
        }
    }

    return each;

});
