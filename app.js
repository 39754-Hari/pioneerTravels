const express = require('express')
const app = express()
const bodyparser = require('body-parser')
var serviceNowApi = require('./serviceNowApi.js')
app.use(bodyparser.json());

app.post('/pioneerServiceNow', (req, res) =>{ 
  var resObj = {};
  console.log(req.body);
  if(req.body.result.action === 'create_incident_sub_category1-1'){    
    serviceNowApi.createincident(req.body.result.parameters.userName,req.body.result.parameters.issueDescription,'2',function(err,data){
      resObj= {
        "speech": "Hi "+req.body.result.parameters.userName +", Your Incident has been raised successfully. Please find the details below.\n"
        +"Incident Id : "+req.body.result.parameters.issueDescription+". A acknowledge SMS will be sent to you with incident id to your Phone number "+req.body.result.parameters.phoneNumber,
        "displayText": "result",
        "data": {"result": "result"},
        "source": "dialogflow"
      }   
    });   
  } 
  if(req.body.result.action === 'create_incident_sub_category1-2'){    
    var resObj= {
      "speech": "Hi "+req.body.result.parameters.userName +", Your Incident has been raised successfully for Category - Boarding. Please find the details below.\n"
      +"Description : "+req.body.result.parameters.issueDescription+". Location : "+req.body.result.parameters.location+". A acknowledge SMS will be sent to you with incident id to your Phone number "+req.body.result.parameters.phoneNumber,
      "displayText": "result",
      "data": {"result": "result"},
      "source": "dialogflow"
    }      
  }
  if(req.body.result.action === 'create_incident_sub_category2-1'){    
    var resObj= {
      "speech": "Hi "+req.body.result.parameters.userName +", Your Incident has been raised successfully for category - Maintenance. Please find the details below.\n"
      +"Description : "+req.body.result.parameters.issueDescription+". BusNumber : "+req.body.result.parameters.busNumber+". A acknowledge SMS will be sent to you with incident id to your Phone number "+req.body.result.parameters.phoneNumber,
      "displayText": "result",
      "data": {"result": "result"},
      "source": "dialogflow"
    }
  }  
  if(req.body.result.action === 'create_incident_sub_category2-2'){    
    var resObj= {
      "speech": "Hi "+req.body.result.parameters.userName +", Your Incident has been raised successfully for Category - Food/hospitality. Please find the details below.\n"
      +"Description : "+req.body.result.parameters.issueDescription+". BusNumber : "+req.body.result.parameters.busNumber+". A acknowledge SMS will be sent to you with incident id to your Phone number "+req.body.result.parameters.phoneNumber,
      "displayText": "result",
      "data": {"result": "result"},
      "source": "dialogflow"
    }
  }
  if(req.body.result.action === 'create_incident_sub_category3-1'){    
    var resObj= {
      "speech": "Hi "+req.body.result.parameters.userName +", Your Incident has been raised successfully for Category - Failed payment. Please find the details below.\n"
      +"Description : "+req.body.result.parameters.issueDescription+". Transaction number : "+req.body.result.parameters.transactionNumber+". A acknowledge SMS will be sent to you with incident id to your Phone number "+req.body.result.parameters.phoneNumber,
      "displayText": "result",
      "data": {"result": "result"},
      "source": "dialogflow"
    }
  }
  if(req.body.result.action === 'create_incident_sub_category3-2'){    
    var resObj= {
      "speech": "Hi "+req.body.result.parameters.userName +", Your Incident has been raised successfully for Category - Refund. Please find the details below.\n"
      +"Description : "+req.body.result.parameters.issueDescription+". Transaction number : "+req.body.result.parameters.transactionNumber+". A acknowledge SMS will be sent to you with incident id to your Phone number "+req.body.result.parameters.phoneNumber,
      "displayText": "result",
      "data": {"result": "result"},
      "source": "dialogflow"
    }
  }
  if(req.body.result.action === 'incident_status'){    
    var resObj= {
      "speech": "Hi,Your Incident id is : "+req.body.result.parameters.incidentId,
      "displayText": "result",
      "data": {"result": "result"},
      "source": "dialogflow"
    }
  }
res.send(resObj)});


app.listen(process.env.port||process.env.PORT||3000, () => console.log('Example app listening on port 3000!'))