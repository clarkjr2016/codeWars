function digitize(n) {
  let reversedArray = n.toString().split("").reverse();

  for (i = 0; i < reversedArray.length; i++) {
    reversedArray[i] = reversedArray[i] * 1;
  }
  return reversedArray;
}
