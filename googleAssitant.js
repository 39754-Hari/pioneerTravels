const { ActionsSdkApp } = require('actions-on-google');
var serviceNowApi = require('./serviceNowApi.js')
var googleAssistantFunction={};

googleAssistantFunction.operation = function(req,res){
    const app = new ActionsSdkApp({ request: req, response: res });
    var resObj = {}; 
    resObj={
        "speech": "",
        "messages": [
          {            
          "type": "simple_response",
          "platform": "google",
          "textToSpeech": "Hi,Welcome to Pioneer Travels ServiceNow.Reached end"
          }
        ]
      };
      return res.json(resObj);
    /*app.ask({        
    speech: 'Howdy! You reached correct place',
    displayText: 'Howdy! welcome '
    });*/
}
module.exports = googleAssistantFunction;