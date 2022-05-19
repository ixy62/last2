const Discord = require("discord.js");
const db = require('quick.db');

exports.run = async (client, message, args) => {
  if(message.author.id !== "732622184203157554" ) if(message.author.id !== "798547105878245376" ) return message.reply("<:neutralno:910935142707646484> Sen sahibim değilsin!")
  let user = args[0]
  if (!user) {
    let e = new Discord.MessageEmbed()
    .setColor("GOLD")
    .setDescription("<:neutralno:910935142707646484> Kara listeden kaldırmak istediğin kullanıcının ID'ini yaz!")
    message.channel.send({embed: e})
    return;
  };
  
  
  db.delete(`karalist_${user}`)
  
  let embed = new Discord.MessageEmbed()
    .setColor("GOLD")
    .setDescription(`<:neutralyes:910935020120735806> <@${user}> adlı kullanıcı başarıyla kara listeden çıkartıldı!`)
  return message.channel.send({embed: embed})
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["blacklist", "kara-liste"],
  permLevel: 0
};

exports.help = {
  name: "beyazliste",
  description: "Belirtilen kullancıyı kara listeden çıkartır!",
  usage: "beyazliste <kullanıcı ID>"
};  