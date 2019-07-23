var fs = require('fs');
var http = require('http');
var cors = require('cors');
var express = require('express');
var bodyparser = require('body-parser');

var app = express()
/*app.use(cors({
    origin:'http://127.0.0.1:3000',
    credentials:false,
    
})
);*/
//app.use(bodyparser.json());
var s = null;
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(cors());
app.post('/', function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Content-Type');
    //console.log(req.body);
    s = req.body;
    console.log(s);

    //res.write('form received');
    //console.log(JSON.stringify(states));
    //res.write(JSON.stringify(states));
    res.setHeader('Content-Type','text/plain');
    //res.write("hello world");
    res.redirect("/congrats");
    res.send(JSON.stringify({data:"received buddy"}));
    //res.write(s.body);
    //res.end();
    
});
app.get('/congrats',function(req,res) {
    res.setHeader('Content-Type','text/plain');
    res.sendFile('/home/sachmo/Documents/form-validaion-p1/congrats.html');
    
});

app.listen(4000, ()=> {
    console.log('server running on 4000');
});

/*http.createServer((req, res) => {
    console.log("listening on port 4000");
    console.log(req);
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
      'Access-Control-Max-Age': 2592000, // 30 days
      //add other headers as per requirement 
      'Access-Control-Allow-Headers': 'Origin, Accept, Content-Type'
    };
  
    if (req.method === 'OPTIONS') {
      res.writeHead(204, headers);
      res.end();
      return;
    }
  
    if (['GET', 'POST'].indexOf(req.method) > -1) {
      res.writeHead(200, headers);
      res.end();
      return;
    }
  
    res.writeHead(405, headers);
    res.end(`${req.method} is not allowed for the request.`);
  }).listen(4000);*/