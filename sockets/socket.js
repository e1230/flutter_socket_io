const { io } = require('../index');
const Band = require('../models/band');
const Bands = require('../models/bands');

const bands = new Bands();

bands.addBand(new Band('Queen'));
bands.addBand(new Band('metallica'));
bands.addBand(new Band('SOAD'));
bands.addBand(new Band('LiSA'));
//Mensaje de sockets
io.on('connection', client => {
    console.log('cliente conectado')
    client.emit('active-bands', bands.getBands())
    client.on('disconnect', () => { console.log('cliente desconectado') });
    client.on('mensaje', (payload) => {
        console.log('mensaje!!!', payload.nombre);
        io.emit('mensaje', { admin: 'nuevo mensaje' })
    });
    client.on('vote-band', (payload) => {
        bands.voteBand(payload.id);
        io.emit('active-bands', bands.getBands())
    })
    // client.on('nuevo-mensaje', (payload) => {

    //     io.emit('nuevo-mensaje', payload)
    // })
});