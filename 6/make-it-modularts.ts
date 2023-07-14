const filtrarExtensiones = require('./mymodule');
const processIn__ = require ('process');

const ls_ = processIn__.argv[2];
const extension = process.argv[3];

export function filtroModularExtensiones(directory: string, ext: string){
    const llamadaModulo = filtrarExtensiones(directory, ext, (error: Error, filtro: String[]) => {
        if(error == null){
            filtro.forEach(file => console.log(file));
        }else{
            console.log('Error al acceder al directorio');
        }
    });
}

filtroModularExtensiones(ls_, extension);
