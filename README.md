<div align="center">

# 📝 Blog Nest

### ✨ MERN Stack Blog Web Application

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=24&duration=3000&pause=1000&center=true&vCenter=true&width=700&lines=Create+%7C+Publish+%7C+Read+%7C+Share;A+Modern+MERN+Stack+Blog+Platform;Write+Your+Stories+%26+Share+Your+Ideas;Built+with+React+%7C+Node.js+%7C+MongoDB" alt="Typing SVG" />

<br/>

<a href="https://blog-platform-frontend-kftg.onrender.com">
  <img src="https://img.shields.io/badge/🌐_Live_Website-Blog_Nest-000000?style=for-the-badge" alt="Live Website"/>
</a>

<a href="https://github.com/sania28">
  <img src="https://img.shields.io/badge/GitHub-sania28-181717?style=for-the-badge&logo=github" alt="GitHub"/>
</a>

</div>

---

## 🌐 Live Demo

🚀 **Explore Blog Nest Live:**

### 👉 https://blog-platform-frontend-kftg.onrender.com

Blog Nest is deployed and accessible online. Visit the live application to explore the blogging platform and its features.

---

## 📖 About The Project

**Blog Nest** is a full-stack blogging platform developed using the **MERN Stack — MongoDB, Express.js, React.js, and Node.js**.

The application allows users to create, publish, read, update, delete, comment on, and share blog posts through a modern and responsive interface.

It also includes **JWT-based authentication, Material UI, Axios API communication, React Router DOM, authentication middleware, and Cloudinary image hosting**.

The project demonstrates how a complete frontend and backend application can work together to deliver a real-world blogging experience.

---

## ✨ Features

### 🔐 User Authentication

* Secure user registration and login
* JWT-based authentication
* Protected user operations
* Authentication middleware
* Secure API communication

### ✍️ Create Blogs

Users can create and publish their own blog posts with relevant content and images.

### 📖 Read Blogs

Browse and read published blog posts through an intuitive interface.

### ✏️ Update Blogs

Users can edit and update their existing blog posts whenever required.

### 🗑️ Delete Blogs

Users can remove their own published blog posts.

### 💬 Comment System

Readers can interact with blog posts through comments and share their thoughts.

### 🖼️ Cloudinary Integration

Blog images are uploaded and hosted using **Cloudinary**, providing cloud-based image management.

### 🔗 Share Blogs

Users can share interesting blog posts with others and across social platforms.

### 🧭 React Router

Client-side navigation provides smooth movement between different pages without unnecessary full-page reloads.

### ⚡ Axios

Axios is used to communicate between the React frontend and backend APIs.

### 🎨 Material UI

Material UI components are used to build a clean, modern, and responsive interface.

### 📱 Responsive Design

The application is designed to provide a smooth experience across:

* 💻 Desktop
* 💻 Laptop
* 📱 Mobile
* 📟 Tablet

---

## 🛠️ Tech Stack

### Frontend

<p>
<img src="https://img.shields.io/badge/React.js-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
<img src="https://img.shields.io/badge/Material_UI-007FFF?style=for-the-badge&logo=mui&logoColor=white"/>
<img src="https://img.shields.io/badge/Axios-671DD8?style=for-the-badge&logo=axios&logoColor=white"/>
<img src="https://img.shields.io/badge/React_Router_DOM-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
</p>

### Backend

<p>
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>
<img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white"/>
<img src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white"/>
</p>

### Authentication & Cloud

<p>
<img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white"/>
<img src="https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white"/>
</p>

---

## 🏗️ Application Architecture

```text
                    ┌──────────────────────┐
                    │      Blog Nest       │
                    │   React Frontend     │
                    └──────────┬───────────┘
                               │
                               │ Axios
                               ▼
                    ┌──────────────────────┐
                    │    Express.js API    │
                    │       Node.js        │
                    └──────────┬───────────┘
                               │
                    ┌──────────┴──────────┐
                    │                     │
                    ▼                     ▼
             ┌─────────────┐      ┌─────────────┐
             │   MongoDB   │      │  Cloudinary │
             │    Data     │      │    Images   │
             └─────────────┘      └─────────────┘
```

---

## 🔄 How It Works

```text
User
 │
 ├── Register / Login
 │
 ▼
JWT Authentication
 │
 ▼
Blog Nest
 │
 ├── Create Blog
 ├── Read Blog
 ├── Update Blog
 ├── Delete Blog
 ├── Comment
 └── Share
 │
 ▼
Express.js REST API
 │
 ├── MongoDB
 │
 └── Cloudinary
```

---

## 🔐 Authentication Flow

```text
User Login
     │
     ▼
Credentials Validation
     │
     ▼
JWT Token Generated
     │
     ▼
Token Stored by Client
     │
     ▼
Authenticated API Request
     │
     ▼
Authentication Middleware
     │
     ▼
Protected Resource
```

---

## 🖼️ Image Upload Flow

```text
Select Blog Image
        │
        ▼
     Frontend
        │
        ▼
    Backend API
        │
        ▼
    Cloudinary
        │
        ▼
   Image URL
        │
        ▼
     MongoDB
```

---

## 📂 Project Structure

```text
Blog-Nest/
│
├── blogging-app-client/
│   │
│   ├── public/
│   │
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── images/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...
│   │
│   ├── package.json
│   └── ...
│
├── blogging-app-server/
│   │
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── database/
│   ├── index.js
│   ├── package.json
│   └── ...
│
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites

Before running the project locally, make sure you have:

* Node.js installed
* npm installed
* MongoDB database
* Cloudinary account
* Git installed

---

## 📥 Installation

### 1. Clone the Repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd Blog-Nest
```

### 2. Install Frontend Dependencies

```bash
cd blogging-app-client
npm install
```

### 3. Install Backend Dependencies

```bash
cd ../blogging-app-server
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the backend directory:

```env
PORT=8080

MONGODB_URI=your_mongodb_uri

JWT_ACCESS_SECRET=your_jwt_secret

CLOUDINARY_API_KEY=your_cloudinary_api_key
```

> ⚠️ Never upload your `.env` file or private credentials to GitHub.

Add the following to `.gitignore`:

```gitignore
.env
node_modules/
```

---

## ▶️ Run Locally

### Start Backend

Inside `blogging-app-server`:

```bash
npm start
```

Backend:

```text
http://localhost:8080
```

### Start Frontend

Open another terminal:

```bash
cd blogging-app-client
npm start
```

Frontend:

```text
http://localhost:3000
```

---

## 🧪 CRUD Operations

| Operation | Function                  |
| --------- | ------------------------- |
| 🟢 Create | Create and publish a blog |
| 🔵 Read   | View published blogs      |
| 🟡 Update | Edit existing blogs       |
| 🔴 Delete | Delete published blogs    |

---

## 💡 Key Learning Outcomes

Through this project, I gained practical experience with:

* Full-stack MERN development
* React component architecture
* REST API development
* JWT authentication
* Authentication middleware
* MongoDB database operations
* Mongoose
* Axios
* CRUD operations
* Cloudinary integration
* React Router DOM
* Material UI
* Responsive web development
* Frontend-backend integration
* Deployment of a full-stack web application

---

## 🚀 Future Enhancements

Some planned improvements include:

* 🔎 Advanced blog search
* 🏷️ Categories and tags
* ❤️ Like and reaction system
* 👤 User profile pages
* 🔔 Notifications
* 🌙 Dark mode
* 📊 User dashboard
* 📈 Blog analytics
* 📝 Rich text editor
* 🔐 Additional security enhancements

---

## 📌 Project Highlights

```text
✨ Full-Stack MERN Application
🔐 JWT Authentication
✍️ Blog Creation
📖 Blog Reading
✏️ Blog Editing
🗑️ Blog Deletion
💬 Comment System
🖼️ Cloudinary Image Hosting
🎨 Material UI
⚡ Axios API Integration
🧭 React Router
📱 Responsive Design
🚀 Live Deployment
```

---

## 🌐 Live Project

<div align="center">

### 🚀 Try Blog Nest

<a href="https://blog-platform-frontend-kftg.onrender.com">

<img src="https://img.shields.io/badge/OPEN_BLOG_NEST-LIVE_DEMO-00C853?style=for-the-badge&logo=googlechrome&logoColor=white"/>

</a>

<br/><br/>

**https://blog-platform-frontend-kftg.onrender.com**

</div>

---

## 👩‍💻 Author

<div align="center">

### Sania Mujtaba

**Computer Science & Engineering Graduate**
**Frontend & Full-Stack Developer**

</div>

### 🔗 Connect With Me

* 💼 **LinkedIn:** https://www.linkedin.com/in/sania-mujtaba-20806a394/
* 🐙 **GitHub:** https://github.com/sania28
* 🌐 **Blog Nest:** https://blog-platform-frontend-kftg.onrender.com

---

## ⭐ Show Your Support

If you like this project, consider giving the repository a ⭐ on GitHub.

Your support and feedback are always appreciated!

---

<div align="center">

### 💻 Built with ❤️ using the MERN Stack

**Blog Nest — Create • Publish • Read • Connect**

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=20&duration=2500&pause=800&center=true&vCenter=true&width=600&lines=Keep+Writing+%E2%9C%8D%EF%B8%8F;Keep+Building+%F0%9F%9A%80;Keep+Learning+%F0%9F%93%9A;Keep+Creating+%E2%9C%A8" alt="Typing Animation"/>

</div>
