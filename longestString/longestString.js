function findShort(s) {
  //Parameter - Sring separated by spaces
  //Return - the length of the string with the shortest amount of characters
  //Example - "Let's travel abroad shall we" -> 2
  /* Psuedocode 
  - First I want to split the string into an array 
  */
  const array = s.split(" ");
  const shortestWord = array.reduce((accumulator, currentValue) => {
    return accumulator.length <= currentValue.length
      ? accumulator
      : currentValue;
  }, array[0]);

  return shortestWord.length;
}

console.log(findShort("Let's travel abroad shall we"));
