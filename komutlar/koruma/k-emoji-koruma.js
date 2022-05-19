const Discord = require('discord.js')
const db = require('orio.db')
 
exports.run = async(client, message, args, prefix) => {

if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('<:neutralno:910935142707646484> Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın!')
  if (!args[0]) {
const MoTion42 = new Discord.MessageEmbed() 
.setColor(client.ayarlar.color)
.setAuthor(`${client.user.username} `, client.user.avatarURL())
.setDescription("<:neutralno:910935142707646484> **Doğru Kullanım:** "+prefix+"emoji-koruma aç/kapat #log")
.setTimestamp()
.setFooter(client.ayarlar.embedFooter, client.user.avatarURL())	
message.channel.send(MoTion42) 
 }
  if (args[0] === 'aç') {
    let kanal = message.mentions.channels.first();
    if(!kanal) return message.reply(new Discord.MessageEmbed().setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true })).setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true })).setDescription("<:neutralno:910935142707646484> Emoji koruma log kanalını etiketle!")).setColor('GOLD')
    db.set(`emojik_${message.guild.id}`, kanal.id)
     message.reply(new Discord.MessageEmbed().setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true })).setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true })).setDescription("<:neutralyes:910935020120735806> Emoji koruması başarıyla **açıldı!**")).setColor('GOLD')
  }
   if (args[0] === 'kapat') {
    db.delete(`emojik_${message.guild.id}`)
    message.reply(new Discord.MessageEmbed().setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true })).setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true })).setDescription("<:neutralyes:910935020120735806> Emoji koruma başarıyla **kapatıldı!**")).setColor('GOLD')
  }
};
exports.conf = {
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'emoji-koruma'
}; 
