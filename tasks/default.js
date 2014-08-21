module.exports = function(grunt) {
    grunt.registerTask('default', ['connect', 'jshint', 'sass', 'concat', 'uglify', 'watch']); // , 'imagemin'
};
