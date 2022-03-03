const Discord = require("discord.js");
const Embed3 = new Discord.MessageEmbed()
  .setColor("0x0099ff")
  .setAuthor("S.D.E.", "https://i.ibb.co/HdBBqG1/mob-dark.png")

  .addFields(
    {
      name: "Algorithms [Available In] (algo-code):",
      value:
        "◽Binary Search [Cpp/Java/Python] (001)\n◽Heap Sort [Cpp/Java/Python] (009)\n◽Iterative Insertion Sort [Cpp/Java/Python] (003)\n◽Iterative Merge Sort [Cpp/Java/Python] (006)\n◽Iterative Quick Sort [Cpp/Java/Python] (008)\n◽Linear Search [Cpp/Java/Python] (002)\n◽Recursive Insertion Sort [Cpp/Java/Python] (004)\n◽Recursive Merge Sort [Cpp/Java/Python] (005)\n◽Recursive Quick Sort [Cpp/Java/Python] (007)\n\n",
    },
    {
      name: "Use commands Like this:",
      value:
        "`+algo 004 in Java` - to get program for Recursive Insertion Sort in Java\n`+algo 009 in Cpp` - to get program for Heap Sort in Cpp",
    }
  )
  .setFooter(
    "Made with ❤️ by Bhuvnesh",
    "https://i.ibb.co/HdBBqG1/mob-dark.png"
  );

module.exports = Embed3;
