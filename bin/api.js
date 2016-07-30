#!/usr/bin/env node

var server = require('../src/api');
var port = process.env.PORT || 3000;

server.listen(port, function () {
    console.log('Listening on port %s.', port);
});
