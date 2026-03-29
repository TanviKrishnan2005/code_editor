import Editor from "@monaco-editor/react";
import { useEffect, useState } from "react";
import { socket } from "../socket";

function CodeEditor({ roomId, username }) {
  const [code, setCode] = useState("// Start coding...");

  useEffect(() => {
    socket.emit("join_room", { roomId, username });

    socket.on("receive_code", (newCode) => {
      setCode(newCode);
    });

    return () => socket.off("receive_code");
  }, [roomId, username]);

  const handleChange = (value = "") => {
    setCode(value);
    socket.emit("code_change", { roomId, code: value });
  };

  return (
    <div style={{ flex: 1 }}>
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