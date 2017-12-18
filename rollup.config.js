// rollup.config.js

import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

const config = require('./ngr.config.js');

export default {
    entry: './polyfill.js',
    format: 'es',
    dest: './src/public/polyfill.bundle.js',
    sourceMap: false,
    plugins: [
        commonjs({
            include: ['node_modules/core-js/**', 
                      'node_modules/zone.js/dist/zone/**', 
                      'node_modules/intl/**', 
                      'node_modules/web-animations-js/**',
                      'node_modules/classlist.js/**']
        }),
        resolve({
            es2015: true,
            module: true,
            jsnext: true,
            main: true,
            extensions: ['.js', '.json'],
            preferBuiltins: false
        }),
    ],
    onwarn: function (message) {
        if (/at the top level of an ES module, and has been rewritten/.test(message)) {
            return;
        }
        if (/The final argument to magicString.overwrite/.test(message)) {
            return;
        }
        console.error(message);
    }
}