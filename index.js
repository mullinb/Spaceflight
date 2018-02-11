const express = require("express");
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const instance = require('./gameInstance');
const session = require("express-session")({
   secret: "gitchaasswhooped",
   resave: true,
   saveUninitialized: true
   }),
   sharedsession = require("express-socket.io-session");

app.use(session);

io.use(sharedsession(session, {
    autoSave:true
}));


app.use(express.static('./public'));


io.on('connection', function(socket) {
    console.log(socket.id)
    socket.on('joinGame', function() {
    });
    socket.on('hello', function(data) {
        console.log(data);
    })
});
server.listen(process.env.PORT || 8080, console.log("battle control online"));
