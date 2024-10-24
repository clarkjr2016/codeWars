var summation = function (num) {
  // Code here
  // I need to loop from 1 to the number entered into the function and push it into an array
  let sumArray = [];
  for (let i = 1; i <= num; i++) {
    sumArray.push(i);
  }

  return sumArray.reduce((total, currentValue) => total + currentValue);
};
