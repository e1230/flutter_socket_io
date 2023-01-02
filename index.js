const express = require('express');
const path = require('path');
const app = express();

//path publico
const publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));

app.listen(3001, (err) => {
    if (err) throw new Error(err);
    console.log('Servidor corriendo en puerto', 3001)
});