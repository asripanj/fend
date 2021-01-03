const getTemperature = async (baseURL, zip, key)=>{
    const res = await fetch(baseURL+zip+',us&appid='+key) //fetch api url
    try {
      const data = await res.json();
      return data;
    }  catch(error) {
      console.log("error at get temperature", error); //error handling
    }
  }

  export {getTemperature}