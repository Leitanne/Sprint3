const fs = require('fs');
const process = require('node:process');

let input = process.argv[2];

fs.readFile(input, 'utf-8', (error, data) => {
    if(error == null){
        let countLines = data.split('\n');
        console.log(countLines.length - 1)
    }else{
        console.log("Ha ocurrido un error");
    }
});
