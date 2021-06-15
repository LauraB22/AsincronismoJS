let XMLHttpRequest = require ("xmlhttprequest").XMLHttpRequest //Requerimos 


 const fetchData = (url_api) =>{
     return new Promise((resolve, reject) =>{

    const xhttp = new XMLHttpRequest(); //generar la referencia al objeto que necesito
    xhttp.open('GET', url_api, true);//hacer un llamado a una url o una conexion 
    xhttp.onreadystatechange = (() =>{
        if(xhttp.readyState === 4){
            (xhttp.status ===200)
            ? resolve(JSON.parse(xhttp.responseText))
            : reject(new Error('Error ', url_api))
        }
    });
    xhttp.send();
    });
   
}

module.exports = fetchData;