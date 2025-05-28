# 🛍️ ISHOP – E-commerce Platform

An e-commerce web application that allows users to browse, filter, and purchase products across various categories.

## 🌐 Live Demo

- **Frontend**: [https://ishop-project.vercel.app](https://ishop-project.vercel.app)
- **Backend**: [https://ishop-project.onrender.com](https://ishop-project.onrender.com)

---

## 🚀 Tech Stack

- **Frontend**: React, Redux Toolkit, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Others**: Axios, CORS, Vercel (Frontend Hosting), Render (Backend Hosting)

---

## ✨ Features

- 🛒 View and browse 1000+ products
- 📂 Filter products by category dynamically
- ⚙️ Lazy loading for faster performance
- ⚡ 40% reduced page load time
- 🔄 State management using Redux Toolkit
- 👤 User login/logout support (via cookies)
- 📦 Add to cart (placeholder)

---

## 📁 Project Structure
```
├──ishop-react-app / # React Frontend
│ ├── public/
│ └── src/
│ ├── components/
│ ├── pages/
│ ├── App.js
│ └── index.js
├── ishop-server/ # Express Backend
│ ├── routes/
│ ├── models/
│ └── index.js
```
---

## 📦 Setup Instructions

### 🖥️ Frontend


- cd ishop-react-app
- npm install
- npm start
### 🖥️ Backend

- cd ishop-server
- npm install
- node index.js

### ⚙️ Environment Variables
Create a .env file in the root of your backend folder:

- PORT=8080
- MONGODB_URI=your_mongodb_connection_string

