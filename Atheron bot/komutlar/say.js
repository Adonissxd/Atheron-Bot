const conf = require("../config.json")

const moment = require("moment");
moment.locale("tr");
const {MessageEmbed} = require("discord.js")

module.exports = {
    name: "say",
    async execute(client, message, args) {
   
    let ses = message.guild.members.cache.filter(s => s.voice.channel).size
    let boost = message.guild.premiumSubscriptionCount;
    let top = message.guild.memberCount;

    let embed = new MessageEmbed().setDescription(`\`>\` Sunucunuzda **${ses}** üye seste.
    \`>\` Sunucunuzda toplam **${top}** üye bulunmaktadır.
    \`>\` Sunucunuzda toplam **${boost}** boost bulunmaktadır.`)

    message.channel.send({embeds: [embed]})
  },
};
