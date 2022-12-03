const { MessageButton, MessageEmbed, MessageActionRow } = require("discord.js");
const db = require("quick.db");
const ms = require("ms");
const moment = require("moment");




module.exports = {
name: "menü",
async execute(client, message, args) {


const coin = db.fetch(`coin_${message.author.id}`)
const embed = new MessageEmbed()
.setAuthor('Developer By Adonis')
.setThumbnail(message.guild.iconURL())
.setDescription(`Aşağıda bulunan butonlar ile satın alabiliceğiniz ürünlere göz atabilirsiniz, Günlük coin alabilirsiniz ve bakiyenizi kontrol edebilirsiniz`)
.setColor("#5555dd")
let btn2 = new MessageButton()
.setStyle("SUCCESS")
.setLabel("Bakiye")
.setCustomId("bakıye")
.setEmoji("1015538693068562502")
let btn3 = new MessageButton()
.setStyle("DANGER")
.setLabel("Günlük")
.setCustomId("gunluk")
.setEmoji("954507258128125952")
let btn4 = new MessageButton()
.setStyle("PRIMARY")
.setLabel("Market")
.setCustomId("market")
.setEmoji("937139880545357855")

const row = new MessageActionRow()
.addComponents([btn2, btn3 ,btn4]);

message.reply({components: [row], embeds: [embed] }).then(async (msg) => {
const filter = i => i.user.id !== client.user.id;
const collector = msg.createMessageComponentCollector({ filter });
collector.on('collect', async (i) => {
if (i.user.id !== message.author.id) return i.reply({ content: '<:Kilit:1037410245602983936> Sen bunu yapamazsın çünkü komutu kullanan kişi sadece yapabilir!', ephemeral: true });
if (!i.isButton()) return;
if (i.customId == "bakıye") {
var bakıyeembed = new MessageEmbed()
.setColor("#303136")
.setDescription(`<a:coin:1037388669511811152> Toplamda **${coin || 0 }** Coin'e sahipsin.`)
return i.reply({ embeds: [bakıyeembed], ephemeral: false  });
      } else if (i.customId == "market") {
  var embed = new MessageEmbed()
 .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
  .setColor("#303136")
  .setDescription(`<a:duyuru:1037410511253409863> Selam **${i.user.tag}** Atheron Bot Market Menüsüne Hoşgeldin! \n\n <:xd:1026074613853212702>  **Aktif Ürünler** \n\n <:spotify:1037409642256535712> **Spotify Premium** \n Gerekli Coin: **3000** (!satın al spotify-pre) \n Gerekli Coin: **1000** (!satın-al vip-rol) `)
  .setFooter("Atheron")
  .setTimestamp()
return i.reply({embeds: [embed] })         
} else if (i.customId == "gunluk") {
function rastgeleMiktar(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min)) + min;
}
let times = await db.fetch(`worktime1_${message.author.id}`);
let day = 1000*60*60*24
if (times !== null && day - (Date.now() - times) > 0) {
let time = ms(day - (Date.now() - times));
i.reply({ content: `<:xd:1026074613853212702> Günlük ödülünü zaten almışssın. Lütfen **${time}** saat sonra tekrar dene!`, ephemeral: false });
 } else {
let moneys = rastgeleMiktar(2,5);
i.reply({ content: `Günlük ödülünü topladın \ <a:coin:1037388669511811152> **${moneys}** Coin!`, ephemeral: false }); db.set(`worktime1_${message.author.id}`, Date.now())
db.add(`coin_${message.author.id}`, moneys);
        } } 

})
})
}
}