const fs = require ('fs');
const path = require ('path');

module.exports = function filtrarExtensiones(ruta, extension, callback){
    fs.readdir(ruta, function(error, lista){
        if(error == null){
            let filtro = [];
            lista.forEach(file => {
                if(path.extname(file) == `.${extension}`){
                    filtro.push(file);
                }
            });
            return callback(null, filtro);
        }else{
            return callback(error);
        }
    });
}