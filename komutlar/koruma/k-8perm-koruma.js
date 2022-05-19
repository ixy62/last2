const Discord = require('discord.js')
const db = require('orio.db');

exports.run = async (client, message, args, prefix) => {

if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('<:neutralno:910935142707646484> Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın!')  
let kanal = message.mentions.channels.first();
if(!args[0]) return message.reply(new Discord.MessageEmbed().setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true })).setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true })).setDescription("<:neutralno:910935142707646484> Doğru kullanım: "+prefix+"8perm-koruma aç/kapat ")).setColor('GOLD')
if(args[0] === "aç"){
if(!kanal) return message.reply(new Discord.MessageEmbed().setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true })).setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true })).setDescription("<:neutralno:910935142707646484> Log kanalını **etiketlemelisin!**")).setColor('GOLD')
if(db.has(`ytbotkoruma_${message.guild.id}`)) return message.reply(new Discord.MessageEmbed().setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true })).setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true })).setDescription("8 Perm bot koruması zaten aktif!")).setColor('GOLD')
db.set(`ytbotkoruma_${message.guild.id}` , kanal.id)
message.reply(new Discord.MessageEmbed().setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true })).setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true })).setDescription("<:neutralyes:910935020120735806> 8 Perm bot koruması başarıyla **ayarlandı!**")).setColor('GOLD')
}
if(args[0] === "kapat"){
if(!db.has(`ytbotkoruma_${message.guild.id}`)) return message.reply(new Discord.MessageEmbed().setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true })).setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true })).setDescription("<:neutralno:910935142707646484> 8 Perm bot koruması zaten kapalı!")).setColor('GOLD')
db.delete(`ytbotkoruma_${message.guild.id}`)
message.reply(new Discord.MessageEmbed().setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true })).setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true })).setDescription("<:neutralyes:910935020120735806> 8 Perm bot koruması başarıyla **kapatıldı!**")).setColor('GOLD')
   } 

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: '8perm-koruma',
  description: 'YT Bot Koruma Sistemi.',
  usage: 'yaz'

};