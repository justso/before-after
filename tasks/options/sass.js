module.exports = {
    dist: {
        options: {
            style: 'expanded' // cssmin will minify later
        },
        files: {
            'app/build/screen.css': 'css/main.scss'
        }
    }
};
