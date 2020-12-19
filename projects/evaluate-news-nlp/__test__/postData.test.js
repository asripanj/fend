import { postData } from '../src/client/js/postData'

describe("Testing the postData() function",() =>{
    test("Testing if we get the right output from api", () => {
        try{
            expect(postData('http://localhost:8081/getSentiment',{text: 'you look good'})).toEqual({"status":{"code":"0","msg":"OK","credits":"1","remaining_credits":"19987"},"model":"general_en","score_tag":"P","agreement":"AGREEMENT","subjectivity":"SUBJECTIVE","confidence":"100","irony":"NONIRONIC","sentence_list":[{"text":"you look good","inip":"0","endp":"12","bop":"y","confidence":"100","score_tag":"P","agreement":"AGREEMENT","segment_list":[{"text":"you look good","segment_type":"main","inip":"0","endp":"12","confidence":"100","score_tag":"P","agreement":"AGREEMENT","polarity_term_list":[{"text":"good","inip":"9","endp":"12","confidence":"100","score_tag":"P"}]}],"sentimented_entity_list":[],"sentimented_concept_list":[]}],"sentimented_entity_list":[],"sentimented_concept_list":[]});
        }
        catch(error){
            console.log("error at postdata", error); //error handling
        }
    })
});