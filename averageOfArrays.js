function findAverage(array) {
    let result;
    
    if (array.length === 0) {
      result = 0
    } else {
      let sum = array.reduce((total, currentValue) => total + currentValue) 
      result = sum / array.length
    }
   
      
    return result;
  }