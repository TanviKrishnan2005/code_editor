import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [roomId, setRoomId] = useState("");
  const navigate = useNavigate();

  const joinRoom = () => {
    if (roomId.trim()) {
      navigate(`/editor/${roomId}`);
    }
  };

  return (
    <div style={{
      display: "flex",
      height: "100vh",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      gap: "15px",
      background: "#121212",
      color: "white"
    }}>
      <h1>CodeCollab 💻</h1>

      <input
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
        placeholder="Enter Room ID"
        style={{
          padding: "12px",
          fontSize: "16px",
          borderRadius: "6px",
          border: "none",
          width: "250px"
        }}
      />

      <button
        onClick={joinRoom}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          background: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        Join Room
      </button>
    </div>
  );
}

export default Home;