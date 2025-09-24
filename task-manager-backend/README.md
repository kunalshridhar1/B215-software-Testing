
# Task Manager Backend

## Project Overview
This is the backend API for the Task Manager application. It is built using **Node.js**, **Express**, and **SQLite**. The API supports user authentication, task management, and includes automated tests for all key functionalities.

## Features / User Stories
1. **User Registration** – Users can create an account with a username, email, and password.  
2. **User Login** – Registered users can log in to receive a JWT token.  
3. **JWT Authentication** – All task-related endpoints are protected.  
4. **Create Task** – Users can add new tasks with title and description.  
5. **Read Tasks** – Users can view all their tasks.  
6. **Update Task** – Users can update a task’s title or description.  
7. **Mark Task Completed** – Users can mark tasks as completed.  
8. **Delete Task** – Users can delete tasks.  
9. **Validation** – Input validation for email, password, and task fields.  
10. **Automated Testing** – All endpoints are covered with Jest + Supertest.

## Project Structure
task-manager-backend/
│
├── server.js # Entry point for backend server
├── package.json # Project metadata and scripts
├── routes/ # API route definitions
│ ├── authRoutes.js
│ └── taskRoutes.js
├── controllers/ # Business logic for routes
│ ├── authController.js
│ └── taskController.js
├── models/ # Database models/schemas
│ ├── userModel.js
│ └── taskModel.js
├── middleware/ # Middleware (JWT auth, validation)
│ └── authMiddleware.js
├── services/ # Optional DB helper functions
│ └── db.js
├── tests/ # Jest + Supertest test files
│ ├── auth.test.js
│ └── tasks.test.js
├── coverage/ # Test coverage reports (generated automatically)
├── .eslintrc.js # ESLint configuration
├── .prettierrc # Prettier configuration
└── README.md # Project documentation


## Setup Instructions

1. Clone the repository:
   git clone <repository-url>
   cd task-manager-backend

2. Install dependencies:
   npm  install

3. Start the server:
   npm run dev
  
4. The API will run on http://localhost:3000 by default.


Running Tests

Run all backend tests with coverage:

npm test

-Jest + Supertest will automatically run all test files in the tests/  folder.

-Coverage report will be generated in coverage/ folder.

Notes:

Database: SQLite (task-manager.db file auto-generated in the project root)

Authentication: JWT token in Authorization header for all /api/tasks endpoints

Coding style enforced with ESLint and Prettier

✍️ Author Kunal Shridhar Mail id: shridharkunal2005@gmail.com