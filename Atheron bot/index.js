const { Client, Collection, Intents } = require('discord.js');
const fs = require('fs');
const db = require("quick.db");
const client = new Client({ 
    intents: [ 
      Intents.FLAGS.GUILDS, 
      Intents.FLAGS.GUILD_MESSAGES,
      Intents.FLAGS.GUILD_MEMBERS
    ] 
});
const { DiscordBanners } = require('discord-banners');
const discordBanners = new DiscordBanners(client);
client.events = new Collection();
client.commands = new Collection();
client.config = require('./config.json');
client.db = require('croxydb');
client.banners = discordBanners;

fs.readdir('./komutlar/', async (err, files) => {
    if (err) throw new Error(err);
    files.forEach(async (dosya) => {
        var cmd = require(`./komutlar/${dosya}`);
        client.commands.set(cmd.name, cmd);
    });
});


fs.readdir('./events/', async (err, files) => {
    if (err) throw new Error(err);
    files.forEach(async (dosya) => {
        var event = require(`./events/${dosya}`);
        client.events.set(event.name, event);
    });
});
  

client.on('messageCreate', async (message) => {
  const prefix = client.db.fetch(`prefix_${message.guild.id}`) || client.config.prefix;
  client.events.get('messageCreate').execute(client, message, prefix)
});
client.on('ready', async () => client.events.get('ready').execute(client));
client.on('guildCreate', async (g) => client.events.get('ready').execute(client, g));
client.login(client.config.token);


client.on('interactionCreate', async (i) => {
    if (!i.isButton()) return;
    if (i.customId == "roles1") {
      const role = "1034516828912889867";
      if (!i.member.roles.cache.has(role)) {
        i.member.roles.add(role);
        return i.reply({ content: 'Kadın Rolü Üzerinize Eklendi. <:onay:1025913485789511780> ', ephemeral: true });
      } else {
        i.member.roles.remove(role);
        return i.reply({ content: 'Kadın Rolü Üzerinizden Alındı. <:onay:1025913485789511780> ', ephemeral: true });
      }
    } else if (i.customId == "roles2") {
      const role = "1034516830351532034"; 
      if (!i.member.roles.cache.has(role)) {
        i.member.roles.add(role);
        return i.reply({ content: 'Erkek Rolü Üzerinize Eklendi. <:onay:1025913485789511780> ', ephemeral: true });
      } else {
        i.member.roles.remove(role);
        return i.reply({ content: 'Erkek Rolü Üzerinizden Alındı. <:onay:1025913485789511780> ', ephemeral: true });
      }
        } else if (i.customId == "roles3") {
        return i.reply({ content: 'https://github.com/Adonissxd ', ephemeral: true });
        
        
        
      
    }
  });
  client.on('interactionCreate', async (i) => {
    if (!i.isButton()) return;
    if (i.customId == "adonis") {
        return i.reply({ content: '\`\`\` 23 Adet Komut Listelendi\n - !kurulum\n - !prefixyenile\n - !avatar\n - !banner\n - !sunucuafiş\n - !sunucugif\n - !userinfo \n - !yardım\n - !bot-bilgi\n - !ping\n - !yaz\n - !dilayarla tr\n - !istatislik\n - !temizle\n - !coin-ekle\n - !coin-sil\n - !menü\n - !satın-al\n - !url\n - !ship\n - !kullanıcı-bilgi\n - !kilitle\n - !restart\`\`\`', ephemeral: true });
      } else if (i.customId == "adonis3") {
        return i.reply({ content: 'https://github.com/Adonissxd ', ephemeral: true });
        
    }
  });


  
  
  client.on("messageCreate", message => {
    const db = require("quick.db");
    let mesajsayi = db.fetch(`mesajsayi_${message.guild.id}_${message.author.id}`);
      if(mesajsayi == "500") {
      db.add(`coin_${message.author.id}`, 50)
      message.channel.send(`:sparkles: **| ${message.author.username}**, Toplamda 500 mesaja ulaştın ve 50 coin topladın! <a:wumpus:935967291777118208>`);
    };
    if(mesajsayi == "1000") {
      db.add(`usermoney.${message.author.id}`, 100)
      message.channel.send(`:sparkles: **| ${message.author.username}**, Toplamda 1000 mesaja ulaştın ve 100 coin topladın! <a:wumpus:935967291777118208>`);
    };
    
  });
