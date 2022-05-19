const Discord = require("discord.js")

exports.run = (client, message, args) => {
    if(message.author.id !== "732622184203157554" ) if(message.author.id !== "798547105878245376" ) return message.reply("<:neutralno:910935142707646484> Sen sahibim değilsin!")
    let yazı = args.slice(0).join(" ")
    if(!yazı) return message.channel.send("<:neutralno:910935142707646484> Lütfen yapılacak güncellemeyi yazın.")
	message.delete()
    const embed = new Discord.MessageEmbed()
    .setAuthor(`${client.ayarlar.botİsim} Bot | Sürüm: v${client.ayarlar.version}`, client.user.avatarURL())
    .setColor(client.ayarlar.embedRenk)
    .setDescription(`
    • | Güncelleme Sürümü: **v${client.ayarlar.version}**

    • | Güncelleme;
    **${yazı}**
    `)
    .setFooter(client.ayarlar.embedFooter, client.user.avatarURL())
    return client.channels.cache.get("785907725455720448").send(embed)
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: []
}

exports.help = {
    name: "güncelleme",
    description: "güncelleme duyurusu atarsınız",
    usage: "güncelleme <yazı>"
}