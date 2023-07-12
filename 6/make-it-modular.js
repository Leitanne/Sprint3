const filtrarExtensiones = require('./mymodule');
const process = require ('process');

const ls = process.argv[2];
const extension = process.argv[3];

const llamadaModulo = filtrarExtensiones(ls, extension, (error, filtro) => {
    if(error == null){
        filtro.forEach(file => console.log(file));
    }else{
        console.log('Error al acceder al directorio');
    }
});
