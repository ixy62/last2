const Discord = require('discord.js')
const db = require('orio.db')
 
exports.run = async(client, message, args, prefix) => {

 if (!message.member.hasPermission("ADMINISTRATOR")) {
    const MoTion42 = new Discord.MessageEmbed()
     .setDescription("<:neutralno:910935142707646484> Bu komutu kullanmak için gerekli yetkin yok! gereken yetki: `YÖNETİCİ`") 
.setColor(client.ayarlar.embedRenk)
.setAuthor(`${client.user.username}`, client.user.avatarURL())
  .setTimestamp()
.setFooter(client.ayarlar.embedFooter, client.user.avatarURL())	
    message.channel.send(MoTion42);
    return;
  }
  
  
  if (!args[0]) {
    const MoTion42 = new Discord.MessageEmbed()
    .setDescription("<:neutralno:910935142707646484> **Doğru kullanım:** "+prefix+"kanal-koruma aç/kapat #logkanal")
.setColor(client.ayarlar.embedRenk)
.setAuthor(`${client.user.username} `, client.user.avatarURL())
  .setTimestamp()
.setFooter(client.ayarlar.embedFooter, client.user.avatarURL())	
  return message.channel.send(MoTion42)
  }
  if (args[0] === 'aç') {
    let kanal = message.mentions.channels.first()
    if(!kanal) return message.reply(new Discord.MessageEmbed().setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true })).setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true })).setDescription("<:neutralno:910935142707646484> Log kanalını **etiketlemelisin!**")).setColor('GOLD')
    db.set(`kanalk_${message.guild.id}`, kanal.id)
       const MoTion42 = new Discord.MessageEmbed()
.setColor(client.ayarlar.embedRenk)
.setAuthor(`${client.user.username} `, client.user.avatarURL())
    .setDescription(`<:neutralyes:910935020120735806> Kanal Koruma Başarıyla **açıldı!**`)
  .setTimestamp()
.setFooter(client.ayarlar.embedFooter, client.user.avatarURL())	
   return message.channel.send(MoTion42)
  }
   if (args[0] === 'kapat') {
    
    db.delete(`kanalk_${message.guild.id}`)
       const MoTion42 = new Discord.MessageEmbed()
.setColor(client.ayarlar.embedRenk)
.setAuthor(`${client.user.username} `, client.user.avatarURL())
    .setDescription(`<:neutralyes:910935020120735806> Kanal Koruma Başarıyla **kapatıldı!**`)
  .setTimestamp()
    .setFooter(client.ayarlar.embedFooter , client.user.avatarURL())	
    return message.channel.send(MoTion42)
  }
};
exports.conf = {
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'kanal-koruma'
}; 
