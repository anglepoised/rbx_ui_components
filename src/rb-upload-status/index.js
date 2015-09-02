define([
    '../rb-loading',
    './rb-upload-status-directive',
    './rb-upload-status.css'
], function (rbLoading, rbUploadStatusDirective, css) {
    /**
     * @ngdoc module
     * @name rb-upload-status
     * @description
     *
     * rbUploadStatus
     *
     */
    var rbUploadStatus = angular
        .module('rb-upload-status', [
            rbLoading.name
        ])
        .directive('rbUploadStatus', rbUploadStatusDirective);

    return rbUploadStatus;

});
