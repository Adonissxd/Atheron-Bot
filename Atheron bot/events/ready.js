module.exports = {
    name: "ready",
    async execute(client) {
        var name = client.user.tag;
        console.log(`[HAZIR]: ${name} adıyla açıldım!`);
        client.user.setPresence({
            activities: [
                {
                    name: `!kurulum | !yardım`,
                    type: "STREAMING",
                    url: "https://www.twitch.tv/Adonis"
                }
            ],
            status: "idle"
        });
    }
}