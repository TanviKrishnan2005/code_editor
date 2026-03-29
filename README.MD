# 💻 CodeCollab — Real-Time Collaborative Code Editor

A real-time collaborative code editor that allows multiple users to write code together, chat, and see active users — all inside a shared room.

---

## 🚀 Live Demo

👉 https://code-editor-sigma-orpin.vercel.app

---

## ✨ Features

*  Real-time code synchronization
*  Built-in chat system
*  Live active users list
*  Room-based collaboration
*  Fully deployed (frontend + backend)

---

## 🛠️ Tech Stack

* **Frontend:** React, Vite, Monaco Editor
* **Backend:** Node.js, Express
* **Real-time:** Socket.io
* **Deployment:** Vercel (frontend), Render (backend)

---

## 📂 Project Structure

```
code_editor/
├── client/   # React frontend
├── server/   # Node.js backend
```

---

## ⚙️ How It Works

* Users join a room using a room ID
* A WebSocket connection is established using Socket.io
* Any code change is instantly broadcast to all users in that room
* Messages are also synced in real-time
* The server tracks active users per room

---

## 🧠 Challenges Faced

* Handling duplicate users due to multiple socket connections
* Managing real-time updates without lag
* Fixing deployment issues (CORS + dynamic ports on Render)

---

## 📌 What I Learned

* How WebSockets work in real-time systems
* Building and managing room-based architecture
* Handling deployment issues in production
* Debugging real-world problems

---

## 🧪 Local Setup

### 1. Clone the repo

```
git clone https://github.com/TanviKrishnan2005/code_editor.git
cd code_editor
```

### 2. Start backend

```
cd server
npm install
node server.js
```

### 3. Start frontend

```
cd client
npm install
npm run dev
```

---

## 📌 Future Improvements

* Code execution feature
* User authentication
* File saving system
* Better UI/UX

---

## 👩‍💻 Author

Tanvi Lekshmi RM

---
