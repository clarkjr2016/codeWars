function paperwork(n, m) {
  let result;

  n < 0 || m < 0 ? (result = 0) : (result = n * m);

  return result;
}
