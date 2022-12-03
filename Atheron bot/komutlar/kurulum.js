module.exports = {
    name: 'kurulum',
    description: 'Kurulum Bilgi', 
    commandOptions: null,
    global: true,
    async execute(client, interaction) {
      const user = interaction.user;
      return interaction.reply(`https://cdn.discordapp.com/attachments/1015191046436687963/1038376960046419979/atheron_bot.gif`);
    },
  };