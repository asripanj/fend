import { postData } from '../src/client/js/postData'

describe("Testing the submit functionality",()=>{
    test("Testing the postData() function", () => {
        expect(postData).toBeDefined();
    })
});