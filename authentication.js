var Observable = require("FuseJS/Observable");

var phoneNumber = Observable();
var randomCode = Math.floor(1000 + Math.random() * 9000);
var phoneMessage = "Your code is " + randomCode;

var status = 0;
var response_ok = false;

var codeSent = Observable();
var codeNumber = Observable();

var digitOne = codeNumber.map(function(x) {
    if (x.length > 0) return x[0];
    return '';
});
var digitTwo = codeNumber.map(function(x) {
    if (x.length > 1) return x[1];
    return '';
});
var digitThree = codeNumber.map(function(x) {
    if (x.length > 2) return x[2];
    return '';
});
var digitFour = codeNumber.map(function(x) {
    if (x.length > 3) return x[3];
    return '';
});

var isErrorCode = codeNumber.map(function(x) {
    if (x.length == 4 && codeNumber.value != randomCode) {
      return true;
    } else {
      return false;
    }
});

var isCodeValid = codeNumber.map(function(value) {
  if(codeNumber.value == randomCode) {
    return true;
  } else {
    return false;
  }
});

function sendSMS() {
  codeSent.value = true;
  console.log(phoneMessage);
}

module.exports = {
  sendSMS: sendSMS,
  phoneNumber: phoneNumber,
  codeSent: codeSent,
  codeNumber: codeNumber,
  isCodeValid: isCodeValid,
  isErrorCode: isErrorCode,
  digitOne: digitOne,
  digitTwo: digitTwo,
  digitThree: digitThree,
  digitFour: digitFour
}