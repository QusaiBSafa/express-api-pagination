# Infrastructure Overview
A standalone Express API for managing users with pagination.

## Data Models
- User: { id: number, name: string, email: string }

## API Design
- GET /api/users: Retrieves paginated users.

## Key Decisions
- Using query parameters for pagination.
- Default values for page and size.