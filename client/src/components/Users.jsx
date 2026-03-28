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
      width: "200px",
      background: "#2c2c2c",
      color: "white",
      padding: "10px"
    }}>
      <h4>Users</h4>
      {users.map((user, i) => (
        <div key={i}>User {i + 1}</div>
      ))}
    </div>
  );
}

export default Users;