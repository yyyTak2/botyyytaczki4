var Discord = require('discord.js');
var bot = new Discord.Client();
var client = new Discord.Client();

bot.on('ready', () => {
    bot.user.setStatus('dnd')
    bot.user.setPresence({
        game: {
            name: 'Huh',
            type: 0
        }
    });
});	

bot.on('message', message => {
if(message.content.toLowerCase() === '!strona')
   message.channel.send('**Link do strony Przyjaznej Społeczności ➫ https://olekmajewski321.wixsite.com/discord**');

});
    
bot.login(process.env.B0T_T0KEN);
