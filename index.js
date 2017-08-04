const {Composer, log} = require('micro-bot');

const bot = new Composer();

bot.on('message', (ctx)=>{
    ctx.replyWithMarkdown('42')
})

module.exports = bot;