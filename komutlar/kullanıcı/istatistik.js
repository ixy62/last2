const Discord = require("discord.js")
const db = require("quick.db")
const moment = require("moment")
require("moment-duration-format")
const os = require('os');
exports.run = async (client, message, prefix, args) => {
    
    let guildSize = await client.shard.fetchClientValues('guilds.cache.size')
    let toplamsunucu = guildSize.reduce((acc, guildCount) => acc + guildCount, 0)

    let usersSize = await client.shard.fetchClientValues('users.cache.size')
    let usersWhySize = usersSize.reduce((acc, userCount) => acc + userCount, 0)
 
    let channelsSize = await client.shard.fetchClientValues('channels.cache.size')
    let toplamkanal = channelsSize.reduce((acc, channelsCount) => acc + channelsCount, 0)

    let emojisSize = await client.shard.fetchClientValues('emojis.cache.size')
    let toplamemoji = emojisSize.reduce((acc, channelsCount) => acc + channelsCount, 0)
	
	const botuptime = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
	let shardinfo = {
        ping: await client.shard.fetchClientValues('ws.ping'),
        server_count: await client.shard.fetchClientValues('guilds.cache.size'),
        user_count: await client.shard.fetchClientValues('users.cache.size'),
        uptime: await client.shard.fetchClientValues("uptime"),
        channel: await client.shard.fetchClientValues("channels.cache.size")
    }
	let i = client.shard.ids

    const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");

   const promises = [
      client.shard.fetchClientValues('guilds.cache.size'),
      client.shard.broadcastEval('this.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)'),
  ];

    Promise.all(promises).then(results => {
    const totalMembers = results[1].reduce((acc, memberCount) => acc + memberCount, 0);
	const embed = new Discord.MessageEmbed()
    .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
    .setColor(client.ayarlar.embedRenk)
    .setDescription(`
	• | **Shard Bilgileri** Hakkında detaylı bilgi almak için **${prefix}shard** Komutunu kullanın.
	• | **${duration}** İçerisinde, **${db.fetch("küfür") || 0}** Adet küfür, **${db.fetch("günlük_reklam") || 0}** Adet reklam, **${db.fetch("günlük_capslock") || 0}** Adet büyük harf, **${db.fetch("günlük_spam") || 0}** Adet spam, **${db.fetch("günlük_link") || 0}** Adet link engelledim!
    `)
    .addField("Geliştici(ler)",`
    • | [<@732622184203157554>](https://discord.com/users/732622184203157554) **-** <@918866493897318490>\n• | [<@798547105878245376>](https://discord.com/users/798547105878245376)\n• | [<@896272859817734155>](https://discord.com/users/896272859817734155)\n• | [<@790954182303547403>](https://discord.com/users/790954182303547403) **-** <@918884207529439242>
    `)
    .addField("Genel Bilgiler", `
    • | Toplam Sunucu Sayısı: **${toplamsunucu.toLocaleString()}**
    • | Toplam Kullanıcı Sayısı: **${usersWhySize.toLocaleString()}**/**${totalMembers.toLocaleString()}**
    • | Toplam Kanal Sayısı: **${toplamkanal.toLocaleString()}**
    • | Toplam Emoji Sayısı: **${toplamemoji.toLocaleString()}**
    • | Ping: **${client.ws.ping}ms**
    • | Aktiflik sürem: **${duration}**
	• | Ram Kullanımı: **${Math.round(process.memoryUsage().heapUsed / 1024 / 1024).toLocaleString()}mb**
    `, true)
    .addField("Shard Bilgileri", `
    • | Toplam Shard Sayısı: **${client.shard.count}**
    • | Bulunduğunuz shard: **${message.guild.shardID + 1}**
    `, true)
    .addField("Sürüm Bilgileri", `
    • | Bot Sürümü: **v${client.ayarlar.version}**
    • | Discord.js Sürümü: **v${Discord.version}**
    • | DataBase Sürümü: **v${db.version}**
    `)
    .addField("Bağlantılar", `
    • | [Davet](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8) - [Oy](https://top.gg/bot/${client.user.id}/vote) - [Destek](${client.ayarlar.destek}) | •
    `)
.setImage(client.ayarlar.banner)
    .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({dynamic: true}));
    message.channel.send(embed)
     
	
	 
  })
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: []
}

exports.help = {
    name: "23*40987238490*234wfsdf",
    description: "Bot istatistiklerini gösterir.",
    usage: "w!istatistik"
}