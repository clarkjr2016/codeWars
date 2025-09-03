function isPangram(string){
    string = string.toLowerCase(); // turned string into lowercase
    
    //create a variable to store a count
    let count = 0
    
    //break the string into array
    let stringToArray = string.split("")
    
    let uniqueLetters = new Set(stringToArray); //from the array I create a set which transforms the array into an object consisting of only unique values from the array
    let uniqueLettersArray = Array.from(uniqueLetters) // I change the object back into an array
    // console.log(uniqueLettersArray)
   
   
    //I first need a way to loop through all the letters in the string
    
    for (i = 0; i <= uniqueLettersArray.length - 1; i++) {
      const regex = /[a-z]/i
      
      // console.log(regex.test("a"))
      if (regex.test(uniqueLettersArray[i])) {
        count++
        // console.log(uniqueLettersArray[i])
      } else {
        continue
      }
      
      
    }
    
    
    // console.log(count)
    //When I loop through each letter if it is a part of the alphabet then I add to the count, if it isn't just continue
    
    //if the count ends up being equal to 26 then it is true if it isn't it's false 
    if (count == 26) {
      return true
    } else {
      return false
    }
    
  }