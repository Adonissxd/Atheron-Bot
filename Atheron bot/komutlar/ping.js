module.exports = {
    name: 'ping',
    description: 'Bot pingini atar!', 
    commandOptions: null,
    global: true,
    async execute(client, interaction) {
      const user = interaction.user;
      return interaction.reply(`<a:loading:1037035050484641833>  **${client.ws.ping}** `);
    },
  };