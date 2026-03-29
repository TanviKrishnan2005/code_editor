import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const joinRoom = () => {
    if (roomId && username) {
      navigate(`/editor/${roomId}?username=${username}`);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>CodeCollab 💻</h2>

      <input
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ padding: "10px", margin: "5px" }}
      />

      <br />

      <input
        placeholder="Enter Room ID"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
        style={{ padding: "10px", margin: "5px" }}
      />

      <br />

      <button onClick={joinRoom} style={{ padding: "10px 20px" }}>
        Join Room
      </button>
    </div>
  );
}

export default Home;