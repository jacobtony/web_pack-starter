const path = require('path')

module.exports = class statsPlugin{
    apply(compiler){
        compiler.hooks.emit.tap('statsPlugin', (compiler, callback) => {
            let stats = compiler.getStats();
            let statsJson = JSON.stringify(stats.toJson(), null, 4)
            compiler.assets['statsAsset.json'] = {
                source: function(){
                    return  statsJson
                },
                size: function(){
                    return statsJson.length
                }
            };
        })
    }
}