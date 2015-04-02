module.exports = {
    'src': [
        '**/*.js',
        '<%= excludes.files %>'
    ],
    'json': [
        '**/*.json',
        '<%= excludes.files %>'
    ],
    'options': {
        'jshintrc': '.jshintrc'
    }
};
