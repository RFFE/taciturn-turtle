module.exports = function(grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    src: {
      root: 'src',
      jsDir: 'src/scripts/',
      imgDir: 'src/images/',
      sassDir: 'src/styles/',
      sass: ['<%= src.sassDir %>main.scss']
    },
    dist: {
      root: 'dist',
      jsDir: 'dist/assets/scripts/',
      imgDir: 'dist/assets/images/',
      cssDir: 'dist/assets/styles/',
      css: ['<%= dist.cssDir %>main.css']
    },
    jshint: {
      all: ['Gruntfile.js', '<%= src.jsDir %>**/*.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    copy: {
      js: {
        files: [
          {expand: true, cwd: '<%= src.jsDir %>', src: ['**/*.js'], dest: '<%= dist.jsDir %>app.js'}
        ],
      },
      html: {
        files: [
          {expand: true, cwd: '<%= src.root %>', src: ['**/*.html'], dest: '<%= dist.root %>'}
        ],
      },
    },
    watch: {
      all: {
        files: ['Gruntfile.js', '<%= src.jsDir %>**/*.js', '<%= src.sassDir %>**/*.scss', '<%= src.imgDir %>**/*.*'],
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
          '<%= dist.cssDir %>main.css': '<%= src.sass %>'
        }
      }
    }
  });

  grunt.registerTask('default', ['jshint', 'sass', 'copy']);

};
