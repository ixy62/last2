const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async(client, message, args, prefix) => {
    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("<:neutralno:910935142707646484> Hata! Bu komutu kullanabilmek için `KANALLARI YÖNET` yetkisine ihtiyacın var!")
    let kanal = message.mentions.channels.first()

    if(!args[0]) {
        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
        .setColor(client.ayarlar.embedRenk)
        .setDescription(`
        <:neutralno:910935142707646484> Lütfen bir değer belirtin!
        
        • | **${prefix}kayıtlogkanal ayarla #kanal**
        • | **${prefix}kayıtlogkanal sıfırla**
        `)
        .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
        return message.channel.send(embed)
    }

    if(args[0] === "ayarla") {
        if(!kanal) {
            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
            .setColor(client.ayarlar.embedRenk)
            .setDescription(`
            <:neutralno:910935142707646484> Lütfen bir kanal etiketleyin!
            `)
            .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
            return message.channel.send(embed)
        }

        if(db.fetch(`kayıtlog_${message.guild.id}`)) {
            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
            .setColor(client.ayarlar.embedRenk)
            .setDescription(`
            <:neutralno:910935142707646484> Kayıt Log Kanalı Zaten Ayarlanmış!

            Ayarlanmış değer: <#${db.fetch(`kayıtlog_${message.guild.id}`)}>
            `)
            .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
            return message.channel.send(embed)
        }

        db.set(`kayıtlog_${message.guild.id}`, kanal.id)
        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
        .setColor(client.ayarlar.embedRenk)
        .setDescription(`
        <:neutralyes:910935020120735806> Başarılı bir şekilde **Kayıt Log Kanalını** ${kanal} olarak ayarladım!
        `)
        .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
        return message.channel.send(embed)
    }

    if(args[0] === "sıfırla") {
        if(!db.fetch(`kayıtlog_${message.guild.id}`)) {
            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
            .setColor(client.ayarlar.embedRenk)
            .setDescription(`
            <:neutralno:910935142707646484> Kayıt Log Kanalı Zaten Sıfırlanmış/Ayarlanmamış!
            `)
            .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
            return message.channel.send(embed)
        }

        db.delete(`kayıtlog_${message.guild.id}`)
        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
        .setColor(client.ayarlar.embedRenk)
        .setDescription(`
        <:neutralyes:910935020120735806> Başarılı bir şekilde **Kayıt Log Kanalını** sıfırladım!
        `)
        .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
        return message.channel.send(embed)
    }
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["kayıt-log", "kayıtlog"]
}

exports.help = {
    name: "kayıtlogkanal",
    description: "kayıt log kanalını ayarlarsınız",
    usage: "kayıtlogkanal ayarla #kanal/sıfırla"
}