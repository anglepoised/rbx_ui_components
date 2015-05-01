define([], function () {

    /**
     * Link function for Overlay Model directive.
     * @param {Object} scope  Directive isolated scope
     * @param {Object} elem  Directive root elemenet
     * @param {Object} attr  Directive attributes
     * @return void
     */
    function link (scope, elem, attr) {

        function trapFocus (event) {
            var overlay = document.querySelector('rb-overlay-modal');

            if (overlay && !overlay.contains(event.target)) {

                event.target.blur();
                event.stopImmediatePropagation();

                // Try to find the last button child in overlay
                // and assume it is an 'Action' button to focus
                var actionButtons = overlay.querySelectorAll('button');

                if (actionButtons && actionButtons[ actionButtons.length - 1 ] !== undefined) {
                    actionButtons[ actionButtons.length - 1 ].focus();
                } else {
                    // If no button is found then overlay gets the focus.
                    overlay.focus();
                }
            }
        }
        // Locks the scroll
        document.querySelector('body').style.overflow = 'hidden';
        // Adds a listener to trap the focus
        document.addEventListener('focus', trapFocus, true);

        elem.on('$destroy', function () {
            document.removeEventListener('focus', trapFocus, true);
            document.querySelector('body').style.overflow = 'auto';
        });
    }

    return link;
});
