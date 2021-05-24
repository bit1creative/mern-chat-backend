const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const moment = require("moment");

const {
  getUsers,
  addUser,
  removeUser,
  getUser,
  getUserInRoom,
} = require("./helpers/users");

const PORT = process.env.PORT || 5000;

const router = require("./routes/mainRouter");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on("connection", (socket) => {
  socket.on("join", ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) return callback(error);

    socket.emit("message", {
      user: "admin",
      text: `${user.name}, welcome to the room ${user.room}`,
      date: moment(),
    });

    socket.broadcast.to(user.room).emit("message", {
      user: "admin",
      text: `${user.name} has joined the chat`,
      date: moment(),
    });

    socket.join(user.room);

    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);
    io.to(user.room).emit("message", {
      user: user.name,
      text: message,
      date: moment(),
    });

    callback();
  });

  socket.on("disconnect", () => {
    removeUser(socket.id);
  });
});

app.use(router);

server.listen(PORT, () => console.log(`Server's running on port ${PORT}`));
