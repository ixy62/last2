const Discord = require("discord.js");
const db = require('quick.db');
exports.run = async (client, message, args) => {
  if(message.author.id !== "732622184203157554" ) if(message.author.id !== "798547105878245376" ) return message.reply("<:neutralno:910935142707646484> Sen sahibim değilsin!")
  let user = args[0]
      let sebep = args.slice(1).join(' ')
  if (!user) {
    let e = new Discord.MessageEmbed()
    .setColor("GOLD")
    .setDescription("<:neutralno:910935142707646484> Kara listeye almak istediğin kullanıcının id sini yaz!")
    message.channel.send({embed: e})
    return;
  };
  if(!sebep){
    let e = new Discord.MessageEmbed()
    .setColor("GOLD")
    .setDescription("<:neutralno:910935142707646484>  Lütfen karalisteye almak için bir sebep belirtin!")
    message.channel.send({embed: e})
    return;
  }
  
  
  db.set(`karalist_${user}`, "aktif")
  db.set(`sebep_${user}`, sebep)
  
  let embed = new Discord.MessageEmbed()
    .setColor("GOLD")
    .setDescription(`<:neutralyes:910935020120735806> <@${user}> adlı kullanıcı başarıyla **${sebep}** Sebebiyle karalisteye alındı!`)
    message.channel.send({embed: embed})
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["blacklist", "kara-liste"],
  permLevel: 0
};

exports.help = {
  name: "karaliste",
  description: "Belirtilen kullancıyı kara listeye alır!",
  usage: "karaliste <kullanıcı ID>"
};