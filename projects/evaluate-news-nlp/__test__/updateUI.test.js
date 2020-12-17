import { updateUI } from '../src/client/js/updateUI'
const {JSDOM} = require ('jsdom');

describe("Testing the updateUI function",()=>{
    test("Testing if html updated", () => {
        const results = new JSDOM('<div id="results"></div>');
        const allData = {agreement: 'AGREEMENT', score_tag: 'P', confidence: '100', subjectivity: 'SUBJECTIVE' };

        updateUI(allData);
        const element = results.window.document.getElementById('results');
        expect(element.innerHTML).toEqual("Agreement: AGREEMENT. Score Tag: P. Confidence: 100. Subjectivity: SUBJECTIVE.");
    });
});