const { Discord, MessageEmbed, MessageAttachment, ClientUser } = require("discord.js");
const Canvas = require("canvas")
const { registerFont } = require("canvas");
registerFont('./MarlinGeo-Black.otf', { family: 'Marlin Geo Black' })

module.exports = {
    name: "ship",
    async execute(client, message, args) {
const applyText = (canvas, text) => {
      const ctx = canvas.getContext('2d');
  
      let fontSize = 70;
  
      do {
          ctx.font = `${fontSize -= 10}px sans-serif`;
      } while (ctx.measureText(text).width > canvas.width - 300);
  
      return ctx.font;
  };
      const canvas = Canvas.createCanvas(380, 150);
      const ctx = canvas.getContext('2d');
  
      const background = await Canvas.loadImage("https://media.discordapp.net/attachments/1013757986214268969/1037447857017471026/unknown.png");
      ctx.drawImage(background, 0, 0, canvas.width, canvas.height);


      const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.filter(m => m.user.bot === false ).random();

      ctx.strokeStyle = '#303136';
      ctx.strokeRect(0, 0, canvas.width, canvas.height);

    const avatar = await Canvas.loadImage(message.author.displayAvatarURL({ format: 'png' }));
    ctx.drawImage(avatar, 26, 25, 100, 100);

    const avatar2 = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'png' }));
    ctx.drawImage(avatar2, 256, 25, 100, 100);

    let member1 = message.guild.members.cache.get(member.id)
    let member2 = message.guild.members.cache.get(message.author.id)
    let nickname = member1.displayName == member.username ? "" + member.username + "" : member1.displayName
    let nickname2 = member2.displayName == message.author.username ? "" + message.author.username + "" : member2.displayName

    const çok = await Canvas.loadImage('https://cdn.discordapp.com/attachments/938786568175513660/970478360402743306/cok.png');
    const orta = await Canvas.loadImage('https://cdn.discordapp.com/attachments/938786568175513660/970478360931213312/orta.png');
    const az = await Canvas.loadImage('https://media.discordapp.net/attachments/938786568175513660/970478359731658812/az.png');
    const random = Math.floor(Math.random()*99)+1;


let shipdurum;
if(random < 10) shipdurum = "💔💔💔💔💔💔💔💔💔💔";
if(random >= 10 && random < 20) shipdurum = "💖💔💔💔💔💔💔💔💔💔";
if(random >= 20 && random < 30) shipdurum = "💖💖💔💔💔💔💔💔💔💔";
if(random >= 30 && random < 40) shipdurum = "💖💖💖💔💔💔💔💔💔💔";
if(random >= 40 && random < 50) shipdurum = "💖💖💖💖💔💔💔💔💔💔";
if(random >= 50 && random < 60) shipdurum = "💖💖💖💖💖💔💔💔💔💔";
if(random >= 60 && random < 70) shipdurum = "💖💖💖💖💖💖💔💔💔💔";
if(random >= 70 && random < 80) shipdurum = "💖💖💖💖💖💖💖💔💔💔";
if(random >= 80 && random < 90) shipdurum = "💖💖💖💖💖💖💖💖💔💔";
if(random >= 90 && random < 98) shipdurum = "💖💖💖💖💖💖💖💖💖💔";
if(random >= 98) shipdurum = "💖💖💖💖💖💖💖💖💖💖";

    if (random >= 60) {
      ctx.drawImage(çok, 163, 45, 60, 60); 
      const attachment = new MessageAttachment(canvas.toBuffer(), 'ozi.png');
      let ozi = new MessageEmbed()
.setAuthor({ name: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true, size: 2048 })})
.setDescription(`
Bu aşk değilde ne be 💞
💓 **${random}%**
${shipdurum}`)
.setImage("attachment://ozi.png")
message.channel.send({ content: `<@${member.user.id}>`, embeds: [ozi], files: [attachment] })
} else if (random <= 40) {
      ctx.drawImage(az, 163, 45, 60, 60);
      const attachment = new MessageAttachment(canvas.toBuffer(), 'ozi.png');
      let ozi = new MessageEmbed()
.setAuthor({ name: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true, size: 2048 })})
.setDescription(`
Hiç mi sevmedin 💔
💓 **${random}%**
${shipdurum}`)
.setImage("attachment://ozi.png")
message.channel.send({ content: `<@${member.user.id}>`, embeds: [ozi], files: [attachment] })
} else {
      ctx.drawImage(orta, 163, 45, 60, 60); 
      const attachment = new MessageAttachment(canvas.toBuffer(), 'ozi.png');
      let ozi = new MessageEmbed()
.setAuthor({ name: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true, size: 2048 })})
.setDescription(`
Olacak olacak 💘
💓 **${random}%**
${shipdurum}`)
.setImage("attachment://ozi.png")
message.channel.send({ content: `<@${member.user.id}>`, embeds: [ozi], files: [attachment] })
    }

}
};