const Discord = require("discord.js")

const {MessageButton} = require("discord-buttons") 

exports.run = async (client, message, args) => {

const embed = new Discord.MessageEmbed() 
.setColor(client.ayarlar.embedRenk)
.setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
.setTitle("**Belen Bilişim**") 
.setThumbnail('https://cdn.discordapp.com/attachments/917126950353522818/917137170232385596/20211115_190501.jpg')
.setImage('https://cdn.discordapp.com/attachments/917126950353522818/917137150892449802/benner.gif')
.setDescription(` 
👑 BelenHosting Bilişim Hizmetleri :crown:
🚀 Yüksek Hızda Uygun Fiyata VDS'ler bulunmakta.
☎️ Botlarınıza VDS sağlayacağınız Güvenli Adres
💸 Uygun Fiyata vds Ler BelenHosting'da!
🔰 Her Zaman Müşteri Memnuniyeti!
`) 
.setTimestamp()
.setFooter(client.user.username, client.user.avatarURL())
.setColor("YELLOW") 

const b1 = new MessageButton() 

.setStyle("url")

.setLabel("Discord")
.setEmoji("905526487426420787")

.setURL("https://discord.gg/zJa4pUHksU")
message.channel.send({ embed: embed, 

buttons: [b1] 

}) 

} 

exports.conf = {

aliases: [] 

}

exports.help = {

name: "sponsor" 

}