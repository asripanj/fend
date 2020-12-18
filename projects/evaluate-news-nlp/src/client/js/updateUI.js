const updateUI = (allData, element) => { //from WJ proj needs to be changed
    try{
        element.innerHTML =  `Agreement: ${allData.agreement}. Score Tag: ${allData.score_tag}. Confidence: ${allData.confidence}. Subjectivity: ${allData.subjectivity}.`; //add to existing html elements
    }catch(error){
        console.log("error at updateUI", error); //error handling
    }
}

export { updateUI }
