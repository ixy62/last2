const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (client, message, args, prefix) => {
  const DBL = require("dblapi.js");
  const dbl = new DBL(`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc0NDUwNjQ5NjI1NTAwMDU5NiIsImJvdCI6dHJ1ZSwiaWF0IjoxNjA2MDQxMjA3fQ.vUs8drqgyaCvQOuih0CE11sqsa1n2ZwYiR_lkq8e4mo`,client)

    dbl.hasVoted(message.author.id).then(voted => {
      if(voted === true) {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("<:neutralno:910935142707646484> Bu komutu kullanabilmek için `YÖNETİCİ` olman gerekli!")
    const mesaj = args.slice(1).join(" ")
    const mesajj = db.fetch(`sayaçMHG_${message.guild.id}`)
    const sayaçhedef = db.fetch(`sayaçH_${message.guild.id}`)
    const kalanüye = message.guild.memberCount - sayaçhedef
 
    if(!args[0]) {
       const embedd = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setDescription(`<:neutralno:910935142707646484> Merhaba, Öncelikle sayaç mesajı ayarlamak istiyorsan eğer bir değer belirtmelisin! örnek: ${prefix}sayaçhgmesaj ayarla veya ${prefix}sayaçhgmesaj sıfırla!`)
      .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
      return message.channel.send(embedd)
    } 
    
    if(args[0] === "ayarla") {
     if(!mesaj) {
     const embedd = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setDescription(`<:neutralno:910935142707646484> Merhaba, Sayaç Mesajı ayarlamak istiyorsan eğer bir mesaj belirlemelisin! örnek: ${prefix}sayaçhgmesaj ayarla <mesaj>`)
      .addField("Fonksiyonlar:", `> {kullanıcı} => **Giden kullanıcıyı etiketler. (${message.author})**\n> {kullanıcı_adı} => **Kullanıcı adını gösterir. (${message.author.username})**\n> {sunucuadı} => **Sunucu adını gösterir. (${message.guild.name})**\n> {sunucuüyesayısı} => **Sunucuda bulunan üye sayısını gösterir. (${message.guild.memberCount})**\n> {kalanüye} => **Belirlenen hedefe kaç kişi kaldığını gösterir. (${kalanüye})**`)
      .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
      return message.channel.send(embedd)	
     }
      
     db.set(`sayaçMHG_${message.guild.id}`, mesaj)
     
    const embedd = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setDescription(`<:neutralyes:910935020120735806> Merhaba, Başarılı bir şekilde sayaç hoş geldin mesajını ayarladım!\n Ayarlanmış değerler; Mesaj: ${mesaj}`)
      .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
      return message.channel.send(embedd)	
    }
    
    if(args[0] === "sıfırla") {
        if(!mesajj) {
            const embedd = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setDescription(`<:neutralno:910935142707646484> Merhaba, Üzgünüm Ancak Ayarlanmamış şeyleri sıfırlayamazsın!`)
      .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
      return message.channel.send(embedd)	
        }
        
        db.delete(`sayaçMHG_${message.guild.id}`)
        
        const embedd = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setDescription(`<:neutralyes:910935020120735806> Başarılı bir şekilde **sayaç mesajı** sıfırlandı!`)
      .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
      return message.channel.send(embedd)	
    }
      } else {
        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
        .setColor(client.ayarlar.embedRenk)
      .setDescription(`<:wunlem:911958090298032228> Selam ${message.author}, eğer **${exports.help.name}** Adlı komutu kullanmak istiyorsan DBL üzerinden oy vermen gerekli!\nOy verme bağlantısı: [Tıkla](https://top.gg/bot/${client.user.id})`)
        .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
      message.channel.send(embed);
      }
    }) 

   
   
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: "sayaçhgmesaj",
    description: "Sayaç Mesajını ayarlar/sıfırlarsınız.",
    usage: "sayaçhgmesaj <ayarla <mesaj>/sıfırla>"
}