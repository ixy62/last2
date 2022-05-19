const Discord = require("discord.js")
const db = require("quick.db")
const ms = require("ms")
const moment = require("moment")
require("moment-duration-format")

exports.run = async(client, message, args, prefix) => {
    
  const DBL = require("dblapi.js");
  const dbl = new DBL(`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc0NDUwNjQ5NjI1NTAwMDU5NiIsImJvdCI6dHJ1ZSwiaWF0IjoxNjA2MDQxMjA3fQ.vUs8drqgyaCvQOuih0CE11sqsa1n2ZwYiR_lkq8e4mo`,client)

  dbl.hasVoted(message.author.id).then(voted => {
    if(voted === true) {
      let amount = Math.floor(Math.random() * 5000)
    
      if(db.fetch(`günlükSüre_${message.author.id}`) > Date.now()) {
              let timeout = (db.fetch(`günlükSüre_${message.author.id}`) - Date.now());
              const embed = new Discord.MessageEmbed()
             .setColor("GOLD")
             .setAuthor("d-dostum yavaş ol!", message.author.avatarURL({dynamic: true}))
             .setDescription(`
             <:neutralno:910935142707646484> Hata!
             Üzgünüm ancak günlük ödülünüzü zaten almışsın! \`${moment.duration(timeout).format("H [saat], m [dakika], s [saniye]")}\` Boyunca beklemelisin
             `)
              .setFooter("Copyright © WhYBoLu Bot 2020", client.user.avatarURL())
             .setTimestamp()
            return message.channel.send(embed).then((msg) => { msg.delete({timeout: 5000})})
          } else {
              db.set(`günlükSüre_${message.author.id}`, (Date.now() + 86400000))
              setTimeout(() => {
                db.delete(`günlükSüre_${message.author.id}`)
              }, 86400000)
  
          db.add(`goldkredi_${message.author.id}`, amount)
          const market = new Discord.MessageEmbed()
          .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
          .setColor(client.ayarlar.embedRenk)
          .setDescription(`
          <:neutralyes:910935020120735806> Başarılı!
          Başarılı bir şekilde günlük ödülünüz olan **${amount}** Miktarında kredinizi aldınız!
          `)
          .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
          return message.channel.send(market) 
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
    aliases: []
}

exports.help = {
    name: "günlük",
    description: "günlük ödülünüzü alırsınız.",
    usage: "günlük"
}