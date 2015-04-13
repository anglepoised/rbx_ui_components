define([
    'html!./rb-login-form.tpl.html'
], function (template) {

    /**
     * @ngdoc directive
     * @name rbLoginForm
     * @module directives.rb-login-form
     *
     * @restrict E
     *
     * @description
     * `<rb-login-form>` is a directive able to render a login form
     *
     * @scope
     *  `icon`: contains an icon class for the icon
     *  `formname`: contains the form name
     *  `emailmodel`: contains the model for the email field
     *  `passwordmodel`: contains the model for the password field
     *  `loginfunction`: contains a login function to execute
     *
     * @usage
     * <hljs lang="html">
     *   <rb-login-form>
     *      icon="white-alabaster-175-logo-rockabox"
     *      formname="loginForm"
     *      emailmodel="demoCtrl.email"
     *      passwordmodel="demoCtrl.password"
     *      loginfunction="demoCtrl.login()">
     *   </rb-login-form>
     * </hljs>
     *
     * @ngInject
    */

    function rbLoginFormDirective () {

        return {
            scope: {
                'icon': '@',
                'formname': '@',
                'emailmodel': '=',
                'passwordmodel': '=',
                'loginfunction': '&'
            },
            restrict: 'E',
            replace: true,
            template: template
        };

    }

    return rbLoginFormDirective;
});
