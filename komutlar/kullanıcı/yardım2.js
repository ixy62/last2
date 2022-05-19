const { MessageEmbed } = require("discord.js")
const { MessageMenu, MessageMenuOption } = require('discord-buttons');
const db = require('orio.db')

exports.run = async(client, message, args) => {
    const prefix = (await db.fetch(`prefix_${message.guild.id}`)) || client.ayarlar.prefix

    let countDownDate = new Date("Jan 1, 2022 00:00:00").getTime();
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  let bilgi = [`[Yeni Yıla **${days} Gün, ${hours} Saat, ${minutes} Dakika, ${seconds} Saniye** kaldı!](${client.ayarlar.destek})`, `**[${client.ayarlar.botİsim}](https://top.gg/bot/${client.user.id}/vote)** Botuna oy verirseniz özel komutlara erişim sağlayabilirsiniz!`, `**[Destek](${client.ayarlar.destek})** Sunucumuza gelerek çekilişlere katılabilirsiniz!`, `${client.ayarlar.botİsim} Botu için her gün yeni güncellemeler getiriyoruz!`, `Eğer **Premium** Üyelik alırsanız bazı gizli özellikleri açabilirsiniz!`]
  let bilgiler = Math.floor(Math.random() * bilgi.length)

        if(message.author.bot) return;
        let secenek1 = new MessageMenuOption()
        .setLabel(`Kullanıcı Kategorisi`)
        .setValue("test")
        .setDescription(`Kullanıcı komutlarını gösterir.`)
        .setEmoji("911949930053140490")
        .setDefault()
        let secenek2 = new MessageMenuOption()
        .setLabel(`Koruma Kategorisi`)
        .setValue("test2")
        .setDescription(`Koruma komutlarını gösterir.`)
        .setEmoji("911949917310820373")
        .setDefault()
        let secenek10 = new MessageMenuOption()
        .setLabel(`Yapılandırma Kategorisi[ÖNERİLEN]`)
        .setValue("test10")
        .setDescription(`Yapılandırma komutlarını gösterir.`)
        .setEmoji("911958772421918720")
        .setDefault()
        let secenek3 = new MessageMenuOption()
        .setLabel(`Moderasyon Kategorisi`)
        .setValue("test3")
        .setDescription(`Moderasyon komutlarını gösterir.`)
        .setEmoji("911949945299431464")
        .setDefault()
        let secenek4 = new MessageMenuOption()
        .setLabel(`Müzik Kategorisi`)
        .setValue("test4")
        .setDescription(`Müzik komutlarını gösterir.`)
        .setEmoji("911949958104617060")
        .setDefault()
               /* let secenek8 = new MessageMenuOption()
        .setLabel(`Kalp(Oy) Kategorisi`)
        .setValue("test8")
        .setDescription(`Kalp(Oy) komutlarını gösterir.`)
        .setEmoji("911958772421918720")
        .setDefault()*/
        /*let secenek5 = new MessageMenuOption()
        .setLabel(`Kayıt Kategorisi`)
        .setValue("test5")
        .setDescription(`Kayıt komutlarını gösterir.`)
        .setEmoji("911949969156628480")
        .setDefault()*/
        let secenek6 = new MessageMenuOption()
        .setLabel(`Ekonomi Kategorisi`)
        .setValue("test6")
        .setDescription(`Ekonomi komutlarını gösterir.`)
        .setEmoji("912004594660413470")
        .setDefault()
        let secenek7 = new MessageMenuOption()
        .setLabel(`Sunucu Kategorisi`)
        .setValue("test7")
        .setDescription(`Sunucu komutlarını gösterir.`)
        .setEmoji("912005690216812634")
        .setDefault()
               /* let secenek9 = new MessageMenuOption()
        .setLabel(`ButonRol Kategorisi`)
        .setValue("test9")
        .setDescription(`ButonRol komutlarını gösterir.`)
        .setEmoji("916419760344928298")
        .setDefault()*/
        let menu = new MessageMenu()
        .setID("MENU")
        .setMaxValues(1)
        .setMinValues(1)
        .setPlaceholder("👉 Tıkla ve kategori seç!")
        .addOption(secenek1)
        .addOption(secenek2)
        .addOption(secenek10)
        .addOption(secenek3)
        .addOption(secenek4)
       // .addOption(secenek5)
        .addOption(secenek6)
        .addOption(secenek7)
        //.addOption(secenek8)
        //.addOption(secenek9)
        const embed = new MessageEmbed()
        .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({dynamic: true}))
        .setTitle(`**Yardım Menüsü**`)
        .setURL(`${client.ayarlar.destek}`)
        .setDescription(`• | Merhaba ${message.author}, 
        • | **Bu panel sadece sana özeldir. Herhangi bir hata durumunda \`${prefix}bildir\` komutu ile bize bildirmekten çekinme!**
        • | ${bilgi[bilgiler]}
        `)
        .addField(`Kategoriler`,`
        • | <:wkullanci:911949930053140490> \`Kullanıcı\` => **Kullanıcı kategorisini gösterir.**
        • | <:wkoruma:911949917310820373> \`Koruma\` => **Koruma kategorisini gösterir.** <:yenik:916037065534222336>
        • | <:wmod:911949945299431464> \`Moderasyon\` => **Moderasyon kategorisini gösterir.**
        • | <:wsoru:911958772421918720> \`Yapılandırma\` => **Yapılandırma kategorisini gösterir.** <:yenik:916037065534222336>
        • | <:wsistem:911949969156628480> \`Kayıt\` => **Kayıt kategorisini gösterir.**
        • | <:wekonomi:912004594660413470> \`Ekonomi\` => **Ekonomi kategorisini gösterir.**
        • | <:wsunucu:912005690216812634> \`Sunucu\` => **Sunucu kategorisini gösterir.**
        • | <:wmzik:911949958104617060> \`Müzik\` => **Müzik kategorisini gösterir.** <:yenik:916037065534222336>
`)
        .addField(`ÖNEMLİ!`,`
      • | Bot daha **DBL** onaylanmamıştır. Oy isteyen komutlar çalışmamaktadır!
`)
        .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
        .setColor(client.ayarlar.renk)
        .setImage(client.ayarlar.banner)
        .setTimestamp()
        let menumesaj = await message.channel.send({embed: embed, menus: menu})
        function menuselection(menu) {
            switch(menu.values[0]) {
                case "test":
                    const embed = new MessageEmbed()
                    .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({dynamic: true}))
                    .setTitle(`<:wkullanci:911949930053140490> **Kullanıcı**`)
                    .setURL(`${client.ayarlar.destek}`)
                    .setThumbnail(`${client.ayarlar.resim}`)
                    .setDescription(` • | \`${prefix}istatistik\` => **Bot Bilgilerini Gösterir.**
                    • | \`${prefix}sor <soru>\` => **Sohbet edelim mi?**
                    • | \`${prefix}kullanıcıbilgi\` => **Kullanıcı Bilgilerinizi Gösterir.**
                    • | \`${prefix}sunucubilgi\` => **Sunucu Bilgilerini Gösterir.**
                    • | \`${prefix}shard\` => **Shard Bilgilerini Gösterir.**
                    • | \`${prefix}wikipedia\` => **WikiPedia Üzerinden Araştırma Yaparsınız.**
                    • | \`${prefix}dbl\`**[BAKIMDA]** => **DBL Üzerinden Araştırma Yaparsınız.**
                    • | \`${prefix}rastgeleemoji\` => **Rastgele Emoji Görürsünüz.**
                    • | \`${prefix}avatar\` => **Profil Fotoğrafınızı Görürsünüz.**
                    • | \`${prefix}telif\` => **Botun telif haklarını gösterir.**
                    • | \`${prefix}base64\` => **Yazdığınız Yazıyı Base64 Formatına Çevirir.**
                    • | \`${prefix}binary\` => **Yazdığınız Yazıyı Binary Formatına Çevirir.**`)
                    .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
                    .setColor(client.ayarlar.renk)
                    .setTimestamp()
                   menu.reply.send(embed, true)
                break;
                case "test2":
                    const embed2 = new MessageEmbed()
                    .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({dynamic: true}))
                    .setTitle(`<:wkoruma:911949917310820373> **Koruma**`)
                    .setURL(`${client.ayarlar.destek}`)
                    .setThumbnail(`${client.ayarlar.resim}`)
                    .setDescription(`• | \`${prefix}modlog\` => **Modlog ayarlarsınız.**\n• | \`${prefix}modlog sıfırla\` => **Ayarlanmış olan modlog'u sıfırlar.**\n• | \`${prefix}bansınır\` => **Ban sınırı kaça ayarlandıysa o sayı dan fazla ban atamaz. Atar ise yasaklanır.**\n• | \`${prefix}kicksınır\` => **Bir kişi ayarlanan sayıya göre birden fazla kişiyi sunucu dan atarsa yasaklanır.**\n• | \`${prefix}muterole\` => **Mute rolünü ayarlarsınız/sıfırlarsınız.**\n• | \`${prefix}spam-engel\` => **Spam engel ayarlarsınız/sıfırlarsınız.**\n• | \`${prefix}kanal-koruma\` => **Sunucunuz'da silinen kanalı geri oluşturur. [ÖNERİLEN]**\n• | \`${prefix}rol-koruma\` => **Sunucunuz'da silinen rolleri geri oluşturur. [ÖNERİLEN]**\n• | \`${prefix}8perm-koruma\` => **Sunucunuza 8perm(Yönetici) yetkisinde bot eklenen bot engellenir.(Kurucu hariç) [ÖNERİLEN]**\n• | \`${prefix}emoji-koruma\` => **Sunucunuz'da silinen emojileri geri oluşturur. [ÖNERİLEN]**\n• | \`${prefix}vanity\` => **Sunucunuzda ki Vanity URL'yi koruma altına alır. [YENİ]**`)
                    .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
                    .setColor(client.ayarlar.renk)
                    .setTimestamp()
                   menu.reply.send(embed2, true)
                break;
                case "test3":
                    const embed3 = new MessageEmbed()
                    .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({dynamic: true}))
                    .setTitle(`<:wmod:911949945299431464> **Moderasyon**`)
                    .setURL(`${client.ayarlar.destek}`)
                    .setThumbnail(`${client.ayarlar.resim}`)
                    .setDescription(`• | \`${prefix}küfür\` => **Küfür engelini açıp/kapatırsınız.**\n• | \`${prefix}reklam\` => **Reklam engelini açıp/kapatırsınız.**\n• | \`${prefix}caps\` => **Capslock engelini açıp/kapatırsınız.**\n• | \`${prefix}ban\` => **Etiketlediğiniz kişiyi sunucudan yasaklar.**\n• | \`${prefix}kick\` => **Etiketlediğiniz kişiyi sunucan atar.**\n• | \`${prefix}uyar\` => **Etiketlediğiniz kişiyi uyarırsınız.**\n• | \`${prefix}uyarıliste\` => **Etiketlediğiniz kişinin uyarı listesine bakarsınız.**\n• | \`${prefix}uyarısil\` => **Etiketlediğiniz kişinin uyarısını silersiniz.**\n• | \`${prefix}uyarıtemizle\` => **Etiketlediğiniz kişinin uyarılarını tamamen temizlersiniz.**\n• | \`${prefix}sil\` => **Belirli sayıda mesaj silebilirsiniz.**`)
                    .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
                    .setColor(client.ayarlar.renk)
                    .setTimestamp()
                   menu.reply.send(embed3, true)
                break;
case "test10":
                    const embed10 = new MessageEmbed()
                    .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({dynamic: true}))
                    .setTitle(`<:wsoru:911958772421918720> **Yapılandırma**`)
                    .setURL(`${client.ayarlar.destek}`)
                    .setThumbnail(`${client.ayarlar.resim}`)
                    .addField(`<:wtepki:916419760344928298> ButonRol`, `__NOT:__ **Daha detaylı bilgi için** \`${prefix}buttonrol\` **yazıp detaylı öğrenebilirsiniz.**
                    • | \`${prefix}buton oluştur \` => **Buton oluşturursunuz.**
                    • | \`${prefix}buton mesaj değiştir\` => **Buton msaj değiştirirsiniz..**
                    • | \`${prefix}buton sıfırla \` => **Ayarlanan butonu sıfırlarsınız.**
                    • | \`${prefix}buton liste\` => **Buton listelerini gösterir.**
                    • | \`${prefix}rol button ekle\` => **Butona verilecek rol ekler.**
                    • | \`${prefix}rol button kaldır\` => **Butondan ayarlanmış olan rolü kaldırır.**
                    • | \`${prefix}rol\` => **Ayarlanmış olan buton rolleri gösterir.**`)
                    .addField(`<:wsistem:911949969156628480> Kayıt`, `• | \`${prefix}kayıtalınacakrol\` => **Kayıt Alınacak Rolünü Ayarlar.**
                    • | \`${prefix}kayıterkekrol\` => **Erkek Verilecek Rolünü Ayarlar.**
                    • | \`${prefix}kayıtkızrol\` => **Kayıt Kız Verilecek Rolünü Ayarlar.**
                    • | \`${prefix}kayıtkanal\` => **Kayıt Kanalını Ayarlar.**
                    • | \`${prefix}kayıtlogkanal\` => **Kayıt Log Kanalını Ayarlar.**
                    • | \`${prefix}kayıttag\` => **Kayıt Tagını Ayarlarsınız.**
                    • | \`${prefix}kayıtyetkilirol\` => **Kayıt Yetkili Rolünü Ayarlar.**
                    • | \`${prefix}sestekiler\` => **Seste Bulunan Yetkilileri Gösterir.**
                    • | \`${prefix}administatistik\` => **Admin Bilgilerinizi Gösterir.**
                    • | \`${prefix}erkek\` => **Belirtilen Kişiyi Erkek Olarak Kayıt Eder.**
                    • | \`${prefix}kız\` => **Belirtilen Kişiyi Kız Olarak Kayıt Eder.**`)
                    .addField(`<:wunlem:911958090298032228> Çekiliş`, `• | \`${prefix}çekiliş-başlat\` => **Çekiliş başlatırsınız.**
                    • | \`${prefix}çekiliş-bitir\` => **Çekilişi bitirirsiniz.**
                    • | \`${prefix}çekiliş-düzenle\` => **Çekilişi düzenlersiniz.**
                    • | \`${prefix}çekiliş-yenile\` => **Çekiliş'in kazananlarını yenilersiniz.**
                    • | \`${prefix}çekiliş-liste\` => **Çekiliş lsitesini gösterir.**`)
                    .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
                    .setColor(client.ayarlar.renk)
                    .setTimestamp()
                   menu.reply.send(embed10, true)
                break;
                case "test4":
                    const embed4 = new MessageEmbed()
                    .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({dynamic: true}))
                    .setTitle(`<:wmzik:911949958104617060> **Müzik**`)
                    .setURL(`${client.ayarlar.destek}`)
                    .setThumbnail(`${client.ayarlar.resim}`)
                    .setDescription(` • | \`${prefix}play\` => **Girdiğiniz bir şarkı ismi ile müzik oynatır.**
                    • | \`${prefix}stop\` => **Ses kanalında oynayan müziği kapatırsınız.**
                    • | \`${prefix}np \` => **Oynatılan müzik hakkında bilgi verir.**
                    • | \`${prefix}skip\` => **Oynatılan müziği atlarsınız.**
                    • | \`${prefix}queue\` => **Müzik sırasını gösterir.**
                    • | \`${prefix}volume\` => **Oynatılan müziğin ses seviyesini ayarlarsınız.**
                    • | \`${prefix}pause\` => **Oynatılan müziği durdurursunuz.**
                    • | \`${prefix}resume\` => **Durdurulan müziği devam ettirirsiniz.**
                    • | \`${prefix}remove\` => **Müzik sırasından şarkı çıkarırsınız.**
                    • | \`${prefix}lyrics\` => **Oynatılan müziğin sözlerine bakarsınız.**`)
                    .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
                    .setColor(client.ayarlar.renk)
                    .setTimestamp()
                   menu.reply.send(embed4, true)
                break;
/*case "test8":
                    const embed8 = new MessageEmbed()
                    .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({dynamic: true}))
                    .setTitle(`<:wsoru:911958772421918720> **Kalp(Oy)**`)
                    .setURL(`${client.ayarlar.destek}`)
                    .setThumbnail(`${client.ayarlar.resim}`)
                    .setDescription(`• | \`${prefix}kalp\` => **Sunucuya kalp(oy) verirsiniz.**
                    • | \`${prefix}kalp-sıralama\` => **En çok kalp alan sunucuları gösterir.**
                    • | \`${prefix}kalp-rolekle\` => **Verilen kalp sayısına göre rol şartı eklersiniz.**
                    • | \`${prefix}kalp-rolsil\` => **Ayarlanan rol şartını silersiniz.**
                    • | \`${prefix}kalp-roltop\` => **Ayarlanmış olan rütbeleri gösterir.**`)
                    .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
                    .setColor(client.ayarlar.renk)
                    .setTimestamp()
                   menu.reply.send(embed8, true)
                break;*/
               /* case "test4":
                    const embed4 = new MessageEmbed()
                    .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({dynamic: true}))
                    .setTitle(`<:paradise_ayarlar:905510447954939935> **Müzik**`)
                    .setURL(`${client.ayarlar.destek}`)
                    .setThumbnail(`${client.ayarlar.resim}`)
                    .setDescription(`• | \`${prefix}play\` => **Sıraya şarkı eklersiniz/oynatırsınız.**\n• | \`${prefix}stop\` => **Çalan şarkıyı bitirir.**\n• | \`${prefix}skip\` => **Çalan şarkıyı atlar.**\n• | \`${prefix}pause\` => **Çalan şarkıyı duraklatır.**\n• | \`${prefix}resume\` => **Şarkıyı devam ettirir.**\n• | \`${prefix}remove\` => **Şarkıyı çalma listesinden siler.**\n• | \`${prefix}lyrics\` => **Çalan şarkının sözlerini atar.**\n• | \`${prefix}np\` => **Çalan şarkının süresini gösterir.**`)
                    .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
                    .setColor(client.ayarlar.renk)
                    .setTimestamp()
                   menu.reply.send(embed4, true)
                break;*/
             /*   case "test5":
                    const embed5 = new MessageEmbed()
                    .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({dynamic: true}))
                    .setTitle(`<:wsistem:911949969156628480> **Kayıt**`)
                    .setURL(`${client.ayarlar.destek}`)
                    .setThumbnail(`${client.ayarlar.resim}`)
                    .setDescription(`• | \`${prefix}kayıtalınacak\` => **Kayıt Alınacak Rolünü Ayarlarsınız.**
                    • | \`${prefix}kayıterkekverilecek\` => **Kayıt Erkek Verilecek Rolünü Ayarlarsınız.**
                    • | \`${prefix}kayıtkızverilecek\` => **Kayıt Kız Verilecek Rolünü Ayarlarsınız.**
                    • | \`${prefix}kayıtkanal\` => **Kayıt Kanalını Ayarlarsınız.**
                    • | \`[${prefix}kayıtlog\` => **Kayıt Log Kanalını Ayarlarsınız.**
                    • | \`${prefix}kayıttag\` => **Kayıt Tagını Ayarlarsınız.**
                    • | \`${prefix}kayıtyetkili\` => **Kayıt Yetkili Rolünü Ayarlarsınız.**
                    • | \`${prefix}sestekile\` => **Seste Bulunan Yetkilileri Gösterir.**
                    • | \`${prefix}administatistik\` => **Admin Bilgilerinizi Gösterir.**
                    • | \`${prefix}erkek\` => **Belirtilen Kişiyi Erkek Olarak Kayıt Eder.**
                    • | \`${prefix}kız\` => **Belirtilen Kişiyi Kız Olarak Kayıt Eder.**`)
                    .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
                    .setColor(client.ayarlar.renk)
                    .setTimestamp()
                   menu.reply.send(embed5, true)
                break;*/
                case "test6":
                    const embed6 = new MessageEmbed()
                    .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({dynamic: true}))
                    .setTitle(`<:wekonomi:912004594660413470> **Ekonomi**`)
                    .setURL(`${client.ayarlar.destek}`)
                    .setThumbnail(`${client.ayarlar.resim}`)
                    .setDescription(`• | \`${prefix}banka\` => **Banka Bilgilerinizi Gösterir.**
                    • | \`${prefix}kredikartı\` => **Kredi Kartı Bilgilerinizi Gösterir.**
                    • | \`${prefix}market\` => **Marketi Gösterir.**
                    • | \`${prefix}çalış\` => **Çalışırsınız.**
                    • | \`${prefix}günlük\` => **Günlük ödülünüzü alırsınız.**
                    • | \`${prefix}düello\` => **Düello yaparsınız.**
                    • | \`${prefix}kredisıralama\` => **Kredi Sıralamasını Görürsünüz.**
                    • | \`${prefix}pakethediye\` => **Belirtilen Kişiye Özel Üyelik Paket Hediye Edersiniz.**
                    • | \`${prefix}kredi\` => **Gold Kredi Bilgilerinize Bakar/Gold KRedisi Transfer Edersiniz.**`)
                    .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
                    .setColor(client.ayarlar.renk)
                    .setTimestamp()
                   menu.reply.send(embed6, true)
                break;
                case "test7":
                    const embed7 = new MessageEmbed()
                    .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({dynamic: true}))
                    .setTitle(`<:wsunucu:912005690216812634> **Sunucu**`)
                    .setURL(`${client.ayarlar.destek}`)
                    .setThumbnail(`${client.ayarlar.resim}`)
                    .setDescription(`• | \`${prefix}sunucukur normal\` => **Normal Sunucu Kurarsınız.**
                    • | \`${prefix}sunucukur destek\` => **Destek Sunucu Kurarsınız.**
                    • | \`${prefix}sunucukur kod\` => **Kod Sunucu Kurarsınız.**
                    • | \`${prefix}sunucukur tasarım\` => **Tasarım Sunucusu Kurarsınız.**
                    • | \`${prefix}sunucukur hosting\` => **Hosting Sunucusu Kurarsınız.**
                    • | \`${prefix}sunucukur gif\` => **Gif Sunucusu Kurarsınız**
                    • | \`${prefix}sunucukur botlist\` => **Bot List Sunucu Kurarsınız. (Yakında)**
                    • | \`${prefix}sunucukur youtuber\` => **YouTuber Sunucu Kurarsınız.**
                    • | \`${prefix}sunucukur public\` => **Public Sunucu Kurarsınız.**`)
                    .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
                    .setColor(client.ayarlar.renk)
                    .setTimestamp()
                   menu.reply.send(embed7, true)
                break;
                  /* case "test9":
                    const embed9 = new MessageEmbed()
                    .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({dynamic: true}))
                    .setTitle(`<:wtepki:916419760344928298> **Buton Rol**`)
                    .setURL(`${client.ayarlar.destek}`)
                    .setThumbnail(`${client.ayarlar.resim}`)
                    .setDescription(`__NOT:__ **Daha detaylı bilgi için** \`${prefix}buttonrol\` **yazıp detaylı öğrenebilirsiniz.**
                    • | \`${prefix}buton oluştur \` => **Buton oluşturursunuz.**
                    • | \`${prefix}buton mesaj değiştir\` => **Buton msaj değiştirirsiniz..**
                    • | \`${prefix}buton sıfırla \` => **Ayarlanan butonu sıfırlarsınız.**
                    • | \`${prefix}buton liste\` => **Buton listelerini gösterir.**
                    • | \`${prefix}rol button ekle\` => **Butona verilecek rol ekler.**
                    • | \`${prefix}rol button kaldır\` => **Butondan ayarlanmış olan rolü kaldırır.**
                    • | \`${prefix}rol\` => **Ayarlanmış olan buton rolleri gösterir..**`)
                    .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
                    .setColor(client.ayarlar.renk)
                    .setTimestamp()
                   menu.reply.send(embed9, true)
                break;*/
               
            }
        }
        client.on("clickMenu", menu => {
            if(menu.message.id == menumesaj.id) {
                if(menu.clicker.id == message.author.id) {
                    menuselection(menu)
                }else{
                    menu.reply.send("Menü sahibi sen değilsin!", true)
                }
            }
        })
}

exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ["help"],
  permlevel: 0
}
exports.help = {
  name: 'yardım'
}