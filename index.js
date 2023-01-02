const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();

//node server
const server = require('http').createServer(app);
const io = require('socket.io')(server);

//Mensaje de sockets
io.on('connection', client => {
    console.log('cliente conectado')
    client.on('disconnect', () => { console.log('cliente desconectado') });
});
//path publico
const publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));

server.listen(process.env.PORT, (err) => {
    if (err) throw new Error(err);
    console.log('Servidor corriendo en puerto', 3001)
});