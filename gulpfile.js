//https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md
//по умолчанию команда gulp собирает таску с признаком default
//gulp stylus - запуск таски с названием stylus
//https://www.npmjs.com/package/gulp-stylus идем на сайт и берем код для сборщика
//gulp-concat - объединяет все исходники, которые мы сбилдили
//gulp не умеет  понимать, что добавили новый файл
//gulp less - таска собирает лесс файлы

var gulp = require('gulp');
var gulpStylus = require('gulp-stylus');
var gulpConcat  = require('gulp-concat');
var gulpPug  = require('gulp-pug');
var less = require('gulp-less');
var ghPages = require('gulp-gh-pages');

gulp.task('deploy', function() {
    return gulp.src('./build/**/*')
        .pipe(ghPages());
});
gulp.task('default', function() {
    gulp.start('styles');
  gulp.start('less');
	gulp.start('scripts');
	gulp.start('pug');
  gulp.start('fonts');
  gulp.start('images');
  gulp.start('css');
  gulp.start('pdf');
});

gulp.task('styles', function() {
	//console.log("stylus-log");
	//из-за звездочки - собери все файлы с расширеним стилуса в 
	//папке styles из всех подпапок
  	 gulp.src('./styles/**/*.styl')
    .pipe(gulpConcat('build.styl'))
    .pipe(gulpStylus())
    .pipe(gulp.dest('./build/css'));

    gulp.src('./styles/**/*.css')
    //просто объединим файлы css в памяти,поэтому нет названия файлика
    .pipe(gulpConcat('libs.css'))
    .pipe(gulp.dest('./build/css/'));

   
});

gulp.task('less', function () {
   gulp.src('./styles/**/*.less')
    .pipe(gulpConcat('build.less'))
    .pipe(less())
    .pipe(gulp.dest('./build/css/'));
});

gulp.task('scripts', function() {
	//сначала надо загрузочные файлы скомпилить
  	 gulp.src('./scripts/libs/**/*.js')
    .pipe(gulpConcat('lib.js'))
    .pipe(gulp.dest('./build/js'));

    //если важно, чтобы файлы собрались в определенной последловательности, просто номера им добавляем и все
    gulp.src('./scripts/*.js')
    //а можно каждый файл искать и собирать последовательно
 	//gulp.src([
 	//	'./scripts/000-main.js',
 	//	'./scripts/001-app.js'
 	//	])
    .pipe(gulpConcat('build.js'))
    .pipe(gulp.dest('./build/js'));   
});


gulp.task('fonts', function() {
    //сначала надо загрузочные файлы скомпилить
     gulp.src('./fonts/**/*.*')

    .pipe(gulp.dest('./build/fonts'));   
});

gulp.task('pdf', function() {
    gulp.src('./*.pdf')
        .pipe(gulp.dest('./build'));
});

gulp.task('images', function() {
    //сначала надо загрузочные файлы скомпилить
     gulp.src('./images/**/*.*')

    .pipe(gulp.dest('./build/images'));   
});

gulp.task('css', function() {
    //сначала надо загрузочные файлы скомпилить
     gulp.src('./css/**/*.*')

    .pipe(gulp.dest('./build/css'));   
});



gulp.task('pug', function() {
  	 //gulp.src('./templates/**/*.pug')
     gulp.src('./templates/*.pug')
    .pipe(gulpPug())
    .pipe(gulp.dest('./build'));
   
});

gulp.task('watch', function(){
	//запустит дефолтную таску
	gulp.start('default');
	//1 параметр - показываем, где наблюдать изменения
	//2 параметр -указываем, какую таску надо запустить
	gulp.watch('./styles/**/*.styl',['styles']);
  gulp.watch('./styles/**/*.less',['less']);
	gulp.watch('./scripts/**/*.js',['scripts']);
	gulp.watch('./templates/**/*.pug',['pug']);
});

