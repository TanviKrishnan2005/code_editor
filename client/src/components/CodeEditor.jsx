import Editor from "@monaco-editor/react";
import { useEffect, useState } from "react";
import { socket } from "../socket";

function CodeEditor({ roomId }) {
  const [code, setCode] = useState("// Start coding...");

  useEffect(() => {
    if (!roomId) return;

    socket.emit("join_room", roomId);

    socket.on("receive_code", (newCode) => {
      if (newCode !== null && newCode !== undefined) {
        setCode(newCode);
      }
    });

    return () => {
      socket.off("receive_code");
    };
  }, [roomId]);

  const handleChange = (value = "") => {
    setCode(value);
    socket.emit("join_room", { roomId, username });
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <Editor
        height="100%"
        defaultLanguage="javascript"
        value={code}
        theme="vs-dark"
        onChange={handleChange}
      />
    </div>
  );
}

export default CodeEditor;