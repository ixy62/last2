const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (client, message, args, prefix) => {
   if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("<:neutralno:910935142707646484> Bu komutu kullanabilmek için `YÖNETİCİ` olman gerekli!")
   let kanal = message.mentions.channels.first() 
   let hedef = args[2]
   let kalan = args[2] - message.guild.memberCount
   const kanall = await db.fetch(`sayaçK_${message.guild.id}`)
   const hedeff = await db.fetch(`sayaçH_${message.guild.id}`)

   if(!args[0]) {
      const embedd = new Discord.MessageEmbed()
	 .setColor("GOLD")
	 .setDescription(`<:neutralno:910935142707646484> Merhaba, Öncelikle sayaç ayarlamak istiyorsan eğer bir değer belirtmelisin! örnek: ${prefix}sayaç ayarla #kanal <hedef> veya ${prefix}sayaç sıfırla!`)
	 .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
     return message.channel.send(embedd)
   } 
   
   if(args[0] === "ayarla") {
	if(!hedef) {
	const embedd = new Discord.MessageEmbed()
	 .setColor("GOLD")
	 .setDescription(`<:neutralno:910935142707646484> Merhaba, Sayaç ayarlamak istiyorsan eğer bir hedef belirlemelisin! örnek: ${prefix}sayaç ayarla #kanal <hedef>`)
	 .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
     return message.channel.send(embedd)	
	}
	if(!kanal) {
		const embedd = new Discord.MessageEmbed()
	 .setColor("GOLD")
	 .setDescription(`<:neutralno:910935142707646484> Merhaba, Sayaç ayarlamak istiyorsan eğer bir kanal etiketlemelisin! örnek: ${prefix}sayaç ayarla #kanal <hedef>`)
	 .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
     return message.channel.send(embedd)	
	}

	db.set(`sayaçK_${message.guild.id}`, kanal.id) 
	db.set(`sayaçH_${message.guild.id}`, hedef)
   const embedd = new Discord.MessageEmbed()
	 .setColor("GOLD")
	 .setDescription(`<:neutralyes:910935020120735806> Merhaba, Başarılı bir şekilde sayaç hedefini ve kanalını ayarladım!\n Ayarlanmış değerler; Kanal: ${kanal} | Hedef: **${hedef}**\n Şuanda sunucuda **${message.guild.memberCount}** kişi var! **${kalan}** Kişi Sonra **${args[1]}** Kişi Olacaz!`)
	 .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
     return message.channel.send(embedd)	
   }
   
   if(args[0] === "sıfırla") {
	   if(!kanall && !hedeff) {
		   const embedd = new Discord.MessageEmbed()
	 .setColor("GOLD")
	 .setDescription(`<:neutralno:910935142707646484> Merhaba, Üzgünüm Ancak Ayarlanmamış şeyleri sıfırlayamazsın!`)
	 .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
     return message.channel.send(embedd)	
	   }
	   
	   db.delete(`sayaçH_${message.guild.id}`)
	   db.delete(`sayaçK_${message.guild.id}`)
	   
	   const embedd = new Discord.MessageEmbed()
	 .setColor("GOLD")
	 .setDescription(`<:neutralyes:910935020120735806> Başarılı bir şekilde **sayaç hedefi** ve **sayaç kanalı** sıfırlandı!`)
	 .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
     return message.channel.send(embedd)	
   }
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: "sayaç",
    description: "Sayaç ayarlar/sıfırlarsınız.",
    usage: "sayaç <ayarla hedef #kanal/sıfırla>"
}