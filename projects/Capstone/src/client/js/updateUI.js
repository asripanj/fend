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

export {updateUI}