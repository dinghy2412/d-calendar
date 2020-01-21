const path = require('path');
const fs = require('fs');

let NODE_ENV = process.env.NODE_ENV;
let data = {pathname: NODE_ENV ? `${process.env.NODE_ENV}` : ''};
fs.writeFileSync(
    './src/utils/dev.js',
    `export default ${JSON.stringify(data).replace(/\"/g, `'`)};`
);
