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
      height: "100%",
      background: "#1e1e1e",
      color: "white",
      padding: "10px",
      display: "flex",
      flexDirection: "column",
      borderLeft: "1px solid #333"
    }}>
      <h3 style={{ marginBottom: "10px" }}>💬 Chat</h3>

      {/* Messages */}
      <div style={{
        flex: 1,
        overflowY: "auto",
        paddingRight: "5px"
      }}>
        {messages.map((msg, i) => (
          <div key={i} style={{
            background: "#333",
            padding: "6px 10px",
            borderRadius: "6px",
            marginBottom: "6px",
            fontSize: "14px"
          }}>
            {msg}
          </div>
        ))}
      </div>

      {/* Input */}
      <div style={{
        marginTop: "10px",
        display: "flex",
        gap: "5px"
      }}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type message..."
          style={{
            flex: 1,
            padding: "8px",
            borderRadius: "5px",
            border: "none",
            outline: "none"
          }}
        />

        <button
          onClick={sendMessage}
          style={{
            padding: "8px 12px",
            background: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;