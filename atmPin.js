function validatePIN(pin) {
  //return true or false

  return pin.length == 4 || pin.length == 6 ? /^\d+$/.test(pin) : false;
}
