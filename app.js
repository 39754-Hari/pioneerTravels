const express = require('express')
const app = express()
const bodyparser = require('body-parser')
app.use(bodyparser.json());
app.post('/add', (req, res) => { 
var result = req.body.data1+req.body.data2;
res.send('Addition :'+result);
console.log(req.body)
});
app.post('/divide', (req, res) => { 
if(req.body.result.action === 'movie.tamil'){
var result = req.body.result.parameters.data1/req.body.result.parameters.data2;
res.setHeader('Content-Type', 'application/json');
res.send(JSON.stringify({
    "speech": "Hello Your result : "+result,
    "displayText": result,
    "data": {"result": result},
    "source": "dialogflow"
}));
console.log(req.body)
}
if(req.body.result.action === 'movie.telugu'){
var result = req.body.result.parameters.data1*req.body.result.parameters.data2;
res.setHeader('Content-Type', 'application/json');
res.send(JSON.stringify({
    "speech": "Hello Your result : "+result,
    "displayText": result,
    "data": {"result": result},
    "source": "dialogflow"
}));
console.log(req.body)
}
else {
	console.log(req.body)
}
});

app.get('/multiply/', (req, res) => { 
var result = req.query.data1*req.query.data2;
res.send('Product :'+result);
console.log(req.query)
});



app.get('/hi', (req, res) => res.send('Hello There!'))
app.post('/', (req, res) =>{ 
  console.log(req.body);
var resObj= {
  "speech": "Hello Your result ",
  "displayText": "result",
  "data": {"result": "result"},
  "source": "dialogflow"
}
res.send(resObj)});





app.listen(process.env.port||process.env.PORT||3000, () => console.log('Example app listening on port 3000!'))