let express = require('express');
let socket = require('socket.io');

let app = express();
app.use(express.static('public'));

let server = app.listen(5000,() => {
    console.log('listening on port 5000');
})

let io = socket(server);
io.on('connection',() => {
    console.log('socket .io is running');
})