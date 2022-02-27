# Contributing Guide

This guide will help you in contributing to S.D.E. Bot.
Contributing to this repo is divided into two parts:

- Contributing to DSA and problems' Codes.
- Contributing to the Bot.

## Contributing to DSA and problems' codes

To contribute to DSA and problems, follow the steps below:

- **Step 1 : Fork the Repo.**
- **Step 2 : Clone your forked repo in your system and run `npm i` in the same folder to install the dependencies.**
- **Step 3 : Create a new branch or switch to developement branch.**
- **Step 4 : If your code is a Data structure's code (else skip this step):**

  - Go to `./Commands/DSlist.js` and write the topic for which you want to add the code in the correct format in **value** section of **addFields** along with a number preceding the previous number in (). For example:

  ```
  .addFields(
  {
    name: "Data Structures(ds-code):",
    value: "`◽Arrays(001)\n``◽CircularLL(002)\n``◽YourDSTopic(003)\n`",
  },
  )
  ```

  - In above examples 001 is ds-code for Arrays, 002 is ds-code for Circular LL.
  - Write your code and save it as a .txt file in `./Codes/Data Structures/` with correct topic name and in Camel Case.

  - Then go to `./Commands/DS.js` ,copy the code below, paste it in the **ds.js** and make the necessary changes.

  ```
  else if (args[1] === 'ds-code' && args[3] === 'Java/Cpp/Python(choose yours)') {
      message.channel.send("<YourTopic> in <language>", { files: ["./Codes/Data Structures/YourTopic.txt"] });
  }
  ```

  - **Note :**
    **1. Topic name should be same in `files section of DS.js` and `Codes/Data Structures/`**
    **2. ds-code be same in `DSlist.js` and `args[1] of DS.js.`**
    **3. If you get confused in any step refer to the existing code.**
    <br>

- **Step 5: If your code is an Algorithms' code (else skip this step) :**

  - Go to `./Commands/AlgoList.js` and write the topic for which you want to add the code in the correct format in **value** section of **addFields** along with a number preceding the previous number in (). For example:

  ```
  .addFields(
  {
    name: "Algorithms(algo-code):",
    value: "`◽BinarySearch(001)\n``◽LinearSearch(002)\n``◽YourAlgoTopic(003)\n`",
  },
  )
  ```

  - In above examples 001 is algo-code for BinarySearch, 002 is algo-code for LinearSearch.
  - Write your code and save it as a .txt file in `./Codes/Algorithms/` with correct topic name and in Camel Case.

  - Then go to `./Commands/Algo.js` ,copy the code below, paste it in the **Algo.js** and make the necessary changes.

  ```
  else if (args[1] === 'algo-code' && args[3] === 'Java/Cpp/Python(choose yours)') {
      message.channel.send("<Your Topic> in <language>", { files: ["./Codes/Algorithms/YourTopic.txt"] });
  }
  ```

  - **Note :**
    **1. Topic name should be same in `files section of Algo.js` and `Codes/Algorithms/`**
    **2. ds-code be same in `AlgoList.js` and `args[1] of Algo.js.`**
    **3. If you get confused in any step refer to the existing code.**
    <br>

- **Step 6: If your code is a Coding Problem's code (else skip this step) :**

  - Go to `./Commands/problemList.js` and write the topic for which you want to add the code in the correct format in **value** section of **addFields** along with a number preceding the previous number in (). For example:

  ```
  .addFields(
  {
    name: "Problems (p-code):",
    value: "`◽Search In Matrix(001)\n``◽Spiral Print(002)\n``◽YourProblemName(003)\n`",
  },
  )
  ```

  - In above examples 001 is p-code for Search In Matrix, 002 is p-code for Spiral Print.
  - Write your code and save it as a .txt file in `./Codes/Problems/` with correct topic name and in Camel Case.

  - Then go to `./Commands/problems.js` ,copy the code below ,paste it in the **problems.js** and make the necessary changes.

  ```
  else if (args[1] === 'p-code' && args[3] === 'Java/Cpp/Python(choose yours)') {
      message.channel.send("<Your Topic> in <language>", { files: ["./Codes/Problems/YourTopic.txt"] });
  }
  ```

  - **Note :**
    **1. Topic name should be same in `files section of problems.js` and `Codes/Problems/`**
    **2. p-code be same in `problemList.js` and `args[1] of problems.js.`**
    **3. If you get confused in any step refer to the existing code.**
    <br>

- **Step 7 : If your topic is already present in [CodeList](https://github.com/Bhuvnesh875/DSA-Bot/tree/main/Codes/Codelist.md) then replace `:white_large_square:` with `:white_check_mark:` for the specified code and language.
  else : Make a new row in the suitable table and add the required emojis.**
- **Step 8 : Push it to your forked repo**
- **Step 9 : Create a Pull request with the new branch giving details of your changes.**

**Not able to think of a topic? No problem! Check the [CodeList](https://github.com/Bhuvnesh875/DSA-Bot/tree/main/Codes/Codelist.md) and select one.**:rocket:

## Contributing to Bot

To contribute to the main features of the bot:

- **Step 1 : Raise an issue**
- **Step 2 : Wait for approval and getting it assigned**
- **Step 3 : Fork the Repo.**
- **Step 4 : Clone your forked repo in your system.**
- **Step 5 : Create a new branch.**
- **Step 6 : Do your changes.**
- **Step 7 : Push it to your forked repo.**
- **Step 8 : Create a Pull request with the new branch giving details of your changes.**

#### Still confused about something? Open an issue and get your doubts cleared.

## Happy contributing:tada:
