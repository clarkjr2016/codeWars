function positiveSum(arr) {
  //Need a variable to return the sum with

  //Need a way to decide if an array is empty or not

  //Need a way to loop through each element and decide if it's a positive number

  let sum = 0;

  if (arr.length === 0) {
    return sum;
  } else {
    arr.forEach((num) => {
      if (num > 0) {
        sum += num;
      }
    });
  }
  return sum;
}
