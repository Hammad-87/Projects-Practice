const url = "https://striveschool.herokuapp.com/api/movies/";
/* const urlAction = "https://striveschool.herokuapp.com/api/movies/Action";
const urlHorror = "https://striveschool.herokuapp.com/api/movies/Horror";
const urlRomance = "https://striveschool.herokuapp.com/api/movies/Romance"; */
//const password = "sHHU5KWmVE26avC8";

const getMoviesByCategory = async(category) => {
  let response = await fetch(url + category, {
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization" : 'Basic dXNlcjE1OnNISFU1S1dtVkUyNmF2Qzg=',
      }),
    });
    return response.json();
}

const saveMovies = async(moviesInfo) => {
    let response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(moviesInfo),
        headers: new Headers({
          "Content-Type": "application/json",
          "Authorization" : 'Basic dXNlcjE1OnNISFU1S1dtVkUyNmF2Qzg=',
        }),
      });
      return response;
}
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


/* const getActionMovies = async() => {
    let response = await fetch(urlAction, {
        headers: new Headers({
          "Content-Type": "application/json",
          "Authorization" : 'Basic dXNlcjE1OnNISFU1S1dtVkUyNmF2Qzg=',
        }),
      });
      return response.json();
}
const getHorrorMovies = async() => {
  let response = await fetch(urlHorror, {
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization" : 'Basic dXNlcjE1OnNISFU1S1dtVkUyNmF2Qzg=',
      }),
    });
    return response.json();
}
const getRomanceMovies = async() => {
  let response = await fetch(urlRomance, {
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization" : 'Basic dXNlcjE1OnNISFU1S1dtVkUyNmF2Qzg=',
      }),
    });
    return response.json();
} */