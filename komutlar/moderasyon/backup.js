const { MessageEmbed, Client, Util, Message } = require("discord.js");
const fs = require("fs");
const hastebins = require("hastebin-gen"),
  db = require("quick.db");

var backups = JSON.parse(fs.readFileSync("./Data/backups.json", "utf8"));

module.exports.run = async (client, message, args, prefix) => {
    if(message.author.id !== message.guild.ownerID) return message.channel.send("<:neutralno:910935142707646484> Bu komutu kullanabilmek için sunucu kurucusu olman gerekli!")
 
    try {
        let waiting = client.emojis.cache.get("911958090298032228") //https://images-ext-1.discordapp.net/external/lWj3uW4qvfFB9t0QgGsDJ8vLvh5bSObQ-wwUxYFH4wo/https/images-ext-1.discordapp.net/external/AzWR8HxPJ4t4rPA1DagxJkZsOCOMp4OTgwxL3QAjF4U/https/cdn.discordapp.com/emojis/424900448663633920.gif

      if (args[0] === "al" || args[0] === "oluştur") {
        let creatingEmbed = new MessageEmbed()
          .setTitle(`${waiting}  Lütfen Bekleyiniz...`)
          .setDescription("Yedek Oluşturuluyor...")
          .setColor("RANDOM");
        message.channel.send(creatingEmbed).then(m => {
          let id = makeid(16);

          const channels = message.guild.channels.cache.sort(function(a, b) { return a.position - b.position; }).array().map(c => {
              const channel = {
                type: c.type,
                name: c.name,
                position: c.calculatedPosition
              };
              if (c.parent) channel.parent = c.parent.name;
              return channel;
            });

          const roles = message.guild.roles
            .cache.filter(r => r.name !== "@everyone")
            .sort(function(a, b) {
              return a.position - b.position;
            })
            .array()
            .map(r => {
              const role = {
                name: r.name,
                color: r.color,
                hoist: r.hoist,
                permissions: r.permissions,
                mentionable: r.mentionable,
                position: r.position
              };
              return role;
            });

          if (!backups[message.author.id]) backups[message.author.id] = {};
          backups[message.author.id][id] = {
            icon: message.guild.iconURL(),
            name: message.guild.name,
            owner: message.guild.ownerID,
            members: message.guild.memberCount,
            createdAt: message.guild.createdAt,
            roles,
            channels
          };

          save();
          
          let resultPublic = new MessageEmbed()
            .setTitle(`Yehuu!`)
            .setDescription(
              `<:neutralyes:910935020120735806> **${message.guild.name}** Adlı Sunucunun yedek id'si: \`${id}\``
            )
            .addField(
              "Kullanım",
              `\`\`\`${prefix}yedek yükle ${id}\`\`\`
\`\`\`${prefix}yedek bilgi ${id}\`\`\``
            )
            .setColor("GOLD");

          m.edit(resultPublic);
        });
      }

      if (args[0] === "sil") {
        let code = args[1];
        let errorEmbed = new MessageEmbed()
          .setTitle(`Hata`)
          .setDescription(
            `<:neutralno:910935142707646484> Bir yedek id'si belirtmeyi unuttun. ${prefix}yedek Adlı komutu kullan ve bilgi al!.
[Destek Sunucusu](https://discord.gg/CTsvk5XuUk)`
          )
          .setColor("GOLD");
        if (!code) return message.channel.send(errorEmbed);

        let cantfindbackup = new MessageEmbed()
          .setTitle(`Hata`)
          .setTitle(`<:neutralno:910935142707646484> ${code} İd'sine ait bir yedeğin yok!.`)
          .setDescription(
            `
[Destek Sunucusu](https://discord.gg/CTsvk5XuUk)`
          )
          .setColor("GOLD");
        if (!backups[message.author.id][code])
          return message.channel.send(cantfindbackup);

        delete backups[message.author.id][code];
        save();

        let deletedsuc = new MessageEmbed()
          .setTitle(`Yehuu!`)
          .setDescription(`<:neutralyes:910935020120735806> Başarılı bir şekilde yedek silindi!.`)
          .setColor("GOLD");
        message.channel.send(deletedsuc);
      }

       if (args[0] === "yükle") {
        let error = client.emojis.cache.get("655704809483141141") || "${prefix}";
        let code = args[1];
        let errorEmbed = new MessageEmbed().setTitle(`Hata`)
          .setDescription(`<:neutralno:910935142707646484> Bir yedek id'si belirtmeyi unuttun! ${prefix}yedek yazarak bilgi al!.
[Destek Sunucusu](https://discord.gg/CTsvk5XuUk)`)
        .setColor("GOLD");
        if (!code) return message.channel.send(errorEmbed);
        let cantfindbackup = new MessageEmbed()
          .setTitle(`Hata`)
          .setTitle(`<:neutralno:910935142707646484> Bu ID İle Hiç Yedeğiniz Yok | ${code}.`)
          .setDescription("[Destek Sunucusu](https://discord.gg/CTsvk5XuUk)")
          .setColor("GOLD");
        if (!backups[message.author.id][code])
          return message.channel.send(cantfindbackup);

        message.guild.channels.cache.forEach(async function(channel) {
     await channel.delete();
        });
        
         message.guild.roles.cache.filter(role => role.members.every(member => !member.user.bot)).forEach(async function(roles) {
           await roles.delete();
         }); 

         
        await backups[message.author.id][code].roles.forEach(async function(role) {
          message.guild.roles.create({ data: { 
              name: role.name,
              color: role.color,
              permissions: role.permissions,
              hoist: role.hoist,
              mentionable: role.mentionable,
              position: role.position
           }, reason: "Wonders Backup Sistemi" })
        });

        await backups[message.author.id][code].channels.filter(c => c.type == "category").forEach(ch => { 
          message.guild.channels.create(ch.name, {type: ch.type, permissionOverwrites: ch.permissionOverwriteArray });
          }); 
                                    
        await backups[message.author.id][code].channels.filter(c => c.type !== "category").forEach(ch => {
            message.guild.channels.create(ch.name,{ type: ch.type, permissionOverwrites: ch.permissionOverwriteArray}).then(c => {
              
                const parent = message.guild.channels.cache.filter(c => c.type == "category").find(c => c.name === ch.parent);
             
              c.setParent(parent).catch(err => {
                throw err;
              }) 
              });
          });
        message.guild.setName(backups[message.author.id][code].name);
        message.guild.setIcon(backups[message.author.id][code].icon);
      }

      if (args[0] === "bilgi") {
        let id = args[1];
        let MissingbackupinfoEmbed = new MessageEmbed()
          .setTitle(`Hata`)
          .setDescription(
            `<:neutralno:910935142707646484> **Yedek_ID**'sini Girmeyi Unuttunuz. Daha Fazla Bilgi İçin \`${prefix}help\` e Komutunu Kullanın.  
                    [Destek Sunucusu](https://discord.gg/JWZPNxe)`
          )
          .setColor("GOLD");
        if (!id) return message.channel.send(MissingbackupinfoEmbed);

        let cantfindEmbed = new MessageEmbed()
          .setTitle(`Hata`)
          .setDescription(
            `<:neutralno:910935142707646484> Bu ID ile Hiç Yedeğiniz Yok | \`${id}\`.
                "[Destek Sunucusu](https://discord.gg/JWZPNxe)`
          )
          .setColor("GOLD");
        if (!backups[message.author.id][id])
          return message.channel.send(cantfindEmbed);

        try {
          let infoEmbed = new MessageEmbed()
            .setTitle(backups[message.author.id][id].name)
            .setThumbnail(backups[message.author.id][id].icon)
            .addField(
              "Yapımcı",
              `<@${backups[message.author.id][id].owner}>`,
              true
            )
            .addField("Üyeler", backups[message.author.id][id].members, true)
            .addField("Oluşturulma Tarihi", backups[message.author.id][id].createdAt)
            .addField(
              "Kanallar",
              `\`\`\`${backups[message.author.id][id].channels
                .map(channel => channel.name)
                .join("\n")}\`\`\``,
              true
            )
            .addField(
              "Roller",
              `\`\`\`${backups[message.author.id][id].roles
                .map(role => role.name)
                .join("\n")}\`\`\``,
              true
            );
          message.channel.send(infoEmbed);
        } catch (e) {
          hastebins(
            backups[message.author.id][id].channels
              .map(channel => channel.name)
              .join("\n"),
            "txt"
          ).then(ch => {
            hastebins(
              backups[message.author.id][id].roles
                .map(role => role.name)
                .join("\n"),
              "txt"
            ).then(ro => {
              let infoEmbed = new MessageEmbed()
                .setTitle(backups[message.author.id][id].name)
                .setThumbnail(backups[message.author.id][id].icon)
                .addField(
                  "Yapımcı",
                  `<@${backups[message.author.id][id].owner}>`,
                  true
                )
                .addField(
                  "Üyeler",
                  backups[message.author.id][id].members,
                  true
                )
                .addField(
                  "Oluşturulma Tarihi",
                  backups[message.author.id][id].createdAt
                )
                .addField("Kanallar", ch, true)
                .addField("Roller", ro, true);
              message.channel.send(infoEmbed);
            });
          });
        }
      }

      if (args[0] === "liste") {
        
        
      }
      
      if (args[0] === "temizle") {
        let errorEmbed = new MessageEmbed()
          .setTitle(`Hata`)
          .setDescription(
            `<:neutralno:910935142707646484> Herhangi bir yedeğin yok!
[Destek Sunucusu](https://discord.gg/JWZPNxe)`
          )
          .setColor("GOLD");
        if (!backups[message.author.id])
          return message.channel.send(errorEmbed);

        let warningEmbed = new MessageEmbed().setTitle(`${warning}  Dikkat`)
          .setDescription(`Tüm yedeklerini silmek istediğine eminmisin?
__Bunun geri dönüşü yoktur!__`);
        message.channel.send(warningEmbed).then(msg => {
           msg.react("✅").then(() => msg.react("❌"));

          let yesFilter = (reaction, user) =>
            reaction.emoji.name === "✅" && user.id === message.author.id;
          let noFilter = (reaction, user) =>
            reaction.emoji.name === "❌" && user.id === message.author.id;

          let yes = msg.createReactionCollector(yesFilter, { time: 0 });
          let no = msg.createReactionCollector(noFilter, { time: 0 });

          yes.on("collect", r => {
            delete backups[message.author.id];

            let deletedsuc = new MessageEmbed()
              .setTitle(`Yehuu!`)
              .setDescription(`<:neutralyes:910935020120735806> Tüm yedekleriniz silindi.`)
              .setColor("GOLD");
            message.channel.send(deletedsuc);
            msg.delete();
          });

          no.on("collect", r => {
            msg.delete();
          });
        });
      }
      
       
      if (!args[0]) {
        const embed = new MessageEmbed()
          .setTitle(
            `**${prefix}yedek**

İstediğiniz Sunucunun Yedeğini Oluşturun ve kullanın!

__**Komutlar**__
`
          )
          .setDescription(`
                ${prefix}yedek oluştur     Bir Yedek Oluşturur!
                ${prefix}yedek sil         Yedeklerden Birini Siler!
                ${prefix}yedek bilgi       Yedek Hakkında Bilgi Verir!
                ${prefix}yedek yükle       Yedek Yükler!
                ${prefix}yedek temizle     Tüm Yedeklerinizi Siler!
`)
          .setColor("GOLD")
        // .addField("• Sponsor:", `• Bize sponsor olan **Önem Bilişim**'e teşekkür ederiz! [Sunucu](https://discord.gg/FNnUg6z) • [Site](https://www.onembilisim.com/) • (Dikkat WhYBoLunun destek sunucusu burası değildir, lütfen gidip yetkililerden WhYBoLu hakkında yardım istemeyin! [Destek Sunucumuz](https://discord.gg/paypal))`)
        message.channel.send(embed);
        return;
      }

      function makeid(length) {
        var result = "";
        var characters =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
          result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
          );
        }
        return result;
      }

      function save() {
        fs.writeFile("./Data/backups.json", JSON.stringify(backups), err => {
          if (err) message.channel.send("Bir Problem Olduğunu Düşünüyorum!", err);
        });
      }
    } catch (e) {
      throw e;
    }
  
    
    
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yedek", "yerdeyişme"],
  permLevel: 3
};

exports.help = {
  name: "backup",
  description: "backup",
  usage: "${prefix}backup"
};
