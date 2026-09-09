# Blog Nest - MERN Stack Blog Web App

Blog Nest is a full-stack web application for creating, updating, reading, and sharing blogs. It is built using the MERN stack (MongoDB, Express.js, React, Node.js) and incorporates features like JWT tokens, Material-UI for styling, middleware for authentication, Axios for API requests, Cloudinary for image hosting, and more.

## Features

- **User Authentication**: Secure user authentication using JWT tokens.
- **Material-UI**: Stylish and responsive user interface powered by Material-UI.
- **Middleware**: Custom middleware for handling authentication and other tasks.
- **Axios**: Efficient handling of API requests with Axios.
- **Cloudinary Integration**: Upload and host images with Cloudinary.
- **React Router DOM**: Navigation between different views using React Router DOM.
- **Create Blog**: Users can create and publish new blog posts.
- **Update Blog**: Allow users to edit and update their existing blog posts.
- **Comment System**: Engage with readers through a commenting system.
- **Read Blog**: Read and view published blog posts.
- **Share Blog**: Share blogs on social media or other platforms.
- **Responsive Design**: Ensures a seamless experience across various devices.
- **Delete Blog**: Users can delete their published blog posts.

## Tech Stack

- **Frontend**: React, Material-UI, React Router DOM, Axios.
- **Backend**: Node.js, Express.js, MongoDB (Mongoose).
- **Authentication**: JSON Web Tokens (JWT).
- **Image Hosting**: Cloudinary.

## Getting Started

### Prerequisites

- Node.js and npm installed.
- MongoDB instance running.
- Cloudinary account for image hosting.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/RidhamAnand/Mern_Stack_Blog_Web_App.git
   cd Mern_Stack_Blog_Web_App
   
2. Install dependencies:
   ```bash
   cd blogging-app-client
   npm install

   cd blogging-app-server
   npm install

3. Configure environment variables:
    Create a .env file in the backend directory and set the following:
   ```bash
   PORT=8080
    MONGODB_URI=your_mongodb_uri
    JWT_ACCESS_SECRET=your_jwt_secret
    CLOUDINARY_API_KEY=your_cloudinary_api_key
   
4. Run the application:
   ```bash
   # In the backend directory
    npm start

    # In the frontend directory
    npm start

    

