const fs = require ('fs');
const path = require ('path');
const process = require ('process');

const ls = process.argv[2];

fs.readdir(ls, (error, list) => {
    if(error == null){
        list.forEach(file => {
            if(path.extname(file) == `.${process.argv[3]}`){
                console.log(file);
            }
        });
    }else{
        console.log('Error al acceder al directorio');
    }
});