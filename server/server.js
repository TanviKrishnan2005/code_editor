const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();

// Allow frontend URL
app.use(cors({
  origin: "https://code-editor-sigma-orpin.vercel.app",
  methods: ["GET", "POST"]
}));

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "https://code-editor-sigma-orpin.vercel.app",
    methods: ["GET", "POST"]
  }
});

// Store users in rooms
const rooms = {};

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("join_room", (roomId) => {
    socket.join(roomId);

    if (!rooms[roomId]) {
      rooms[roomId] = [];
    }

    // Prevent duplicate users
    if (!rooms[roomId].includes(socket.id)) {
      rooms[roomId].push(socket.id);
    }

    // Send updated users list
    io.to(roomId).emit("room_users", rooms[roomId]);
  });

  socket.on("code_change", ({ roomId, code }) => {
    socket.to(roomId).emit("receive_code", code);
  });

  socket.on("send_message", ({ roomId, message }) => {
    socket.to(roomId).emit("receive_message", message);
  });

  socket.on("disconnect", () => {
    for (const roomId in rooms) {
      rooms[roomId] = rooms[roomId].filter(
        (id) => id !== socket.id
      );

      if (rooms[roomId].length === 0) {
        delete rooms[roomId];
      }

      io.to(roomId).emit("room_users", rooms[roomId]);
    }

    console.log("User disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});