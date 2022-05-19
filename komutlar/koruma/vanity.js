const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {// can ♡ b#1010

let arg = ['aç', 'kapat'];
if(!args[0]) return message.channel.send('Şu argümanlardan birini kullanabilirsin: '+arg.join(', '));
if(!arg.includes(args[0])) return message.channel.send('<:neutralno:910935142707646484> Sadece `aç` veya `kapat` yazabilirsin.\nNOT: Sunucuz da **Özel URL** yok ise sistem çalışmayacaktır.**');

if(args[0] === 'aç') {
const system = await data.fetch(`vanity.${message.guild.id}`);
if(system) return message.channel.send('<:neutralno:910935142707646484> Görünüşe göre sistem zaten açık.');
data.set(`vanity.${message.guild.id}`, true);
message.channel.send('<:neutralyes:910935020120735806> Sistem başarılı bir şekilde aktif hale getirildi.');
};

if(args[0] === 'kapat') {
const system = await data.fetch(`vanity.${message.guild.id}`);
if(!system) return message.channel.send('<:neutralno:910935142707646484> Görünüşe göre sistem zaten devre dışı.');
data.delete(`vanity.${message.guild.id}`);
message.channel.send('<:neutralyes:910935020120735806> Sistem başarılı bir şekilde de-aktif hale getirildi.');
};

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'vanity'
};