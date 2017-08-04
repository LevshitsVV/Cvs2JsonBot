import {Composer, log} from 'micro-bot';

const bot = new Composer();

bot.on('message', (ctx)=>{
    ctx.replyWithMarkdown('42')
})

export default bot;