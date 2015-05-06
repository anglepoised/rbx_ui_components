define([], function () {

    /**
     * rb-datetime-control Config function. Set angular strap config options for date & time pickers.
     * @param  {object} $datepickerProvider Angular-strap $datepicker provider
     * @param  {object} $timepickerProvider Angular-strap $timepickerProvider provider
     * @return void
     */
    function rbDateTimeControlConfig ($datepickerProvider, $timepickerProvider) {
        angular.extend($datepickerProvider.defaults, {
            dateFormat: 'dd/MM/yyyy'
        });

        angular.extend($timepickerProvider.defaults, {
            timeFormat: 'HH:mm'
        });
    }

    return rbDateTimeControlConfig;
});
