var gulp = require('gulp');
var concat = require('gulp-concat');
var ugligy = require('gulp-uglify');

gulp.task('jsconcatuglify', function() {
    gulp.src('src/new/js/base/*.js')
        .pipe(concat('bundle.js'))
        .pipe(ugligy({
            //mangle: {except: ['require' ,'exports' ,'module' ,'$']}//排除混淆关键字
            mangle: true, //是否修改变量名(混淆)（类型：Boolean，默认：true）
            compress: true, //类型：Boolean 默认：true 是否完全压缩
            preserveComments: 'all' //保留所有注释
        }))
        .pipe(gulp.dest('src/new/dist/js'))
});
gulp.task('jtjs',function(){
	gulp.watch('src/new/js/base/*.js',['jsconcatuglify'])
});
gulp.task('default', ['jtjs']);