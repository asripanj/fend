import {postData} from './postData'
import {updateUI} from './updateUI'

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

function performAction(e){
    const zip =  document.getElementById('zip').value; 
    const feelings = document.getElementById('feelings').value;

    postData('http://localhost:8081/getTemperature',{text: zip})
    .then(function(data){
        postData('http://localhost:8081/addData', {temperature: data.main.temp, date: newDate, userResp:feelings}); //post Data with new information
    }).then(data=>{
        updateUI(data)
    });
}

export {performAction}

//fix where listening is happening