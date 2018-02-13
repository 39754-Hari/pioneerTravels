const { ActionsSdkApp } = require('actions-on-google');
var serviceNowApi = require('./serviceNowApi.js')
var googleAssistantFunction={};

googleAssistantFunction.operation = function(req,res){
    const app = new ActionsSdkApp({ request: req, response: res });
    app.ask({        
    speech: 'Howdy! You reached correct place',
    displayText: 'Howdy! welcome '
    });
}
module.exports = googleAssistantFunction;