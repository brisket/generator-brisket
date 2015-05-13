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
        this.templatePath('_Gruntfile.js'),
        this.destinationPath('Gruntfile.js'), {}
      );

      this.fs.copy(
        this.templatePath('server.js'),
        this.destinationPath('server.js'), {}
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
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore'), {}
      );
    }
  },

  end: function() {
    this.npmInstall([
      'brisket',
      'express'
    ], {
      'save': true
    });

    this.npmInstall([
      'grunt',
      'grunt-browserify',
      'grunt-concurrent',
      'grunt-contrib-clean',
      'grunt-contrib-watch',
      'grunt-exec',
      'nodemon'
    ], {
      'saveDev': true
    });
  }

});

module.exports = BrisketGenerator;
