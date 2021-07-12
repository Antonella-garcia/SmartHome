const express = require('express');
const server = express();
const cors = require('cors');

//Configuraciones
server.set('port',8080);
server.set('host','localhost');

//Middlewares
server.use(cors());
server.use(express.json());

//Rutas
server.get('/', function (req, res) {
   res.send('<h1> Hola mundo con Express </h1>')
});
server.use('/top10', require('./routes/top10.js'));
server.use('/consumorefrigerador', require('./routes/consumorefri.js'));
server.use('/consumococinas', require('./routes/consumococina.js'));
server.get('*', (req, res) => {
    res.status(404).send("<h1>Error 404</h1><h2>Página no encontrada</h2>")
})


module.exports = server;
