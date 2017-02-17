var Observable = require("FuseJS/Observable");
var Base64 = require("FuseJS/Base64");

var phoneNumber = Observable();
var randomCode = Math.floor(1000 + Math.random() * 9000);
var phoneMessage = "Your code is " + randomCode;

var fromNumber = "INSERT YOUR FROM NUMBER FROM TWILIO HERE";
var twilioSID = "TWILIO SID HERE";
var twilioToken = "TWILIO SECRET TOKEN HERE";

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

var authorizationBasic = Base64.encodeAscii(twilioSID + ':' + twilioToken)

function sendSMS() {
  /*
  fetch('https://api.twilio.com/2010-04-01/Accounts/' + twilioSID + '/Messages.json', {
    method: 'POST',
    headers: { "Content-type": "application/x-www-form-urlencoded; charset=UTF-8", 'Authorization': 'Basic ' + authorizationBasic, 'Accept': 'application/json'},
    body: "To=" + phoneNumber.value + "&From=" + fromNumber + "&Body=" + encodeURIComponent(phoneMessage)
  }).then(function(response) {
    status = response.status;  // Get the HTTP status code
    response_ok = response.ok; // Is response.status in the 200-range?
    return response.json();    // This returns a promise
  }).then(function(responseObject) {
    codeSent.value = true;
  }).catch(function(err) {
    // An error occurred somewhere in the Promise chain
  });
  */
  codeSent.value = true;
  console.log(randomCode);
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