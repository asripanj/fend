// Setup empty JS object to act as endpoint for all routes
projectData = {};

var path = require('path')
const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
const dotenv = require('dotenv');
const fetch = require('node-fetch')


const { request } = require('http')

dotenv.config();

//open weather map api
//const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
//const apiKey= process.env.API_KEY;





const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(express.static('dist'))


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
   //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

/*
//getTemp post
app.post('/getTemperature', async function(request, response){
    const zip = request.body.text;
    const res = await fetch(baseURL+zip+',us&appid='+apiKey) //fetch api url
      try {
        const data = await res.json();
        response.send(data);
      }  catch(error) {
        console.log("error at get temperature", error); //error handling
      }
    });

*/

app.post('/getCoordinates', async function(request, response){
    const city = request.body.text;
    const geoURL =`http://api.geonames.org/searchJSON?q=${city}&maxRows=1&username=${process.env.GEO_KEY}`;
    const res = await fetch(geoURL) //fetch api url
      try {
        const data = await res.json();
        response.send(data);
      }  catch(error) {
        console.log("error at get coordinates", error); //error handling
      }
});


app.post('/getWeather', async function(request, response){
  const coord = request.body;
  //console.log(coord);
  const bitURL =`https://api.weatherbit.io/v2.0/forecast/daily?&lat=${coord.latitude}&lon=${coord.longitude}&key=${process.env.BIT_KEY}`;
  const res = await fetch(bitURL) //fetch api url
    try {
      const data = await res.json();
      //console.log(data);
      response.send(data.data[coord.count]);
    }  catch(error) {
      console.log("error at get coordinates", error); //error handling
    }
});

//Post Route
app.post('/addCoordinates', addCoordinates);

function addCoordinates(request, response){
    let data = request.body;
    //console.log(data);
    projectData.maxTemp = data.maxTemp;
    projectData.minTemp = data.minTemp;
    projectData.feel = data.feel;
    projectData.date = data.date;
    projectData.aDate = data.aDate;
    projectData.dDate = data.dDate;
    projectData.count = data.count

    console.log(projectData);
    response.send(projectData);
}
