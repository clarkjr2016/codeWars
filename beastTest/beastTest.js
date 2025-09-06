// PREP

// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

//Parameters = animal's name and the dishe's name
//Returning a boolean
//Example = feast('great blue heron', 'garlic naan' ) returns true

function feast(beast, dish) {
  //loop through beast name and extract the first and last letter and store it in a variable

  let beastArray = beast.split("");

  let beastLetters = [beastArray[0], beastArray[beastArray.length - 1]];

  let dishArray = dish.split("");

  let dishLetters = [dishArray[0], dishArray[dishArray.length - 1]];

  return beastLetters.join() === dishLetters.join() ? true : false;

  // Do the same for a dish

  //create a ternary orperator that returns true if the variables match and false if they don't
}

console.log(feast("great blue heron", "garlic naa"));
