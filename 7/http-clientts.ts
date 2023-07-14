let http__ = require('http');
let process___ = require('process');
let url_ = process___.argv[2];

export function httpGet(url: string){
    http__.get(url, (response: any) => {
        response.setEncoding('utf-8');
        response.on('data', (data: string) => {
            console.log(data);
        })
    });
}

httpGet(url_);



