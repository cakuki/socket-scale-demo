var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var debug = require('debug')('api');

var processId = Math.random();

io.on('connection', function (socket) {
    var interval;

    debug('a user connected!');

    socket.on('disconnect', function () {
        clearInterval(interval);
    });

    socket.on('set name', function (name) {
        socket._user_name = name;
    });

    socket.on('get name', function (cb) {
        if (cb)
            return cb(socket._user_name, processId);

        socket.emit('message', socket._user_name, processId);
    });

    interval = setInterval(function () {
        socket.emit('datetime', new Date(), processId);
    }, 5000);
});

app.get('/', function (req, res) {
    res.send('It\'s working!');
});

module.exports = server;
