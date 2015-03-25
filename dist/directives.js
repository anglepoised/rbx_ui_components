(function () {
    'use strict';

    /**
     * @ngdoc module
     * @name directives.footers.rb-footer
     * @description
     *
     * RB Footer
     *
     */
    angular.module('directives.footers.rb-footer', [

    ])
    .directive('rbFooter', RbFooterDirective);

    /**
     * @ngdoc directive
     * @name rbFooter
     * @module directives.footers.rb-footer
     *
     * @restrict E
     *
     * @description
     * `<rb-footer>` is a directive that shows a layout footer
     *
     * @scope
     *  'copyright': contains a copyright notice to be placed in the footer
     *  'links': an array containing links objects to be placed in the footer.
     *           Link objects should be defined as follows:
     *           {id: '<an identifier for the link>', text: 'Text to be displayed'}
     *  'clickfunction': a custom function to be executed on every link when clicked
     *                   The function receives the 'id' from the link object as param
     *
     * @usage
     * <hljs lang="html">
     *   <rb-footer copyright="ctrl.copyright" links="ctrl.links" clickfunction="ctrl.goTo(id)"></rb-footer>
     * </hljs>
     *
     */

    function RbFooterDirective () {

        return {
            scope: {
                'copyright': '=',
                'links': '=',
                'clickfunction': '&'
            },
            restrict: 'E',
            replace: true,
            templateUrl: 'footers/rb-footer.tpl.html'
        };
    }
})();

(function () {
    'use strict';

    /**
     * @ngdoc module
     * @name directives.headers.header.rb-header
     * @description
     *
     * RB Header
     *
     */
    angular.module('directives.headers.header.rb-header', [

    ])
    .directive('rbHeader', RbHeaderDirective);

    /**
     * @ngdoc directive
     * @name rbHeader
     * @module directives.headers.header.rb-header
     *
     * @restrict E
     *
     * @description
     * `<rb-header>` is a directive that shows a header
     *
     * @usage
     * <hljs lang="html">
     *    <rb-header>
     *        <a class="Header-logo" ng-click="ctrl.logoHeaderFunction()" ng-aria>
     *            <rb-icon icon="white-alabaster-100-logo-rockabox">
     *                Rockabox
     *            </rb-icon>
     *        </a>
     *        <div class="Header-nav">
     *            <rb-nav-bar options="ctrl.options" clickfunction="ctrl.goTo(id)"
     *                isactivefunction="ctrl.isActive(id)"></rb-nav-bar>
     *        </div>
     *        <div class="Header-user">
     *            <rb-user username="ctrl.currentUsername" logoutfunction="ctrl.logout()">
     *                Sign out
     *            </rb-user>
     *        </div>
     *     </rb-header>
     * </hljs>
     *
     */

    function RbHeaderDirective () {

        return {
            scope: {
            },
            restrict: 'E',
            replace: true,
            transclude: true,
            templateUrl: 'headers/header/rb-header.tpl.html'
        };
    }
})();

(function () {
    'use strict';

    /**
     * @ngdoc module
     * @name directives.icons.icon.rb-icon
     * @description
     *
     * RB Icon
     *
     */
    angular.module('directives.icons.icon.rb-icon', [

    ])
    .directive('rbIcon', RbIconDirective);

    /**
     * @ngdoc directive
     * @name rbIcon
     * @module directives.icons.icon.rb-icon
     *
     * @restrict E
     *
     * @description
     * `<rb-icon>` is a directive that renders an icon
     *
     * @scope
     *  'icon': contains an icon class for the icon
     *
     * @usage
     * <hljs lang="html">
     *    <a class="Header-logo" ng-click="clickfunction()" ng-aria>
     *        <rb-icon icon="white-alabaster-100-logo-rockabox">Rockabox</rb-icon>
     *    </a>
     * </hljs>
     *
     */

    function RbIconDirective () {

        return {
            scope: {
                'icon': '@'
            },
            restrict: 'E',
            replace: true,
            transclude: true,
            templateUrl: 'icons/icon/rb-icon.tpl.html'
        };
    }
})();

(function () {
    'use strict';

    /**
     * @ngdoc module
     * @name directives.nav-bars.nav-bar.rb-nav-bar
     * @description
     *
     * RB Navigation Bar
     *
     */
    angular.module('directives.nav-bars.nav-bar.rb-nav-bar', [

    ])
    .directive('rbNavBar', RbNavBarDirective);

    /**
     * @ngdoc directive
     * @name rbNavBar
     * @module directives.nav-bars.nav-bar.rb-nav-bar
     *
     * @restrict E
     *
     * @description
     * `<rb-nav-bar>` is a directive that shows a navigation bar
     *
     * @scope
     *  'options': an array containing option objects to be placed in the navigation bar.
     *           Option objects should be defined as follows:
     *           {id: '<an identifier for the option>',
     *           text: 'Text to be displayed'}
     *  'clickfunction': a custom function to be executed on every option when clicked
     *                   The function receives the 'id' from the option object as param
     *  'isactivefunction': a custom function that returns if an option should be displayed
     *                   with an `is-active` class.
     *                   The function receives the 'id' from the option object as param
     *
     * @usage
     * <hljs lang="html">
     *    <div class="Header-nav">
     *        <rb-nav-bar options="ctrl.options" clickfunction="ctrl.goTo(id)"
     *            isactivefunction="ctrl.isActive(id)"></rb-nav-bar>
     *    </div>
     * </hljs>
     *
     */

    function RbNavBarDirective () {

        return {
            scope: {
                'options': '=',
                'clickfunction': '&',
                'isactivefunction': '&'
            },
            restrict: 'E',
            replace: true,
            templateUrl: 'nav-bars/nav-bar/rb-nav-bar.tpl.html'
        };
    }
})();

(function () {
    'use strict';

    /**
     * @ngdoc module
     * @name directives.user.user.rb-user
     * @description
     *
     * RB User
     *
     */
    angular.module('directives.user.user.rb-user', [

    ])
    .directive('rbUser', RbUserDirective);

    /**
     * @ngdoc directive
     * @name rbUser
     * @module directives.user.user.rb-user
     *
     * @restrict E
     *
     * @description
     * `<rb-user>` is a directive that shows a username and logout component
     *
     * @scope
     *  'username': contains an expression that returns the current logged in username
     *  'logoutfunction': a custom logout function to be executed when clicked
     *
     * @usage
     * <hljs lang="html">
     *   <div class="Header-user">
     *      <rb-user username="ctrl.currentUsername" logoutfunction="ctrl.logout()">
     *          Sign out
     *      </rb-user>
     *   </div>
     * </hljs>
     *
     */

    function RbUserDirective () {

        return {
            scope: {
                'username': '=',
                'logoutfunction': '&'
            },
            restrict: 'E',
            replace: true,
            transclude: true,
            templateUrl: 'user/user/rb-user.tpl.html'
        };
    }
})();
