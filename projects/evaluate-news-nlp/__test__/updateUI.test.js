import { updateUI } from '../src/client/js/updateUI'

describe("Testing the updateUI function",()=>{
    test("Testing the postData() function", () => {
        const input = [
            {agreement: 'AGREEMENT', score_tag: 'P', confidence: '100', subjectivity: 'SUBJECTIVE', userResp: 'you look good today'}
        ];

        const output = [];
        
        expect(updateUI).toBeDefined();
    });
});

