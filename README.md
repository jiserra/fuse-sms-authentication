# SMS Authentication example in Fuse

This is an example of how to authenticate a user using Twilio API to send an SMS and checking the code.

To make it work you have to:

1. Create an account in [Twilio](https://www.twilio.com/)
2. Buy a Number in Twilio
3. Change the data in `authentication.js` to match the Number you bought and your Account SID & Token.

### I don't want a Twilio account!
If you just want to see the UI in action you can change the function of the Go button to `{sendFakeSMS}` instead of `{sendSMS}` and check the Fuse Monitor for the random generated number.

The SMS icon was made by [Alfredo Hernandez](http://www.flaticon.com/authors/alfredo-hernandez "Alfredo Hernandez") from [www.flaticon.com](http://www.flaticon.com "Flaticon") is licensed by [CC 3.0 BY](http://creativecommons.org/licenses/by/3.0/ "Creative Commons BY 3.0")