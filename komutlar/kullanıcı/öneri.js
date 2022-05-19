const Discord = require("discord.js");
const db = require('quick.db')
exports.run = (client, message, args, member) => {
  let hata = args.slice(0).join(" ");
  let kanal = client.channels.cache.get('910265336383823912') //wonders detsek sw sine kategori açtım oraya attırak logları
    if (!hata) {
    return message.channel.send(
      "<:neutralno:910935142707646484> Hatanı Yazmalısın! Hatanı yazmadan birşeyi bildiremem."
    ); }
const embed = new Discord.MessageEmbed()
  .setColor("GOLD")
  .addField("Bir Hata Bildirildi!", `Bildiren: ${message.author.tag} Bildirdiği Hata: ${hata}`)
kanal.send(embed)
  message.channel.send('<:neutralyes:910935020120735806> Hatayı kurucularıma bildirdim en kısa sürede düzeltilecektir teşekkürler!')
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["bildir"],
    permLevel: 0
}

exports.help = {
    name: "bildir",
    description: "kodçevirme",
    usage: "kodçevirme"
}