// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x) {
  //Parameters: a string containing words separated by spaces
  //Return: Return the word within the string that has the highest sum when adding the numbers of the place that they take.
  //Example: (aaa b) -> (b)
  /* Psuedocoode

- split the string into an array separated by spaces
- For each split word I need to map through each letter


  */

  const stringToArray = x.split(" ");

  let mapThroughWord = stringToArray.map((word) => {
    return word.split(""); //looping through each word and splitting it into it's own element
  });

  return mapThroughWord;
}

console.log(high("aa aa aa"));
