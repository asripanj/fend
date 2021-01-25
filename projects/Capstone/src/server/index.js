// Setup empty JS object to act as endpoint for all routes
let projectData = {};

var path = require('path')
const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
const dotenv = require('dotenv');
const fetch = require('node-fetch')


const { request } = require('http')

dotenv.config();

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(express.static('dist'))


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.post('/getCoordinates', async function(request, response){
    const city = request.body.text;
    projectData.city = city;
    const geoURL =`http://api.geonames.org/searchJSON?q=${city}&maxRows=1&username=${process.env.GEO_KEY}`;
    const res = await fetch(geoURL) //fetch api url
      try {
        const data = await res.json();
        response.send(data);
      }  catch(error) {
        console.log("error at get coordinates", error); //error handling
      }
});

//Weatherbit api to get weather data
app.post('/getWeather', async function(request, response){
  const coord = request.body;
  const bitURL =`https://api.weatherbit.io/v2.0/forecast/daily?&lat=${coord.latitude}&lon=${coord.longitude}&key=${process.env.BIT_KEY}`;
  const res = await fetch(bitURL) //fetch api url
    try {
      const data = await res.json();
      response.send(data.data[coord.count]);
    }  catch(error) {
      console.log("error at get weather", error); //error handling
    }
});

//Pixbay api to get pixbay image
app.post('/getImage', async function(request, response){
  const pixURL =`https://pixabay.com/api/?key=${process.env.PIX_KEY}&q=${projectData.city}+city&image_type=photo`;
  const res = await fetch(pixURL) //fetch api url
    try {
      const data = await res.json();
      console.log(data.hits[0].webformatURL);
      response.send(data.hits[0]);
    }  catch(error) {
      console.log("error at get image", error); //error handling
    }
});


//Post Route to add to project endpoint
app.post('/addCoordinates', addCoordinates);

function addCoordinates(request, response){
    let data = request.body;

    projectData.maxTemp = data.maxTemp;
    projectData.minTemp = data.minTemp;
    projectData.feel = data.feel;
    projectData.date = data.date;
    projectData.aDate = data.aDate;
    projectData.dDate = data.dDate;
    projectData.count = data.count;
    projectData.length = data.length;

    console.log(projectData);
    response.send(projectData);
};

app.get('/test', async (req, res) => {
  res.json({message: 'pass!'})
})