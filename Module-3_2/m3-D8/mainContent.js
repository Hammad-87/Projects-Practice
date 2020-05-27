const url = "https://striveschool.herokuapp.com/api/product/"
//const passWord = "sHHU5KWmVE26avC8";

const getProducts =  async() => {
    let response = await fetch(url, {
        headers: new Headers({
          "Content-Type": "application/json",
          "Authorization" : 'Basic dXNlcjE1OnNISFU1S1dtVkUyNmF2Qzg=',
        }),
      });
      return response.json();
      //console.log(response);   
};

const saveProducts = async (productsInfo) => {
    let response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(productsInfo),
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization" : 'Basic dXNlcjE1OnNISFU1S1dtVkUyNmF2Qzg=',
      }),
    });
    return response;
  };
 
