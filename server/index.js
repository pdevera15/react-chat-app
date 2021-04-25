const app = require("express")();
const http = require("http").Server(app);
const { emit } = require("process");
const { callbackify } = require("util");
const { addUser, removeUser, getUser, users } = require("./users.js");

const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

app.get("/", (req, res) => {
  res.send("<h1> SERVER IS RUNNING </h1>");
});

let onlineUsers = 0;
io.on("connection", (socket) => {
  console.log("A User Connected", socket.id);

  socket.on("join", ({ name, room }) => {
    const { error, user } = addUser({ id: socket.id, name, room });
    if (error) return error;
    if (user) onlineUsers++;
    socket.join(user.room);

    io.to(room).emit("users", { users });
  });

  socket.on("emitMessage", ({ name, room, message }) => {
    const user = getUser(socket.id);
    io.to(room).emit("message", {
      user: name,
      text: message,
      senderId: socket.id,
    });
  });

  socket.on("disconnect", () => {
    console.log("A User Disconnected");
    removeUser(socket.id);
    onlineUsers--;

    io.emit("OnlineList", onlineUsers);
  });

  io.emit("OnlineList", onlineUsers);
});

http.listen(5000, () => {
  console.log("listening on *:5000");
});
