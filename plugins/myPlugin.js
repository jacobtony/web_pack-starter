

module.exports = class MyPlugin{
    apply(compiler){
        compiler.hooks.done.tap('MyPlugin', (stats) => {
            console.log(stats);
        })
    }
}

