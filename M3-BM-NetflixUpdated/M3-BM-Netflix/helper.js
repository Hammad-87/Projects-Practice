const url = "https://striveschool.herokuapp.com/api/movies/";
//const urlGet = url +'?id='
const urlID = "https://striveschool.herokuapp.com/api/movies/id/"
/* const urlAction = "https://striveschool.herokuapp.com/api/movies/Action";
const urlHorror = "https://striveschool.herokuapp.com/api/movies/Horror";
const urlRomance = "https://striveschool.herokuapp.com/api/movies/Romance"; */


//let cat = ['Action', 'Horror', 'Romance']
//"Authorization" : 'Basic dXNlcjE1OnNISFU1S1dtVkUyNmF2Qzg=',
//"Authorization" : 'Basic ' + btoa("user15:sHHU5KWmVE26avC8"),

const getMoviesByCategory = async(category) => {
  let response = await fetch(url + category, {
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization" : 'Basic dXNlcjE1OnNISFU1S1dtVkUyNmF2Qzg=',
      }),
    });
    return response.json();
}

const getMovie= async(id) => {
  let response = await fetch(urlID + id , {
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

const editMovie = async (id, Info) => {
  let response = await fetch(url + id, {
    method: "PUT",
    body: JSON.stringify(Info),
    headers: new Headers({
      "Content-Type": "application/json",
      "Authorization" : 'Basic dXNlcjE1OnNISFU1S1dtVkUyNmF2Qzg=',
    }),
  });
  return response;
};
const deleteMovie =  async() => {
    let response = await fetch(urlID + id, {
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