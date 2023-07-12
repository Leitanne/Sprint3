var net = require('net');
var processInput__ = require('process');
var date = new Date();
var day = String(date.getDate()).padStart(2, '0');
var month = String(date.getMonth() + 1).padStart(2, '0');
var year = String(date.getFullYear());
var hour = String(date.getHours()).padStart(2, '0');
var minutes = String(date.getMinutes()).padStart(2, '0');
var server = net.createServer(function (socket) {
    socket.write("".concat(year, "-").concat(month, "-").concat(day, " ").concat(hour, ":").concat(minutes, "\n"));
    socket.end();
});
server.listen(process.argv[2]);
