const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async(client, message, args, prefix) => {
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("<:neutralno:910935142707646484> Hata! Bu komutu kullanabilmek için `ROLLERİ YÖNET` yetkisine ihtiyacın var!")
    let kanal = message.mentions.roles.first()

    if(!args[0]) {
        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
        .setColor(client.ayarlar.embedRenk)
        .setDescription(`
        <:neutralno:910935142707646484> Lütfen bir değer belirtin!
        
        • | **${prefix}kayıtalınacakrol ayarla @rol**
        • | **${prefix}kayıtalınacakrol sıfırla**
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
            <:neutralno:910935142707646484> Lütfen bir rol etiketleyin!
            `)
            .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
            return message.channel.send(embed)
        }

        if(db.fetch(`kayıtalınacakrol_${message.guild.id}`)) {
            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
            .setColor(client.ayarlar.embedRenk)
            .setDescription(`
            <:neutralno:910935142707646484> Kayıt Alınacak Rolü Zaten Ayarlanmış!

            Ayarlanmış değer: <@&${db.fetch(`kayıtalınacakrol_${message.guild.id}`)}>
            `)
            .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
            return message.channel.send(embed)
        }

        db.set(`kayıtalınacakrol_${message.guild.id}`, kanal.id)
        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
        .setColor(client.ayarlar.embedRenk)
        .setDescription(`
        <:neutralyes:910935020120735806> Başarılı bir şekilde **Kayıt Alınacak Rolünü** ${kanal} olarak ayarladım!
        `)
        .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
        return message.channel.send(embed)
    }

    if(args[0] === "sıfırla") {
        if(!db.fetch(`kayıtalınacakrol_${message.guild.id}`)) {
            const embed = new Discord.MessageEmbed()
            .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
            .setColor(client.ayarlar.embedRenk)
            .setDescription(`
            <:neutralno:910935142707646484> Kayıt Alınacak Rolü Zaten Sıfırlanmış/Ayarlanmamış!
            `)
            .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
            return message.channel.send(embed)
        }

        db.delete(`kayıtalınacakrol_${message.guild.id}`)
        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
        .setColor(client.ayarlar.embedRenk)
        .setDescription(`
        <:neutralyes:910935020120735806> Başarılı bir şekilde **Kayıt Alınacak Rolünü** sıfırladım!
        `)
        .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
        return message.channel.send(embed)
    }
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["kayıt-alınacak"]
}

exports.help = {
    name: "kayıtalınacakrol",
    description: "kayıt alınacak rolünü ayarlarsınız",
    usage: "kayıtalınacakrol ayarla @rol/sıfırla"
}