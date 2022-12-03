const { MessageEmbed, Discord } = require("discord.js") 

module.exports = {
name: "sunucugif",
async execute(client, message, args) {
const embed = new MessageEmbed()
.setColor("#303136")
.setAuthor(`${message.guild.name} `,message.guild.iconURL({dynamic: true }))
.setImage(message.guild.iconURL({dynamic: true, size: 2048}))


return message.reply( { embeds: [embed] } )

}
}