define([
    'components/rb-date-time'
], function (rbDateTime) {
    describe('rb-date-time directive', function () {

        var $scope,
            $compile,
            template = '';

        beforeEach(angular.mock.module('rb-date-time'));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $scope = _$rootScope_.$new({});
            $compile = _$compile_;
        }));

        it('should render the date and time', function () {
            var dateTime = $compile('<rb-date-time date-time="1970-01-10T15:59"></rb-date-time>')($scope),
                ele;

            $scope.$apply();
            ele = angular.element(dateTime).text();

            expect(dateTime[0].children.length).toBe(2);
            expect(ele).toContain('10 Jan 1970');
            expect(ele).toContain('15:59');
        });

        it('should render only the date', function () {
            var dateTime = $compile('<rb-date-time date-time="1970-09-01T01:00" show-time="false"></rb-date-time>')
                    ($scope),
                ele;

            $scope.$apply();

            ele = angular.element(dateTime).text();

            expect(dateTime[0].children.length).toBe(1);
            expect(ele).toContain('01 Sep 1970');
            expect(ele).not.toContain('01:00');
        });

        it('should render the date and time with the time understated', function () {
            var dateTime = $compile('<rb-date-time date-time="1970-09-01T00:00" understate-time="true"></rb-date-time>')
                    ($scope),
                ele;

            $scope.$apply();

            ele = angular.element(dateTime);

            expect(ele.hasClass('DateTime--understateTime')).toBeTruthy();
        });
    });
});
