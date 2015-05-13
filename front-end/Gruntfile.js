module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dist: { files: { 'css/planner.css': 'css/planner.sass' } }
    },
    watch: {
      files: ['css/*.sass'],
      tasks: ['sass']
    },
    'http-server': {
      'dev': {
        root: '',
        port: 8282,
        host: '0.0.0.0',
        showDir: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-http-server');

  grunt.registerTask('server', ['http-server']);

};
