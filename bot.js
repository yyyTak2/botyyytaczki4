var Discord = require('discord.js');
var bot = new Discord.Client();
var client = new Discord.Client();

static void UpdatePresence()
{
    DiscordRichPresence discordPresence;
    memset(&discordPresence, 0, sizeof(discordPresence));
    discordPresence.state = "Huhuhuhu";
    discordPresence.details = "Taka kupa";
    discordPresence.startTimestamp = 1507665886;
    discordPresence.endTimestamp = 1507665886;
    discordPresence.largeImageKey = "1";
    discordPresence.largeImageText = "Numbani";
    discordPresence.smallImageText = "Rogue - Level 100";
    discordPresence.partyId = "ae488379-351d-4a4f-ad32-2b9b01c91657";
    discordPresence.partySize = 1;
    discordPresence.partyMax = 69;
    discordPresence.spectateSecret = "MTIzNDV8MTIzNDV8MTMyNDU0";
    discordPresence.joinSecret = "MTI4NzM0OjFpMmhuZToxMjMxMjM= ";
    Discord_UpdatePresence(&discordPresence);
}

bot.on('message', message => {
if(message.content.toLowerCase() === '!strona')
   message.channel.send('**Link do strony Przyjaznej Społeczności ➫ https://olekmajewski321.wixsite.com/discord**');

});
    
bot.login(process.env.B0T_T0KEN);
