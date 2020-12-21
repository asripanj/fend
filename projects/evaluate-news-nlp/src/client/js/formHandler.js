import {postData} from './postData'
import {updateUI} from './updateUI'

function handleSubmit(event) {    
  event.preventDefault();
      let formText = document.getElementById('name').value;
      document.getElementById('text').innerHTML = 'Thank you';

  postData('http://localhost:8081/getSentiment',{text: formText})
  .then(data=>{
    const element = document.getElementById('results');
    updateUI(data, element) //update UI inside callback
  });
}

export { handleSubmit }
