# Review of Auth
* Encrypted passwords
* Sessions and Cookie

## Different types of Authentication in the real word
* Password
* Finger print
* SSN 
* 2-factor authentication
* Physical IDs (passports, student IDs, etc)
* Tokens!!!

# JSON Web Token
* Extremely popular way to Authenticate AND Authorize APIs/AJAX calls
* Made up of there parts: header, payload, signature
* The token represents a value that is accessible only by the computer that has access to the secret key with which it was encrypted.

## How are tokens crypted?
* In the same way you use a key to lock something value
* Every Server uses a `secret_key` to encrypt a user's ID
* Only _that_ server has the `secret_key` to unencrypt a user's token.

### Walk through of the API code 