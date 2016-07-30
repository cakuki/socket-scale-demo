var assert = require('chai').assert;
var port = process.env.PORT || 3000;

describe('api', function () {
    var api, client;

    before(function (done) {
        api = require('../src/api').listen(port, done);
    });

    describe('get name', function () {
        beforeEach(function (done) {
            client = require('socket.io-client')('http://localhost:' + port);
            client.on('connect', done);
        });

        it('should return undefined when `get name` called with callback', function (done) {
            client.emit('get name', function (name) {
                assert.equal(name, undefined);
                done();
            });
        });

        it('should emit undefined message when `get name` called', function (done) {
            client.emit('get name');
            client.on('message', function (msg) {
                assert.equal(msg, undefined);
                done();
            });
        });

        it('should return the name when `get name` called with callback after `set name` called with a string', function (done) {
            var testName = 'Achmed';
            client.emit('set name', testName);

            client.emit('get name', function (name) {
                assert.equal(name, testName);
                done();
            });
        });

        it('should emit the name when `get name` called without callback after `set name` called with a string', function (done) {
            var testName = 'Achmed';
            client.emit('set name', testName);

            client.emit('get name');
            client.on('message', function (msg) {
                assert.equal(msg, testName);
                done();
            });
        });
    });

    describe('set name', function () {
        beforeEach(function (done) {
            client = require('socket.io-client')('http://localhost:' + port);
            client.on('connect', done);
        });

        it('should return undefined when `get name` called', function (done) {
            client.emit('get name', function (name) {
                assert.equal(name, undefined);
                done();
            });
        });

        it('should return the name when `get name` called after `set name` called with a string', function (done) {
            var testName = 'Achmed';
            client.emit('set name', testName);

            client.emit('get name', function (name) {
                assert.equal(name, testName);
                done();
            });
        });
    });
});

