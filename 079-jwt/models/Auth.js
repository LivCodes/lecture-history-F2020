const jwt = require("jsonwebtoken")

class Auth {
  //take in a user's id and return a token
  static encryptToken(user_id){
    return jwt.sign({id: user_id}, "helloworld")
  }

  //take in a token and return a user's id
  static decryptToken(token){
    return jwt.verify(token, "helloworld").id
  }
}

module.exports = Auth