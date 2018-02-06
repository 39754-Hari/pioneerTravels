const express = require('express')
const app = express()
const bodyparser = require('body-parser')
var serviceNowApi = require('./serviceNowApi.js')
app.use(bodyparser.json());

app.post('/pioneerServiceNow', (req, res) =>{ 
  console.log(req.body);
  if(req.body.result.action === 'create_incident_sub_category1-1'){   
    var resObj = {}; 
    serviceNowApi.createIncident(req.body.result.parameters.userName,req.body.result.parameters.issueDescription,'2','',function(err,data){
      if (err) {
        resObj={
          "speech": "",
          "messages": [
            {
              "type": 2,
              "platform": "facebook",
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
        /*{
          "type": 3,
          "platform": "facebook",
          "imageUrl": "https://dummyimage.com/300x200/fff/ff0015&text="+data.result.number
        },
        {
          "type": 2,
          "platform": "facebook",
          "title": "Hi "+req.body.result.parameters.userName +", Your Incident has been raised successfully and our service agent will get back to you within 48 hours regarding your issue. Please note your incident id for future reference : "+data.result.number
          +". \nAn acknowledgement SMS will be sent to you with incident id to your Phone number "+req.body.result.parameters.phoneNumber
          +".\nFor any queries regarding your issue, please call our customer care center. What do you want to do next?",
          "replies": [
            "Exit",
            "Main menu"
          ]
        }*/
        {
          "type": 1,
          "platform": "facebook",
          "title": "Your Incident has been raised successfully",
          "subtitle": "Hi "+req.body.result.parameters.userName +", Please note your incident id for future reference : "+data.result.number
          +". \nAn SMS will be sent to your Phone number "+req.body.result.parameters.phoneNumber
          +".\nWhat do you wanna do next?",
          "imageUrl": "https://dummyimage.com/300x200/fff/ff0015&text="+data.result.number,
          "buttons": [
            {
              "text": "Exit",
              "postback": "Exit"
            },
            {
              "text": "Main menu",
              "postback": "Main menu"
            }
          ]
        }
        ]
      };
    }
      console.log('response : ',res);
      console.log('resobj : ',resObj);
      res.json(resObj);
    });   
  } 
  if(req.body.result.action === 'create_incident_sub_category1-2'){    
    var resObj = {}; 
    serviceNowApi.createIncident(req.body.result.parameters.userName,req.body.result.parameters.issueDescription,'2','',function(err,data){
      if (err) {
        resObj={
          "speech": "",
          "messages": [
            {
              "type": 2,
              "platform": "facebook",
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
          "type": 2,
          "platform": "facebook",
          "title": "Hi "+req.body.result.parameters.userName +", Your Incident has been raised successfully and our service agent will get back to you within 48 hours regarding your issue. Please note your incident id for future reference : "+data.result.number
          +". \nAn acknowledgement SMS will be sent to you with incident id to your Phone number "+req.body.result.parameters.phoneNumber
          +".\nFor any queries regarding your issue, please call our customer care center. What do you want to do next?",
          "replies": [
            "Exit",
            "Main menu"
          ]
        }
        ]
      };
    }
      console.log('response : ',res);
      console.log('resobj : ',resObj);
      res.json(resObj);
    });      
  }
  if(req.body.result.action === 'create_incident_sub_category2-1'){    
    var resObj = {}; 
    serviceNowApi.createIncident(req.body.result.parameters.userName,req.body.result.parameters.issueDescription,'1','',function(err,data){
      if (err) {
        resObj={
          "speech": "",
          "messages": [
            {
              "type": 2,
              "platform": "facebook",
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
          "type": 2,
          "platform": "facebook",
          "title": "Hi "+req.body.result.parameters.userName +", Your Incident has been raised successfully with high-priority and our service agent will get back to you within 24 hours regarding your issue. Please note your incident id for future reference : "+data.result.number
          +". \nAn acknowledgement SMS will be sent to you with incident id to your Phone number "+req.body.result.parameters.phoneNumber
          +".\nFor any queries regarding your issue, please call our customer care center. What do you want to do next?",
          "replies": [
            "Exit",
            "Main menu"
          ]
        }
        ]
      };
    }
      console.log('response : ',res);
      console.log('resobj : ',resObj);
      res.json(resObj);
    }); 
  }  
  if(req.body.result.action === 'create_incident_sub_category2-2'){    
    var resObj = {}; 
    serviceNowApi.createIncident(req.body.result.parameters.userName,req.body.result.parameters.issueDescription,'1','',function(err,data){
      if (err) {
        resObj={
          "speech": "",
          "messages": [
            {
              "type": 2,
              "platform": "facebook",
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
          "type": 2,
          "platform": "facebook",
          "title": "Hi "+req.body.result.parameters.userName +", Your Incident has been raised successfully with high-priority and our service agent will get back to you within 24 hours regarding your issue. Please note your incident id for future reference : "+data.result.number
          +". \nAn acknowledgement SMS will be sent to you with incident id to your Phone number "+req.body.result.parameters.phoneNumber
          +".\nFor any queries regarding your issue, please call our customer care center. What do you want to do next?",
          "replies": [
            "Exit",
            "Main menu"
          ]
        }
        ]
      };
    }
      console.log('response : ',res);
      console.log('resobj : ',resObj);
      res.json(resObj);
    });
  }
  if(req.body.result.action === 'create_incident_sub_category3-1'){    
    var resObj = {}; 
    serviceNowApi.createIncident(req.body.result.parameters.userName,req.body.result.parameters.issueDescription,'1',req.body.result.parameters.transactionNumber,function(err,data){
      if (err) {
        resObj={
          "speech": "",
          "messages": [
            {
              "type": 2,
              "platform": "facebook",
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
          "type": 2,
          "platform": "facebook",
          "title": "Hi "+req.body.result.parameters.userName +", Your Incident has been raised successfully with high-priority and our service agent will get back to you within 24 hours regarding your issue. Please note your incident id for future reference : "+data.result.number
          +". \nAn acknowledgement SMS will be sent to you with incident id to your Phone number "+req.body.result.parameters.phoneNumber
          +".\nFor any queries regarding your issue, please call our customer care center. What do you want to do next?",
          "replies": [
            "Exit",
            "Main menu"
          ]
        }
        ]
      };
    }
      console.log('response : ',res);
      console.log('resobj : ',resObj);
      res.json(resObj);
    });
  }
  if(req.body.result.action === 'create_incident_sub_category3-2'){    
    var resObj = {}; 
    serviceNowApi.createIncident(req.body.result.parameters.userName,req.body.result.parameters.issueDescription,'1',req.body.result.parameters.transactionNumber,function(err,data){
      if (err) {
        resObj={
          "speech": "",
          "messages": [
            {
              "type": 2,
              "platform": "facebook",
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
          "type": 2,
          "platform": "facebook",
          "title": "Hi "+req.body.result.parameters.userName +", Your Incident has been raised successfully with high-priority and our service agent will get back to you within 24 hours regarding your issue. Please note your incident id for future reference : "+data.result.number
          +". \nAn acknowledgement SMS will be sent to you with incident id to your Phone number "+req.body.result.parameters.phoneNumber
          +".\nFor any queries regarding your issue, please call our customer care center. What do you want to do next?",
          "replies": [
            "Exit",
            "Main menu"
          ]
        }
        ]
      };
    }
      console.log('response : ',res);
      console.log('resobj : ',resObj);
      res.json(resObj);
    });
  }
  if(req.body.result.action === 'incident_status'){
    var resObj = {}  ;
    serviceNowApi.getIncident(req.body.result.parameters.incidentId,function(err,data) {
      if (err) {
        resObj={
          "speech": "",
          "messages": [
            {
            "type": 2,
            "platform": "facebook",
            "title": "Sorry! There was an error while processing your request. Please try again",
            "replies": [
              "Main menu"
            ]
            }
          ]
        };
      }
      else{
        if (data.error != 'undifiend' ){
          if(data.error.message == 'No Record found'){
            resObj= {            
           "speech": "",
           "messages": [
              {
            "type": 2,
             "platform": "facebook",
             "title": "Entered incident id is not found!",
             "replies": [
              "Try Again",
              "Main Menu"
                ]
               }
            ]
            }
          }
        }
        else{
          var state = data.result[0].state;
          if(state == 1){
            resObj={
              "speech": "",
              "messages": [
                {
                "type": 2,
                "platform": "facebook",
                "title": "Status of your incident id \n"+req.body.result.parameters.incidentId + " is : \'New\'.\nWhat do you wanna do next?",
                "replies": [
                  "Exit",
                  "Main menu"
                ]
                }
              ]
            };
          }
          else if(state == 2){
            resObj={
              "speech": "",
              "messages": [
                {
                "type": 2,
                "platform": "facebook",
                "title": "Status of your incident id \n"+req.body.result.parameters.incidentId + " is : \'In Progress\'.\nWhat do you wanna do next?",
                "replies": [
                  "Exit",
                  "Main menu"
                ]
                }
              ]
            };
          }
          else if(state == 3){
            resObj={
              "speech": "",
              "messages": [
                {
                "type": 2,
                "platform": "facebook",
                "title": "Status of your incident id \n"+req.body.result.parameters.incidentId + " is : \'On Hold\'.\nWhat do you wanna do next?",
                "replies": [
                  "Exit",
                  "Main menu"
                ]
                }
              ]
            };
          }
          else if(state == 6){
            resObj={
              "speech": "",
              "messages": [
                {
                "type": 2,
                "platform": "facebook",
                "title": "Status of your incident id \n"+req.body.result.parameters.incidentId + " is : \'Resolved\'.\nWhat do you wanna do next?",
                "replies": [
                  "Exit",
                  "Main menu"
                ]
                }
              ]
            };
          }
          else if(state == 7){
            resObj={
              "speech": "",
              "messages": [
                {
                "type": 2,
                "platform": "facebook",
                "title": "Status of your incident id \n"+req.body.result.parameters.incidentId + " is : \'Closed\'.\nWhat do you wanna do next?",
                "replies": [
                  "Exit",
                  "Main menu"
                ]
                }
              ]
            };
          }
          else if(state == 8){
            resObj={
              "speech": "",
              "messages": [
                {
                "type": 2,
                "platform": "facebook",
                "title": "Status of your incident id \n"+req.body.result.parameters.incidentId + " is : \'Canceled\'.\nWhat do you wanna do next?",
                "replies": [
                  "Exit",
                  "Main menu"
                ]
                }
              ]
            };
          }          
        }
      }      
      res.json(resObj);
    });    
  }
});


app.listen(process.env.port||process.env.PORT||3000, () => console.log('Example app listening on port 3000!'))