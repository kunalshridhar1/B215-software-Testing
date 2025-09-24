# Task Manager Frontend

## Project Overview
This is the frontend for the Task Manager application, built using **React**. It communicates with the backend API to handle user authentication and task management. The frontend includes form validation, real-time updates, and automated component testing.

## Features / User Stories
1. **User Registration Form** – Users can create an account with username, email, and password.  
2. **User Login Form** – Registered users can log in and receive a JWT token.  
3. **Dashboard** – Displays all tasks belonging to the logged-in user.  
4. **Create Task** – Users can add new tasks with a title and description.  
5. **Edit Task** – Users can update existing tasks.  
6. **Mark Task Completed** – Users can mark tasks as completed.  
7. **Delete Task** – Users can delete tasks.  
8. **Protected Routes** – Only logged-in users can access task management pages.  
9. **Form Validation** – Client-side validation for email, password, and task fields.  
10. **Automated Testing** – Components tested with Jest + React Testing Library.

## Project Structure
task-manager-frontend/
│
├── public/ # Public assets (index.html, favicon)
├── src/
│ ├── components/ # Reusable UI components
│ │ ├── LoginForm.jsx
│ │ ├── RegisterForm.jsx
│ │ ├── TaskForm.jsx
│ │ └── TaskItem.jsx
│ ├── pages/ # Page components
│ │ ├── Dashboard.jsx
│ │ └── Home.jsx
│ ├── services/ # API helper functions (axios/fetch calls)
│ │ └── api.js
│ ├── App.jsx # Root component
│ └── index.js # Entry point
├── tests/ # Frontend test files (optional)
│ ├── LoginForm.test.js
│ └── TaskForm.test.js
├── package.json # Project metadata and scripts
├── package-lock.json # Auto-generated lock file
├── .eslintrc.js # ESLint configuration
├── .prettierrc # Prettier configuration
└── README.md # Project documentation

bash
Copy code

## Setup Instructions
1. Clone the repository:
   git clone <frontend-repo-url>
   cd task-manager-frontend
2. Install dependencies:
    npm install

3. Start the development server:
    npm start
4. The app will run on http://localhost:3000 by default. Make sure the backend is running and the API URLs match.

Running Tests:

Run frontend component tests:

npm test
Jest + React Testing Library will automatically pick up test files (*.test.js) in src/ or tests/.

Notes:
API: Connects to backend via JWT authentication.

Styling: Use CSS modules or Tailwind (depending on your implementation).

ESLint + Prettier configurations enforce code consistency.

Components are modular and reusable for easy maintenance.


## Backend Overview

The backend API is built with **Node.js** and **Express**, using **SQLite** for
data storage. It handles user authentication with JWT and provides endpoints for task management. 
Key features include secure password hashing, input validation, and automated testing.
Key Features / User Stories
1. **User Registration** – Users can create an account with username, email, and password
2. **User Login** – Registered users can log in to receive a JWT token      
3. **JWT Authentication** – All task-related endpoints are protected
4. **Create Task** – Users can add new tasks with title and description
5. **Read Tasks** – Users can view all their tasks
6. **Update Task** – Users can update a task’s title or description
7. **Mark Task Completed** – Users can mark tasks as completed
8. **Delete Task** – Users can delete tasks
9. **Validation** – Input validation for email, password, and task fields
10. **Automated Testing** – All endpoints are covered with Jest + Supertest

## Tech Stack
- Frontend: React, Axios, React Router
- Backend: Node.js, Express, SQLite, JWT, bcrypt
- Testing: Jest, React Testing Library, Supertest
- Styling: CSS Modules or Tailwind CSS

## Additional Notes
- Ensure CORS is properly configured on the backend to allow requests from the frontend domain
- Use environment variables for sensitive data (JWT secret, DB connection strings)
- Authentication: JWT token in Authorization header for all /api/tasks endpoints


✍️ Author Kunal Shridhar Mail id: shridharkunal2005@gmail.com