const Discord = require('discord.js')
const db = require('orio.db')

exports.run = (client, message, args) => {
 if(message.author.id !== "732622184203157554" ) if(message.author.id !== "798547105878245376" ) return message.reply("<:neutralno:910935142707646484> Sen sahibim değilsin!")

if(!args[0]) return message.reply('<:neutralno:910935142707646484>  **Doğru kullanım:** w!bakım aç/kapat')

  
if(args[0] === 'aç') {
if(db.fetch(`bakimmod`)) return message.reply('<:neutralno:910935142707646484> Zaten açık.')
message.reply('<:neutralyes:910935020120735806> Başarıyla bakım modu açıldı.')
db.set(`bakimmod`, 'on')
}

if(args[0] === 'kapat'){
if(!db.fetch(`bakimmod`)) return message.reply('<:neutralno:910935142707646484> Zaten kapalı.')
message.reply('<:neutralyes:910935020120735806> Başarıyla bakım modu kapatıldı.')
db.delete(`bakimmod`)
  } 
}
exports.conf = {

  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
name: 'bakım',
description: 'bakım moduu',
usage: 'yaz',
}