var Discord = require('discord.js');
var bot = new Discord.Client();
var client = new Discord.Client();

bot.on('ready', () => {
    bot.user.setStatus('dnd')
    bot.user.setPresence({
        game: {
            name: 'Nekko krul ❤️',
            type: "STREAMING",
            url: "https://www.twitch.tv/yyytak32"
            
        }
    });
});

bot.on('message', message => {
if(message.content.toLowerCase() === '!strona')
   message.channel.send('**Link do strony serwera ➫ https://olekmajewski321.wixsite.com/discord**');

});
    
module.exports.run = async (bot, message, args) => {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No.");
if(!args[0]) return message.channel.send("no");
message.channel.bulkDelete(args[0]).then(() => {
message.channel.send(`Wyczyszczono ${args[0]} wiadomości.`).then(msg => msg.delete(2000));

});

}

module.exports.help = {
  name: "clear"
}
    
    
});
    
bot.login(process.env.B0T_T0KEN);
