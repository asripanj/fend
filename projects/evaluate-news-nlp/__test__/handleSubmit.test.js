import { handleSubmit } from '../src/client/js/formHandler'
const {JSDOM} = require ('jsdom');


describe("Testing the handleSubmit() function",()=>{
    test("Testing to see if new text appears in id = text as defined in function", () => {     
        document.body.innerHTML = `<div id="name">you look good</div><div id="text"></div>`

        const event = new Event('build');
        handleSubmit(event);

        expect(document.getElementById('text').innerHTML).toEqual('Thank you'); 

    })
});
