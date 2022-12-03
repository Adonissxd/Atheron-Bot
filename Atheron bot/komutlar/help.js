const { MessageEmbed, Discord } = require("discord.js") 

module.exports = {
name: "help",
async execute(client, message, args) {

const embed = new MessageEmbed()
.setColor("#303136")
.setAuthor(`${message.author.tag} `)
.addFields([
  {
    name: message.locale.help.cmds.configuration.name,
    value: message.locale.help.cmds.configuration.value,
    inline: true
  },
]);
return message.reply( { embeds: [embed] } )


    }
}