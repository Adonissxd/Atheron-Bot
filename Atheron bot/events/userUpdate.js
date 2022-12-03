const Discord = require("discord.js");
const settings = require("../config.json");
const token = require("../config.json");
const axios = require("axios");


module.exports = async (oldUser, newUser) => {
  /*
  if (oldUser.avatarURL() === newUser.avatarURL()) return;
  if (newUser.avatarURL() === null) return;
  if (newUser.bot) return;
  */
  let newAvatar = await newUser.avatarURL({ dynamic: true, format: "png", size: 4096 }).split("?")[0];
  let embed = new Discord.MessageEmbed().setColor("#303136");
  let png = client.channels.cache.find((ch) => ch.id === settings.pp); /// PP Kanal İd
  let gif = client.channels.cache.find((ch) => ch.id === settings.gif); /// Gif Kanal İd


  if (newAvatar.endsWith(".png") || newAvatar.endsWith(".jpg") || newAvatar.endsWith(".webp")) {
    png.send({
      embeds: [
        embed
          .setImage(`${newUser.avatarURL({ dynamic: true, format: "png", size: 4096 })}`)
          .setFooter({ text: `© Atheron` })
          .setDescription(`[**Resimi Görüntülemek İçin Tıkla**](${newUser.avatarURL({ dynamic: true, format: "png", size: 4096 })})`),
      ],
    });
  } else if (newAvatar.endsWith(".gif")) {
    gif.send({
      embeds: [
        embed
          .setImage(`${newUser.avatarURL({ dynamic: true, format: "png", size: 4096 })}`)
          .setFooter({ text: `© Atheron` })
          .setDescription(`[**Gifi Görüntülemek İçin Tıkla**](${newUser.avatarURL({ dynamic: true, format: "gif", size: 1024 })})`),
      ],
    });
  }
};

module.exports.configuration = {
  name: "userUpdate",
};
