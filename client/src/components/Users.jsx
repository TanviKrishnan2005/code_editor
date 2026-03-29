import { useEffect, useState } from "react";
import { socket } from "../socket";

function Users({ roomId }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on("room_users", (usersList) => {
      setUsers(usersList);
    });

    return () => socket.off("room_users");
  }, []);

  return (
    <div style={{
      height: "100%",
      background: "#2c2c2c",
      color: "white",
      padding: "10px",
      overflowY: "auto",
      borderRight: "1px solid #333"
    }}>
      <h4>👥 Active Users ({users.length})</h4>

      {users.map((user, i) => (
        <div key={i}>
          👤 {user.username}
        </div>
      ))}
    </div>
  );
}

export default Users;