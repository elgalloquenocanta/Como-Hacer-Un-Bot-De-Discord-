const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Bot is ready`);
});

client.on('message', msg => {
    if (msg.content === 'hola') {
        msg.reply('hola');
    }
});

client.login('NzE4NDY1NTg0NDU0NTY1OTA4.XtpRVA.69JanEfFc_GdY1gV0h78YSP92fQ');