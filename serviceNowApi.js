
var request = require("request");

var methods={};

methods.createIncident =  function(userName,description, severity,input, callback){
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
            sys_created_by: userName,
            category: 'arrival',
            subcategory: 'schedule',
            urgency: severity ,
            priority: severity,
            state: 2,
            user_input: input,
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
          json: true,
          headers:
           { 'postman-token': '5441f224-d11a-2f78-69cd-51e58e2fbdb6',
             'cache-control': 'no-cache',
             authorization: 'Basic MzMyMzg6YWJjMTIz' } };

        request(options, function (error, response, body) {
          if (error) throw new Error(error);
            
          console.log("Success resp: ",body);
          callback(null, body);
        });
};
    module.exports = methods;

