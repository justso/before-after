module.exports = {
    options: {
    // livereload: true,
    },
    scripts: {
        files: ['js/*.js', 'css/*.css'],
        tasks: ['jshint', 'concat'],
        options: {
            spawn: false,
        }
    },
//    css: {
//        files: ['css/*.scss'],
//        tasks: ['sass', 'autoprefixer', 'cssmin'],
//        options: {
//            spawn: false,
//        }
//    },
};
