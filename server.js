const http = require("http");
const WebSocket = require("ws");

const server = http.createServer();
const PORT = 4000;
const ws = new WebSocket.Server({
  server,
});

ws.on("headers", (headers, req) => {
  // console.log("headers : ", headers);
});

ws.on("connection", (socket, req) => {
  socket.on("message", (data) => {
    console.log(data.toString());
  });

  socket.send("Hello client!");

  // Handle the socket close event
  socket.on("close", (code) => {
    console.log(`Client disconnected with code ${code}`);
  });
});

ws.on("error", (err) => {
  console.log(err);
});

// Handle the server close event
server.on("close", () => {
  console.log("Server closed");
});

// Start listening for requests on the specified port
server.listen(PORT, () => console.log(`Running on port: ${PORT}`));
