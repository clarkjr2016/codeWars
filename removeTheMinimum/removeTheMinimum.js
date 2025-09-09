// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

function removeSmallest(numbers) {
  //Parameter - An array of integers, possibly empty array

  //Return - Return the input with the smallest number in the array gone. Do not mutate the original array

  //Example - Input: [5,3,2,1,4], output = [5,3,2,4]

  /* 1. If the array is empty return an empty array

    2. Map through the element, using a combination of the spread operator and index parameter, remove the lowest number and return that operator


  */

  if (numbers.length === 0) {
    return [];
  } else {
    const arrayWithRemovedValue = numbers.map((number, index, array) => {
      if (number === Math.min(array)) {
        array.splice(number, 1);
        return arrayWithRemovedValue;
      }
    });
  } //my solutiion
}

function removeSmallest(numbers) {
  let indexOfMin = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
} // top solution that worked

console.log(removeSmallest([5, 3, 2, 1, 4]));
