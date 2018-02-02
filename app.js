const express = require('express')
const app = express()
const bodyparser = require('body-parser')
app.use(bodyparser.json());

app.post('/pioneerServiceNow', (req, res) =>{ 
  console.log(req.body);
  if(req.body.result.action === 'create_incident_sub_category1-1'){    
      var resObj= {
        "speech": "Hi "+req.body.result.parameters.userName +", Your Incident has been raised successfully for Category - Bus schedule. Please find the details below.\n"
        +"Description : "+req.body.result.parameters.issueDescription+". A acknowledge SMS will be sent to you with incident id to your Phone number "+req.body.result.parameters.phoneNumber,
        "displayText": "result",
        "data": {"result": "result"},
        "source": "dialogflow"
      }      
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
res.send(resObj)});


/*var request = new sn_ws.RESTMessageV2();
request.setEndpoint('https://dev18442.service-now.com/api/now/table/incident?sysparm_display_value=all');
request.setHttpMethod('POST');

//Eg. UserName="admin", Password="admin" for this code sample.
var user = 'admin';
var password = 'admin';

request.setBasicAuth(user,password);
request.setRequestHeader("Accept","application/json");
request.setRequestHeader('Content-Type','application/json');request.setRequestBody("{\"assigned_to\":\"admin\",\"active\":\"true\",\"caller_id\":\"name\",\"category\":\"Category\",\"comments_and_work_notes\":\"description\",\"priority\":\"2\",\"short_description\":\"description\",\"contact_type\":\"jg\"}");
var response = request.execute();
gs.log(response.getBody());




var requestBody = "{\"assigned_to\":\"admin\",\"active\":\"true\",\"caller_id\":\"name\",\"category\":\"Category\",\"comments_and_work_notes\":\"description\",\"priority\":\"2\",\"short_description\":\"description\",\"contact_type\":\"jg\"}"; 

var client=new XMLHttpRequest();
client.open("post","https://dev18442.service-now.com/api/now/table/incident?sysparm_display_value=all");

client.setRequestHeader('Accept','application/json');
client.setRequestHeader('Content-Type','application/json');

//Eg. UserName="admin", Password="admin" for this code sample.
client.setRequestHeader('Authorization', 'Basic '+btoa('admin'+':'+'admin'));

client.onreadystatechange = function() { 
	if(this.readyState == this.DONE) {
		document.getElementById("response").innerHTML=this.status + this.response; 
	}
}; 
client.send(requestBody);*/

app.listen(process.env.port||process.env.PORT||3000, () => console.log('Example app listening on port 3000!'))