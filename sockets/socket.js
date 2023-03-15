const { io } = require('../index');
//Mensaje de sockets
io.on('connection', client => {
    console.log('cliente conectado')
    client.on('disconnect', () => { console.log('cliente desconectado') });
    client.on('mensaje', (payload) => {
        console.log('mensaje!!!', payload.nombre);
        io.emit('mensaje', { admin: 'nuevo mensaje' })
    })
    client.on('nuevo-mensaje', (payload) => {

        io.emit('nuevo-mensaje', payload)
    })
});