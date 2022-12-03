const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js")

module.exports = {
name: "url",
async execute(client, message, args) {
    if (!message.member.permissions.has('ADMINISTRATOR')) return message.reply({content: 'Yapamazsın', ephemeral: true});
    const embed = new MessageEmbed()
    .setColor("#303136")
    .setFooter(`${message.guild.name}`)
    .setDescription('Developer By Adonis');
    let btn = new MessageButton()
    .setStyle("LINK")
    .setURL("https://discord.gg/aquaman")
    .setLabel("Destek")
    .setEmoji('1025917425008529479');
    const row = new MessageActionRow() 
    .addComponents([btn]);
    message.channel.send({components: [row], embeds: [embed] });
  }
}