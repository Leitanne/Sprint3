const fs = require('fs');
const process = require('process');

let content = fs.readFileSync(process.argv[2]);

let lines = content.toString().split('\n');
let numberOfLines = lines.length;

console.log(numberOfLines - 1);
