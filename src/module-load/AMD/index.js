const requirejs = require('requirejs');

(function() {
    requirejs.config({
        baseUrl: './src/module-load/AMD',
        path: {
            utils: './utils.js'
        }
    });

    requirejs(['utils'], function(utils) {
        console.log('utils:', utils)
        utils.setName('tom');
        const newName = utils.getName();
        console.log('newName:', newName);
        console.log('utils.name:', utils.name);
    })
})();