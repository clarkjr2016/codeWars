function findLongest(array) {
  // Find the number with the most digits.
  // If two numbers in the argument array have the same number of digits, return the first one in the array.
  //Parameter - An array with numbers as each argument
  //Return Value - The first number with the largest digit
  //Example - [1, 10, 100] -> 100
  /*
  - Loop through each element and split it into an array
  - Loop through the return array and get the length of each of the elements

  */

  const splitElements = array.map((element) => {
    let se = element.toString().split("");
    let lengthOfArrays = se.map((e) => {
      return e.length;
    });
  });

  console.log(splitElements);
}

findLongest([1, 10, 100]);

const findLongest = (l) =>
  l.reduce((a, b) => (`${b}`.length > `${a}`.length ? b : a));
