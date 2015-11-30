module.exports = function(grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: ['Gruntfile.js', 'templates/helpers/*.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    watch: {
      all: {
        files: ['Gruntfile.js', 'src/scripts/**/*.js', 'src/styles/**/*.scss', 'src/images/**/*.*'],
        tasks: ['default'],
        options: {
          atBegin: true,
          livereload: true
        }
      }
    },
    sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                'dist/assets/styles/main.css': 'src/styles/main.scss'
            }
        }
    }
  });

  grunt.registerTask('default', ['jshint', 'sass']);

};
