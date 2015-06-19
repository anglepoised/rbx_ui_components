define([
    './rb-deep-search-each'
], function (each) {

    /**
     * Represents a searchable node with in a data model.
     * @exports rb-deep-search/rb-deep-search-node
     *
     * @param {Object} node Object containing vital search information.
     * @property {Boolean} node.hidden True if the node should be excluded from search.
     * @property {String} node.label Label used for searching.
     * @param {Object} parent Parent that this node is related to.
     */
    function Node (node, parent) {
        this._protected = node.hidden || false;
        this._node = node;
        this._parent = parent;

        this.items = [];
        this.label = node.label || '';

        this.init();
    }

    /**
     * Iterate through objects or arrays.
     */
    Node.prototype.each = each;

    /**
     * Recursive conversion of items into Nodes.
     */
    Node.prototype.init = function () {
        var $this = this;

        $this.each($this._node.items, function (item) {
            var node = new Node(item, $this);

            $this.items.push(node);
        });
    };

    /**
     * Recusively set hidden to be false on unprotected items.
     *
     * @param {Object} node Node to set items to be hidden false.
     */
    Node.prototype.reset = function (node) {
        var $this = this;

        $this.each(node.items, function (item) {
            if (!item._protected) {
                item._node.hidden = false;
            }
            $this.reset(item);
        });
    };

    /**
     * Checks to see if the label matches the current search query. If no match is found
     * it will set this node as hidden then call search on items. Note that if the
     * current node is _protected then a match is not executed.
     *
     * @param {String} str Search string.
     */
    Node.prototype.search = function (str) {
        var query = str ? str.toLowerCase() : '';

        if (!this._protected && this.label && this.label.toLowerCase().indexOf(query) > -1) {
            this.hidden = false;
        } else {
            this._node.hidden = true;
            // Keep searching through child nodes
            this.each(this.items, function (item) {
                item.search(query);
            });
        }
    };

    Object.defineProperty(Node.prototype, 'hidden', {
        get: function () {
            return this._node.hidden;
        },
        set: function (isHidden) {
            if (this._parent) {
                // Update parent to match node hidden state
                this._parent.hidden = isHidden;
            }

            if (!this._protected) {
                this._node.hidden = isHidden;
            }
        }
    });

    return Node;

});
