import {postData} from './postData'
import {updateUI} from './updateUI'

function handleSubmit(event) {    
  event.preventDefault();
      let formText = document.getElementById('name').value;


  var regex = new RegExp('^[a-zA-Z\\s]+$'); //letters and whitespace only
  if(regex.test(formText){
    document.getElementById('text').innerHTML = 'Thank you';
  }
  else{
    document.getElementById('text').innerHTML = 'Invalid input - letters and whitespace only';
  }

  postData('http://localhost:8081/getSentiment',{text: formText})
  .then(data=>{
    const element = document.getElementById('results');
    updateUI(data, element) //update UI inside callback
  });
}

export { handleSubmit }
