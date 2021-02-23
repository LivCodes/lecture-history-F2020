// // let TWITTER_CREDENTIAL = "OAuth oauth_consumer_key=\"PSRd2EXFRqZlsOsbVsKiCgU9k\",oauth_token=\"1103659899488215042-POdvea3pO5FQi4n7BCKJF3MpUmfbcB\",oauth_signature_method=\"HMAC-SHA1\",oauth_timestamp=\"1614051750\",oauth_nonce=\"H8z5398lmFC\",oauth_version=\"1.0\",oauth_signature=\"caG4YtjI%2F9auXY8o8E%2BynQR9Wws%3D\"";

// // function getUserIdByUsername(username){
// //   let options = {
// //     headers: {"Authorization": TWITTER_CREDENTIAL}
// //   }
// //   fetch(`https://api.twitter.com/2/users/by/username/${username}`, options)
// //   .then(res => res.json())
// //   .then(data => {
// //     console.log(data)
// //   })
// // }
// var myHeaders = new Headers();
// myHeaders.append("Authorization", "OAuth oauth_consumer_key=\"PSRd2EXFRqZlsOsbVsKiCgU9k\",oauth_token=\"1103659899488215042-POdvea3pO5FQi4n7BCKJF3MpUmfbcB\",oauth_signature_method=\"HMAC-SHA1\",oauth_timestamp=\"1614052366\",oauth_nonce=\"O9zOvO7CbHd\",oauth_version=\"1.0\",oauth_signature=\"vZAIzc7hifrosytC2cYSDXCyUis%3D\"");
// myHeaders.append("Cookie", "guest_id=v1%3A161393018293236474; personalization_id=\"v1_u09YyaZdr9IAJFfc1edawA==\"; lang=en");

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };

// fetch("https://api.twitter.com/2/users/by/username/InstructorAnn", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));