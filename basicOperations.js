function basicOp(operation, value1, value2) {
  // create an array that has all four of the operands
  // create switch case statements that executes a function based off the opperand typed in

  switch (operation) {
    case "+":
      return value1 + value2;
      break;
    case "-":
      return value1 - value2;
      break;
    case "*":
      return value1 * value2;
      break;
    case "/":
      return value1 / value2;
      break;
  }
}
