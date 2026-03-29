import { useParams } from "react-router-dom";
import CodeEditor from "../components/CodeEditor";
import Chat from "../components/Chat";
import Users from "../components/Users";

function EditorPage() {
  const { roomId } = useParams();

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden"
    }}>

      {/* 🔥 Top Bar */}
      <div style={{
        height: "50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
        background: "#121212",
        color: "white",
        borderBottom: "1px solid #333"
      }}>
        <h3 style={{ margin: 0 }}>CodeCollab 💻</h3>
        <span>Room: {roomId}</span>
      </div>

      {/* 🔥 Main Layout */}
      <div style={{ flex: 1, display: "flex" }}>

        {/* Users Panel */}
        <div style={{ width: "220px" }}>
          <Users roomId={roomId} />
        </div>

        {/* Editor */}
        <div style={{ flex: 1 }}>
          <CodeEditor roomId={roomId} />
        </div>

        {/* Chat */}
        <Chat roomId={roomId} />

      </div>
    </div>
  );
}

export default EditorPage;