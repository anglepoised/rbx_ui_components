var coverageType = (process.env.TRAVIS) ? 'lcovonly' : 'html';

module.exports = {
    'options': {
        'configFile': 'karma.conf.js',
        'coverageReporter': {
            'type': coverageType,
            'dir': 'coverage/'
        },
        'reporters': [
            'progress',
            'coverage'
        ]
    },
    'unit': {}
};
