const { MessageEmbed } = require("discord.js")
const timestamp = require('discord-timestamp');
const fetch = require(`node-fetch`);

module.exports = {
  name: "userinfo",
  async execute(client, message, args) {
    const user = message.mentions.users.first() || message.author;
    const member = await fetch(`https://discord.com/api/v9/users/${user.id}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bot ${client.token}`
      }
    }).then(qwe => qwe.json());
    const rozet = user.flags.toArray().join(", ")
    .replace('DISCORD_EMPLOYEE', '<:Badge_Moderators:1025916319863951430>')
    .replace('PARTNERED_SERVER_OWNER', '<:partner:1025915876614086686>')
    .replace('HYPESQUAD_EVENTS', '<:967137781077934111:1025916588710432868> ')
    .replace('HOUSE_BRAVERY', '<:discord_hypesquad_bravery:1025916622092894229>')
    .replace('HOUSE_BRILLIANCE', '<:discord_hypesquad_briliance:1025916776044830830>')
    .replace('HOUSE_BALANCE', '<:967137781077934111:1025916588710432868> ')
    .replace('BUGHUNTER_LEVEL_1', '<:discord_bug_hunter:1025917031679266836>')
    .replace('BUGHUNTER_LEVEL_2', '<:discord_gold_bug_hunter:1025917071156072540>')
    .replace('EARLY_SUPPORTER', '<:early:1025917255327944774>')
    .replace('EARLY_VERIFIED_DEVELOPER', '<:early:988437271390867466> <:botdeveloper:1025917425008529479>')
    .replace('VERIFIED_DEVELOPER', '<:botdeveloper:1025917425008529479>')
    .replace('VERIFIED_BOT', '<:botdeveloper:1025917425008529479>');
    if ((member).banner) {
      const embed = new MessageEmbed()
      .setColor("#303136")
      .setAuthor(`${user.tag} (${user.id})`,message.author.displayAvatarURL({dynamic: true}))
      .setThumbnail(user.displayAvatarURL({dynamic: true}))
      .addField(message.locale.user_info.get('1').name(), message.locale.user_info.get('1').value(user, timestamp, rozet, `<:nitro:1025918128271663144>  <a:ghostboost:1025918415875096646>`))
      .setTimestamp()
      .setFooter('Developer By Adonis');
      message.channel.send({ embeds: [ embed ] });
    } else if (!(member).banner && (member).banner_color) {
      const embed = new MessageEmbed()
      .setColor("#303136")
      .setAuthor(`${user.tag} (${user.id})`,message.author.displayAvatarURL({dynamic: true}))
      .setThumbnail(user.displayAvatarURL({dynamic: true}))
      .addField(message.locale.user_info.get('1').name(), message.locale.user_info.get('1').value(user, timestamp, rozet, `<:nitro:1025918128271663144>`))
      .setTimestamp()
      .setFooter('Developer By Adonis');
      message.channel.send({ embeds: [ embed ] });
    } else if (!(member).banner && !(member).banner_color) {
      const embed = new MessageEmbed()
      .setColor("#303136")
      .setAuthor(`${user.tag} (${user.id})`,message.author.displayAvatarURL({dynamic: true}))
      .setThumbnail(user.displayAvatarURL({dynamic: true}))
      .addField(message.locale.user_info.get('1').name(), message.locale.user_info.get('1').value(user, timestamp, rozet))
      .setTimestamp()
      .setFooter('Developer By Adonis');
      message.channel.send({ embeds: [ embed ] });
    }
  }
}
