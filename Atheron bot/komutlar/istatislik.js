const timestamp = require('discord-timestamp');
const { MessageButton, MessageActionRow, MessageEmbed } = require("discord.js");
module.exports = {
    name: "istatislik",
    async execute(client, message, args) {

 const embed = new MessageEmbed()
      .setTitle(`<a:dev:1018436243056513104>  **${client.user.tag}** İstatistikleri`)
      .addField('Bot Adı', client.user.username, true)
      .addField('Bot Ping', `${client.ws.ping}`, false)
      .addField('Bot Ram Kullanım', `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, false)
      .addField('Toplam Kullanıcı', `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, false)
     .addField('Toplam Sunucu', `${client.guilds.cache.size}`, false)
      .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
      .setColor('#2F3136');
      return message.reply({ embeds: [embed] });

  }
}

