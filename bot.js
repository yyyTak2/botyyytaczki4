var Discord = require('discord.js');
var bot = new Discord.Client();
var client = new Discord.Client();

bot.on('ready', () => {
    bot.user.setStatus('dnd')
    bot.user.setPresence({
        game: {
            name: 'Olaf to kutas',
            type: 0
        }
    });
});	

bot.on('message', message => {
if(message.content.toLowerCase() === '!twojastara')
   message.channel.send('**Sklej pizde mała szmato**');

});
    
bot.login(process.env.B0T_T0KEN);
