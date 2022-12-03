module.exports = {
        name: "yaz",
        owner: true,
        async execute(client, message, args) {
    if(!args[0]) return message.react(red)
    message.delete();
    message.channel.send({ content: args.join(' ')});
  },
};

  