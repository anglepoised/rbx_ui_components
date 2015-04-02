describe('The RBX UI components', function () {

    describe('index page', function () {

        browser.get('/index.html');

        it('should render an index page with the ui components', function () {
            expect(element.all(by.css('h1'))
                .first().getText()).toBe('rbx_ui_components test page');
        });
    });

});
