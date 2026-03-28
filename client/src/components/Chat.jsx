import { useEffect, useState } from "react";
import { socket } from "../socket";

function Chat({ roomId }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("receive_message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => socket.off("receive_message");
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit("send_message", { roomId, message });
      setMessages((prev) => [...prev, message]);
      setMessage("");
    }
  };

  return (
    <div style={{
      width: "300px",
      height: "100vh",
      background: "#1e1e1e",
      color: "white",
      padding: "10px",
      display: "flex",
      flexDirection: "column"
    }}>
      <h3>Chat</h3>

      <div style={{ flex: 1, overflowY: "auto" }}>
        {messages.map((msg, i) => (
          <div key={i}>{msg}</div>
        ))}
      </div>

      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type message"
        style={{ marginTop: "10px" }}
      />

      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Chat;