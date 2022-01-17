console.log(questionMarks(strQuestionMarks));

//ANCHOR: longest word

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

console.log(longestWord(strLongestWord));

//ANCHOR: First Factorial

const firstFactorial = (num) => {
  let res = 1;

  for (let i = 1; i <= num; i++) {
    res = res * i;
  }

  return res;
};

console.log(firstFactorial(4));

//ANCHOR: First Reverse

const strFirstReverse = "I Love Code";

const firstReverse = (str) => {
  return str.split("").reverse().join("");
};

console.log(firstReverse(strFirstReverse));

//ANCHOR: Scrabble Score

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

console.log(scrabbleScore(strScrabbleScore));

//ANCHOR: Word Count (with rules)

const strWordCount = ",\n,one,\n ,two \n 'three'";

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

console.log(wordCount(strWordCount));

//ANCHOR: Perfect Numbers

const perfectNumbers = (num) => {
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

console.log(perfectNumbers(6));
