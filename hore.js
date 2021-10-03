const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();
const prefix = "69";
client.once('ready', () => {
  console.log(`${client.user.tag} is ready to Bark!`);
  client.user.setActivity(`Doggy', {
    type: 'Playing',
  });
client.on("message", function(message) {
 if (message.author.bot) return;
 const command = message.content.toLowerCase();
 if (command == "doggy") {
   message.reply('https://imgur.com/tCiug75')
 }
 else if (command == "doggy") {
   message.reply('https://imgur.com/tCiug75')
 }
});
client.login(config.BOT_TOKEN);
