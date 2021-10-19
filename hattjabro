var Discord = require('discord.js');
var bot = new Discord.Client();
var isReady = true;

bot.on('message', message => {
  if (isReady && message.content === 'Hattja')
  {
  isReady = false;
  var voiceChannel = message.member.voice.channel;
  voiceChannel.join().then(connection =>
  {
     const dispatcher = connection.play('hattja.mp3');
            dispatcher.on("finish", end => {
                voiceChannel.leave();
            });
   }).catch(err => console.log(err));
   isReady = true;
  }
});


bot.login('ODAwNDc3OTk2NDI3Mzc4NzA5.YAStOg.AntrpM2LiXusSuKUazujfdG5Avo');
