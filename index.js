const fs = require("fs");
const util = require("util");
const assert = require("assert");
const glob = require("glob");

const statPro = util.promisify(fs.stat);
const unlinkPro = util.promisify(fs.unlink);
const readdirPro = util.promisify(fs.readdir);
const rmdirPro = util.promisify(fs.rmdir);
const globPro = util.promisify(glob);

const _rmrf = async function(p) {
    let stat;
    try {
        stat = await statPro(p);
    } catch (e) {
        if (e.code === "ENOENT") return;
        else console.log(e);
    }
    if (!stat.isDirectory()) {
        console.log(`rm ${p}`);
        await unlinkPro(p);
    } else {
        const files = await readdirPro(p);
        for (const file of files) {
            const path = `${p}/${file}`;
            await _rmrf(path);
        }
        console.log(`rm ${p}`);
        await rmdirPro(p);
    }
};

// (async function() {
//     await rmrf("./test");
//     console.log("over");
// })();
const OPT = {log: true}

module.exports = async function rmrf(path, opt = OPT, cb = _ => {}) {
    if(typeof opt === 'function') {
        cb = opt;
        opt = OPT
    }
    assert(path, 'need path');
    assert.equal(typeof path, 'string', 'path should be a string');
    assert.equal(Object.prototype.toString.call(opt), '[object Object]', 'path should be a object');
    assert.equal(typeof cb, 'function', 'callback sholud be a function');
    return globPro(path).then(async files => {
        for(let file of files) {
            await _rmrf(file);
        }
        cb && cb();
    });
}


