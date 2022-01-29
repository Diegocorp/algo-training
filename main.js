//ANCHOR: longest word

/* const { resolveConfig } = require("vite");

const strLongestWord = "longest word!!";

const longestWord = (sen) => {
  const cleanWord = sen.replace(/[^a-zA-Z0-9 ]/g, "").split(" ");
  const res = cleanWord.reduce((acc, el) => {
    if (acc.length === el.length) {
      return acc;
    } else if (acc.length > el.length) {
      return acc;
    } else {
      return el;
    }
  });
  return res;
};

console.log(longestWord(strLongestWord)); */

//ANCHOR: First Factorial

/* const firstFactorial = (num) => {
  let res = 1;

  for (let i = 1; i <= num; i++) {
    res = res * i;
  }

  return res;
};

console.log(firstFactorial(4)); */

//ANCHOR: First Reverse

/* const strFirstReverse = "I Love Code";

const firstReverse = (str) => {
  return str.split("").reverse().join("");
};

console.log(firstReverse(strFirstReverse)); */

//ANCHOR: Scrabble Score
/* 
const strScrabbleScore = "cabbage";

const scrabbleScore = (str) => {
  const values = {
    a: 1,
    b: 3,
    c: 3,
    d: 2,
    e: 1,
    f: 4,
    g: 2,
    h: 4,
    i: 1,
    j: 8,
    k: 5,
    l: 1,
    m: 3,
    n: 1,
    o: 1,
    p: 3,
    q: 10,
    r: 1,
    s: 1,
    t: 1,
    u: 1,
    v: 4,
    w: 4,
    x: 8,
    y: 4,
    z: 10,
  };

  let res = 0;
  const wordArr = str.toLowerCase().split("");

  wordArr.forEach((element) => {
    res = res + values[element];
  });

  return res;
};

console.log(scrabbleScore(strScrabbleScore)); */

//ANCHOR: Word Count (with rules)

/* const strWordCount = ",\n,one,\n ,two \n 'three'";

const wordCount = (str) => {
  const phrase = str
    .toLowerCase()
    .replace(/[.\/#!$%@\^&\*;:{}=\-_`~()\n]/g, "")
    .replace(/\b(')\b|['"`]/g, "$1")
    .split(/[" ",]/g)
    .filter((el) => {
      if (el !== " ") {
        return el;
      }
    });

  console.log(phrase);

  const res = phrase.reduce((acc, el) => {
    if (acc[el]) {
      acc[el]++;
    } else {
      acc[el] = 1;
    }
    return acc;
  }, {});

  return res;
};

console.log(wordCount(strWordCount)); */

//ANCHOR: Perfect Numbers

/* const perfectNumbers = (num) => {
  if (num === 0 || num < 0 || num === 1) {
    throw new Error("Invalid Data");
  }

  let divisors = [];

  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      divisors.push(i);
    }
  }

  const aliquotSum = divisors.reduce((acc, el) => acc + el);

  if (aliquotSum === num) {
    return "perfect";
  } else if (aliquotSum > num) {
    return "abundant";
  } else {
    return "deficient";
  }
};

console.log(perfectNumbers(6)); */

//ANCHOR: Flatten Array

/* const arrFlattenArray = [0, 2, [[2, 3], 8, 100, 4, [[[50]]]], -2];

const flattenArray = (arr) => {
  while (arr.filter(Array.isArray).length > 0) {
    arr = arr.reduce((acc, el) => {
      return acc.concat(el);
    }, []);
  }

  const res = arr.reduce((acc, el) => {
    if (el !== null && el !== undefined) {
      acc.push(el);
    }
    return acc;
  }, []);

  return res;
};

console.log(flattenArray(arrFlattenArray)); */

//ANCHOR: Rotational Cipher (NOT COMPLETED)

/* const rotationCipher = (str, num) => {
  const strSplit = str.split("");

  const res = strSplit.reduce((acc, el) => {
    if (el.match(/[a-zA-Z]/i)) {
      let charCode = 0;
      if (el >= "n" || el >= "N") {
        charCode;
      } else {
        charCode = el.charCodeAt() + num;
      }
      el = String.fromCharCode(charCode);
      acc.push(el);
    } else {
      acc.push(el);
    }
    return acc;
  }, []);

  return res.join("");
};

console.log(rotationCipher("a", 26)); */

//ANCHOR: Multiply 2 numbers

/* const multiply = (num1, num2) => {
  let res = 0;

  for (let i = 0; i < Math.abs(num2); i++) {
    res = Math.abs(num1) + res;
  }

  if (num1 < 0 && num2 < 0) {
    return Math.abs(res);
  } else if (num1 < 0 || num2 < 0) {
    return "-" + res;
  } else {
    return res;
  }
};

console.log(multiply(-5, -5)); */

//ANCHOR: Get biggest number of the array
/* 
const arrGetBiggest = [1, 3, 6, 322332, 45, 345, 6522, 23, 55];

const getBiggest = (arr) => {
  return arr.reduce((acc, el) => {
    if (acc > el) {
      return acc;
    } else {
      return el;
    }
    return acc;
  });
};

console.log(getBiggest(arrGetBiggest)); */

//ANCHOR: clean array of falses
/* 
const arrCleanArray = [0, 1, null, 2, undefined, 3, false, 4];

const cleanArray = (arr) => {
  return arr.reduce((acc, el) => {
    if (el) {
      acc.push(el);
    }
    return acc;
  }, []);
};

console.log(cleanArray(arrCleanArray)); */

//ANCHOR: flatt one level an array

/* const arrFlatten = [[1, 2], 3, [4, [5, 6]], [[7]]];

const flatten = (arr) => {
  return arr.reduce((acc, el) => {
    return acc.concat(el);
  }, []);
};

console.log(flatten(arrFlatten));
 */
//ANCHOR: most repeated word of the array

/* const arrMostRepeatedWord = [
  "YUA",
  "YUA",
  "OPA",
  "YUA",
  "OPA",
  "OPA",
  "ECO",
  "OPA",
  "OPA",
  "YUA",
  "OPA",
  "ECO",
  "OPA",
  "OPA",
  "OPA",
  "ECO",
  "OPA",
];

const mostRepeatedWord = (arr) => {
  const objWords = arr.reduce((acc, el) => {
    if (acc[el]) {
      acc[el]++;
    } else {
      acc[el] = 1;
    }
    return acc;
  }, {});

  return Object.entries(objWords)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 1)
    .map((el) => el[0])
    .join("");
};

console.log(mostRepeatedWord(arrMostRepeatedWord)); */

//ANCHOR: palindrome

/* const strPalindrome = "anita lava la tina";

const palindrome = (str) => {
  const originalStr = str.toLowerCase().replace(/\s/g, "");
  const reverseStr = originalStr.split("").reverse().join("");

  if (originalStr === reverseStr) {
    return true;
  } else {
    return false;
  }
};

console.log(palindrome(strPalindrome)); */

//ANCHOR: Reverse couples

/* const strReverseCouples = "12253365";

const reverseCouples = (str) => {
  const strLength = str.length;
  const arrStr = str.split("");
  const res = [];

  for (let i = 0; i < arrStr.length; i += 2) {
    res.push(arrStr[i + 1]);
    res.push(arrStr[i]);
  }

  if (strLength % 2 !== 0) {
    return false;
  } else {
    return res.join("");
  }
};

console.log(reverseCouples(strReverseCouples)); */

//ANCHOR: Array squared

/* const arrArraySquared = [1, 2, 3, 4, 5];

const arraySquared = (arr) => {
  return arr.reduce((acc, el) => {
    acc.push(Math.pow(el, 2));
    return acc;
  }, []);
};

console.log(arraySquared(arrArraySquared)); */

//ANCHOR: Sum of positive elements

/* const arrSumPositives = [1, -4, 12, 0, -3, 29, -150];

const sumPositives = (arr) => {
  const arrPositive = arr.filter((el) => {
    return el > 0;
  });

  return arrPositive.reduce((acc, el) => {
    return acc + el;
  });
};

console.log(sumPositives(arrSumPositives)); */

//ANCHOR: Turn an array of numbers into a total of all the numbers

/* const total = (arr) => {
  return arr.reduce((acc, el) => {
    return acc + el;
  });
};

console.log(total([1, 2, 3])); // 6 */

//ANCHOR: Turn an array of numbers into a long string of all those numbers.

/* const stringConcat = (arr) => {
  return arr.join("");
};

console.log(stringConcat([1, 2, 3])); // "123" */

//ANCHOR: Turn an array of voter objects into a count of how many people voted
/* 
const voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

const totalVotes = (arr) => {
  return arr.reduce((acc, el) => {
    if (el.voted) {
      acc++;
    }
    return acc;
  }, 0);
};

console.log(totalVotes(voters)); // 7 */

//ANCHOR: Given an array of all your wishlist items,
//figure out how much it would cost to just buy everything at once

/* const shoppingSpree = (arr) => {
  return arr.reduce((acc, el) => {
    acc = acc + el.price;
    return acc;
  }, 0);
};

var wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 },
];

console.log(shoppingSpree(wishlist)); // 227005 */

//ANCHOR: Given an array of arrays, flatten them into a single array
/* var arrays = [["1", "2", "3"], [true], [4, 5, 6]];

const flatten = (arr) => {
  return arr.reduce((acc, el) => {
    return acc.concat(el);
  }, []);
};

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6]; */

//ANCHOR: Given an array of potential voters, return an object representing the results of the vote.
// Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many
// from 36-55, and how many of each of those age ranges actually voted. The resulting object containing
// this data should have 6 properties. See the example output at the bottom.

var voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

const voterResults = (arr) => {
  const young = arr.reduce((acc, el) => {
    if (el.age >= 18 && el.age <= 25) {
      if (acc[1]) {
        acc[1]++;
      } else {
        acc[1] = 1;
      }
      if (el.voted) {
        if (acc[0]) {
          acc[0]++;
        } else {
          acc[0] = 1;
        }
      }
    }
    return acc;
  }, []);

  const mid = arr.reduce((acc, el) => {
    if (el.age >= 26 && el.age <= 35) {
      if (acc[1]) {
        acc[1]++;
      } else {
        acc[1] = 1;
      }
      if (el.voted) {
        if (acc[0]) {
          acc[0]++;
        } else {
          acc[0] = 1;
        }
      }
    }
    return acc;
  }, []);

  const old = arr.reduce((acc, el) => {
    if (el.age >= 36 && el.age <= 55) {
      if (acc[1]) {
        acc[1]++;
      } else {
        acc[1] = 1;
      }
      if (el.voted) {
        if (acc[0]) {
          acc[0]++;
        } else {
          acc[0] = 1;
        }
      }
    }
    return acc;
  }, []);

  return {
    numYoungVotes: young[0],
    numYoungPeople: young[1],
    numMidVotes: mid[0],
    numMidPeople: mid[1],
    numOldVotes: old[0],
    numOldPeople: old[1],
  };
};

console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,1
  numOldVotesPeople: 3,
  numOldsPeople: 4 
}
*/

//ANCHOR: Loop through the following array and count how many "computers" there are.

const officeItems = [
  "stapler",
  "monitor",
  "computer",
  "desk",
  "lamp",
  "computer",
  "lamp",
  "stapler",
  "computer",
  "computer",
];

const loopComputers = (arr) => {
  return arr.reduce((acc, el) => {
    if (el === "computer") {
      acc++;
    }
    return acc;
  }, 0);
};

console.log(loopComputers(officeItems));
