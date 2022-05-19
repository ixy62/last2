const Discord = require('discord.js');
const client = new Discord.Client()
const express = require('express');
const captain = new Discord.ShardingManager('./bot.js', {
    totalShards: 3,
    token: ('NzQ0NTA2NDk2MjU1MDAwNTk2.XzkNtA.Vy-uibZ73HxH2iD5cYYE6Q_QOtU')
});
// CaptainInvite Shard Bilgi

captain.on('shardCreate', shard => {
  console.log(`${shard.id+1} IDli Başlatıldı ve Kullanıma Hazır.`)
    const webhook = new Discord.WebhookClient("912002346064678922","6rcAzcq_192AIQFAw1TOwGLepv6-dliq6OgurTnS_6S7eaV7w60CI-kxDgPO5zt2A92a")
    webhook.send(`Shard **${shard.id+1}/${shard.id+1} [Bağlanılıyor]** <a:idle:909016234471854080> \nWonders Discord'a Bağlanıyor.\n--------------------------------------------`)
    setTimeout(() => {
  const webhook = new Discord.WebhookClient("912002346064678922","6rcAzcq_192AIQFAw1TOwGLepv6-dliq6OgurTnS_6S7eaV7w60CI-kxDgPO5zt2A92a")
  webhook.send(`Shard **${shard.id+1}/${shard.id+1} [Bağlanıldı]** <a:online:909015532043382804> \nWonders Discord'a Bağlandı ve Hazır.\n--------------------------------------------`)
  }, 3000)
});
// WebHook Oluşturup ID ve token gir
setTimeout(() => {
    captain.broadcastEval("process.exit()");
}, 8600000);
captain.spawn();