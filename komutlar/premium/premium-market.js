const Discord = require("discord.js")
const db = require("quick.db")
const ms = require("ms")
const moment = require("moment")
require("moment-duration-format")

exports.run = (client, message, args, prefix) => {
	
	const duration = moment.duration(db.fetch(`goldsüre_${message.author.id}`) - Date.now()).format(" D [gün], H [saat], m [dakika], s [saniye]");
	  
    let üyelikdurum;
    if(db.fetch(`üyelikk_${message.author.id}`) === "aktif") {
        üyelikdurum = `Gold Üye! - Süre: ${duration || "0 gün, 0 saat, 0 dakika, 0 saniye"}`
    } else {
        üyelikdurum = "Normal Üye!"
    }
    
    const market = new Discord.MessageEmbed()
    .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
    .setColor(client.ayarlar.embedRenk)
    .setDescription(`
    • | Üyelik Durumu: \`${üyelikdurum}\`
    `)
    .addField("Premium Paketler", `
    • | Paket: **Bronz** - Süre: **1 - 7 Gün**
	• | Paket: **Gold** - Süre: **7 - 14 Gün**
	• | Paket: **Yakut** - Süre: **14 - 29 Gün**
    `, true)
    .addField("Özellikler", `
    • | ${prefix}bronz üyelik: **Bronz üyelik paketinin özelliklerini görebilirsiniz.**
    • | ${prefix}gold üyelik: **Gold üyelik paketinin özelliklerini görebilirsiniz.**
    • | ${prefix}yakut üyelik: **Yakut üyelik paketinin özelliklerini görebilirsiniz.**
    `)
    .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
    return message.channel.send(market)

}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["premium-shop"]
}

exports.help = {
    name: "premium-market",
    description: "marketten alışveriş yaparsınız.",
    usage: "market"
}