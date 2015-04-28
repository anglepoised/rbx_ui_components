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
     *  `message`: contains a message to include in a <rb-form-message> directive
     *
     * @usage
     * <hljs lang="html">
     *   <rb-login-form>
     *      icon="white-alabaster-175-logo-rockabox"
     *      formname="loginForm"
     *      emailmodel="demoCtrl.email"
     *      passwordmodel="demoCtrl.password"
     *      loginfunction="demoCtrl.login()"
     *      message="demoCtrl.errorMessage">
     *   </rb-login-form>
     * </hljs>
     *
     * @ngInject
    */

    function rbLoginFormDirective () {

        return {
            scope: {
                'icon': '@',
                'emailModel': '=',
                'passwordModel': '=',
                'onLogin': '&',
                'message': '@'
            },
            restrict: 'E',
            replace: true,
            template: template
        };

    }

    return rbLoginFormDirective;
});
