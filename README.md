# Express API Pagination

## Description
A simple Express API implementing pagination for user resources.

## What's Built
- User resource with pagination support.

## How to Run
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the server.
4. Access the API at `http://localhost:3000/api/users?page=1&size=10`.

## API Docs
### GET /api/users
- **Query Parameters:**
  - `page`: The page number to retrieve (default is 1).
  - `size`: The number of users per page (default is 10).

### Environment Variables
No environment variables are required for this simple app.