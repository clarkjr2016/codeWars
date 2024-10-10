function DNAtoRNA(dna) {
 
    //split the string into an array
     //loop through the array and if one the characters is "T" replace it with "U"
   let newArray = [...dna].map((letter) => {
    if (letter === "T") {
     return letter = "U" 
    } else {
      return letter
    }
     }).join("")
   
   
   
   
   return newArray
     
   }