/*var http = require("http");


  = function(){
    var options = {
        hostname: 'www.postcatcher.in',
        port: 80,
        path: '/catchers/544b09b4599c1d0200000289',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
      };
    console.log('Printed from another file');
}
module.exports = methods;*/
var request = require("request");

var methods={};

methods.createIncident =  function(userName,description, severity, callback){
        console.log("The Final Message Utterance to send POST as Query to Service Now");
        var options = { method: 'POST',
          url: 'https://dev18442.service-now.com/api/now/v1/table/incident',
          headers:
           { 'postman-token': 'd6253bf3-ff31-fb21-7741-3dd02c84e8bb',
             'cache-control': 'no-cache',
             authorization: 'Basic MzMyMzg6YWJjMTIz',
             'content-type': 'application/json' },
          body:
          { short_description: description,
             caller_id: userName,
             urgency: severity ,
             comments: 'Created from dialogflow' },
          json: true };
            console.log('request body:',options);
        request(options, function (error, response, body) {
          if (error) throw new Error(error);
          console.log("Success : "+body.result.number);
          callback(null, body);
        });
};
methods.getIncident = function(ticketnumber, callback){

        console.log("The Final Message Utterance to send GET as Query to Service Now");
        var options = { method: 'GET',
          url: 'https://dev18442.service-now.com/api/now/v1/table/incident',
          qs: { number: ticketnumber },
          headers:
           { 'postman-token': '5441f224-d11a-2f78-69cd-51e58e2fbdb6',
             'cache-control': 'no-cache',
             authorization: 'Basic MzMyMzg6YWJjMTIz' } };

        request(options, function (error, response, body) {
          if (error) throw new Error(error);

          console.log("Success : "+JSON.stringify(body));
          callback(null, body);
        });
};
    module.exports = methods;

