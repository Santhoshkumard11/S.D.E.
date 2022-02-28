const Discord = require("discord.js");

const Embed1 = new Discord.MessageEmbed()
  .setColor("0x0099ff")
  .setTitle("Never Stop Learning!")
  .setAuthor("S.D.E", "https://i.ibb.co/HdBBqG1/mob-dark.png")
  .setDescription(
    "Sacrificing my sleep and working full time at discord to help people by providing code for various data strutures, algorithms and coding problems!\n`Languages: Cpp, Python & Java\n\n`"
  )
  .addFields(
    {
      name: "DSA",
      value:
        "`+listds` :- Displays list of all available Data structures with their ds-code.\n`+ds <ds-code> in <Language>` :- sends DS program for provided ds-code in specified language.\n`+listalgo`:- Displays list of all available Algorithms with their algo-code.\n`+algo <algo-code> in <Language>`  :- sends Algorithms' program for provided algo-code in specified language.\n`+listproblems` :- Displays list of all available coding problems with their p-code.\n`+problem <p-code> in <Language>` :- sends problems' program for provided p-code in specified language.\n\n**For example:\n**`+ds 001 in Java\n``+algo 001 in Cpp\n``+problem 001 in Python\n\n`",
    },
    {
      name: "Coding contests",
      value:
        "`+codechef` :- Sends details of all ongoing and upcoming coding contests on codechef.\n`+leetcode` :- Sends details of all ongoing and upcoming coding contests on leetcode.\n`+codeforces` :- Sends details of all ongoing and upcoming coding contests on codeforces.`\n\n`",
    },
    {
      name: "General",
      value:
        "`+` :- Displays list of all commands.\n`+invite` :- Gets the bot's invite.\n`+serverinfo` :- Displays all information about your server.\n`+servercount` :- Displays the total number of servers bot is in.\n`+version` :- Displays the current version of the bot.\n`+uptime` :- Displays the time since bot is running.`\n\n`",
    },
    {
      name: "Admin",
      value: "`+cc/+purge` :- Deletes the recent messages",
    }
  )

  .setFooter(
    `Made with ❤️ by Bhuvnesh`,
    "https://i.ibb.co/HdBBqG1/mob-dark.png"
  );

module.exports = Embed1;
