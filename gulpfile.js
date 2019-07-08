const { src, dest, watch, series, parallel } = require('gulp');

const _sass = require('gulp-sass');
const _pug = require('gulp-pug');

const _postcss = require('gulp-postcss');
const _autoprefixer = require('autoprefixer');
const _cssnano = require('cssnano');
const _image = require('gulp-image');
const _clean = require('gulp-clean');


const files = { 
    scssPath: 'src/static/scss/common.scss',
    pagesPath: 'src/pages/*.pug',
    imagePath: 'src/static/img/*'
}

const clean = () => {
    return src('dist')
        .pipe(_clean())
}

const scss = () => {
    return src(files.scssPath)
        .pipe(_sass()) // compile SCSS to CSS
        .pipe(_postcss([ _autoprefixer(), _cssnano() ])) // PostCSS plugins
        .pipe(dest('dist/css'))
}

const image = () => {
    return src(files.imagePath)
        .pipe(_image())
        .pipe(dest('dist/images'))
}

const pug = () => {
    return src(files.pagesPath)
        .pipe(_pug())
        .pipe(dest('dist'))
}

const watching = () => {
    watch([files.scssPath, 'src/components', 'src/pages'], parallel(scss, pug, image));    
}

exports.default = series(
    parallel(scss, pug, image),
    watching
);