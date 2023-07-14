const fs_ = require('fs');
const process_ = require('node:process');

let input_ = process_.argv[2];

export function readFileAsync(path: String){
    fs_.readFile(path, 'utf-8', (error: Error, data: string) => {
        if(error == null){ 
            let countLines = data.split('\n');
            console.log(countLines.length - 1)
        }else{
            console.log("Ha ocurrido un error");
        }
    });
}

readFileAsync(input_);
