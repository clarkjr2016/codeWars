var isSquare = function (n) {
  if (Number.isInteger(Math.sqrt(n) % 2)) {
    return true;
  } else {
    return false;
  }
};
