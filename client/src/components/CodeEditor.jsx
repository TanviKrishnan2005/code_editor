import Editor from "@monaco-editor/react";
import { useEffect, useState } from "react";
import { socket } from "../socket";

function CodeEditor({ roomId }) {
  const [code, setCode] = useState("// Start coding...");
  const [language, setLanguage] = useState("javascript");

  // Load saved data
  useEffect(() => {
    const savedCode = localStorage.getItem(roomId);
    const savedLang = localStorage.getItem(roomId + "_lang");

    if (savedCode) setCode(savedCode);
    if (savedLang) setLanguage(savedLang);
  }, [roomId]);

  // Receive code
  useEffect(() => {
    socket.on("receive_code", (newCode) => {
      setCode(newCode);
    });

    return () => socket.off("receive_code");
  }, []);

  // Handle code change
  const handleChange = (value = "") => {
    setCode(value);

    localStorage.setItem(roomId, value);

    socket.emit("code_change", { roomId, code: value });
  };

  // Handle language change
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    localStorage.setItem(roomId + "_lang", e.target.value);
  };

  return (
    <div style={{
      flex: 1,
      padding: "10px",
      background: "#020617",
      display: "flex",
      flexDirection: "column"
    }}>
      
      {/* SMALL CONTROL BAR */}
      <div style={{
        height: "30px",
        display: "flex",
        alignItems: "center",
        marginBottom: "5px"
      }}>
        <select
          value={language}
          onChange={handleLanguageChange}
          style={{
            padding: "4px",
            fontSize: "12px"
          }}
        >
          <option value="javascript">JS</option>
          <option value="python">Python</option>
          <option value="cpp">C++</option>
          <option value="java">Java</option>
        </select>
      </div>

      {/* EDITOR (NO OVERFLOW NOW) */}
      <div style={{
        flex: 1,
        borderRadius: "10px",
        overflow: "hidden",
        border: "1px solid #1e293b"
      }}>
        <Editor
          height="100%"
          language={language}
          value={code}
          theme="vs-dark"
          onChange={handleChange}
        />
      </div>

    </div>
  );
}

export default CodeEditor;