//github.com/gruntjs/grunt-contrib-compass
module.exports = {
    dist: {
        options: {
            config: 'config.rb',
            cssDir: 'app/build',
            environment: 'development', // production
            sassDir: 'styles',
        },
    },
    // dev: { //  Another target
    //     options: {
    //         sassDir: 'sass',
    //         cssDir: 'css',
    //     },
    // },
};
