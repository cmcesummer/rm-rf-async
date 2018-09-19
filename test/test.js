const rmrf = require('./../');
const path = require('path');

rmrf(path.join(__dirname, './**/space')).then(_ => console.log('delete over'));
// rmrf(path.join(__dirname, './**/c.js')).then(_ => console.log('delete over'));
