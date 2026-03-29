import { useEffect, useState } from "react";
import { socket } from "../socket";

function Users({ roomId }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on("room_users", (data) => {
      setUsers(data);
    });

    return () => socket.off("room_users");
  }, []);

  return (
    <div style={{
      width: "200px",
      background: "#2c2c2c",
      color: "white",
      padding: "10px"
    }}>
      <h4>Users ({users.length})</h4>

      {users.map((u, i) => (
        <div key={i}>{u.username}</div>
      ))}
    </div>
  );
}

export default Users;