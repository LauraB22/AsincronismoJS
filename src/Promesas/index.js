const sometimesWillHappen = ()=>{
    return new Promise((resolve, reject)=>{//Estructura de promesa
        if(true){
            resolve ('Muy bien!');
        }else{
            reject('Ups!');
        }
    });
};

sometimesWillHappen()
.then(response =>console.log(response))//Obtener la respuesta
.catch(err =>console.error(err));//Si esto llega a fallar se usa el catch para recibir el error

const sometimesWillHappen2 = () => {
    return new Promise((resolve, reject)=>{
        if(true){
            setTimeout(() => {
                resolve('True');
            }, 2000)
        }else{
            const error = new Error('Ups');
            reject(error);
        }
    });
}

sometimesWillHappen2()
.then(response => console.log(response))
.catch(err => console.error(err));

//Correr varias promesas

Promise.all([sometimesWillHappen(), sometimesWillHappen2()])//Va a ejecutar mas de una promesa y regresa un arreglo con ambas
.then(response =>{
    console.log('Array of results ', response);
})
.catch(err =>{
    console.error(err);
})