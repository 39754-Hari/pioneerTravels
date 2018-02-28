var request = require("request");
var googleLogin={};


googleLogin.getAuth0Tocken = function(){
var options = { method: 'POST',
  url: 'https://facebook-login-hariv.auth0.com/oauth/token',
  headers: { 'content-type': 'application/json' },
  body: 
   { grant_type: 'client_credentials',
     client_id: 'eAOYxrvZJAo6-VAPkh8Hh83HCU46gAs4',
     client_secret: '4ctSQTlGjCmKhecCFSzPBwaBrC_zW_X1cHKHvFjIWEx0OKAIKQMxU0k3fMNNZdN1',
     audience: 'https://facebook-login-hariv.auth0.com/api/v2/' },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
})
};
module.exports = googleLogin;