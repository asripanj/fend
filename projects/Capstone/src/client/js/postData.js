const postData = async(url ='', data = {})=>{
    const response= await fetch(url,{
        method: 'POST', //post route
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), //body type matches content type
    });

    try{
        const newData = await response.json();
        return newData;
        console.log("::Data Returned::");
    }catch(error){
        console.log("error at postdata", error); //error handling
    }
}

export {postData}