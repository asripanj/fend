import {postData} from './postData'
import {updateUI} from './updateUI'

function handleSubmit(event) {    
  event.preventDefault();
      let formText = document.getElementById('name').value;


  const regex = new RegExp('^[a-zA-Z\\s]+$'); //letters and whitespace only
  console.log(regex.test(formtext));
  if(regex.test(formText)){
    document.getElementById('text').innerHTML = 'Thank you';
    postData('http://localhost:8081/getSentiment',{text: formText})
    .then(data=>{
      const element = document.getElementById('results');
      updateUI(data, element) //update UI inside callback
    });
  }
  else{
    document.getElementById('text').innerHTML = 'Invalid input - letters and whitespace only';
  }

 
}

export { handleSubmit }
