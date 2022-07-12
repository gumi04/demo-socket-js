const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const socketio = require('socket.io')


const app = express();

app.use(cors());
const options = {
  cors: {
    origin: 'http://localhost:4200',
  },
};

app.use(bodyParser.json( {
    extended: true
}))

const server = require('http').Server(app);

//rutas
const suscriptionRoutes = require('./routes/suscription_routes');



app.use(suscriptionRoutes);

let io = socketio(server, options)

io.on('connection', (socket) =>{
    
    socket.on('pub-notification', (data)=>{
        console.log(data)
        io.emit('pub-notification', data)
    });


    //cuando se desconecta alguien
    socket.on('disconnect', ()=>{
      console-log('adios');
    })
})




server.listen(3000, function () {
    console.log('\n')
    console.log(`>> Server up, port: 3000`)
  })


const client = require('./realtime/client');

