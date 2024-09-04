function getGrade(s1, s2, s3) {
  // Code here

  // add the three scores together and store that in a variable
  const average = (s1 + s2 + s3) / 3;

  //divide that sum by 3 and store that variable

  let letterGrade;
  // write conditional statements for the appropriate letter grades

  if (average >= 90 && average <= 100) {
    letterGrade = "A";
  } else if (average >= 80 && average < 90) {
    letterGrade = "B";
  } else if (average >= 70 && average < 80) {
    letterGrade = "C";
  } else if (average >= 60 && average < 70) {
    letterGrade = "D";
  } else {
    letterGrade = "F";
  }

  return letterGrade;
}
