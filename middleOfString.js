function getMiddle(s) {
  // divide the length of the word by 2

  const middleOfStringNum = s.length;
  const middleIndex = middleOfStringNum / 2;

  if (middleOfStringNum % 2 === 0 && middleOfStringNum > 1) {
    return s[middleIndex - 1] + s[middleIndex];
  } else {
    return s[Math.floor(middleIndex)];
  }
}
