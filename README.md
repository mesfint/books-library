# Library Management System API

A modern, TypeScript-based library management system built with the MERN stack (MongoDB, Express, React, Node.js).

## 🚀 Features

- **Authentication & Authorization**
  - JWT-based authentication
  - Role-based access control (Admin/User)
  - Password encryption using bcrypt

- **Book Management**
  - CRUD operations for books
  - Search & filter functionality
  - Borrowing books
  - Review books

- **User Management**
  - User registration and profile management
  - Book borrowing history
  - Review management

- **Admin Features**
  - User management
  - Book inventory management
  - Author management
  

## 🛠️ Tech Stack

- **Backend**
  - Node.js + Express.js
  - TypeScript
  - MongoDB + Mongoose
  - JWT Authentication
  - Jest for testing

- **Frontend**
  - React (Vite)
  - Material-UI v6
  - Redux Toolkit
  - TypeScript
  - React Testing Library

- **DevOps**
  - Docker
  - GitHub Actions
  - Kubernetes
  - Jest & Playwright for testing

## 📋 Prerequisites

- Node.js (v16 or higher)
- MongoDB (v4.4 or higher)
- Docker (optional)
- pnpm 

## 🔧 Installation

1. **Clone the repository**

```bash
git clone https://github.com/mesfint/books-library.git
cd books-library

```

2. **Install dependencies**

Install backend dependencies
```bash
pnpm install

```

3. **Environment Variables**
Copy the example env file
```bash
cp .env.example .env
#Update the variables in .env with your values

```

4. **Start the application**
```bash
pnpm dev

#Start frontend (in another terminal)
cd client
pnpm dev


```


## 📝 API Documentation

### Authentication Endpoints
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Book Endpoints
- `GET /api/books` - Get all books
- `GET /api/books/:id` - Get book by ID
- `POST /api/books` - Create new book (Admin only)
- `PUT /api/books/:id` - Update book (Admin only)
- `DELETE /api/books/:id` - Delete book (Admin only)

### User Endpoints
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `GET /api/users/borrowed-books` - Get borrowed books

## 🧪 Testing

```bash
# Run all tests
npm test

# Run specific test suite
npm test -- users

# Run tests with coverage
npm run test:coverage
```

## 🐳 Docker

```bash
# Build the Docker image
docker build -t books-library .

# Run the container
docker run -p 3000:3000 books-library
```




## 👥 Authors

- Mesfin T - Initial work - [mesfint](https://github.com/mesfint)



