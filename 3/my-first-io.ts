const fs = require('fs');
const processIn_ = require('process');

let content = fs.readFileSync(processIn_.argv[2]);

let lines = content.toString().split('\n');
let numberOfLines = lines.length;

console.log(numberOfLines - 1);
