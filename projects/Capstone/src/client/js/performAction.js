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
  //  console.log(countdown);
  //  console.log(arriveDate);
  //  console.log(departureDate);
  //  console.log(d);


    postData('http://localhost:8081/getCoordinates',{text: city})
    .then(function(data){
        //console.log(data);
        //const country = data.geonames[0].countryName
        const weatherData= postData('http://localhost:8081/getWeather',{latitude: data.geonames[0].lat, longitude: data.geonames[0].lng, country: data.geonames[0].countryName, count:countdown});
       // const tempData = postData('http://localhost:8081/addCoordinates', {latitude: data.geonames[0].lat, longitude: data.geonames[0].lng, country: data.geonames[0].countryName, date: today, aDate: arriveDate, count: countdown}) //post Data with new information
        return weatherData;
    }).then(weatherData=>{
        //console.log(weatherData);
        const tempData = postData('http://localhost:8081/addCoordinates', {maxTemp: weatherData.max_temp, minTemp: weatherData.min_temp, feel: weatherData.weather.description, date:today, aDate: arriveDate, dDate: departureDate, count:countdown}); //post Data with new information
        return tempData;
    }).then(tempData=>{
        console.log(tempData);
        updateUI(tempData);
    });
}

export {performAction}

//fix where listening is happening