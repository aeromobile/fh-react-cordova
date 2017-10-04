'use strict';

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  grunt.initConfig({
    // Project settings
    app: {
      // configurable paths
      app: 'www',
      url: '',
      default_local_server_url: 'http://localhost:8001'
    },

    browserify: {
      dist: {
        options: {
          transform: [['babelify', {presets: ['env', 'react']}]]
        },
        src: ['./www/js/main.js'],
        dest: './www/main.js'
      }
    },

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      js: {
        files: ['<%= app.app %>/js/{,*/}*.js'],
        tasks: ['browserify'],
        options: {
          livereload: 35730
        }
      },
      styles: {
        files: ['<%= app.app %>/css/{,*/}*.css'],
        tasks: ['newer:copy:styles', 'autoprefixer']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= app.app %>/{,*/}*.html',
          '.tmp/styles/{,*/}*.css',
          '<%= app.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg,json}'
        ]
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9002,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35730
      },
      livereload: {
        options: {
          open: {
            target: '<%= app.url %>'
          },
          base: [
            '.tmp',
            '<%= app.app %>'
          ]
        }
      }
    },

    // Empties folders to start fresh
    clean: {
      server: '.tmp'
    }
  });

  grunt.registerTask('serve', function (target) {
    if (target === 'local') {
      var conn = 'http://' + grunt.config.get('connect.options.hostname') + ':' +
        grunt.config.get('connect.options.port');
      var url = grunt.option('url') || grunt.config.get('app.default_local_server_url');
      grunt.config.set('app.url', conn + '/?url=' + url);
    } else {
      // open with no url passed to fh-js-sdk
      grunt.config.set('connect.livereload.options.open', true);
    }

    grunt.task.run([
      'browserify',
      'clean:server',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('default', ['serve']);
};
