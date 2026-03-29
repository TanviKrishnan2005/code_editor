import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const joinRoom = () => {
    if (!roomId || !username) return;
    navigate(`/editor/${roomId}?username=${username}`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>CodeCollab 💻</h2>

      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <br />

      <input
        placeholder="Room ID"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
      />

      <br />

      <button onClick={joinRoom}>Join</button>
    </div>
  );
}

export default Home;