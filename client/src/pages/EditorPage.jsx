import { useParams, useLocation } from "react-router-dom";
import CodeEditor from "../components/CodeEditor";
import Chat from "../components/Chat";
import Users from "../components/Users";

function EditorPage() {
  const { roomId } = useParams();

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const username = params.get("username");

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Users roomId={roomId} />
      <CodeEditor roomId={roomId} username={username} />
      <Chat roomId={roomId} username={username} />
    </div>
  );
}

export default EditorPage;