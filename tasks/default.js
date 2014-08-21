module.exports = function(grunt) {
    grunt.registerTask('default', ['connect', 'jshint', 'sass', 'concat', 'watch']); // 'uglify', 'imagemin'
};
