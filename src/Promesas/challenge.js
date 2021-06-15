const fetchData = require('../Utils/fetchData');

const API = 'https://rickandmortyapi.com/api/character/';

fetchData(API)
.then(data => {
    console.log(data.info.count);
    return fetchData(`${API}${data.results[0].id}`) //Se hace la peticion lo cual va a permitir que se vuelva a hacer una nueva peticion 
})
.then(data => {//volver a obtener la informacion 
    console.log(data.name)
    return fetchData(data.origin.url)
})
.then(data => {
    console.log(data.dimension)
})
.catch(err => console.error(err));