var gulp = require('gulp');
var browsersync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('sass',function(){
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss','src/scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
    .pipe(browsersync.stream());
});

gulp.task('js',function(){
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js','node_modules/jquery/dist/jquery.min.js'])    
    .pipe(gulp.dest('src/js'))
    .pipe(browsersync.stream());
});

gulp.task('serve',['sass'],function(){
    browsersync.init({
        server: './src'
    });
    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss','src/scss/*.scss','src/scss/partials/*.scss'],['sass']);
    gulp.watch('src/*.html').on('change',browsersync.reload);
});

gulp.task('default',['js','serve']);