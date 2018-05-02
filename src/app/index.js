// import { WSASYSCALLFAILURE } from 'constants';

const express = require('express');
const bodyParser = require('body-parser');
const Blockchain = require('../blockchain');
const P2pServer = require('./p2p-server'); 

const HTTP_PORT = process.env.HTTP_PORT || 3001;

// HTTP_PORT=3002 npm run dev

const app = express();
const bc = new Blockchain();
const p2pServer = new P2pServer(bc);

app.use(bodyParser.json());

app.get('/blocks', (req, res) => {
    res.json(bc.chain);
});

app.post('/mine', (req, res) => {
    const block = bc.addBlock(req.body.data); 
    console.log(`New block added: ${block.toString()}`);

    res.redirect('/blocks'); 
});

console.log('here 1');
app.listen(HTTP_PORT, () => console.log(`Listening on port ${HTTP_PORT}`)); //starts the web application
console.log('here 2');
p2pServer.listen(); //starts the websocket server
console.log('here 3');