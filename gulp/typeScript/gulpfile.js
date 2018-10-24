const gulp = require('gulp')
const ts = require('gulp-typescript')

const tsProjetc = ts.createProject('tsconfig.json')

gulp.task('default', () => {
    return tsProjetc.src()
        .pipe(tsProjetc())
        .pipe(gulp.dest('build'))
})