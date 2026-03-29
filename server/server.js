const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();

// ✅ Allow frontend URL
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

// ✅ Store users per room
// Format: { roomId: [{ id: socket.id, username }] }
const rooms = {};

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // 🔥 JOIN ROOM WITH USERNAME
  socket.on("join_room", ({ roomId, username }) => {
    socket.join(roomId);

    if (!rooms[roomId]) {
      rooms[roomId] = [];
    }

    // ✅ Prevent duplicate users
    const exists = rooms[roomId].some(
      (user) => user.id === socket.id
    );

    if (!exists) {
      rooms[roomId].push({
        id: socket.id,
        username
      });
    }

    // Send updated user list
    io.to(roomId).emit("room_users", rooms[roomId]);
  });

  // 🔁 CODE SYNC
  socket.on("code_change", ({ roomId, code }) => {
    socket.to(roomId).emit("receive_code", code);
  });

  // 💬 CHAT WITH USERNAME
  socket.on("send_message", ({ roomId, message, username }) => {
    io.to(roomId).emit("receive_message", {
      message,
      username
    });
  });

  // ❌ DISCONNECT
  socket.on("disconnect", () => {
    for (const roomId in rooms) {
      rooms[roomId] = rooms[roomId].filter(
        (user) => user.id !== socket.id
      );

      if (rooms[roomId].length === 0) {
        delete rooms[roomId];
      } else {
        io.to(roomId).emit("room_users", rooms[roomId]);
      }
    }

    console.log("User disconnected:", socket.id);
  });
});

// ✅ PORT FIX (Render compatible)
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});