import { handleSubmit } from '../src/client/js/formHandler'
const {JSDOM} = require ('jsdom');


describe("Testing the handleSubmit() function",()=>{
    test("Testing the handleSubmit() function", () => {     
        const results = new JSDOM('<div id="results"></div>');
        
        document.getElementById('name').innerHTML = 'you look good';
       
        handleSubmit('click');
       
        const element = results.window.document.getElementById('results');
        expect(element.innerHTML).toEqual("Agreement: AGREEMENT. Score Tag: P. Confidence: 100. Subjectivity: SUBJECTIVE.");

    })
});

