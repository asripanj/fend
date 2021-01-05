import { performAction } from './js/performAction'
import { postData } from './js/postData'
import { updateUI } from './js/updateUI'

import './styles/style.scss'

document.getElementById('generate').addEventListener('click', performAction); //Listen for click

alert("I EXIST")
console.log("CHANGE!!");

export {
    performAction,
    postData,
    updateUI
   }
   
   //fix up the imports on this files and all other files