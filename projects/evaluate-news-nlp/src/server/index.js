// Setup empty JS object to act as endpoint for all routes
projectData = {};

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')
const dotenv = require('dotenv');

const { request } = require('http')

dotenv.config();

//meaning cloud api
const baseURL ='https://api.meaningcloud.com/sentiment-2.1?key=';
const apiKey= process.env.API_KEY;

//console.log(`Your API key is ${process.env.API_KEY}`);
 
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(express.static('dist'))


//console.log(JSON.stringify(mockAPIResponse))
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
   //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse) //.json or .send fixing js file
})

//Get Route
app.get('/all', function(request, response){
    response.send(projectData);
    console.log(projectData);
})

//Post Route
app.post('/addData', addData);

function addData(request, response){
   let data = request.body;
   projectData.sentiment = data.sentiment;
   projectData.userResp = data.userResp;
   response.send(projectData);
}

app.post('/getSentiment',function(request, response){
    const text = request.body.text;
    console.log(text);
    const data = getSentiment(baseURL,text,apiKey);
    return data;

const getSentiment = async (baseURL, text, key)=>{ //from WJ project needs to be changed
    const res = await fetch(baseURL+key+'&lang=en&txt='+text+'&model=general') //fetch api url
    try {
      const data = await res.json();
      return data;
    }  catch(error) {
      console.log("error at get sentiment", error); //error handling
    }
  }

});
  
