

# 💻 CodeCollab — Real-Time Collaborative Code Editor

A real-time collaborative coding platform where multiple users can write code together, chat, and interact live inside shared rooms.

---

## 🚀 Live Demo

 [https://code-editor-sigma-orpin.vercel.app](https://code-editor-sigma-orpin.vercel.app)

---

## ✨ Features

*  Real-time code synchronization across users
*  Built-in chat system with usernames
*  Live active users list
*  Room-based collaboration
*  Multi-language editor (JavaScript, Python, C++, Java)
*  Code persistence (saved per room)
*  Chat persistence (messages remain after refresh)
*  Enter-to-send chat UX
*  Clean and responsive UI
*  Fully deployed (frontend + backend)

---

## 🛠️ Tech Stack

* Frontend: React, Vite, Monaco Editor
* Backend: Node.js, Express
* Real-time: Socket.io
* Deployment: Vercel (frontend), Render (backend)

---

## 📂 Project Structure

code_editor/
├── client/   # React frontend
├── server/   # Node.js backend

---

## ⚙️ How It Works

* Users join a room using a room ID and username
* A WebSocket connection is established using Socket.io
* Code changes are instantly broadcast to all users in the same room
* Chat messages are synced in real-time
* Active users are tracked and updated dynamically
* Code and chat are stored locally to persist across refresh

---

## 🧠 Challenges Faced

* Handling duplicate messages due to socket event emissions
* Managing real-time synchronization without conflicts
* Fixing deployment issues (CORS, dynamic ports on Render)
* Resolving Vercel routing issues (404 on refresh)
* Debugging asset loading issues (MIME type errors)

---

## 📌 What I Learned

* Building real-time applications using WebSockets
* Designing room-based architectures
* Handling state synchronization across clients
* Debugging production deployment issues
* Improving UX with persistence and real-time feedback

---

## 🧪 Local Setup

1. Clone the repo

git clone [https://github.com/TanviKrishnan2005/code_editor.git](https://github.com/TanviKrishnan2005/code_editor.git)
cd code_editor

2. Start backend

cd server
npm install
node server.js

3. Start frontend

cd client
npm install
npm run dev

---

## 📌 Future Improvements

* Code execution feature (run code inside editor)
* User authentication system
* Cloud-based code storage
* Language sync across users
* UI animations and enhancements

---

##  Author

Tanvi Lekshmi RM


