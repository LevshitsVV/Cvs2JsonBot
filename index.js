const {Composer, log} = require('micro-bot');
const converter = require('csvtojson')

const bot = new Composer();

bot.on('message', (ctx)=>{
    converter()
    .fromString(ctx.message)
    .on('json',(jsonObj)=>{ 
            ctx.replyWithMarkdown(jsonObj)
    })
    .on('done',()=>{
        console.log('end')
    })
})

module.exports = bot;