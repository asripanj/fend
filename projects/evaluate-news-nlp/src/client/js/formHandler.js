function handleSubmit(event) {    
    if (document.getElementById('name') != null){
      let formText = document.getElementById('name').value;
    }

      Client.postData('http://localhost:8081/getSentiment',{text: formText})
      .then(data=>{
          Client.updateUI(data) //update UI inside callback
       });
}

export { handleSubmit }
