/* eslint-disable @typescript-eslint/no-var-requires */
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');

module.exports = {
    purge: [
        './src/main/resources/static/**/*.html',
        './src/main/resources/static/**/*.vue',
        './src/main/resources/static/**/*.ts',
    ],
    theme: {
        extend: {},
    },
    variants: {},
    plugins: [
        autoprefixer,
        tailwindcss,
    ],
};