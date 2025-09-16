// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].

function deleteNth(arr, n) {
  //Parameters: A number that represents how often numbers should be appearing in an array
  //Return: An array with the numbers that repeated a certain amount removed.
  //Example: (input): [20,37,20,21], 1 -> [20,37,21]
  /* 

  - Gather all the numbers that repeat over the requested amount into an array

  - Use regex to remove the amount of the repeated numbers needed


  */

  for (let item of arr) {
    arr[item] = (arr[item] || 0) + 1;
  }

  return arr;
}

console.log(deleteNth([20, 37, 20, 21], 1));

//my solution ^^

function deleteNth(arr, x) {
  var cache = {};
  return arr.filter(function (n) {
    cache[n] = (cache[n] || 0) + 1;
    return cache[n] <= x;
  });
}

//^^ actual solution
