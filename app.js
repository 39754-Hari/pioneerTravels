const express = require('express')
const app = express()
const bodyparser = require('body-parser')
var serviceNowApi = require('./serviceNowApi.js')
var facebook = require('./facebook.js')
var slack = require('./slack.js')
var google = require('./googleAssitant.js')
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
    google.operation(req,res);
  }
});

  


app.listen(process.env.port||process.env.PORT||3000, () => console.log('App started Running!'));