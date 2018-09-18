const rmrf = require('./../');
const path = require('path');

rmrf(path.join(__dirname, './dir')).then(_ => console.log('delete over'));
