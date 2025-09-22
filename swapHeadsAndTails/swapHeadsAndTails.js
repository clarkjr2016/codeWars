function swapHeadAndTail(arr) {
  // good luck

  const halfOfArray = arr.length / 2;
  console.log(halfOfArray);

  if (arr.length % 2 == 0) {
    const heads = arr.splice(0, halfOfArray);
    const tails = arr.splice(0, halfOfArray);
    const joined = arr.concat(tails, heads);

    return joined;
  } else {
    const heads = arr.splice(0, halfOfArray); //[1]
    const tails = arr.splice(1, halfOfArray); //[3]

    return [...tails, ...arr, ...heads];
  }
}

//Parameters: an array with numbers
//Return: the same array but with the first half and the second half of the array are switching places if their is a middle number that number stays in the same place
//Example:  [ 1, 2, -3, 4, 5, 6, -7, 8 ]   =>  [ 5, 6, -7, 8, 1, 2, -3, 4 ]

/* Psuedocode:
- See if the array has a length of even or odd
- If it's even simply splice the first half and the second half and then put them together



*/

console.log(swapHeadAndTail([-1, 2, 3]));
