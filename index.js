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

client.login('token');
