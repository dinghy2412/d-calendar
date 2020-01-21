const path = require('path');

const SRC_PATH = path.resolve(__dirname, 'src');

module.exports = {
    resolve: {
        alias: {
            Src: SRC_PATH,
        }
    }
};
