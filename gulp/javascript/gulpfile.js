const gulp = require('gulp')
const concat = require('gulp-concat')
// const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

gulp.task('default', () => {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            minified: true, //remove espaçoes e etc
            comments: false, //remove comentários
            presets: ['env']
        }))
        // .pipe(uglify()) //remove espaços e etc
        .on('error', function(err) {
            console.log(err)
        })
        .pipe(concat('codigo.min.js')) //concatena tudo em um arquivo
        .pipe(gulp.dest('build')) //salva o arquivo na pasta build
})
