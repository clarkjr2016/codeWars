function isValidWalk(walk) {
  if (walk.length != 10) {
    return false;
  }
  //set coordinates for x and y positions
  let coordinates = [0, 0];

  //create a for loop that loops through each iteration and adds or substracts from one of the values based on the specific coordinate identified

  for (i = 0; i <= walk.length; i++) {
    if (walk[i] === "n") {
      coordinates[0] = coordinates[0] + 1;
    } else if (walk[i] === "s") {
      coordinates[0] = coordinates[0] - 1;
    } else if (walk[i] === "e") {
      coordinates[1] = coordinates[1] + 1;
    } else if (walk[i] === "w") {
      coordinates[1] = coordinates[1] - 1;
    }
  }

  return coordinates[0] === 0 && coordinates[1] === 0;
}
