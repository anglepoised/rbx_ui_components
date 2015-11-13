define([
    'ui-components/rg-tag'
], function (rgTag) {
    describe('rg-tag', function () {

        beforeEach(angular.mock.module('rg-tag'));

        it('should convert attributes on a rg-tag to attributes on the generated tag',
            inject(function ($compile, $rootScope) {
                var tag = $compile('<rg-tag anyattr any-attr></rg-tag>')($rootScope);

                $rootScope.$apply();
                expect(tag[0].hasAttribute('anyattr')).toBe(true);
                expect(tag[0].hasAttribute('any-attr')).toBe(true);
            })
        );

        describe('readonly', function () {

            it('should be a tag with remove button if readonly attr is not supplied',
                inject(function ($compile, $rootScope) {
                    var tag = angular.element('<rg-tag></rg-tag>'),
                        element = $compile(tag)($rootScope.$new()),
                        removeButton;

                    $rootScope.$apply();

                    removeButton = angular.element(element.find('button'));
                    expect(removeButton).toBeDefined();
                })
            );

            it('should be a readonly tag if readonly attr is supplied', inject(function ($compile, $rootScope) {
                var tag = angular.element('<rg-tag readonly="true"></rg-tag>'),
                    element = $compile(tag)($rootScope.$new()),
                    removeButton;

                $rootScope.$apply();

                removeButton = angular.element(element.find('button'))[0];
                expect(removeButton).toBeUndefined();
            }));

        });

        describe('remove button', function () {

            it('should be call an onRemove function when remove button is clicked',

                inject(function ($compile, $rootScope) {

                    var tag = angular.element('<rg-tag></rg-tag>'),
                        element = $compile(tag)($rootScope.$new()),
                        isolatedScope = element.isolateScope();

                    $rootScope.$apply();
                    isolatedScope.onRemove = function () {
                        return true;
                    };
                    isolatedScope.$apply();
                    spyOn(isolatedScope, 'onRemove');

                    element.find('button')[0].click();

                    expect(isolatedScope.onRemove).toHaveBeenCalled();
                })
            );
        });
    });
});
