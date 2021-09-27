// including js file

const apiCallFromNode = require('../src/NodeJsCall');

const express = require('express');
const http = require('http');
const { Http2ServerRequest } = require('http2');
const url = require('url');
const { appendFile } = require('fs');
const { Console } = require('console');

//creating a server

http.createServer((req, res) => {
    req.url === '/ifscfinder';
    apiCallFromNode.callApi(ifsc, function (response) {
        // let ifsccode = req.query.ifsc;
        //  response.json({ ifsc: ifsccode });
        
        console.log(req.params.id);
        res.send(req.params.id);
        ifsc.findById(req.params.id)
            .then((result) => {
                req.statusCode(200).json({
                    ifsc: result,
                });
            })
            .catch((err) => {
                console.log(err);
                res.statusCode(500).json({});
                error.err();
            });

        res.write(response);
        res.end();
    });
}).listen(3000);

console.log('server running on 3000   port');
