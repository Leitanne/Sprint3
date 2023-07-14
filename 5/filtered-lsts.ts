const fs__ = require ('fs');
const path = require ('path');
const process__ = require ('process');

const ls = process.argv[2];
const extensionArg = process.argv[3];

export function readDirectory(directory: string, extension: string){
    fs__.readdir(directory, (error: Error, list: String[]) => {
        if(error == null){
            list.forEach(file => {
                if(path.extname(file) == `.${extension}`){
                    console.log(file);
                }
            });
        }else{
            console.log('Error al acceder al directorio');
        }
    });
}

readDirectory(ls, extensionArg);
