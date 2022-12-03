const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js")

module.exports = {
name: "cinsiyetbutton",
async execute(client, message, args) {
    if (!message.member.permissions.has('ADMINISTRATOR')) return message.reply({content: 'Yapamazsın', ephemeral: true});
    const embed = new MessageEmbed()
    .setColor("#303136")
    .setFooter(`${message.guild.name} `)
    .setThumbnail(message.guild.iconURL())
    .setDescription('<a:xd:1023581920271028275> Sunucumuzun içerisine erişim sağlayabilmek için aşağıda bulunan `Kadın` <@&1034516828912889867> ve `erkek` <@&1034516830351532034> rollerinden birini almanız yeterlidir.');
    let btn = new MessageButton()
    .setStyle("PRIMARY")
    .setLabel("Kadın")
    .setCustomId("roles1")
    .setEmoji('1037040730159448115');
    let btn1 = new MessageButton()
    .setStyle("SUCCESS")
    .setLabel("Erkek")
    .setCustomId("roles2")
    .setEmoji('1037040671342723133');   
    let btn2 = new MessageButton()
    .setStyle("SECONDARY")
    .setLabel("Github Link")
    .setCustomId("roles3")
    .setEmoji('1037040820643184771');

    const row = new MessageActionRow() 
    .addComponents([btn, btn1,btn2]);
    message.channel.send({components: [row], embeds: [embed] });
  }
}