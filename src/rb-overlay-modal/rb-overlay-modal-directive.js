define([
    'html!./rb-overlay-modal.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbOverlayModal
     * @module rb-overlay-modal
     *
     * @restrict E
     *
     * @description
     * `<rb-overlay-modal>` is an overlay directive that wraps a modal content
     * and prevents interaction behind the modal window
     *
     * @usage
     * <hljs lang="html">
     *    <rb-overlay-modal>
     *        Drop any content here
     *    </rb-overlay-modal>
     * </hljs>
     *
     * @ngInject
     */
    function rbOverlayModalDirective () {

        return {
            restrict: 'E',
            transclude: true,
            template: template,
            link: link
        };

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
    }

    return rbOverlayModalDirective;
});
