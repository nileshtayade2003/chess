const express = require('express');
const socket = require('socket.io');
const http = require('http');
const { Chess } = require('chess.js');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const server = http.createServer(app);
const io = socket(server);

let chess = new Chess(); // Initialize the chess game
let players = {};
let currentPlayer = 'w';

// Middleware
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Custom Chess Game' });
});

io.on('connection', function(socket) {
  console.log('Connected:', socket.id);

  // Assign roles
  if (!players.white) {
    players.white = socket.id;
    socket.emit('playerRole', 'w');
  } else if (!players.black) {
    players.black = socket.id;
    socket.emit('playerRole', 'b');
  } else {
    socket.emit('spectatorRole');
  }

  // Handle disconnection
  socket.on('disconnect', function() {
    if (socket.id === players.white) {
      delete players.white;
    } else if (socket.id === players.black) {
      delete players.black;
    }
  });

  // Handle moves
  socket.on('move', function(move) {
    try {
      if (chess.turn() === 'w' && socket.id !== players.white) return;
      if (chess.turn() === 'b' && socket.id !== players.black) return;

      const result = chess.move(move);

      if (result) {
        currentPlayer = chess.turn();
        io.emit('move', move);
        io.emit('boardState', chess.fen());
      } else {
        console.log('Invalid move:', move);
        socket.emit('invalidMove', move);
      }
    } catch (error) {
      console.log(error);
      socket.emit('invalidMove', move);
    }
  });

  // Handle new game request
  socket.on('newGame', function() {
    chess = new Chess(); // Reset the chess game
    io.emit('boardState', chess.fen());
  });
});

server.listen(port, function() {
  console.log(`Listening on http://localhost:${port}`);
});
