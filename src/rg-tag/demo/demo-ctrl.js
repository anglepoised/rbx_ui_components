define([
], function () {

    // @ngInject
    function demoCtrl ($rootScope, $state, $injector) {
        var $this = this;
        this.timeList = [
            {'label':'Daily', 'value':'daily', 'type':'time'},
            {'label':'Monthly', 'value':'monthly', 'type':'time'},
            {'label':'Yearly', 'value':'yearly', 'type':'time'}
        ];
        this.breakdownList = [
            {'label':'Ad Unit', 'value':'ad_unit', 'type':'structure'},
            {'label':'Creative', 'value':'creative', 'type':'structure'},
            {'label':'Creative role', 'value':'creative_role', 'type':'structure'},
            {'label':'Line Item', 'value':'line_item', 'type':'structure'},
            {'label':'Creative size', 'value':'creative_size', 'type':'environment'},
            {'label':'Deal ID', 'value':'deal_id', 'type':'environment'},
            {'label':'Domain', 'value':'domain', 'type':'environment'},
            {'label':'SSP', 'value':'ssp', 'type':'environment'},
            {'label':'Video', 'value':'video', 'type':'video'}
        ];
        this.timeList.map(function (breakdown) {
            breakdown.summary = false;
        });
        this.breakdownList.map(function (breakdown) {
            breakdown.summary = true;
        });
        this.summaryList = [];

        this.addToSummary = function (breakdown) {

            if (breakdown.type === 'time') {
                if ($this.summaryList.length === 0) {
                    $this.breakdownList.map(function (brkdwn) {
                        brkdwn.summary = false;
                    });
                } else {
                    $this.summaryList.splice(0, 1);
                    $this.timeList.map(function (brkdwn) {
                        brkdwn.summary = false;
                    });
                }
                breakdown.summary = true;
                $this.summaryList.unshift(breakdown);
            } else {
                breakdown.summary = true;
                $this.summaryList.push(breakdown);
            }
        };

        this.removeFromSummary = function (breakdown, index) {

            if (breakdown.type === 'time') {
                $this.summaryList = [];
                $this.breakdownList.map(function (brkdwn) {
                    brkdwn.summary = true;
                });
                $this.timeList.map(function (brkdwn) {
                    if (brkdwn.type === 'time') {
                        brkdwn.summary = false;
                    }
                });
            } else {
                $this.summaryList.splice(index, 1);
                breakdown.summary = false;
            }
        };
    }

    return demoCtrl;
});
