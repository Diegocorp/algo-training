//ANCHOR: Matching Brackets

const strMatchingBrackets = "{([])}}";

const matchingBrackets = (str) => {
  const orderBrackets = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  const strClean = str.replace(/.\/#!$%@\^&\*" "a-zA-z0-9/g, "");
  const arrBrackets = strClean.split("");
  const stack = [];
  const openElements = ["(", "{", "["];
  arrBrackets.forEach((element) => {
    if (openElements.includes(element)) {
      stack.push(element);
    }
  });

  return arrBrackets;
};

console.log(matchingBrackets(strMatchingBrackets));
