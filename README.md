# WebSocket Example

This is a simple example of WebSocket communication between a client and a server using JavaScript. The client sends a message to the server, and the server responds by sending a message back.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.

## Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/websocket-example.git
    ```

2. Navigate to the project directory:

    ```bash
    cd websocket-example
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the server:

    ```bash
    npm start
    ```

5. Open `index.html` in a web browser to run the WebSocket client.

## Server Details

The WebSocket server is implemented using Node.js and the `ws` library.

- The server listens on port 4000.
- When a client connects, it sends a welcome message.
- It logs any messages received from the client.
- It logs when a client disconnects.

## Client Details

The WebSocket client is a simple HTML and JavaScript file.

- It connects to the server at `ws://localhost:4000`.
- It sends a "Hello server" message to the server when the connection is established.
- It logs any messages received from the server.
- It logs when the connection is closed.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
