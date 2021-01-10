const updateUI = (allData) => { 
    try{
        console.log(allData);
        document.getElementById('high').innerHTML =  `High Temperatures: ${allData.maxTemp}`; 
        document.getElementById('low').innerHTML =  `Low Temperatures: ${allData.minTemp}`; 
        document.getElementById('feel').innerHTML =  `Looks like ${allData.feel}`; 
        document.getElementById('date').innerHTML =  `Today is ${allData.date}`; 
        document.getElementById('count').innerHTML =  `Countdown: ${allData.count}`; 


    }catch(error){
        console.log("error at updateUI", error); //error handling
    }
}
export { updateUI }
