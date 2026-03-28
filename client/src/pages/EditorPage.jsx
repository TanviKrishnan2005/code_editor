import { useParams } from "react-router-dom";
import CodeEditor from "../components/CodeEditor";
import Chat from "../components/Chat";

function EditorPage() {
  const { roomId } = useParams();

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ flex: 1 }}>
        <CodeEditor roomId={roomId} />
      </div>

      <Chat roomId={roomId} />
    </div>
  );
}

export default EditorPage;