function XO(str) {
  let xCount = 0;
  let oCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "X" || str[i] === "x") {
      oCount++;
    } else if (str[i] === "o" || str[i] === "O") xCount++;
  }

  return oCount === xCount ? true : false;
}
