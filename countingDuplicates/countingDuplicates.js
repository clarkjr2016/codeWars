// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text) {
  //Parameters: string that will contain letters and numbers no spaces
  //Return: Return a count for all the numbers and letters that repeat in the string
  //Example: "Indivisibilities" -> 2
  /* Psuedocode:

  
  - Split string into an array
    - When I loop through the array I need to be able to see if that specific element matches any of the other elements in the array brought to a lowercase form



  */
  let stringToArray = text.split("");

  let countofDuplicates = stringToArray.map((e, index, array) => {
    let count = 0;
    if (Number(e) == NaN) {
      //Look at the element and add 1 to the count variable if there is more than one match.
      let filteredArray = array.filter((e, index, array) => {});
    }
  });
}
// My solution

function duplicateCount(text) {
  return (
    text
      .toLowerCase()
      .split("")
      .sort()
      .join("")
      .match(/([^])\1+/g) || []
  ).length;
} //Top Solution on Codewars
