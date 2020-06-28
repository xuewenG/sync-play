const express = require('express');
const expressWs = require('express-ws');

const app = express();
expressWs(app);

const clients = [];

app.ws('/blog/sync-play/socket/:roomId/:clientId', (ws, req) => {
    const roomId = req.params.roomId;
    const clientId = req.params.clientId;
    console.log(`client connected: ${roomId}, ${clientId}`);
    clients.push({
        roomId,
        clientId,
        socket: ws
    });
    sendCurrentCount();
    ws.on('message', msg => {
        clients.forEach(client => {
            const socket = client.socket;
            if (client.roomId === roomId && client.clientId !== clientId) {
                socket.send(msg);
            }
        });
    });
    ws.on('close', msg => {
        console.log(`client disconnected: ${roomId}, ${clientId}`);
        for (let i = 0; i < clients.length; i++) {
            if (clients[i].clientId === clientId) {
                clients.splice(i, 1);
                break;
            }
        }
        sendCurrentCount();
    })

    function sendCurrentCount() {
        let count = 0;
        const clientMarked = clients.filter(client => {
            return client.roomId === roomId
        });
        clientMarked.forEach(client => {
            const socket = client.socket;
            socket.send(JSON.stringify({
                event: 'count',
                count: clientMarked.length
            }));
        });
    }
});

const port = 80;

app.listen(port);
console.log(`Server running at: http://127.0.0.1:${port}`);
