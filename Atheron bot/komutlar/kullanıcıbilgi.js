const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require("discord.js");
const moment = require("moment");
const conf = require("../config.json");
const Ayarlar = require("../config.json");
const axios = require('axios');
const fetch = require('node-fetch')
const client = global.bot;
require("moment-duration-format")
moment.locale("tr")
module.exports = {
    name: "kullanıcı-bilgi",
    async execute(client, message, args) {

  const row = new MessageActionRow()
  .addComponents(
      new MessageSelectMenu()
          .setCustomId('banner')
          .setPlaceholder('Kullanıcının Banner/Avatar görüntülemek için tıkla!')
          .addOptions([
              {
                  label: 'Banner',
                  description: 'Kullanıcının bannerını görüntülemek için tıklayınız.',
                  value: 'banner',
              },
              {
                  label: 'Avatar',
                  description: 'Kullanıcının avatarını görüntülemek için tıklayınız.',
                  value: 'avatar',
              },
          ]),
  );

  let üye = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
  if (üye.user.bot) return;
  
           const roles = üye.roles.cache.filter(role => role.id !== message.guild.id).sort((a, b) => b.position - a.position).map(role => `<@&${role.id}>`);
            const rolleri = []
            if (roles.length > 6) {
                const lent = roles.length - 6
                let itemler = roles.slice(0, 6)
                itemler.map(x => rolleri.push(x))
                rolleri.push(`${lent} daha...`)
            } else {
                roles.map(x => rolleri.push(x))
            }
            const members = [...message.guild.members.cache.filter(x => !x.user.bot).values()].sort((a, b) => a.joinedTimestamp - b.joinedTimestamp);
            const joinPos = members.map((u) => u.id).indexOf(üye.id);
            const previous = members[joinPos - 1] ? members[joinPos - 1].user : null;
            const next = members[joinPos + 1] ? members[joinPos + 1].user : null;
            const bilgi = `${previous ? `**${previous.tag}** > ` : ""}<@${üye.id}>${next ? ` > **${next.tag}**` : ""}`
            let member = message.guild.members.cache.get(üye.id)
            let nickname = member.displayName == üye.username ? "" + üye.username + " [Yok] " : member.displayName

  let embed = new MessageEmbed().setAuthor({ name: üye.displayName, iconURL: üye.user.avatarURL({ dynamic: true })}).setTimestamp().setColor(üye.displayHexColor).setFooter({ text: message.author.tag, iconURL: message.author.avatarURL({ dynamic: true })}).setThumbnail(üye.user.avatarURL({ dynamic: true }))
    .addField(`❯ Kullanıcı Bilgisi`,`
\`•\` Hesap: ${üye}
\`•\` Kullanıcı ID: ${üye.id}
\`•\` Kuruluş Tarihi: <t:${Math.floor(member.user.createdTimestamp / 1000)}:R>
`)
    .addField(`❯ Sunucu Bilgisi`,`
\`•\` Sunucu İsmi: ${nickname}
\`•\` Katılım Tarihi: <t:${Math.floor(üye.joinedAt / 1000)}:R>
\`•\` Katılım Sırası: ${(message.guild.members.cache.filter(a => a.joinedTimestamp <= üye.joinedTimestamp).size).toLocaleString()}/${(message.guild.memberCount).toLocaleString()}
\`•\` Katılım Bilgisi: ${bilgi}

\`•\` Bazı Rolleri: (${rolleri.length}): ${rolleri.join(", ")}

`);
 

  let msg = await message.channel.send({ embeds: [embed], components: [row] })
  var filter = (menu) => menu.user.id === message.author.id;
  const collector = msg.createMessageComponentCollector({ filter, time: 30000 })
 
  collector.on("collect", async (menu) => {
     if(menu.values[0] === "avatar") {
        menu.reply({ content:`${üye.displayAvatarURL({ dynamic: true, size: 4096 })}`, ephemeral: true })
    } 
    else if(menu.values[0] === "banner") {
      async function bannerXd(user, client) {
        const response = await axios.get(`https://discord.com/api/v9/users/${user}`, { headers: { 'Authorization': `Bot ${client.token}` } });
        if(!response.data.banner) return `https://media.discordapp.net/attachments/938786568175513660/972982817359274024/Banner_bulunmamakta.png`
        if(response.data.banner.startsWith('a_')) return `https://cdn.discordapp.com/banners/${response.data.id}/${response.data.banner}.gif?size=512`
        else return(`https://cdn.discordapp.com/banners/${response.data.id}/${response.data.banner}.png?size=512`)
      }
          let banner = await bannerXd(üye.id, client)
          menu.reply({ content: `${banner}`, ephemeral: true })
    
        }
    })


}
}

