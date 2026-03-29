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
    if (!message.trim()) return;

    socket.emit("send_message", {
      roomId,
      message,
      username
    });

    // ❌ DO NOT add locally (fixes duplicate issue)
    setMessage("");
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
          <div key={i} style={{ marginBottom: "5px" }}>
            <strong>{msg.username}:</strong> {msg.message}
          </div>
        ))}
      </div>

      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type message"
        style={{ marginTop: "10px", padding: "5px" }}
      />

      <button
        onClick={sendMessage}
        style={{
          marginTop: "5px",
          padding: "6px",
          cursor: "pointer"
        }}
      >
        Send
      </button>
    </div>
  );
}

export default Chat;