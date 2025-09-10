// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str) {
  // Parameter: A string
  // Return: The input string with all of the characters in the string doubled
  //Example:  "String"      -> "SSttrriinngg"
  /* Psuedocode:

  - Split string into an array

  Map through the string and for each element

  */

  const stringToArray = str.split("");

  for (let i = 0; i < stringToArray.length; i++) {
    stringToArray[i] += stringToArray[i];
  }

  return stringToArray.join("");
}

console.log(doubleChar("String"));
