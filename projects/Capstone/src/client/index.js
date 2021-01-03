import { getTemperature } from './js/getData'
import { performAction } from './js/performAction'
import { postData } from './js/postData'
import { updateUI } from './js/updateUI'

import './styles/styles.scss'

document.getElementById('generate').addEventListener('click', performAction); //Listen for click

alert("I EXIST")
console.log("CHANGE!!");

export {
    getTemperature,
    performAction,
    postData,
    updateUI
   }
   
   //fix up the imports on this files and all other files