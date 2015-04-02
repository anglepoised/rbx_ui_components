define([
], function () {

    // @ngInject
    function footerCtrl () {
        this.copyright = 'Copyright © 2015 Rockabox Limited';
        this.links = [
            {'id': 31, 'text': 'Privacy Policy'},
            {'id': 37, 'text': 'Advertiser Terms & Conditions'},
            {'id': 41, 'text': 'Publisher Terms & Conditions'}
        ];
    }

    return footerCtrl;
});
