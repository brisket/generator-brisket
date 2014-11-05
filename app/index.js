'use strict';

var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var BrisketGenerator = yeoman.generators.Base.extend({

  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the exceptional Brisket generator!'
    ));

    done();
  },

  writing: {
    app: function () {
      this.dest.mkdir('app');
      this.dest.mkdir('app/templates');

      this.directory('app', 'app');
      this.directory('public', 'public');
      this.src.copy('_Gruntfile.js', 'Gruntfile.js');
      this.src.copy('server.js', 'server.js');
      this.src.copy('_package.json', 'package.json');
      this.src.copy('README.md', 'README.md');
    },

    projectfiles: function () {
      this.src.copy('gitignore', '.gitignore');
    }
  },

  end: function () {
    this.installDependencies();
  }

});

module.exports = BrisketGenerator;
