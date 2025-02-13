# DP ToDo List Application

## Overview
The **DP ToDo List Application** is a full-stack to-do list app built with **React Native** for the frontend and **Node.js with Express** for the backend. It utilizes **MongoDB** for data storage. The app allows users to **create, view, update, and delete tasks**, with the backend managing API requests and database interactions.

---

## Project Structure

### Frontend (React Native)
- **src/**
  - **components/**
    - `TaskItem.js` – Task item component  
  - **screens/**
    - `HomeScreen.js` – Main screen  
  - **api/**
    - `api.js` – API request handlers  
  - `App.js` – App entry point  
  - `index.js` – Main index file  
- `package.json` – Frontend dependencies  

### Backend (Node.js & Express)
- `db.js` – MongoDB connection  
- `index.js` – Backend entry point  
- `routes.js` – API routes  
- `package.json` – Backend dependencies  
- `.env` – Backend environment variables  

### Deployment & Configuration Files
- `docker-compose.yml` – Docker Compose configuration  
- `Dockerfile` – Docker build file  
- `requirements.txt` – Installation dependencies  
- `README.md` – Project documentation  

---

## Features
- **Task Management**: Add, edit, delete, and view tasks.
- **Persistent Storage**: MongoDB is used to store tasks.
- **API Integration**: Backend built with Express.js provides RESTful endpoints.
- **Cross-Platform Support**: React Native frontend works on both Android and iOS.
- **Containerization**: Docker support for easy deployment.
