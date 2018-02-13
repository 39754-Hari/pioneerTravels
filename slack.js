var serviceNowApi = require('./serviceNowApi.js')
var slackFunction={};

slackFunction.operation = function(req,res){
if(req.body.result.action === 'create_incident_sub_category1-1'){   
    var resObj = {}; 
    serviceNowApi.createIncident(req.body.result.parameters,'2',function(err,data){
      if (err) {
        resObj={
          "speech": "",
          "messages": [
            {
              "type": 2,
              "platform": "slack",
              "title": "Sorry! There was an error while processing your request. Please try again",
              "replies": [
                "Main menu"
              ]
            }
          ]
        };
      }
    else{
      resObj={
      "speech": "",
      "messages": [        
        {
          "type": 3,
          "platform": "slack",
          "imageUrl": "https://dummyimage.com/300x200/fff/ff0015&text="+data.result.number
        },
        {
          "type": 2,
          "platform": "slack",
          "title": "Hi "+req.body.result.parameters.userName +", Your Incident has been raised successfully. Please note your incident id for future reference : "+data.result.number
          +". \nAn acknowledgement SMS with incident id will be sent to your Phone number "+req.body.result.parameters.phoneNumber
          +". \nOur customer care agent will get back to you shortly"
          +".\nWhat do you wanna do next?",
          "replies": [
            "Exit",
            "Main menu"
          ]
        }        
        ]
      };
    }
      res.json(resObj);
    });   
  }
}
module.exports = slackFunction;