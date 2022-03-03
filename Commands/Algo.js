function sendProblem(message) {
  const [...args] = message.content.split(/\s+/);
  if (args[1] === "001" && args[3] === "Java") {
    message.channel.send("Binary Search in Java", {
      files: ["./Codes/Algorithms/BinarySearchJava.txt"],
    });
  } else if (args[1] === "001" && args[3] === "Cpp") {
    message.channel.send("Binary Search in Cpp", {
      files: ["./Codes/Algorithms/BinarySearchCpp.txt"],
    });
  } else if (args[1] === "001" && args[3] === "Python") {
    message.channel.send("Binary Search in Python", {
      files: ["./Codes/Algorithms/BinarySearchPython.txt"],
    });
  } else if (args[1] === "002" && args[3] === "Java") {
    message.channel.send("Linear Search in Java", {
      files: ["./Codes/Algorithms/LinearSearchJava.txt"],
    });
  } else if (args[1] === "002" && args[3] === "Cpp") {
    message.channel.send("Linear Search in Cpp", {
      files: ["./Codes/Algorithms/LinearSearchCpp.txt"],
    });
  } else if (args[1] === "002" && args[3] === "Python") {
    message.channel.send("Linear Search in Python", {
      files: ["./Codes/Algorithms/LinearSearchPython.txt"],
    });
  } else if (args[1] === "003" && args[3] === "Cpp") {
    message.channel.send("Iterative Insertion sort in Cpp", {
      files: ["./Codes/Algorithms/IterativeInsertionSortCpp.txt"],
    });
  } else if (args[1] === "003" && args[3] === "Java") {
    message.channel.send("Iterative Insertion sort in Java", {
      files: ["./Codes/Algorithms/IterativeInsertionSortJava.txt"],
    });
  } else if (args[1] === "003" && args[3] === "Python") {
    message.channel.send("Iterative Insertion sort in Python", {
      files: ["./Codes/Algorithms/IterativeInsertionSortPython.txt"],
    });
  } else if (args[1] === "004" && args[3] === "Cpp") {
    message.channel.send("Recursive Insertion sort in Cpp", {
      files: ["./Codes/Algorithms/RecursiveInsertionSortCpp.txt"],
    });
  } else if (args[1] === "004" && args[3] === "Java") {
    message.channel.send("Recursive Insertion sort in Java", {
      files: ["./Codes/Algorithms/RecursiveInsertionSortJava.txt"],
    });
  } else if (args[1] === "004" && args[3] === "Python") {
    message.channel.send("Recursive Insertion sort in Python", {
      files: ["./Codes/Algorithms/RecursiveInsertionSortPython.txt"],
    });
  } else if (args[1] === "005" && args[3] === "Cpp") {
    message.channel.send("Recursive Merge sort in Cpp", {
      files: ["./Codes/Algorithms/RecursiveMergeSortCpp.txt"],
    });
  } else if (args[1] === "005" && args[3] === "Python") {
    message.channel.send("Recursive Merge sort in Python", {
      files: ["./Codes/Algorithms/RecursiveMergeSortPython.txt"],
    });
  } else if (args[1] === "005" && args[3] === "Java") {
    message.channel.send("Recursive Merge sort in Java", {
      files: ["./Codes/Algorithms/RecursiveMergeSortJava.txt"],
    });
  } else if (args[1] === "006" && args[3] === "Cpp") {
    message.channel.send("Iterative Merge sort in Cpp", {
      files: ["./Codes/Algorithms/IterativeMergeSortCpp.txt"],
    });
  } else if (args[1] === "006" && args[3] === "Python") {
    message.channel.send("Iterative Merge sort in Python", {
      files: ["./Codes/Algorithms/IterativeMergeSortPython.txt"],
    });
  } else if (args[1] === "006" && args[3] === "Java") {
    message.channel.send("Iterative Merge sort in Java", {
      files: ["./Codes/Algorithms/IterativeMergeSortJava.txt"],
    });
  } else if (args[1] === "007" && args[3] === "Cpp") {
    message.channel.send("Recursive Quick sort in Cpp", {
      files: ["./Codes/Algorithms/RecursiveQuickSortCpp.txt"],
    });
  } else if (args[1] === "007" && args[3] === "Python") {
    message.channel.send("Recursive Quick sort in Python", {
      files: ["./Codes/Algorithms/RecursiveQuickSortPython.txt"],
    });
  } else if (args[1] === "007" && args[3] === "Java") {
    message.channel.send("Recursive Quick sort in Java", {
      files: ["./Codes/Algorithms/RecursiveQuickSortJava.txt"],
    });
  } else if (args[1] === "008" && args[3] === "Cpp") {
    message.channel.send("Iterative Quick sort in Cpp", {
      files: ["./Codes/Algorithms/IterativeQuickSortCpp.txt"],
    });
  } else if (args[1] === "008" && args[3] === "Python") {
    message.channel.send("Iterative Quick sort in Python", {
      files: ["./Codes/Algorithms/IterativeQuickSortPython.txt"],
    });
  } else if (args[1] === "008" && args[3] === "Java") {
    message.channel.send("Iterative Quick sort in Java", {
      files: ["./Codes/Algorithms/IterativeQuickSortJava.txt"],
    });
  } else if (args[1] === "009" && args[3] === "Cpp") {
    message.channel.send("Heap sort in Cpp", {
      files: ["./Codes/Algorithms/HeapSortCpp.txt"],
    });
  } else if (args[1] === "009" && args[3] === "Python") {
    message.channel.send("Heap sort in Python", {
      files: ["./Codes/Algorithms/HeapSortPython.txt"],
    });
  } else if (args[1] === "009" && args[3] === "Java") {
    message.channel.send("Heap sort in Java", {
      files: ["./Codes/Algorithms/HeapSortJava.txt"],
    });
  } else {
    message.reply(
      "It is currently unavailable or you wrote the wrong command!"
    );
  }
}
module.exports = sendProblem;
