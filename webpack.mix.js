
let mix = require('laravel-mix');

mix.js('resources/app.js', 'js')
.sass('resources/sass/app.scss', 'css')
.sass('resources/sass/custom.scss', 'css')
.setPublicPath('public').browserSync();