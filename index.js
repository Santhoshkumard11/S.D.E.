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
  let previouscount = 0;
  function newserver() {
    let totalcount = 0;
    client.guilds.cache.forEach((guild) => {
      totalcount += 1;
    });
    if (totalcount > previouscount) {
      client.channels.cache
        .get("947840239802658848")
        .send(
          "I was just added to a new server!😍 Now Im in total " +
            totalcount +
            " servers!!😗 "
        );
      // console.log(totalcount);
      previouscount = totalcount;
    } else if (totalcount < previouscount) {
      client.channels.cache
        .get("947840239802658848")
        .send(
          "I was just kicked out from a server. 🥲  Now I'm in total " +
            totalcount +
            " servers.😔"
        );
      // console.log(totalcount);
      previouscount = totalcount;
    }
  }

  setInterval(() => {
    newserver();
  }, 1000);

  console.log(`${client.user.tag} has logged in.`);

  command(client, ["cc", "purge"], (message) => {
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

  command(client, "serverinfo", (message) => {
    serverinfo(message);
  });

  command(client, "servercount", (message) => {
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

  command(client, "listproblems", (message) => {
    message.channel.send(problemList);
  });

  command(client, "listalgo", (message) => {
    message.channel.send(Algolist);
  });

  command(client, "listds", (message) => {
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

client.on("guildCreate", (guild) => {
  guild.systemChannel.send(
    `Hello, Let me Introduce myself first.🙆🏻\n I am a bot who was a CSE student, graduated in 2015 from Discord university located in our "Bot - world" and working full time at Discord since then. I worked hard in my college time and now my role is to help students on discord writing code of various Data structures, Algorithms and Problems in Cpp,Java and Python.\n\nTo see list of all the commands I listen to ,say '+' . Till then let me just look around your server.👀\n\nBugs and suggestions are welcomed here :  https://bit.ly/3vpfZOx`,
    { files: ["https://i.ibb.co/P1WgdnS/sde.png"] }
  );
});

keepAlive();
client.login(process.env.DISCORD_BOT_TOKEN);
