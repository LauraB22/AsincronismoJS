const doSomethingAsync = () =>{
    return new Promise((resolve, reject) =>{
        (true)
        ? setTimeout(() => resolve('Do something async'), 3000)
        : reject(new Error('Test error'))
    });
}

const doSomething = async() =>{//construccion de async
    const something = await doSomethingAsync() //esto va a pasar hasta que se resuelva
    console.log(something);
}

console.log('Before');
doSomething();
console.log('After');


//capturar los errores
const anotherfunction = async () =>{
    try{
        const something = await doSomethingAsync();
        console.log(something)
    }catch(error){
        console.error(error)
    }
}

console.log('Before1');
anotherfunction();
console.log('After1');