import { handleSubmit } from '../src/client/js/formHandler'
const {JSDOM} = require ('jsdom');


describe("Testing the handleSubmit() function",()=>{
    test("Testing the handleSubmit() function", () => {     
        const results = new JSDOM('<div id="name">you look good</div><div id="results"></div>');
        const element = results.window.document.getElementById('results');
               
        handleSubmit('click');
       
        expect(element.innerHTML).toEqual("Agreement: AGREEMENT. Score Tag: P. Confidence: 100. Subjectivity: SUBJECTIVE.");

    })
});

