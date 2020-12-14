const updateUI = (allData) => { //from WJ proj needs to be changed
    try{
        document.getElementById('results').innerHTML =  `Agreement: ${allData.agreement}. Score Tag: ${allData.score_tag}. Confidence: ${allData.confidence}. Subjectivity: ${allData.subjectivity}.`; //add to existing html elements
        document.getElementById('response').innerHTML = allData.userResp;
    }catch(error){
        console.log("error at updateUI", error); //error handling
    }
}

export { updateUI }
