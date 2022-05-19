const Discord = require('discord.js')
const db = require("quick.db")

exports.run = async (client, message, args, prefix) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`${ee.e.unlem} Bu Komutu Kullanabilmek İçin **Yönetici** İznine Sahip Olmalısın!`);

  if(args[0] === "ayarla"){
  let channel = message.mentions.channels.first()
    if (!channel) {
        message.channel.send(new Discord.MessageEmbed().setColor(ee.color).setDescription(`Yanlış Kullanım! Doğru Kullanım: ${prefix}hg-bb ayarla #kanal`))
    }
    
 db.set('rgiris_'+message.guild.id, channel.id) 
message.channel.send(new Discord.MessageEmbed().setColor(ee.color).setDescription(`Resimli Hoşgeldin - Güle Güle kanalı ${channel} Olarak Ayarlandı.`))
                     
} else {
  
if(args[0] === "sıfırla"){
message.channel.send(new Discord.MessageEmbed().setColor(ee.color).setDescription(`Resimli Hoşgeldin - Güle Güle Sistemi Sıfırlandı!`))
 db.delete('rgiris_'+message.guild.id)
  
} else {
   return message.channel.send(new Discord.MessageEmbed().setColor(ee.color).setTitle(`Resimli HG-BB`).setDesceiption(`Lütfen Değer Belirtin! Resimli Giriş Çıkış Sistemini Kurmak İçin: **${prefix}hg-bb ayarla #kanal** Yazınız. Eğer Sıfırlamak İstiyorsanız: **${prefix}hg-bb sıfırla** Yazınız.`))
}}

}

exports.conf = {
    aliases: []
}

exports.help = {
    name: "hg-bb",
}