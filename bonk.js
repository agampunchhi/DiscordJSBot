const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();
const prefix = "69";
client.once('ready', () => {
  console.log(`${client.user.tag} is Ready!`);
  client.user.setActivity(`out for perverts', {
    type: 'WATCHING',
  });
client.on("message", function(message) {
 if (message.author.bot) return;
 const command = message.content.toLowerCase();

 if (command == "bonk") {
   message.reply('https://tenor.com/blWeW.gif')
 }
 else if (command == "chonk") {
   message.reply('https://tenor.com/beZak.gif')
 }
 else if (command == "mohan") {
  message.reply('https://tenor.com/YqvV.gif')
}
});
client.login(config.BOT_TOKEN);
