# flowStack

A full-stack web application built as part of my SDLC project.  
This project demonstrates a real-world web app with frontend and backend functionality using modern web technologies.

## About
flowStack showcases a full stack application with separate frontend and backend folders, CRUD operations, reusable components, and API integration.

## Tech Stack
- Frontend: React.js  
- Backend: Node.js (Express)  
- Database: MongoDB (or your choice)  
- Tools: Axios/Fetch for API calls

## Features
- Dynamic User Interface  
- CRUD operations  
- Component-based frontend architecture  
- Backend API integration

## Installation & Setup

1. Clone the repository:  
```bash
git clone https://github.com/Uma-Shankar-Niddena/flowStack.git

1.Frontend setup:

```bash
cd flowStack/frontend/taskmanager
npm install
npm start


2.Backend setup:

```bash
cd ../backend
npm install
npm run dev


3.Open your browser at:

```bash
http://localhost:3000


Note: Make sure Node.js and npm are installed.

*Project Structure
```bash
flowStack/
├── backend/        # Server-side code
├── frontend/       # React frontend
├── node_modules/   # Dependencies
├── package.json    # Scripts & dependencies
└── README.md       # Documentation

*Design Choices

Component-based frontend for reusable UI

Separate backend to follow SDLC best practices

Service layer for API calls to keep code modular

*Future Improvements

User authentication (login/signup + session management)

Advanced features like search, filters, and user roles

Unit & integration testing

UI improvements using TailwindCSS or Material UI
