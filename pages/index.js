var express = require('express');
var app = express();
app.get('/python', chamandoPython);
function chamandoPython(req, res) {
    var spawn = require('child_process').spawn;
    var process = spawn('python', ['./script.py']);
    process.stdout.on('data', function (data) {
        res.send(data.toString());
    });
}