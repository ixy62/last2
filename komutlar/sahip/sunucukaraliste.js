const Discord = require("discord.js");
const db = require('quick.db');
exports.run = async (client, message, args) => {
  if(message.author.id !== "732622184203157554" ) if(message.author.id !== "798547105878245376" ) return message.reply("<:neutralno:910935142707646484> Sen sahibim değilsin!")
  let user = args[0]
  if (!user) {
    let e = new Discord.MessageEmbed()
    .setColor("GOLD")
    .setDescription("<:neutralno:910935142707646484> Kara listeye almak istediğin kullanıcının id sini yaz!")
    message.channel.send({embed: e})
    return;
  };
  
  
  
  db.set(`sunucukaraliste_${user}`, "aktif")
    
  let embed = new Discord.MessageEmbed()
    .setColor("GOLD")
    .setDescription(`<:neutralyes:910935020120735806> ${user} idli sunucuyu başarıyla karalisteye alındı!`)
    message.channel.send({embed: embed})
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["serverblacklist", "sunucu-kara-liste"]
};

exports.help = {
  name: "sunucukaraliste",
  description: "Belirtilen sunucuyu kara listeye alır!",
  usage: "sunucukaraliste <sunucu ID>"
};