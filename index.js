const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();
client.on("message", function(message) {
 if (message.author.bot) return;
 const command = message.content.toLowerCase();

 if (command == "bonk") {
   message.reply('https://tenor.com/blWeW.gif')
 }
});
client.login(config.BOT_TOKEN);
