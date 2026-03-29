import { io } from "socket.io-client";

export const socket = io("https://code-editor-2zom.onrender.com", {
  transports: ["websocket"]
});