const updateUI = (allData, imageURL) => { 
    try{
        //console.log(allData);
        document.getElementById('high').innerHTML =  `High Temperatures: ${allData.maxTemp}`; 
        document.getElementById('low').innerHTML =  `Low Temperatures: ${allData.minTemp}`; 
        document.getElementById('feel').innerHTML =  `Looks like ${allData.feel}`; 
        document.getElementById('date').innerHTML =  `Today is ${allData.date}`; 
        document.getElementById('count').innerHTML =  `Your trip is in ${allData.count} days and is ${allData.length} days long`; 
        document.getElementById('image').setAttribute('src', imageURL);


    }catch(error){
        console.log("error at updateUI", error); //error handling
    }
}
export { updateUI }
