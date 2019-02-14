module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: ['src/js/view.js', 'src/js/model.js', 'src/js/controller.js',
                    'src/js/shopping-list-item.js', 'src/js/ui.js'],
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        copy: {
            html: {
                src: 'src/html/index.prod.html',
                dest: 'build/index.html'
            },
            static: {
                files: [{
                    expand: true,
                    cwd: 'src/static',
                    src: '*.*',
                    dest: 'build/static'
                }]
            }
        },
        cssmin: {
            target: {
                files: {
                    'build/css/style.min.css': ['src/css/*.css']
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify-es');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['cssmin', 'uglify', 'copy']);
};