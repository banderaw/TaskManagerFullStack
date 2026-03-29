# 🚀 Task Manager Full Stack App

A full-stack Task Management application built with **React (Frontend)** and **Django REST Framework (Backend)**.  
This app allows users to register, login, and manage their personal tasks securely using JWT authentication.

---

## 📌 Features

- 🔐 User Authentication (Register & Login)
- 🪪 JWT Token-based Authorization
- ✅ Create, Update, Delete Tasks
- 📋 View only your own tasks
- 🌙 Dark Mode Toggle
- 🎨 Clean and modern UI (React)
- 🔒 Protected API routes

---

## 🛠️ Tech Stack

### Frontend
- React
- Axios
- React Router

### Backend
- Django
- Django REST Framework
- Simple JWT Authentication

---

## 📂 Project Structure

```
TaskManagerFullStack/
│
├── backend/
│   ├── taskmanager/
│   └── tasks/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/banderaw/TaskManagerFullStack.git
cd TaskManagerFullStack
```

---

### 2️⃣ Backend Setup (Django)

```bash
cd backend
python -m venv venv
venv\Scripts\activate   # Windows

pip install -r requirements.txt

python manage.py migrate
python manage.py runserver
```

---

### 3️⃣ Frontend Setup (React)

```bash
cd frontend
npm install
npm start
```

---

## 🔑 API Endpoints

| Method | Endpoint        | Description        |
|--------|----------------|--------------------|
| POST   | /api/register/ | Register user      |
| POST   | /api/login/    | Login (JWT)        |
| GET    | /api/tasks/    | Get user tasks     |
| POST   | /api/tasks/    | Create task        |
| PUT    | /api/tasks/:id | Update task        |
| DELETE | /api/tasks/:id | Delete task        |

---

## 🔒 Authentication

This project uses **JWT Authentication**:

- Access Token
- Refresh Token

All task-related endpoints require authentication:

```
Authorization: Bearer <access_token>
```

---

## 🎯 Future Improvements

- 📱 Responsive design (mobile support)
- 🧑‍🤝‍🧑 User profile page
- 📊 Task filtering & search
- ⏰ Due dates & reminders
- ☁️ Deployment (Render / Vercel)

---

## 🚀 Deployment

- Frontend → Vercel / Netlify  
- Backend → Render 

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first.

---



## 👨‍💻 Author

Developed by **Banderaw Weretaw**

---

⭐ If you like this project, give it a star on GitHub!
