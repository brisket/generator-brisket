'use strict';

const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const gutil = require('gulp-util');
const buffer = require('vinyl-buffer');
const sourcemaps = require('gulp-sourcemaps');
const watchify = require('watchify');
const babelify = require('babelify');
const del = require('del');
const spawn = require('child_process').spawn;
const runSequence = require('run-sequence');

const CLIENT_APP = "./app/javascripts/client/ClientApp.js";
const BUNDLE = "./public/javascripts/application.js";
const LIVERELOAD_PORT = 35729;

let server;

gulp.task('clean', function() {
  return del(BUNDLE);
});

gulp.task('bundle', function() {
  gutil.log(gutil.colors.green('bundling with es6 support'));

  const bundleOptions = Object.assign({}, watchify.args, {
    entries: CLIENT_APP,
    debug: true,
    noparse: ['jquery', 'underscore', 'bluebird']
  });

  const bundler = browserify(bundleOptions);

  watchify(bundler);

  bundler.on('update', rebundle);
  bundler.on('log', gutil.log);

  bundler.transform(babelify, { sourceMaps: true });
  bundler.require(CLIENT_APP, { expose: 'app/ClientApp' });

  function rebundle() {
    return bundler.bundle()
      .on('error', function(e) {
        gutil.log(gutil.colors.red(e));
      })
      .pipe(source(BUNDLE))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('.'));
  }

  return rebundle();
});

process.on("exit", killServer);

function startServer() {
  killServer();

  server = spawn('node', ['./bootstrap.js'], { stdio: 'inherit' });

  server.once('exit', function restart(code) {
    gutil.log(gutil.colors.red("app errored with code " + code + "\n"));
    startServer();
  });
}

function killServer() {
  if (server) {
    server.removeAllListeners();
    server.kill();
  }
}

gulp.task('server', function() {
  gutil.log(gutil.colors.green('starting server with es6 support'));
  startServer();
});

gulp.task('watch', function() {
  gulp.watch(BUNDLE, ['server']);
});

gulp.task("livereload", function() {
    require("tiny-lr")().listen(LIVERELOAD_PORT);
});

gulp.task('default', function(cb) {
  runSequence(
    'clean',
    'bundle',
    ['server', 'watch', 'livereload'],
    cb
  );
});
