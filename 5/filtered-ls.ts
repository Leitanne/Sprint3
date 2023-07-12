const fs__ = require ('fs');
const path = require ('path');
const process__ = require ('process');

const ls = process.argv[2];

fs__.readdir(ls, (error: Error, list: String[]) => {
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