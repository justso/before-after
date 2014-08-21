module.exports = {
    options: {
        // livereload: true,
    },
    app: {
        files: ['app/*.js'],
        tasks: ['jshint'],
        options: {
            spawn: false,
        }
    },
    js: {
        files: ['js/*.js'],
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
