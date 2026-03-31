const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');

// servidor pra não dormir
const app = express();
app.get('/', (req, res) => res.send('Kyra está online 😈'));
app.listen(3000);

// bot
const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once('ready', () => {
  console.log(`Online como ${client.user.tag}`);
});

client.login(process.env.TOKEN);