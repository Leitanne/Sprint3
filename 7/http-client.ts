let http__ = require('http');
let process___ = require('process');
let url_ = process.argv[2];

http__.get(url_, (response: any) => {
    response.setEncoding('utf-8');
    response.on('data', (data: string) => {
        console.log(data);
    })
});



