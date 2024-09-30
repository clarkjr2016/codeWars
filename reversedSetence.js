function reverseWords(str) {
    let split = str.split(" ")
   
    let reversed = split.map((word) => {
      
     return word.split("").reverse().join("");
      
    })
    
    return reversed.join(" ");
  }