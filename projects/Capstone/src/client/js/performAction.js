import {postData} from './postData'
import {updateUI} from './updateUI'

// Create a new date instance dynamically with JS
let d = new Date();
let today = (d.getMonth()+1)+'/'+ d.getDate()+'/'+ d.getFullYear();

function performAction(e){
    const city =  document.getElementById('city').value; 
    const monthA = document.getElementById('monthA').value;
    const dayA = document.getElementById('dayA').value;
    const yearA = document.getElementById('yearA').value;
    const monthD = document.getElementById('monthD').value;
    const dayD = document.getElementById('dayD').value;
    const yearD = document.getElementById('yearD').value;
    let arriveDate = new Date(yearA,monthA-1,dayA);
    let departureDate = new Date (yearD, monthD-1, dayD);
    let countdown = Math.ceil(((arriveDate.getTime()-d.getTime())/(1000*3600*24)));
    let tripLength = Math.ceil(((departureDate.getTime()-arriveDate.getTime())/(1000*3600*24))); //length of trip
    document.getElementById('text').innerHTML = 'Thank you';


    //get coordinates api call
    postData('http://localhost:8081/getCoordinates',{text: city})
    .then(function(data){
        //weatherbit api call
        const weatherData= postData('http://localhost:8081/getWeather',{latitude: data.geonames[0].lat, longitude: data.geonames[0].lng, country: data.geonames[0].countryName, count:countdown});
        return weatherData;
    }).then(weatherData=>{
        //add data to project endpoint
        const tempData = postData('http://localhost:8081/addCoordinates', {maxTemp: weatherData.max_temp, minTemp: weatherData.min_temp, feel: weatherData.weather.description, date:today, aDate: arriveDate, dDate: departureDate, count:countdown, length:tripLength}); //post Data with new information
        return tempData;
    }).then(tempData=>{
        //pixbay api call
        postData('http://localhost:8081/getImage', {visitingCity: city}).then(function(data){
            console.log(data.webformatURL);
            console.log(tempData);
            updateUI(tempData, data.webformatURL);
        }); 
    });
}

export {performAction}