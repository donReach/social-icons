module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    update_json: {
      options: {
        src: 'package.json',
        indent: '  '
      },
      bower: {
        dest: 'bower.json',
        fields: [
          'name', 
          'description', 
          'version', 
          'keywords', 
          'repository'
        ]
      }
    },
    webfont: {
      icons: {
        src: 'src/icons/*.svg',
        dest: 'dist/fonts',
        destCss: 'dist/css',
        options: {
          font: 'social-icons',
          fontFilename: 'social-icons',
          type: ['eot','woff2','woff','ttf','svg'],
          order: ['eot','woff2','woff','ttf','svg'],
          ie7: true,
          templateOptions: {
              baseClass: 'si',
              classPrefix: 'si-',
              mixinPrefix: 'si-'
          },
          destHtml: 'dist',
          htmlDemoFilename: 'example',
        }
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-update-json');
  grunt.loadNpmTasks('grunt-webfont');

  // Default task(s).
  grunt.registerTask('default', ['update_json', 'webfont']);

};