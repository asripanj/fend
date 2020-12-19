function handleSubmit(event) {    
    if (document.getElementById('name') != null){
      let formText = document.getElementById('name').value;
    }

      Client.postData('http://localhost:8081/getSentiment',{text: formText})
      .then(data=>{
          const element = document.getElementById('results');
          Client.updateUI(data, element) //update UI inside callback
       });

       return formText;
}

export { handleSubmit }
