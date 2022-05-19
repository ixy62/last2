const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (client, message, args, prefix) => {
   if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("<:neutralno:910935142707646484> Bu komutu kullanabilmek için `YÖNETİCİ` olman gerekli!")
   const kanal = message.mentions.channels.first()
   const rol = message.mentions.roles.first()
   const kanall = await db.fetch(`otorolK_${message.guild.id}`)
   const roll = await db.fetch(`otorolR_${message.guild.id}`)
   if(!args[0]) {
      const embedd = new Discord.MessageEmbed()
	 .setColor("GOLD")
	 .setDescription(`<:neutralno:910935142707646484> Merhaba, Öncelikle otorol ayarlamak istiyorsan eğer bir değer belirtmelisin! örnek: ${prefix}otorol ayarla veya ${prefix}otorol sıfırla!`)
	 .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
     return message.channel.send(embedd)
   } 
   
   if(args[0] === "ayarla") {
	if(!rol) {
	const embedd = new Discord.MessageEmbed()
	 .setColor("GOLD")
	 .setDescription(`<:neutralno:910935142707646484> Merhaba, Otorol ayarlamak istiyorsan eğer bir rol etiketlemelisin! örnek: ${prefix}otorol ayarla @üye #kanal`)
	 .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
     return message.channel.send(embedd)	
	}
	if(!kanal) {
		const embedd = new Discord.MessageEmbed()
	 .setColor("GOLD")
	 .setDescription(`<:neutralno:910935142707646484> Merhaba, Otorol ayarlamak istiyorsan eğer bir kanal etiketlemelisin! örnek: ${prefix}otorol ayarla @üye #kanal`)
	 .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
     return message.channel.send(embedd)	
	}
	 
	db.set(`otorolR_${message.guild.id}`, rol.id)
	db.set(`otorolK_${message.guild.id}`, kanal.id)
   const embedd = new Discord.MessageEmbed()
	 .setColor("GOLD")
	 .setDescription(`<:neutralyes:910935020120735806> Merhaba, Başarılı bir şekilde otorol rolünü ve kanalını ayarladım!\n Ayarlanmış değerler; Kanal: ${kanal} | Rol: ${rol}`)
	 .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
     return message.channel.send(embedd)	
   }
   
   if(args[0] === "sıfırla") {
	   if(!kanall && !roll) {
		   const embedd = new Discord.MessageEmbed()
	 .setColor("GOLD")
	 .setDescription(`<:neutralno:910935142707646484> Merhaba, Üzgünüm Ancak Ayarlanmamış şeyleri sıfırlayamazsın!`)
	 .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
     return message.channel.send(embedd)	
	   }
	   
	   db.delete(`otorolR_${message.guild.id}`)
	   db.delete(`otorolK_${message.guild.id}`)
	   
	   const embedd = new Discord.MessageEmbed()
	 .setColor("GOLD")
	 .setDescription(`<:neutralyes:910935020120735806> Başarılı bir şekilde **otorol rolü** ve **otorol kanalı** sıfırlandı!`)
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
    name: "otorol",
    description: "Otorol ayarlar/sıfırlarsınız.",
    usage: "otorol <ayarla @rol #kanal/sıfırla>"
}