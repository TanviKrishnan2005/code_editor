# Real-Time Collaborative Code Editor

A real-time collaborative code editor that allows multiple users to write code together, chat, and see active users in a shared room.

---

##  Features

*  Real-time code synchronization
*  Real-time chat system
*  Live user presence tracking
*  Shareable room links
*  Room-based collaboration

---

## 🛠️ Tech Stack

* Frontend: React, Monaco Editor
* Backend: Node.js, Express
* Real-time: Socket.io
* Deployment: Vercel (Frontend), Render (Backend)

---

## 📂 Project Structure

```
code-editor/
├── client/   # React frontend
├── server/   # Node backend
```

---

## ⚙️ Installation (Local Setup)

### 1. Clone repo

```
git clone <your-repo-link>
cd code-editor
```

### 2. Backend setup

```
cd server
npm install
node server.js
```

### 3. Frontend setup

```
cd client
npm install
npm run dev
```

---

##  Live Demo

Frontend: 
Backend: 

---

##  How It Works

* Users join a room using a unique ID
* WebSockets enable real-time communication
* Code changes and messages are broadcast to all users in the same room
* Active users are tracked and updated dynamically

---

##  Future Improvements

* Code execution feature
* User authentication
* File saving system

---

##  Author

Tanvi Lekshmi RM
