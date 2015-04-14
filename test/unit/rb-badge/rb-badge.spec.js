define([
    'components/rb-badge'
], function (rbBadge) {
    describe('rb-badge', function () {
        beforeEach(angular.mock.module('rb-badge'));

        it('should render correctly', inject(function ($compile, $rootScope) {
            var badge = angular.element('<rb-badge state="warning"></rb-badge>'),
                element = $compile(badge)($rootScope.$new());

            element = angular.element(element);
            $rootScope.$apply();
            expect(element.hasClass('Badge')).toBe(true);
            expect(element[0].tagName).toBe('DIV');
            spans = element.find('span');
            expect(spans.length).toBe(2);
            expect(angular.element(spans[0]).hasClass('Badge-body')).toBe(true);
            expect(angular.element(spans[1]).hasClass('Badge-details')).toBe(true);
        }));

        describe('with state', function () {

            it('should be a warning badge if warning state attr is supplied and set correct details',
                inject(function ($compile, $rootScope) {
                    var badge = angular.element('<rb-badge state="warning"></rb-badge>'),
                        element = $compile(badge)($rootScope.$new());

                    $rootScope.$apply();
                    expect(element.hasClass('Badge--warning')).toBe(true);
                    expect(angular.element(element.find('span')[1]).text()).toBe('Warnings on this item');
                }
            ));

            it('should be a statusIncomplete badge if statusIncomplete state attr is supplied and set correct details',
                inject(function ($compile, $rootScope) {
                    var badge = angular.element('<rb-badge state="statusIncomplete"></rb-badge>'),
                        element = $compile(badge)($rootScope.$new());

                    $rootScope.$apply();
                    expect(badge.hasClass('Badge--statusIncomplete')).toBe(true);
                    expect(angular.element(element.find('span')[1]).text()).toBe('Incomplete');
                }
            ));

            it('should be a statusLive badge if statusLive state attr is supplied and set correct details',
                inject(function ($compile, $rootScope) {
                    var badge = angular.element('<rb-badge state="statusLive"></rb-badge>'),
                        element = $compile(badge)($rootScope.$new());

                    $rootScope.$apply();
                    expect(badge.hasClass('Badge--statusLive')).toBe(true);
                    expect(angular.element(element.find('span')[1]).text()).toBe('Live');
                }
            ));

            it('should be a statusPending badge if statusPending state attr is supplied and set correct details',
                inject(function ($compile, $rootScope) {
                    var badge = angular.element('<rb-badge state="statusPending"></rb-badge>'),
                        element = $compile(badge)($rootScope.$new());

                    $rootScope.$apply();
                    expect(badge.hasClass('Badge--statusPending')).toBe(true);
                    expect(angular.element(element.find('span')[1]).text()).toBe('Pending');
                }
            ));

            it('should be a statusPaused badge if statusPaused state attr is supplied and set correct details',
                inject(function ($compile, $rootScope) {
                    var badge = angular.element('<rb-badge state="statusPaused"></rb-badge>'),
                        element = $compile(badge)($rootScope.$new());

                    $rootScope.$apply();
                    expect(badge.hasClass('Badge--statusPaused')).toBe(true);
                    expect(angular.element(element.find('span')[1]).text()).toBe('Paused');
                }
            ));

            it('should be a statusFinished badge if statusFinished state attr is supplied and set correct details',
                inject(function ($compile, $rootScope) {
                    var badge = angular.element('<rb-badge state="statusFinished"></rb-badge>'),
                        element = $compile(badge)($rootScope.$new());

                    $rootScope.$apply();
                    expect(badge.hasClass('Badge--statusFinished')).toBe(true);
                    expect(angular.element(element.find('span')[1]).text()).toBe('Finished');
                }
            ));

            it('should render nothing if no valid state passed',
                inject(function ($compile, $rootScope) {
                    var badge = angular.element('<rb-badge state="custom"></rb-badge>'),
                        element = $compile(badge)($rootScope.$new());

                    $rootScope.$apply();
                    expect(element.html()).toBe('');
                }
            ));

        });

        describe('with body', function () {

            it('should take body from attribute if warnging state', inject(function ($compile, $rootScope) {
                var badge = angular.element('<rb-badge state="warning" body="6"></rb-badge>'),
                    element = $compile(badge)($rootScope.$new());

                $rootScope.$apply();
                expect(angular.element(element.find('span')[0]).text()).toBe('6 !');
            }));

            it('should not take body from attribute if not warnging state', inject(function ($compile, $rootScope) {
                var badge = angular.element('<rb-badge state="statusFinished" body="6"></rb-badge>'),
                    element = $compile(badge)($rootScope.$new());

                $rootScope.$apply();
                expect(angular.element(element.find('span')[0]).html()).toBe('&nbsp;');
            }));

            it('should set &nbsp; for body if no attribute', inject(function ($compile, $rootScope) {
                var badge = angular.element('<rb-badge state="statusFinished"></rb-badge>'),
                    element = $compile(badge)($rootScope.$new());

                $rootScope.$apply();
                expect(angular.element(element.find('span')[0]).html()).toBe('&nbsp;');
            }));
        });

        describe('with collapsed', function () {

            it('should take collapsed from attribute', inject(function ($compile, $rootScope) {
                var badge = angular.element('<rb-badge collapsed></rb-badge>'),
                    element = $compile(badge)($rootScope.$new());

                $rootScope.$apply();
                expect(element.hasClass('is-collapsed')).toBe(true);
            }));
        });

    });
});
