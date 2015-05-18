module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dist: { files: { 'css/planner.css': 'css/planner.sass' } }
    },
    watch: {
      files: ['css/*.sass'],
      tasks: ['sass', 'concat']
    },
    concat: {
      css: {
        src: [
          'bower_components/bootstrap/dist/css/bootstrap.css',
          'css/planner.css'
        ],
        dest: 'dist/planner.css'
      },
      js: {
        src: [
          'bower_components/angularjs/angular.js',
          'bower_components/angularjs-rails-resource/angularjs-rails-resource.js',
          'bower_components/checklist-model/checklist-model.js',
          'bower_components/angularjs/angular.js',
          'bower_components/lodash/lodash.js',
          'js/planner.js',
          'js/*.js'
        ],
        dest: 'dist/planner.js'
      }
    },
    'http-server': {
      'dev': {
        root: '',
        port: 8282,
        host: '0.0.0.0',
        showDir: true
      }
    },
    karma: {
      unit: {
        configFile: 'test/karma.conf.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-http-server');
  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('server', ['http-server']);

};
