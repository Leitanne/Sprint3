const net = require('net');
const processInput__ = require('process');

let port = Number(process.argv[2]);
let server: any;

export function openServer(){
    let date = new Date();
    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let year = String(date.getFullYear());
    let hour = String(date.getHours()).padStart(2, '0');
    let minutes = String(date.getMinutes()).padStart(2, '0');

    server = net.createServer((socket: any) => {
        socket.write(`${year}-${month}-${day} ${hour}:${minutes}\n`);
        socket.end();
    });
}

openServer();
if (server instanceof net.Server){
    server.listen(port);
}




