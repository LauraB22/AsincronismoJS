function sum(num1, num2){
    return num1 + num2;
}

function calc(num1, num2, callback){
    return callback(num1, num2);

}

console.log(calc(6, 2, sum));


function date(callback){
    console.log(new Date);
    setTimeout(function(){
        let date = new Date; //Llamar a callback
        callback(date);
    }, 3000)
}

function PrintDate(dateNow){
    console.log(dateNow);
}

date(PrintDate);