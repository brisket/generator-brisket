'use strict';

var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var BrisketGenerator = yeoman.generators.Base.extend({

  initializing: function() {
    this.pkg = require('../package.json');
  },

  prompting: function() {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the exceptional Brisket generator!'
    ));

    done();
  },

  writing: {
    app: function() {
      this.directory('app', 'app');
      this.directory('public', 'public');

      this.fs.copy(
        this.templatePath('_gulpfile.js'),
        this.destinationPath('gulpfile.js'), {}
      );

      this.fs.copy(
        this.templatePath('bootstrap.js'),
        this.destinationPath('bootstrap.js'), {}
      );

      this.fs.copy(
        this.templatePath('server.js'),
        this.destinationPath('server.js'), {}
      );

      this.fs.copy(
        this.templatePath('exampleApi.js'),
        this.destinationPath('exampleApi.js'), {}
      );

      this.fs.copy(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'), {}
      );

      this.fs.copy(
        this.templatePath('README.md'),
        this.destinationPath('README.md'), {}
      );
    },

    projectfiles: function() {
      this.fs.copy(
        this.templatePath('babelrc'),
        this.destinationPath('.babelrc'), {}
      );

      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore'), {}
      );
    }
  },

  end: function() {
    this.npmInstall([
      'brisket@1.x',
      'express'
    ], {
      'save': true
    });

    this.npmInstall([
      'babel-plugin-add-module-exports',
      'babel-preset-es2015',
      'babel-register',
      'babelify',
      'browserify',
      'connect-livereload',
      'del',
      'gulp',
      'gulp-sourcemaps',
      'gulp-util',
      'run-sequence',
      'tiny-lr',
      'vinyl-buffer',
      'vinyl-source-stream',
      'watchify'
    ], {
      'saveDev': true
    });
  }

});

module.exports = BrisketGenerator;
