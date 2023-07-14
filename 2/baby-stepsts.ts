const processIn = require("process");

let input = processIn.argv;

export function sum(args: string[]) : number{
    let resultado: number = 0;

    for(let i: number = 2; i < args.length; i++){
        resultado += Number(args[i]);
    }
    
    return resultado;
}

console.log(sum(input));