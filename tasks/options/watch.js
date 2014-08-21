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
        files: ['scripts/*.js'],
        tasks: ['jshint', 'concat'],
        options: {
            spawn: false,
        }
    },
    css: {
        files: ['styles/*.scss'],
        tasks: ['sass'], // 'autoprefixer', 'cssmin'
        options: {
            spawn: false,
        }
    },
};
