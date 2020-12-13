function handleSubmit(event) {
    event.preventDefault()

      // check what text was put into the form field
      let formText = document.getElementById('name').value
      //Client.checkForName(formText)
      Client.postData('http://localhost:8081/getSentiment',{text: formText})
      .then(function(data){//fix the post data
          Client.postData('http://localhost:8081/addData', {sentiment: data.score_tag, userResp:data.text}); //post Data with new information
      }).then(()=>
          Client.updateUI() //update UI inside callback
      );
}

export { handleSubmit }
