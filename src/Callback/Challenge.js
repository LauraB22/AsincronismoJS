let XMLHttpRequest = require ("xmlhttprequest").XMLHttpRequest //Requerimos 
let api = 'https://rickandmortyapi.com/api/character/'; //API a la que se va a hacer la peticion

function fetchData(url_api, callback){
    let xhttp = new XMLHttpRequest(); //generar la referencia al objeto que necesito
    xhttp.open('GET', url_api, true);//hacer un llamado a una url o una conexion 
    xhttp.onreadystatechange = function (event){
        if(xhttp.readyState === 4){   //Hacer una validacion
            if(xhttp.status === 200){//Estatus en el que se encuentra
                callback(null, JSON.parse(xhttp.responseText));//Es como se va a obtener el llamado
            }else{
                const error = new Error('Error ' + url_api);
                return callback(error, null)
            }
        }
    }
    xhttp.send();
}

fetchData(api, function(error1, data1){
    if(error1) return console.error(error1);
    fetchData(api + data1.results[0].id, function(error2, data2){//Aqui ya se esta haciendo la primer peticion
        if(error2) return console.error(error2);
        fetchData(data2.origin.url, function(error3, data3){
            if(error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        })
    })

})