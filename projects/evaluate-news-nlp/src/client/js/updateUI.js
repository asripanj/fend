const updateUI = async () => { //from WJ proj needs to be changed
    const request = await fetch('http://localhost:8081/all');
    try{
        const allData = await request.json();
        console.log(allData);
        document.getElementById('results').innerHTML =  `The sentiment is ${allData.sentiment}`; //add to existing html elements
        document.getElementById('content').innerHTML = allData.userResp;
    }catch(error){
        console.log("error at updateUI", error); //error handling
    }
}

export { updateUI }
