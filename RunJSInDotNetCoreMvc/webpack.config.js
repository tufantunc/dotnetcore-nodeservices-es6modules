const path = require('path');

module.exports = {
    entry: {
        'site.min': path.join(__dirname, 'wwwroot', 'js', 'site.js')
    },
    output: {
        path: path.join(__dirname, 'wwwroot', 'dist'),
        filename: '[name].js',
        publicPath: '/dist/'
    }
};