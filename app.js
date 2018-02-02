const express = require('express')
const app = express()
const bodyparser = require('body-parser')
app.use(bodyparser.json());

app.post('/pioneerServiceNow', (req, res) =>{ 
  console.log(req.body);
  if(req.body.result.action === 'create_incident_category1'){    
      var resObj= {
        "speech": "Hello Your result "+req.body.result.parameters.userName,
        "displayText": "result",
        "data": {"result": "result"},
        "source": "dialogflow"
      }      
  } 
res.send(resObj)});





app.listen(process.env.port||process.env.PORT||3000, () => console.log('Example app listening on port 3000!'))