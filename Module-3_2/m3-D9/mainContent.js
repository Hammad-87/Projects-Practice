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
       
};

const getProduct =  async(id) => {
  let response = await fetch(url + id, {
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization" : 'Basic dXNlcjE1OnNISFU1S1dtVkUyNmF2Qzg=',
      }),
    });
    return response.json();
     
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

  const editProducts = async (id, productsInfo) => {
    let response = await fetch(url + id, {
      method: "PUT",
      body: JSON.stringify(productsInfo),
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization" : 'Basic dXNlcjE1OnNISFU1S1dtVkUyNmF2Qzg=',
      }),
    });
    return response;
  };

  const deleteProducts =  async() => {
    let response = await fetch(url + id, {
      method: "DELETE",
      headers: new Headers({
          "Content-Type": "application/json",
          "Authorization" : 'Basic dXNlcjE1OnNISFU1S1dtVkUyNmF2Qzg=',
        }),
      });
      return response;
        
};
 
