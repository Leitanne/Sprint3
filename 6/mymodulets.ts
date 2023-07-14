const fsIn = require ('fs');
const pathIn = require ('path');

module.exports = function filtrarExtensiones(ruta: String, extension: String, callback: any){
    fsIn.readdir(ruta, function(error: Error, lista: String[]){
        if(error == null){
            let filtro: String[] = [];
            lista.forEach(file => {
                if(pathIn.extname(file) == `.${extension}`){
                    filtro.push(file);
                }
            });
            return callback(null, filtro);
        }else{
            return callback(error);
        }
    });
}