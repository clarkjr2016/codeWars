function abbrevName(name) {
  //Parameters: String with two words that have a space between them
  //Return: I'm returning a value with the first letters of the respective words capitilazized with a period between them
  //Example: Eugene Clark -> E.C
  /*Psuedocode: 

  -Split the string into an array
  - Extract the first letter from each element and return them with a period in between them using an object literal
  */

  const stringToArray = name.split(" ").map((string) => string[0]);

  return `${stringToArray[0].toUpperCase()}.${stringToArray[1].toUpperCase()}`;
}

console.log(abbrevName("Eugene Clark"));
