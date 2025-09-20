// A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.

// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

// His mother looks out of a window 1.5 meters from the ground.

// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing)?

// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

// Note:
// The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

// Examples:
// - h = 3, bounce = 0.66, window = 1.5, result is 3

// - h = 3, bounce = 1, window = 1.5, result is -1

// (Condition 2) not fulfilled).

function bouncingBall(h, bounce, window) {
  //Parameters: h = is height of building, bounce = height of ball bounce, window = height of window from the ground
  //Return: A number of how many times the mother will see the ball or -1
  //Example: // - h = 3, bounce = 0.66, window = 1.5, result is 3
  /*
  
  - Write an if statement to satisfy the conditions


  */

  if (h > 0 || bounce > 0 || bounce < 1 || window < h) {
    let count = 1; //setting a counting variable
    if (bounce > 0 && window > 0) {
      count = 3;
    }
    //Now I'm trying to figure out how to calculate how many times the ball will be seen
    //It's going to be seen at least once if there is a mirror
    //Now the other amount of times does depend on the ball bounce height and the height of the window, but how?
    //You're going to see it at least twice if the height of the bounce is greater than 0 and the height of the window is greater than 0
  }

  return -1;
}

// my solution ^^
console.log(bouncingBall(3, 1, 1.5));

function bouncingBall(h, bounce, window) {
  if (h <= 0 || bounce >= 1 || bounce <= 0 || window >= h) return -1;
  let seen = 0;

  while (h > window) {
    seen += 1;
    h *= bounce;
    if (h > window) seen += 1;
  }

  return seen;
}

// top solution ^^
