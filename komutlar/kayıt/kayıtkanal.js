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
        
        • | **${prefix}kayıtkanal ayarla #kanal**
        • | **${prefix}kayıtkanal sıfırla**
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

        if(db.fetch(`kayıtkanal_${message.guild.id}`)) {
            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
            .setColor(client.ayarlar.embedRenk)
            .setDescription(`
            <:neutralno:910935142707646484> Kayıt Kanalı Zaten Ayarlanmış!

            Ayarlanmış değer: <#${db.fetch(`kayıtkanal_${message.guild.id}`)}>
            `)
            .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
            return message.channel.send(embed)
        }

        db.set(`kayıtkanal_${message.guild.id}`, kanal.id)
        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
        .setColor(client.ayarlar.embedRenk)
        .setDescription(`
        <:neutralyes:910935020120735806> Başarılı bir şekilde **Kayıt Kanalını** ${kanal} olarak ayarladım!
        `)
        .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
        return message.channel.send(embed)
    }

    if(args[0] === "sıfırla") {
        if(!db.fetch(`kayıtkanal_${message.guild.id}`)) {
            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
            .setColor(client.ayarlar.embedRenk)
            .setDescription(`
            <:neutralno:910935142707646484> Kayıt Kanalı Zaten Sıfırlanmış/Ayarlanmamış!
            `)
            .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
            return message.channel.send(embed)
        }

        db.delete(`kayıtkanal_${message.guild.id}`)
        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
        .setColor(client.ayarlar.embedRenk)
        .setDescription(`
        <:neutralyes:910935020120735806> Başarılı bir şekilde **Kayıt Kanalını** sıfırladım!
        `)
        .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
        return message.channel.send(embed)
    }
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["kayıt-kanal"]
}

exports.help = {
    name: "kayıtkanal",
    description: "kayıt kanalını ayarlarsınız",
    usage: "kayıtkanal ayarla #kanal/sıfırla"
}