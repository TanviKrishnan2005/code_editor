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
      <h4 style={{ marginBottom: "10px" }}>
        👥 Active Users ({users.length})
      </h4>

      {users.length === 0 ? (
        <p>No users</p>
      ) : (
        users.map((user, i) => (
          <div key={i} style={{
            padding: "6px",
            borderBottom: "1px solid #444"
          }}>
            👤 User {i + 1}
          </div>
        ))
      )}
    </div>
  );
}

export default Users;