module.exports = function (grunt) {

    require('load-grunt-config')(grunt);
    require('load-grunt-tasks')(grunt);

    grunt.registerTask('lint', [
        'jshint:json',
        'jshint:src',
        'jscs'
    ]);

    grunt.registerTask('test', function (mode) {
        var tasks = [
            'lint',
            'karma:unit'
        ];

        grunt.task.run(tasks);
    });

    grunt.registerTask('default', [
        'test'
    ]);
};
