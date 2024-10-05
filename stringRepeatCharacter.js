function isIsogram(str){
  
    let wordArray = str.split("")
    let returnValue = true;  
    for (let i = 0; i < wordArray.length; i++) {
    let count = wordArray.filter((character)=> character.toLowerCase() === wordArray[i].toLowerCase())
    if (count.length > 1) {
      return false;
    } else {
      continue;
    }   
    }
    
    return returnValue;  
  }