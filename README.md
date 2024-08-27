# collegedunia task
# Backend API for Book Management

## Postman collection : https://api.postman.com/collections/34688495-43b06744-cc62-40da-8376-e0b10d790453?access_key=PMAT-01J6AJJW895JYTZER9NXY7PR6C

## Overview

This project is a backend API for managing books. It is built using Node.js and Express, with MongoDB as the database. The API provides endpoints for creating, reading, updating, and deleting books.

## Features

- **Create**: Add new book entries to the database.
- **Read**: Retrieve all books or a specific book by ID.
- **Update**: Modify the details of an existing book.
- **Delete**: Remove a book from the database.
- **Search**: Search for books by title or author.
- **Sorting**: Sort books by various criteria.
- **Pagination**: Paginate the results of book listings.

## Technologies

- **Node.js**: JavaScript runtime environment.
- **Express**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for storing book data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Chai**: Assertion library for testing.
- **Mocha**: Testing framework.
- **chai-http**: HTTP integration testing library for Chai.

## Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [MongoDB](https://www.mongodb.com/) (version 4 or higher)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo

2. **Installations**

  npm install

3. **Mongo**
Ensure MongoDB is running. If you have a local MongoDB server, it should be running on the default port 27017. You can start it with: mongod


4. **SetUp Environment Variables**
   PORT = 4000
   DB_URI = "mongodb://localhost:27017/collegedunia"

5. **Run the server**
   npm run dev

## Endpoints:
 POST /api/books: Create a new book entry.
 
 GET /api/books: Retrieve a list of all books.
 
 GET /api/books/:id: Retrieve details of a specific book by its ID.
 
 PUT /api/books/:id: Update a book's information by its ID.
 
 DELETE /api/books/:id: Delete a specific book by its ID.

## Contributing
  Fork the repository.
  Create a new branch for your feature or bug fix.
  Commit your changes.
  Push to your forked repository.
  Create a pull request.

   
