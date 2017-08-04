const {Composer, log} = require('micro-bot');
const converter = require('csvtojson');

const bot = new Composer();

bot.on('message', (ctx)=>{
    log(ctx.message);
    converter()
    .fromString(ctx.message)
    .on('data',(data)=>{
        const jsonStr= data.toString('utf8')
        ctx.reply(jsonStr);
    })
    .on('error',()=>{
        log.error('Some error occured')
    })
})

module.exports = bot;