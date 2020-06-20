const express = require('express');
const expressWs = require('express-ws');

const app = express();

expressWs(app);

const clients = [];

app.ws('/blog/sync-play/socket/:clientId', (ws, req) => {
    const clientId = req.params.clientId;
    console.log(`client connected: ${clientId}`);
    clients.push({
        clientId: clientId,
        socket: ws
    });
    sendCurrentCount();
    ws.on('message', function (msg) {
        clients.forEach(client => {
            const socket = client.socket;
            if (socket !== this) {
                socket.send(msg);
            }
        });
    });
    ws.on('close', function (msg) {
        console.log('client disconnected: ');
        for (let i = 0; i < clients.length; i++) {
            if (clients[i].socket === this) {
                clients.splice(i, 1);
            }
        }
        sendCurrentCount();
    })
});

function sendCurrentCount() {
    clients.forEach(client => {
        const socket = client.socket;
        socket.send(JSON.stringify({
            event: 'count',
            count: clients.length
        }));
    });
}

let port = 80;

app.listen(port);

console.log(`Server running at: http://127.0.0.1:${port}`);
