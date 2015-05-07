define([
    'html!angular-strap/src/datepicker/datepicker.tpl.html',
    'html!angular-strap/src/timepicker/timepicker.tpl.html'
], function (datepickerTemplate, timepickerTemplate) {

    /**
     * rb-datetime-control Run function. Setup for directive, loads in angular strap templates and caches them.
     * @param  {object} $templateCache Angular templatecache
     * @return void
     *
     * @ngInject
     */
    function rbDateTimeControlRun ($templateCache) {
        $templateCache.put('datepicker/datepicker.tpl.html', datepickerTemplate);
        $templateCache.put('timepicker/timepicker.tpl.html', timepickerTemplate);
    }

    return rbDateTimeControlRun;
});
