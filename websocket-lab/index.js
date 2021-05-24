const WebSocket = require('ws');
const db = require('./db/db');
const port = 3000;

const server = new WebSocket.Server({ port });

server.on('connection', ws => {

    ws.on('message', message => {

        const id = JSON.parse(message).id;
        
        ws.send(JSON.stringify(db.getEmployeeById(id)));

    });

});