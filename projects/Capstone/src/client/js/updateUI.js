const updateUI = (allData) => { 
    try{
        console.log(allData);
        document.getElementById('latitude').innerHTML =  `The latitude is ${allData.latitude}`; 
        document.getElementById('longitude').innerHTML =  `The longitude is ${allData.longitude}`; 
        document.getElementById('country').innerHTML =  `The country is ${allData.country}`; 
        document.getElementById('date').innerHTML = `Today is ${allData.date}`;
        document.getElementById('count').innerHTML = `Countdown : ${allData.count} days`;
    }catch(error){
        console.log("error at updateUI", error); //error handling
    }
}
export { updateUI }
