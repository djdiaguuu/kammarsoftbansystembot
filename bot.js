const Discord = require('discord.js');
const bot = New Discord.Client();

bot.on("ready"), function (){
	console.log('$(bot.user.name') Is online!');
});

bot.login('process.env.token');