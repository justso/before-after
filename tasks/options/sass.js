module.exports = {
    dist: {
        options: {
            style: 'expanded' // cssmin will minify later
        },
        files: {
            'app/build/all.css': 'styles/screen.scss'
        }
    }
};
