const Discord = require("discord.js")
const db = require("quick.db")
const moment = require("moment")
require("moment-duration-format")
const os = require('os');
exports.run = async (client, message, prefix, args) => {
	const embed = new Discord.MessageEmbed()
    .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
    .setColor(client.ayarlar.embedRenk)
    .setDescription(`\`\`\`5846 Sayılı Fikir ve Sanat Eserlerini Koruma Kanunu
Bu botun içeriği, tasarımı ve botun içindeki tüm dokümanlara ait hakları saklıdır. Botun içerisinde yer alan komutların aksi belirtilmediği sürece, botun içindeki hiçbir komut unsurları ve diğer unsurlar izin alınmaksızın kopyalanamaz, başka yere taşınamaz, alıntı yapılamaz, internet üzerinde veya her ne şekilde olursa olsun yayınlanamaz ve kullanılamaz. Bu botu kullanan kullanıcılar, botun telif hakkı konusunda Botun Geliştiricileri'nin tüm talep ve açıklamalarını kabul ettiklerini beyan ve taahhüt ederler. Hakları saklı tutulmuş eserler, sahiplerinin muvafakati olmadan hiç bir suretle çoğaltılamaz, alıntı yapılamaz, yayınlanamaz, başka bir yerde kullanılamaz.
© Kodlar yasal haklar çerçevesince koruma altına alınmıştır.\`\`\`
    `)
.setFooter(client.ayarlar.embedFooter)
    message.channel.send(embed)
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: []
}

exports.help = {
    name: "telif",
    description: "Bot istatistiklerini gösterir.",
    usage: "w!istatistik"
}