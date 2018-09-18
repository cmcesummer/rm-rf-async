# rm-rf-async

## 依赖要求
需要 node v8.0.0 及以上

## async
await只能能影响直接包裹它的async函数。因此在callback函数中的await并不会挂起整个async函数的执行。  
await只会暂停map的callback，因此map完成时，不能保证asyncGet也全部完成  
正确的写法还得借助Promise.all  
```javascript
const _rmrf = async function(p) {
    // ...
    /**
     * 实现递归删除要么用这个 `for of`
     * 要么用下边的 `await Promise.all`
     */
    for (const file of files) {
        const path = `${p}/${file}`;
        await _rmrf(path);
    }
    // ===================
    await Promise.all(
        files.map(async file => {
            const path = `${p}/${file}`;
            return _rmrf(path);
        })
    );
    // ...
}
```