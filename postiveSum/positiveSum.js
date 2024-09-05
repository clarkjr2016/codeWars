function positiveSum(arr) {
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
