let express = require('express');
let socket = require('socket.io');

let app = express();
app.use(express.static('public'));

let server = app.listen(5000,() => {
    console.log('listening on port 5000');
})

let io = socket(server);
io.on('connection',(socket) => {
    console.log('socket .io is running');

    socket.on('beginPath',(data) => {
        io.sockets.emit("beginPath",data);
    })

    socket.on('undoRedo',(data) => {
        io.sockets.emit("undoRedo",data);
    })

    socket.on('drawStroke',(data) => {
        io.sockets.emit("drawStroke",data);
    })
})