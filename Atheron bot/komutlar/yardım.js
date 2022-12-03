const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js")

module.exports = {
name: "yardım",
async execute(client, message, args) {
    const embed = new MessageEmbed()
    .setColor("#303136")
    .setFooter(`${message.guild.name} `)
    .setThumbnail(message.guild.iconURL())
    .setDescription('<a:ta:994532019520413827> Merhabalar görünüşe göre yardıma ihtiyacın var.\n Aşağıda bulunan butona tıklayarak yardım alabilirsin.');  
    let adonis = new MessageButton()
    .setStyle("PRIMARY")
    .setLabel("Yardım")
    .setCustomId("adonis")
    .setEmoji('1020228444501573642');
    let adonis2 = new MessageButton()
    .setStyle("SECONDARY")
    .setLabel("Github Link")
    .setCustomId("adonis3")
    .setEmoji('1037040820643184771');

    const row = new MessageActionRow() 
    .addComponents([adonis, adonis2]);
    message.channel.send({components: [row], embeds: [embed] });
  }
}
