const fs = require('fs');
const processIn_ = require('process');

let filePath = processIn_.argv[2];

export function fileReader(path: string){
    let content = fs.readFileSync(path);

    let lines: string[] = String(content).split('\n');
    let numberOfLines = lines.length;

    console.log(numberOfLines - 1);
}

fileReader(filePath);