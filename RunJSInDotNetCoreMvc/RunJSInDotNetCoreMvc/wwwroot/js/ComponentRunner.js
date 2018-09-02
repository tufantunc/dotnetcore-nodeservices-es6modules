const babel = require('@babel/core');
const Module = require('module');
const path = require('path');

const ComponentRunner = (cb, options) => {
    const code = babel.transformFileSync(path.resolve(__dirname, options.componentName), {
        "presets": [
            "@babel/preset-env"
        ],
        "plugins": ["transform-es2015-modules-commonjs"]
    }).code;

    const m = new Module();
    m._compile(code, '');

    const moduleExports = m.exports;

    cb(null, moduleExports.default(options.data));
};

module.exports = ComponentRunner;