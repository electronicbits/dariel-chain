const Websocket = require('ws');

const P2P_PORT = process.env.P2P_PORT || 5001;
const peers = process.env.PEERS ? process.env.PEERS.split(',') : [];

//HTTP_PORT=3002 P2P_PORT=5003 PEERS=ws://localhost:50001

class P2pServer {
    constructor(){
        this.blockchain = this.blockchain;
        this.sockets = [];
    }

    listen(){
        const server = new Websocket.Server({ port: P2P_PORT });
        server.on('connection', socket => this.connectSocket(socket));
        console.log(`Listening for peer-to-peer connections on: ${P2P_PORT}`);
    }

    connectSocket(socket){
        this.sockets.push(socket);
        console.log('Socket connected');
    }
}