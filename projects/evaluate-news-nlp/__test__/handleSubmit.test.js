import { handleSubmit } from '../src/client/js/formHandler'

describe("Testing the submit functionality",()=>{
    test("Testing the postData() function", () => {
        expect(handleSubmit).toBeDefined();
    })
});