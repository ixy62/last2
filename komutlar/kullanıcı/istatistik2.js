const Discord = require('discord.js');
const   client = new Discord.Client();
const moment = require("moment");
const os = require('os');
require("moment-duration-format");
const db = require('quick.db');

exports.run = async (client, message, args) => {
// let toplamküfür = await db.get("toplamküfür")
  // let toplamreklam = await db.get("toplamreklam")
 //  let toplamever = await db.get("toplamever")
 // let toplamkural = await db.get("toplamkural")
 //  let linkler = await db.fetch(`linkler`)
    const duration = moment.duration(client.uptime).format(" D [Gün], H [Saat], m [Dakika], s [Saniye]");
    const istatistikozel = new Discord.MessageEmbed()
    .addField(`Bilgi`, `• | **${moment.duration(client.uptime).format("D [gün], H [saat], m [dakika], s [saniye]")}** İçerisinde, **${db.fetch("küfür") || 0}** Adet küfür, **${db.fetch("günlük_reklam") || 0}** Adet reklam, **${db.fetch("günlük_capslock") || 0}** Adet büyük harf, **${db.fetch("günlük_spam") || 0}** Adet spam, **${db.fetch("günlük_link") || 0}** Adet link engelledim!\n Shard hakkında detaylı bilgi almak için **shard** komutunu kullanın.`)
.addField("<a:hypes:857179846836748327> | Geliştirici(ler)", `• | [<@732622184203157554>](https://discord.com/users/732622184203157554) **-** <@918866493897318490>\n• | [<@798547105878245376>](https://discord.com/users/798547105878245376)\n• | [<@896272859817734155>](https://discord.com/users/896272859817734155)\n• | [<@790954182303547403>](https://discord.com/users/790954182303547403) **-** <@918884207529439242>`)
  .addField(" <:wekonomi:912004594660413470> | Bilgiler:", `\n • | Sunucu Sayısı **${client.guilds.cache.size.toLocaleString()}** \n • | Kullanıcı Sayısı: **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \n • | Kanal Sayısı: **${client.channels.cache.size.toLocaleString()}** \n • | Ping: **${client.ws.ping}ms** \n • | Uptime: **${duration}** \n • | Kuruluş: **16 Ağustos 2020** `,true)
//.addField("<a:seviye:787222698484301824> | Koruma", `\n • | **${moment.duration(client.uptime).format("D [gün], H [saat], m [dakika], s [saniye]")}** içerisinde toplam **${toplamküfür || 0}** küfür, **${toplamreklam || 0}** reklam **${toplamever || 0}** everyone engelledim.\n • | **${toplamkural || 0}** Kişi doğrulamayı kabul etmiş.`,true)
.addField("<:wsunucu:912005690216812634> | Sürümler", `\n • | Discord.js Sürümü: **v${Discord.version}** \n • | Node.js Sürümü: **${process.version}** \n • | Veri Kaydı: **orio.db/quick.db/croxydb/wio.db** \n • | Modül Sayısı: **33** \n • | Bit: **${os.arch()}** \n • | İşletim Sistemi: **${os.platform()}**\n • | CPU: **${os.cpus().map(i => `${i.model}`)[0]}** \n `)
.addField(`<:wsoru:911958772421918720> | Diğer`, `• | Ram Kullanımı: **${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}/5.000MB** \n • | Bulunan Komut Sayısı: **${client.commands.size}** \n`)
//.setImage(`https://cdn.discordapp.com/attachments/779005958847987722/798830580463697940/Leis_Premium.png`)
message.channel.send(istatistikozel)
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["stats","i"],
  permLevel: 0
}

exports.help = {
  name: 'istatistik'
};