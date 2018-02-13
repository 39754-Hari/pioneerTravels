const express = require('express')
const app = express()
const bodyparser = require('body-parser')
var serviceNowApi = require('./serviceNowApi')
var facebook = require('./facebook')
var slack = require('./slack')
var google = require('./googleAssitant')
const { ActionsSdkApp } = require('actions-on-google');
app.use(bodyparser.json());

app.post('/pioneerServiceNow', (req, res) =>{ 
  console.log('initial req:',req.body.originalRequest.source);
  if(req.body.originalRequest.source === 'facebook'){
    facebook.operation(req,res);
  }
  else if(req.body.originalRequest.source === 'slack'){
    slack.operation(req,res);
  }
  else if(req.body.originalRequest.source === 'google'){    
    const app = new ActionsSdkApp({ request: req, response: res });
    app.handleRequest(google);
    //google.operation(req,res);
  }
});

  


app.listen(process.env.port||process.env.PORT||3000, () => console.log('App started Running!'));