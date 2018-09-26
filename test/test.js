// const rmrf = require('./../');
const path = require('path');
const rmrf = require('./../index.js')

// rmrf(path.join(__dirname, './**/space')).then(_ => console.log('delete over'));
// rmrf(path.join(__dirname, './**/c.js')).then(_ => console.log('delete over'));
// (async () => {
//     await rmrf(path.join(__dirname, './**/space'));
//     console.log('delete over');
// })();

rmrf(path.join(__dirname, './**/c.js'),{log: false}, () => {
    console.log('delete over')
})