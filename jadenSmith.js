//below is allowing me to create a method for the string prototype. I've never seen this before so I thought this was cool

String.prototype.toJadenCase = function () {
  //split the array into substring by the space
  let splitString = this.split(" ");
  //loop  through each item in the array and capitlize it
  for (i = 0; i <= splitString.length - 1; i++) {
    splitString[i] =
      splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1);
  }

  splitString = splitString.join(" ");

  return splitString;
};
