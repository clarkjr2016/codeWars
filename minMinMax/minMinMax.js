// Given an unsorted array of integers, find the smallest number in the array, the largest number in the array, and the smallest number between the two array bounds that is not in the array.

// For instance, given the array [-1, 4, 5, -23, 24], the smallest number is -23, the largest number is 24, and the smallest number between the array bounds is -22. You may assume the input is well-formed.

// You solution should return an array [smallest, minimumAbsent, largest]

// The smallest integer should be the integer from the array with the lowest value.

// The largest integer should be the integer from the array with the highest value.

// The minimumAbsent is the smallest number between the largest and the smallest number that is not in the array.

function minMinMax(array) {
  /*

- Parameter: An unsorted Array with negative and positive numbers

- Return: An array like this [smallest, minimumAbsent, largest]

- Example: [-1, 4, 5, -23, 24] -> [-23, -22, 24]

- Psuedocode: 

    - Use a method to find the smallest number in the array store it in a variable
    - Use a method to find the largest number in the variable and store it in a variable
    - Add one to the min so that it is inbetween the max and the min.
    - Then check to see if that number is in the array already
    - While it is keep adding one till it isn't


*/

  let min = Math.min(...array);

  let max = Math.max(...array);

  let minBetweenInitial = min + 1;

  while (array.includes(minBetweenInitial)) {
    minBetweenInitial++;
  }

  return [min, minBetweenInitial, max];
}

console.log(minMinMax([1, 3, -3, -2, 8, -1]));
