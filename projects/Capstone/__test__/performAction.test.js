import { performAction } from '../src/client/js/performAction'

const {JSDOM} = require ('jsdom');


describe("Testing the performAction() function",()=>{
    test("Testing to see if new text appears in id = text as defined in function", () => {     
        document.body.innerHTML = ` 
        <div class ="holder feel">
            <label for="tripDate">Arrival Date?</label>
            <textarea class= "myInput" id="city" placeholder="city" rows="1" cols="4">london</textarea>
            <textarea class= "myInput" id="monthA" placeholder="Month" rows="1" cols="4">1</textarea>
            <textarea class= "myInput" id="dayA" placeholder="Day" rows="1" cols="2">26</textarea>
            <textarea class= "myInput" id="yearA" placeholder="Year" rows="1" cols="3">2021</textarea>
            <label for="tripDate">Departure Date?</label>
            <textarea class= "myInput" id="monthD" placeholder="Month" rows="1" cols="4">2</textarea>
            <textarea class= "myInput" id="dayD" placeholder="Day" rows="1" cols="2">1</textarea>
            <textarea class= "myInput" id="yearD" placeholder="Year" rows="1" cols="3">2021</textarea>
            <button id="generate" type = "submit"> Generate </button>
        </div>
      
        <div class ="holder entry">
            <div class = "title">Most Recent Entry</div>
            <div id="text"></div>
            <div id = "entryHolder">
                <div id = "date"></div> 
                <div id = "high"></div>
                <div id = "low"></div>
                <div id = "feel"></div>
                <div id = "count"></div>
                <img id ="image" src="" alt="destination">
            </div>
        </div>`

        const event = new Event('build');
        performAction(event);

        expect(document.getElementById('text').innerHTML).toEqual('Thank you'); 

    })
});
