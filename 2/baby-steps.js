var processIn = require("process");
var input = processIn.argv;
function sum(args) {
    var resultado = 0;
    for (var i = 2; i < args.length; i++) {
        resultado += Number(args[i]);
    }
    return resultado;
}
console.log(sum(input));
