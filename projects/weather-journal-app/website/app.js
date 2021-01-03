/* Global Variables */
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = process.env.API_KEY; //check if any dependencies needed


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

document.getElementById('generate').addEventListener('click', performAction); //Listen for click

//function performed upon generate
function performAction(e){
    const zip =  document.getElementById('zip').value; 
    const feelings = document.getElementById('feelings').value;

    getTemperature(baseURL,zip, apiKey) //get temperature data based on zip
    .then(function(data){
        postData('/addData', {temperature: data.main.temp, date: newDate, userResp:feelings}); //post Data with new information
    }).then(()=>
        updateUI() //update UI inside callback
    );
    
}

const getTemperature = async (baseURL, zip, key)=>{
  const res = await fetch(baseURL+zip+',us&appid='+key) //fetch api url
  try {
    const data = await res.json();
    return data;
  }  catch(error) {
    console.log("error at get temperature", error); //error handling
  }
}

const postData = async(url ='', data = {})=>{
    const response= await fetch(url,{
        method: 'POST', //post route
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), //body type matches content type
    });

    try{
        const newData = await response.json();
        return newData;
    }catch(error){
        console.log("error at postdata", error); //error handling
    }
}

const updateUI = async () => {
    const request = await fetch('/all');
    try{
        const allData = await request.json();
        console.log(allData);
        document.getElementById('temp').innerHTML =  `The temperature is ${allData.temperature} Farenheit`; //add to existing html elements
        document.getElementById('date').innerHTML = `Today is ${allData.date}`;
        document.getElementById('content').innerHTML = allData.userResp;
    }catch(error){
        console.log("error at updateUI", error); //error handling
    }
}