module.exports = {
    name: 'bot-bilgi',
    description: 'Bot bilgisini atar!', 
    commandOptions: null,
    global: true,
    async execute(client, interaction) {
      const user = interaction.user;
      const msg = `
      <a:emoji_209:1025913063494393886>  **${client.user.username}** istatistik menüsü!
        <:botdeveloper:1025917425008529479>  Developers: **Adonis Ψ#1935**
        <:xd:1026074613853212702>  Sunucu Sayısı: **${client.guilds.cache.size}**
        <:xd:1026074613853212702>  Kullanıcı Sayısı: **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}**
        <:xd:1026074613853212702>  Aktif Kullanıcı: **${client.channels.cache.size}**
      `;
      const embed = new (require('discord.js')).MessageEmbed()
      .setTitle(`<a:emoji_209:1025913063494393886>  **${client.user.username}** istatistik menüsü!`)
      .setDescription(`<:botdeveloper:1025917425008529479>  Developers: **Adonis Ψ#1935**\n<:xd:1026074613853212702>  Sunucu Sayısı: **${client.guilds.cache.size}**\n<:xd:1026074613853212702>  Aktif Kullanıcı Sayısı: **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}**\n<:xd:1026074613853212702>  Aktif Kullanıcı: **${client.channels.cache.size}**`)
      .setColor('#5555dd');
      return interaction.reply({ embeds: [embed] }); // `:ghost: __**Bot İnfo**__ \n\n :star: Developer: **kaan#1337 - melih#1337** \n :star2: Komut Sayısı: **${client.commands.size}** \n :star2: Botun Pingi: **${client.ws.ping}** \n :star2: Toplam Sunucu: **${client.guilds.cache.size}** \n :star2: Toplam Kanal: **${client.channels.cache.size}** `
    },
  };