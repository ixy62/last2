const Discord = require('discord.js');

//MADE BY NYDE IF YOU PUBLİSH Bİ YERDE NYDE VURUR YERDEN YERE

exports.run = function(client, message, args) {

	  const a = new Discord.MessageEmbed()
    .setColor(client.ayarlar.embedRenk)
    .setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
    .setDescription("Alttaki butonlara tıklayarak istediğin linklere ulaşabilirsin!")
    .setTimestamp()
    .setFooter(client.user.username, client.user.avatarURL())
const fetch = require("node-fetch");

    const kanal = message.channel.id;

    const mesaj = a

    const butonmesaj = "Sponsor"
    fetch(`https://discord.com/api/v9/channels/${kanal}/messages`, {

        method: "POST",

        body: JSON.stringify({"embed":mesaj,

            "components": 

            [

              {
                "type": 1,

                "components": [

                    {

                        "type": 2,

                        "label": butonmesaj,

                        "style": 5,

                        "url": `https://discord.gg/t6y5kbkFpu`

                    },

                    {

                        "type": 2,

                        "label": "Beni Davet Et",

                        "style": 5,

                        "url": `https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`

                    },

                    {

                        "type": 2,

                        "label": "Destek Sunucusu",

                        "style": 5,

                        "url": `${client.ayarlar.destek}`

                    },

                    {

                        "type": 2,

                        "label": "Oy Bağlantısı",

                        "style": 5,

                        "url": `https://top.gg/bot/${client.user.id}/vote`

                    }

                ]

            }

            ],

                             }),

        headers: {

            "Authorization": `Bot ${client.token}`,

            "Content-Type": "application/json"

        }

    })

};

exports.conf = {

  aliases: ['invite']

};

exports.help = {

  name: 'davet'

};