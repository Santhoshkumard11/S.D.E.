require("dotenv").config();
const keepAlive = require("./server");
const Discord = require("discord.js");
const client = new Discord.Client();
const moment = require("moment");

const command = require("./Commands/Command.js");
const help = require("./Commands/help.js");
const invitationmsg = require("./Commands/Invitation.js");
const topics = require("./Commands/DSlist.js");
const problemList = require("./Commands/problemList.js");
const Algolist = require("./Commands/AlgoList.js");
const DSlist = require("./Commands/DSlist.js");
const cc = require("./Commands/cc.js");
const serverinfo = require("./Commands/Serverinfo.js");
const SendDS = require("./Commands/DS.js");
const SendProblem = require("./Commands/problems.js");
const SendAlgo = require("./Commands/Algo.js");
const version = require("./Commands/Version");
const Codeforces = require("./Commands/Codeforces");
const Codechef = require("./Commands/Codechef");
const Leetcode = require("./Commands/Leetcode");

client.on("ready", () => {
  client.setMaxListeners(0);
  console.log(`${client.user.tag} has logged in.`);

  command(client, ["cc", "clearchannel"], (message) => {
    cc(message);
  });

  client.user.setPresence({
    activity: {
      name: `'+' for help`,
      type: 0,
    },
  });

  command(client, "topics", (message) => {
    message.channel.send(topics);
  });

  command(client, "serverInfo", (message) => {
    serverinfo(message);
  });

  command(client, "serverCount", (message) => {
    let serverlist = 0;
    client.guilds.cache.forEach((guild) => {
      serverlist += 1;
    });
    message.channel.send(
      "I am currently helping in " + serverlist + " servers!!😗 "
    );
  });

  command(client, "invite", (message) => {
    message.channel.send("Check your dm🤭");
    invitationmsg(message);
  });

  command(client, "version", (message) => {
    version(message);
  });

  command(client, "ds", (message) => {
    SendDS(message);
  });

  command(client, "problem", (message) => {
    SendProblem(message);
  });

  command(client, "algo", (message) => {
    SendAlgo(message);
  });

  command(client, "problemsList", (message) => {
    message.channel.send(problemList);
  });

  command(client, "Algolist", (message) => {
    message.channel.send(Algolist);
  });

  command(client, "DSlist", (message) => {
    message.channel.send(DSlist);
  });

  command(client, "", (message) => {
    message.channel.send(help);
  });

  command(client, "codeforces", (message) => {
    Codeforces(message);
  });

  command(client, "codechef", (message) => {
    Codechef(message);
  });

  command(client, "leetcode", (message) => {
    Leetcode(message);
  });

  command(client, "uptime", (message) => {
    let totalSeconds = client.uptime / 1000;
    let days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);

    let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds `;
    message.channel.send(`I haven't slept for ${uptime}🥺`);
  });
});

keepAlive();
client.login(process.env.DISCORD_BOT_TOKEN);
