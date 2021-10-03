const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();
const prefix = "69";
client.once('ready', () => {
  console.log(`${client.user.tag} is ready!`);
  client.user.setActivity('fetch', {
    type: 'Playing',
  });
client.on("message", function(message) {
  if (message.author.bot) return;

  const command = message.content.toLowerCase();

  switch(command) {
    case 'doggo':
      message.reply('https://tenor.com/bnk7W.gif')
      break;
  }
});
client.login(config.BOT_TOKEN);
