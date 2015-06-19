define([
    './rb-deep-search-each',
    './rb-deep-search-node'
], function (each, Node) {

    /**
     * Contains a collection of nodes searchable by label.
     * @exports rb-deep-search/rb-deep-search-tree
     *
     * @param {Object} nodes Object model containing search information.
     */
    function Tree (nodes) {
        this._nodes = nodes;
        this.items = [];

        this.init();
    }

    /**
     * Iterate through objects or arrays.
     */
    Tree.prototype.each = each;

    /**
     * Recursive conversion of items into Nodes.
     */
    Tree.prototype.init = function () {
        var $this = this;

        $this.each($this._nodes, function (_node) {
            var node = new Node(_node, $this);

            $this.items.push(node);
        });
    };

    /**
     * Call reset on all items.
     */
    Tree.prototype.reset = function () {
        var $this = this;

        this.each(this.items, function (item) {
            item.reset(item);
        });
    };

    /**
     * Resets the model hidden status and begins the search for labels on items.
     *
     * @param {String} query Search query.
     */
    Tree.prototype.search = function (query) {
        this.reset();
        this.each(this.items, function (item) {
            item.search(query);
        });
    };

    return Tree;

});
