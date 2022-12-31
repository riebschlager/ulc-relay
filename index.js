const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);


app.get('/', function(request, response) {
  response.send('Welcome to Urban Lumber Company');
});

io.on('connection', function(socket) {
  socket.on('take-photo', function(msg) {
    io.emit('take-photo', msg);
  });
  socket.on('take-photo-complete', function(msg) {
    io.emit('take-photo-complete', msg);
  });
  socket.on('heartbeat', function(msg) {
    io.emit('heartbeat', msg);
  });
  socket.on('complete', function(msg) {
    io.emit('complete', msg);
  });
  socket.on('deploy', function(msg) {
    io.emit('deploy', msg);
  });
  socket.on('shutdown', function(msg) {
    io.emit('shutdown', msg);
  });
  socket.on('reboot', function(msg) {
    io.emit('reboot', msg);
  });
});

http.listen(process.env.PORT || 5000, function() {
  console.log('listening on *:5000');
});
