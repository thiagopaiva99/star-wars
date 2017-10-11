// fazendo require das bibliotecas do gulp que vou precisar
const gulp   = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const watch  = require('gulp-watch')

// colocando o caminho dos arquivos javascript que vou precisar, com a ordem de prioridade
const jsFiles = [
  './assets/js/jquery.min.js',
  './assets/js/jquery.poprtox.min.js',
  './assets/js/skel.min.js',
  './assets/js/util.js',
  './assets/js/main.js',
  './assets/js/angular/angular.js',
  './assets/js/angular/router.js',
  './assets/js/angular/config.js',
  './assets/js/angular/controllers/*.controller.js',
  './assets/js/angular/directives/*.directive.js'
]

// colocando o caminho dos arquivos css que vou precisar
const cssFiles = [
  './assets/css/*.*.css',
  './assets/css/*.css'
]

// pasta de destino em que ser~ao gerados os arquivos finais
const dist = './dist/'

// lista de tarefas que serao executadas, em ordem
const tasks = [
  'minify-scripts',
  'minify-styles',
  'move-fonts',
  'move-svgs',
  'move-swapi',
  'watch-js',
  'watch-css'
]

// tarefa que minifica os arquivos javascript dentro de um so
gulp.task('minify-scripts', () =>
  gulp.src( jsFiles )
      .pipe( concat( 'app.js' ) )
      .pipe( gulp.dest( dist + 'js' ) ) )

// tarefa que minifica os arquivos css dentro de um so
gulp.task('minify-styles', () =>
  gulp.src( cssFiles )
      .pipe( concat( 'app.css' ) )
      .pipe( gulp.dest( dist + 'css' ) ) )

// tarefa que move as fontes necessarias pelo css
gulp.task('move-fonts', () =>
  gulp.src([ './assets/fonts/**/*.*' ])
      .pipe( gulp.dest( './dist/fonts' )))

gulp.task('move-swapi', () =>
  gulp.src([ './node_modules/xyz-angular-swapi/dist/xyz-angular-swapi.min.js' ])
      .pipe( gulp.dest( './dist/js/angular' )))

//  tarefa que move os svgs necessarios pelo css
gulp.task('move-svgs', () =>
  gulp.src([ './assets/css/images/*.*' ])
      .pipe( gulp.dest( './dist/css/images' )))

// tarefa que fica monitorando os arquivos javascript para ver se ha alguma mudanca e atualizar a versao final
gulp.task('watch-js', () =>
  gulp.watch('./public/js/**/*.*.js', []))

// tarefa que fica monitorando os arquivos css para ver se ha alguma mudanca e atualizar a versao final
gulp.task('watch-css', () =>
  gulp.watch('./public/css/**/*.*.css', []))

// setando a tarefa default para executar a lista de tarefas que foi passada na constante anterior
gulp.task('default', tasks)
