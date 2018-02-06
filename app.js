const express = require('express')
const app = express()
const bodyparser = require('body-parser')
var serviceNowApi = require('./serviceNowApi.js')
var resObj = {};
app.use(bodyparser.json());

app.post('/pioneerServiceNow', (req, res) =>{ 
  console.log(req.body);
  if(req.body.result.action === 'create_incident_sub_category1-1'){    
    //serviceNowApi.createIncident(req.body.result.parameters.userName,req.body.result.parameters.issueDescription,'2',function(err,data){
      /*var resObj = {
        "speech": "Hi "+req.body.result.parameters.userName +", Your Incident has been raised successfully and our service agent will get back to you within 48 hours regarding your issue. Please note your incident id for future reference : "+data.result.number
        +". \nAn acknowledgement SMS will be sent to you with incident id to your Phone number "+req.body.result.parameters.phoneNumber
        +".\nFor any queries regarding your issue, please call our customer care center.",
        "displayText": "result",
        "data": {"result": "result"},
        "source": "dialogflow"
      };*/
      var resObj={
      "speech": "",
      "messages": [
        {
          "type": 2,
          "platform": "facebook",
          "title": "Hi,Welcome to Pioneer Travels ServiceNow from node. Choose an option to continue",
          "replies": [
            "Raise a complaint",
            "Complaint Status"
          ]
        }
      ]
    };
      console.log('response : ',res);
      console.log('resobj : ',resObj);
      res.json(resObj);
    //});   
  } 
  if(req.body.result.action === 'create_incident_sub_category1-2'){    
    serviceNowApi.createIncident(req.body.result.parameters.userName,req.body.result.parameters.issueDescription,'2',function(err,data){
      var resObj = {
        "speech": "Hi "+req.body.result.parameters.userName +", Your Incident has been raised successfully and our service agent will get back to you within 48 hours regarding your issue. Please note your incident id for future reference : "+data.result.number
        +". \nAn acknowledgement SMS will be sent to you with incident id to your Phone number "+req.body.result.parameters.phoneNumber
        +".\nFor any queries regarding your issue, please call our customer care center.",
        "displayText": "result",
        "data": {"result": "result"},
        "source": "dialogflow"
      };
      console.log('response : ',res);
      console.log('resobj : ',resObj);
      res.send(resObj);
    });      
  }
  if(req.body.result.action === 'create_incident_sub_category2-1'){    
    serviceNowApi.createIncident(req.body.result.parameters.userName,req.body.result.parameters.issueDescription,'2',function(err,data){
      var resObj = {
        "speech": "Hi "+req.body.result.parameters.userName +", Your Incident has been raised successfully and our service agent will get back to you within 48 hours regarding your issue. Please note your incident id for future reference : "+data.result.number
        +". \nAn acknowledgement SMS will be sent to you with incident id to your Phone number "+req.body.result.parameters.phoneNumber
        +".\nFor any queries regarding your issue, please call our customer care center.",
        "displayText": "result",
        "data": {"result": "result"},
        "source": "dialogflow"
      };
      console.log('response : ',res);
      console.log('resobj : ',resObj);
      res.send(resObj);
    }); 
  }  
  if(req.body.result.action === 'create_incident_sub_category2-2'){    
    serviceNowApi.createIncident(req.body.result.parameters.userName,req.body.result.parameters.issueDescription,'2',function(err,data){
      var resObj = {
        "speech": "Hi "+req.body.result.parameters.userName +", Your Incident has been raised successfully and our service agent will get back to you within 48 hours regarding your issue. Please note your incident id for future reference : "+data.result.number
        +". \nAn acknowledgement SMS will be sent to you with incident id to your Phone number "+req.body.result.parameters.phoneNumber
        +".\nFor any queries regarding your issue, please call our customer care center.",
        "displayText": "result",
        "data": {"result": "result"},
        "source": "dialogflow"
      };
      console.log('response : ',res);
      console.log('resobj : ',resObj);
      res.send(resObj);
    }); 
  }
  if(req.body.result.action === 'create_incident_sub_category3-1'){    
    serviceNowApi.createIncident(req.body.result.parameters.userName,req.body.result.parameters.issueDescription,'2',function(err,data){
      var resObj = {
        "speech": "Hi "+req.body.result.parameters.userName +", Your Incident has been raised successfully and our service agent will get back to you within 48 hours regarding your issue. Please note your incident id for future reference : "+data.result.number
        +". \nAn acknowledgement SMS will be sent to you with incident id to your Phone number "+req.body.result.parameters.phoneNumber
        +".\nFor any queries regarding your issue, please call our customer care center.",
        "displayText": "result",
        "data": {"result": "result"},
        "source": "dialogflow"
      };
      console.log('response : ',res);
      console.log('resobj : ',resObj);
      res.send(resObj);
    }); 
  }
  if(req.body.result.action === 'create_incident_sub_category3-2'){    
    serviceNowApi.createIncident(req.body.result.parameters.userName,req.body.result.parameters.issueDescription,'2',function(err,data){
      var resObj = {
        "speech": "Hi "+req.body.result.parameters.userName +", Your Incident has been raised successfully and our service agent will get back to you within 48 hours regarding your issue. Please note your incident id for future reference : "+data.result.number
        +". \nAn acknowledgement SMS will be sent to you with incident id to your Phone number "+req.body.result.parameters.phoneNumber
        +".\nFor any queries regarding your issue, please call our customer care center.",
        "displayText": "result",
        "data": {"result": "result"},
        "source": "dialogflow"
      };
      console.log('response : ',res);
      console.log('resobj : ',resObj);
      res.send(resObj);
    }); 
  }
  if(req.body.result.action === 'incident_status'){  
    serviceNowApi.getIncident(req.body.result.parameters.incidentId,function(err,data) {
      console.log('After call',data.error)
      if (data.error.message != 'undifiend' && data.error.message == 'No Record found'){
        var resObj= {
          "speech": "Hi,Your Incident id is : "+req.body.result.parameters.incidentId + ",Not Found",
          "displayText": "result",
          "data": {"result": "result"},
          "source": "dialogflow"
        }
      }
      else{
        var resObj= {
          "speech": "Hi,Your Incident id is : "+req.body.result.parameters.incidentId,
          "displayText": "result",
          "data": {"result": "result"},
          "source": "dialogflow"
        }
      }
      
      //res.send(resObj)
    } );
    
  }
});


app.listen(process.env.port||process.env.PORT||3000, () => console.log('Example app listening on port 3000!'))