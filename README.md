# rm-rf-async

[![NPM](https://nodei.co/npm/rm-rf-async.png?downloads=true&downloadRank=true)](https://nodei.co/npm/rm-rf-async/)

## Env

node version: >= 8.0.0, because use `util.promisify`;

## Install

```
$ npm install rm-rf-async
```

## Usage

you can use async/await
```javascript
const rmrf = require('rm-rf-async');
const path = require('path');

(async () => {
    await rmrf(path.join(__dirname, './**/space'));
    console.log('delete over');
})();
```

or use promise
```javascript
const rmrf = require('rm-rf-async');
const path = require('path');

rmrf(path.join(__dirname, './**/space')).then(_ => console.log('delete over'));
```

or you can use callback 
```javascript
const rmrf = require('rm-rf-async');
const path = require('path');

rmrf(path.join(__dirname, './**/c.js'), () => {
    console.log('delete over')
})
```

By default, there is a log, you can remove the log by use `{log: false}` in secend argument, for Example:
```javascript
(async () => {
    await rmrf(path.join(__dirname, './**/space'), {log: false});
    console.log('delete over');
})();
```



