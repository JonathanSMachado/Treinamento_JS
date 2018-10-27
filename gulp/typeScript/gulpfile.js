const gulp = require('gulp')
const ts = require('gulp-typescript')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')

const tsProjetc = ts.createProject('tsconfig.json')

gulp.task('default', () => {
    return tsProjetc.src()
        .pipe(tsProjetc())
        .pipe(uglify())
        .pipe(concat('typescript.min.js'))
        .pipe(gulp.dest('build'))
})