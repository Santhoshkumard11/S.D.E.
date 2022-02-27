const Discord = require("discord.js");
const Embed2 = new Discord.MessageEmbed()
  .setImage("https://i.ibb.co/1RJ8fc1/mob-dark2.png")
  .setColor("0x0099ff")
  .setTitle("From : S.D.E.")
  .addFields(
    {
      name: "Heyy!! Let me Introduce myself first.🙆🏻 ",
      value:
        "Hope you are doing good! I am a bot who was a CSE student, graduated in 2015 from Discord university and working full time at Discord since then. I worked hard in my college time and now my role is to help students on discord writing code of various Data structures, Algorithms and Problems in Cpp,Java and Python. Yes, i can code proficiently in 3 languages!",
    },
    {
      name: "Now To invite me to your server:",
      value:
        "[Click here!](https://discordapp.com/oauth2/authorize?client_id=871086013152391168&scope=bot&permissions=8)\n",
    },
    {
      name: "Please help me revise code for some topics as my memory is not that strong.😟 This time I will write it somewhere so that i don't forget it. Thanks in advance.🍭",
      value:
        "Click[ here](https://github.com/Bhuvnesh875/DSA-Bot/blob/main/Contributing.md) and open a PR!\n",
    },
    {
      name: "Wanna watch me grow old?",
      value:
        "Join the developement server [here](https://discord.gg/bgz7vFcTyn)!\n",
    }
  )
  .setFooter(
    "Made with ❤️ by Bhuvnesh",
    "https://i.ibb.co/HdBBqG1/mob-dark.png"
  );

module.exports = Embed2;
