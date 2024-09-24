function friend(friends){
  
    //first start to loop through the 
      
     const newArray = [];
    
    for (let i =0; i < friends.length; i++) {
      if (friends[i].length == 4) {
         newArray.push(friends[i])
      }
    }
      
      return newArray
      
    }
    