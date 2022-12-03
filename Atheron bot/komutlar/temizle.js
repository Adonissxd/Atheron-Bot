module.exports = {
    name: "temizle",
    async execute(client, message, args) {
        if (!message.member.permissions.has('MANAGE_MESSAGES')) return;
        if (!args[0]) return message.channel.send({ content:`<:iptal:1025913448586027078>  Bir miktar belirtmelisin!`}).then((e) => setTimeout(() => { e.delete(); }, 5000));
        if (isNaN(args[0])) return message.channel.send({ content:`<:iptal:1025913448586027078>  Belirttiğin miktar bir sayı olmalı!`}).then((e) => setTimeout(() => { e.delete(); }, 5000));
        await message.delete();
        await message.channel.bulkDelete(args[0]);
        message.channel.send({ content:`<:onay:1025913485789511780>  ${args[0]} adet mesaj silindi!`}).then((e) => setTimeout(() => { e.delete(); }, 5000));
      },
    };
    
    
  
  