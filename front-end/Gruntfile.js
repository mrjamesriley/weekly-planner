module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dist: { files: { 'assets/css/planner.css': 'assets/css/planner.sass' } }
    },
    watch: {
      files: ['assets/css/*.sass', 'assets/js/*.js'],
      tasks: ['sass', 'concat']
    },
    concat: {
      css: {
        src: [
          'bower_components/bootstrap/dist/css/bootstrap.css',
          'assets/css/planner.css'
        ],
        dest: 'assets/dist/planner.css'
      },
      js: {
        src: [
          'bower_components/angularjs/angular.js',
          'bower_components/angularjs-rails-resource/angularjs-rails-resource.js',
          'bower_components/checklist-model/checklist-model.js',
          'bower_components/angularjs/angular.js',
          'bower_components/lodash/lodash.js',
          'assets/js/planner.js',
          'assets/js/*.js'
        ],
        dest: 'assets/dist/planner.js'
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
