const socket = new WebSocket("ws://localhost:4000");

// When the connection is established
socket.onopen = () => {
    document.write("Message sent to the server <br/>")
    socket.send("Hello server")
}

// When a message is received from the server
socket.onmessage = (event) => { 
    document.write("Server message: ", event.data)
}

// When the connection is closed
socket.onclose = (event) => { 
    console.log("Connection closed:", event.reason); 
}

// When an error occurs in the connection
socket.onerror = (err) => { 
    console.log("Error:", err.message); 
}
