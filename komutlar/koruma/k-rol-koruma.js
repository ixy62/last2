const Discord = require('discord.js');
const db = require('orio.db');

exports.run = async (client, message, args, prefix) => {

	if (!message.guild) return;
 if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply(new Discord.MessageEmbed().setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true })).setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true })).setDescription("<:neutralno:910935142707646484> Bu komutu kullanmak için gerekli yetkin yok! gereken yetki: `YÖNETİCİ`")).setColor('GOLD')

let kanal = message.mentions.channels.first()
if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true })).setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true })).setDescription("<:neutralno:910935142707646484> **Doğru kullanım**: "+ prefix +"rol-koruma aç/kapat #logkanal")).setColor('GOLD')
if(args[0] === "aç"){
 let kanal = message.mentions.channels.first()
    if(!kanal) return message.reply(new Discord.MessageEmbed().setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true })).setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true })).setDescription("<:neutralno:910935142707646484> Log kanalını **etiketlemelisin!**")).setColor('GOLD')
if(db.has(`rollogk_${message.guild.id}`)) return message.reply(new Discord.MessageEmbed().setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true })).setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true })).setColor('GOLD').setDescription("<:neutralno:910935142707646484> Açık olan birşeyi **açamazsın!**")).setColor('GOLD')
db.set(`rollogk_${message.guild.id}`, kanal.id)
message.reply(new Discord.MessageEmbed().setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true })).setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true })).setColor('GOLD').setDescription(`<:neutralyes:910935020120735806> Başarıyla rol koruma log kanalı ${kanal} olarak **ayarlandı!**`)).setColor('GOLD')
}
if(args[0] === "kapat"){
if(!db.has(`rollogk_${message.guild.id}`)) return message.reply(new Discord.MessageEmbed().setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true })).setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true })).setColor('GOLD').setDescription("<:neutralno:910935142707646484> Kapalı olan birşeyi **kapatamazsın!**")).setColor('GOLD')
db.delete(`rollogk_${message.guild.id}`)
message.reply(new Discord.MessageEmbed().setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true })).setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true })).setColor('GOLD').setDescription(`Başarıyla **kapatıldı!**`)).setColor('GOLD')
}



}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'rol-koruma',
    description: 'koruma',
 } 