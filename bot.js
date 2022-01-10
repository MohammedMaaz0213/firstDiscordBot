require("dotenv").config();

const discord = require("discord.js");
const client = new discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
  partials: ["MESSAGE"],
});
PREFIX = "!";
messages = "Hello World";

client.on("ready", () => {
  console.log("Bot Maaz is ready to go asdasd");
});
client.on("message", (msg) => {
  if (msg.content === "Hello im maaz") {
    msg.reply("hi maaz, im bot hru");
  }
});
client.on("message", (msg) => {
  if (msg.content === "I love monster") {
    msg.react("😁");
  }

  if (msg.content === `${PREFIX}${messages}`) {
    modUser(msg.member);
  }
});

client.on("messageDelete", (msg) => {
  msg.channel.send("STOP DELETING MESSAGES");
});

function modUser(member) {
  member.roles.add("929992324308684911");
}

client.login(process.env.BOT_TOKEN);
