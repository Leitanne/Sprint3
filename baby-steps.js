const process = require('node:process');

let input = process.argv;

function sum(args){
    let resultado = 0;

    for(let i=2; i < args.length; i++){
        resultado += Number(args[i]);
    }
    
    return resultado;
}

console.log(sum(input));