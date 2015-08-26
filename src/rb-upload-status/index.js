define([
    './rb-upload-status-directive',
    './rb-upload-status.css'
], function (rbUploadStatusDirective, css) {
    /**
     * @ngdoc module
     * @name rb-upload-status
     * @description
     *
     * rbUploadStatus
     *
     */
    var rbUploadStatus = angular
        .module('rb-upload-status', [])
        .directive('rbUploadStatus', rbUploadStatusDirective);

    return rbUploadStatus;

});
