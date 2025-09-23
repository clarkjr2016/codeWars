function alphaSeq(str) {
  //Paramater: Random string
  //Return: The string sorted but each letter is comma separated and starts with the upper case with a number of lowercase values that matches that characters place in the alphabet
  //Example: "ZpglnRxqenU" -> "Eeeee,Ggggggg,Llllllllllll,Nnnnnnnnnnnnnn,Nnnnnnnnnnnnnn,Pppppppppppppppp,Qqqqqqqqqqqqqqqqq,Rrrrrrrrrrrrrrrrrr,Uuuuuuuuuuuuuuuuuuuuu,Xxxxxxxxxxxxxxxxxxxxxxxx,Zzzzzzzzzzzzzzzzzzzzzzzzzz"
  /* Psuedocode
  - First thing I need to do is to sort the string
  - Next I need to loop through each element and figure out where in the alphabet does this letter reside.

  */

  const sortedString = str.toLowerCase().split("").sort().join("");
  const characterNumber = sortedString
    .split("")
    .map((element, index, array) => {
      return element.charCodeAt(index);
    });
}

alphaSeq("ZpglnRxqenU");

// In this kata you will be given a random string of letters and tasked with returning them as a string of comma-separated sequences sorted alphabetically, with each sequence starting with an uppercase character followed by n-1 lowercase characters, where n is the letter's alphabet position 1-26.

// Example
// "ZpglnRxqenU" -> "Eeeee,Ggggggg,Llllllllllll,Nnnnnnnnnnnnnn,Nnnnnnnnnnnnnn,Pppppppppppppppp,Qqqqqqqqqqqqqqqqq,Rrrrrrrrrrrrrrrrrr,Uuuuuuuuuuuuuuuuuuuuu,Xxxxxxxxxxxxxxxxxxxxxxxx,Zzzzzzzzzzzzzzzzzzzzzzzzzz"
// Technical Details
// The string will include only letters.
// The first letter of each sequence is uppercase followed by n-1 lowercase.
// Each sequence is separated with a comma.
// Return value needs to be a string.

const alphaSeq = (s) =>
  [...s.toLowerCase()]
    .sort()
    .map((c) => c.toUpperCase() + c.repeat(c.charCodeAt() - 97)).join`,`;
