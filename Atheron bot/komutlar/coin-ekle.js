const { MessageButton, MessageEmbed, MessageActionRow } = require("discord.js");
const db = require("quick.db");


module.exports = {
name: "coin-ekle",
async execute(client, message, args) {
const coin = db.fetch(`coin_${message.author.id}`)
  
if (message.author.id !== "153930618005094400")
return message.channel.send(`:x: Sen benim kurucum değilsin!`);
let member = message.mentions.users.first() || message.author;
if (!member)
return message.channel.send(`<:xd:1026074613853212702> **| ${message.author.username}**, Lütfen bir kullancı belirt!`);
let miktar = args[1];
if (!miktar)
return message.channel.send(`<:xd:1026074613853212702> **| ${message.author.username}**, Lütfen bir miktar belirt!`);
message.channel.send(`<a:coin:1037388669511811152> **| ${miktar || 0}** coin <a:coin:1037388669511811152>  göderildi. Coin gönderilen kişi: **${member.tag}**!`);
db.add(`coin_${member.id}`, miktar);
}
}