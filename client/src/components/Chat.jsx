import { useEffect, useState } from "react";
import { socket } from "../socket";

function Chat({ roomId, username }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => socket.off("receive_message");
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit("send_message", {
        roomId,
        message,
        username
      });

      setMessages((prev) => [...prev, { message, username }]);
      setMessage("");
    }
  };

  return (
    <div style={{
      width: "300px",
      height: "100%",
      background: "#1e1e1e",
      color: "white",
      padding: "10px",
      display: "flex",
      flexDirection: "column",
      borderLeft: "1px solid #333"
    }}>
      <h3>💬 Chat</h3>

      <div style={{ flex: 1, overflowY: "auto" }}>
        {messages.map((msg, i) => (
          <div key={i}>
            <strong>{msg.username}:</strong> {msg.message}
          </div>
        ))}
      </div>

      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type message"
      />

      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Chat;