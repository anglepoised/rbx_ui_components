define([
    'ui-components/rb-badge'
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
            expect(element.hasClass('ng-hide')).toBe(false);
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
                    expect(angular.element(element.find('span')[1]).text()).toBe('Warning(s) on this item');
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

            it('should be a statusPendingLive badge if statusPendingLive state attr is supplied' +
            'and set correct details',
                inject(function ($compile, $rootScope) {
                    var badge = angular.element('<rb-badge state="statusScheduled"></rb-badge>'),
                        element = $compile(badge)($rootScope.$new());

                    $rootScope.$apply();
                    expect(badge.hasClass('Badge--statusScheduled')).toBe(true);
                    expect(angular.element(element.find('span')[1]).text()).toBe('Scheduled');
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

            it('should be a statusReady badge if statusReady state attr is supplied and set correct details',
                inject(function ($compile, $rootScope) {
                    var badge = angular.element('<rb-badge state="statusReady"></rb-badge>'),
                        element = $compile(badge)($rootScope.$new());

                    $rootScope.$apply();
                    expect(badge.hasClass('Badge--statusReady')).toBe(true);
                    expect(angular.element(element.find('span')[1]).text()).toBe('Ready');
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

            it('should render nothing if no state passed',
                inject(function ($compile, $rootScope) {
                    var badge = angular.element('<rb-badge></rb-badge>'),
                        element = $compile(badge)($rootScope.$new());

                    $rootScope.$apply();
                    expect(element.hasClass('ng-hide')).toBe(true);
                }
            ));

            it('should render nothing if no valid state passed',
                inject(function ($compile, $rootScope) {
                    var badge = angular.element('<rb-badge state="custom"></rb-badge>'),
                        element = $compile(badge)($rootScope.$new());

                    $rootScope.$apply();
                    expect(element.hasClass('ng-hide')).toBe(true);
                }
            ));

        });

        describe('with body', function () {

            it('should take body from attribute if warnging state', inject(function ($compile, $rootScope) {
                var badge = angular.element('<rb-badge state="warning" body="6"></rb-badge>'),
                    element = $compile(badge)($rootScope.$new());

                $rootScope.$apply();
                expect(angular.element(element.find('span')[0]).text()).toBe('6');
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

            it('should take collapsed from attribute and set title attribute', inject(function ($compile, $rootScope) {
                var badge = angular.element('<rb-badge collapsed="true" state="statusFinished"></rb-badge>'),
                    element = $compile(badge)($rootScope.$new());

                $rootScope.$apply();
                expect(element.hasClass('is-collapsed')).toBe(true);
                expect(element.attr('title')).toBe('Finished');
            }));

            it('should not add is-collapsed class or title attribute if collapsed attribute is false',
                inject(function ($compile, $rootScope) {
                    var badge = angular.element('<rb-badge collapsed="false" state="warning"></rb-badge>'),
                        element = $compile(badge)($rootScope.$new());

                    $rootScope.$apply();
                    expect(element.hasClass('is-collapsed')).toBe(false);
                    expect(element.attr('title')).toBe(undefined);
                }
            ));

            it('should take collapsed from attribute and set title attribute with body when warnging state',
                inject(function ($compile, $rootScope) {
                    var badge = angular.element('<rb-badge collapsed="true" body="6" state="warning"></rb-badge>'),
                        element = $compile(badge)($rootScope.$new());

                    $rootScope.$apply();
                    expect(element.hasClass('is-collapsed')).toBe(true);
                    expect(element.attr('title')).toBe('6 Warning(s) on this item');
                }
            ));

            it('should not add is-collapsed class if collapsed attribute missing',
                inject(function ($compile, $rootScope) {
                    var badge = angular.element('<rb-badge></rb-badge>'),
                        element = $compile(badge)($rootScope.$new());

                    $rootScope.$apply();
                    expect(element.hasClass('is-collapsed')).toBe(false);
                }
            ));

            it('should not add is-collapsed class if collapsed attribute is not "true"',
                inject(function ($compile, $rootScope) {
                    var badge = angular.element('<rb-badge collapsed="foo"></rb-badge>'),
                        element = $compile(badge)($rootScope.$new());

                    $rootScope.$apply();
                    expect(element.hasClass('is-collapsed')).toBe(false);
                }
            ));
        });

    });
});
