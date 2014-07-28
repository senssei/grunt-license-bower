'use strict';

module.exports = function (grunt) {
  // Show elapsed time at the end
  require('time-grunt')(grunt);
  // Load all grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      tasks: {
        src: ['tasks/**/*.js']
      },
      test: {
        src: ['test/**/*.js']
      }
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      tasks: {
        files: '<%= jshint.tasks.src %>',
        tasks: ['jshint:tasks', 'simplemocha']
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test', 'simplemocha']
      }
    },
    // Before generating any new files, remove any previously-created files.
    clean: {
        tests: ['tmp']
    },
    // Unit tests.
    simplemocha: {
        options: {
            globals: ['should'],
            timeout: 3000,
            ignoreLeaks: true,
            ui: 'bdd',
            reporter: 'spec'
        },
        all: {src: ['test/*.spec.js']}
    },
  });

 grunt.registerTask('test', ['clean', 'simplemocha']);
  // Default task.
  grunt.registerTask('default', ['jshint', 'test']);
};
