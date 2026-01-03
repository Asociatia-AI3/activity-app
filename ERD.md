# ERD - Activity App

## Entities

### User
- id (PK)
- email
- password
- role
- createdAt

### Activity
- id (PK)
- title
- description
- date
- user (FK -> User.id)

## Relationships
- User 1:N Activity
