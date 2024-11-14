// Import the discord.js module
require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('Bot is online!');
});

// When a message is sent in a server
client.on('messageCreate', message => {
    // Check if the message is not from a bot and starts with a prefix like "!"
    if (!message.author.bot && message.content.startsWith('!ping')) {
        message.channel.send('Pong!');
    }
    if (!message.author.bot && message.content.startsWith('!hi')) {
        message.channel.send('Hello!');
    }
    if (!message.author.bot && message.content.startsWith('!bye')) {
        message.channel.send('Good Bye!');
    }
    
});

// Log in to Discord with your bot token
client.login(process.env.DISCORD_TOKEN);