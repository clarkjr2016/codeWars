function sortArray(array) {
  //Parameter:  An array with a random group of numbers
  //Return: An array with the odd numbers sorted in ascending order but the even numbers will remain in the same position
  //Example: [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
  /* Psuedocode:

    - loop through the array and find the indexes of all of the odd numbers

// */
  //   let indexesOfArray = array.filter((element, index, a) => {
  //     return element % 2;
  //   });

  //   let sorted = indexesOfArray.sort((a, b) => a - b);

  // ^^ my solution

  return array.map((x) => (x % 2 ? sorted.shift() : x));

  // ^^ The correct solution
}

console.log(sortArray([5, 8, 6, 3, 4]));
