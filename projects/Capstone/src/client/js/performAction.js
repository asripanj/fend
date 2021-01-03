// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

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

export {performAction}

//fix where listening is happening