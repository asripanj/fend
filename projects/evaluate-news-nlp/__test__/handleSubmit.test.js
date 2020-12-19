import { handleSubmit } from '../src/client/js/formHandler'
const {JSDOM} = require ('jsdom');


describe("Testing the handleSubmit() function",()=>{
    test("Testing the handleSubmit() function", () => {     
        document.body.innerHTML = `<div id="name">you look good</div><div id="text"></div>`

        const event = new Event('build');
        handleSubmit(event);

        expect(document.getElementById('text').innerHTML).toEqual('you look good');

    })
});

//"Agreement: AGREEMENT. Score Tag: P. Confidence: 100. Subjectivity: SUBJECTIVE."