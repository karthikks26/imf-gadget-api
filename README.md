# IMF Gadget API

A secure REST API for managing IMF gadgets, featuring JWT authentication, gadget inventory management, and a self-destruct sequence.

## Live Demo

API Base URL: https://imf-gadget-api.vercel.app

## Features

- 🔐 JWT Authentication
- 📦 Gadget Inventory Management
- 🎯 Mission Success Probability
- 🕵️ Unique Codename Generation
- 💥 Self-Destruct Sequence
- 🏷️ Status Filtering

## Tech Stack

- Node.js
- Express.js
- PostgreSQL (Vercel Postgres)
- Prisma ORM
- JWT Authentication
- Vercel Deployment

## API Documentation

https://documenter.getpostman.com/view/28282376/2sAYQiBo11

### Authentication

All endpoints except `/auth/register` and `/auth/login` require JWT authentication.
Add the JWT token to the Authorization header

### Endpoints

#### Authentication

- POST `/auth/register` - Register new user
- POST `/auth/login` - Login and get JWT token

#### Gadgets

- GET `/gadgets` - Get all gadgets
- POST `/gadgets` - Add new gadget
- PATCH `/gadgets/:id` - Update gadget
- DELETE `/gadgets/:id` - Decommission gadget
- POST `/gadgets/:id/self-destruct` - Trigger self-destruct
- GET `/gadgets?status=<status>` - Filter gadgets by status

## Local Development

### 1. Clone the Repository

```bash
git clone <repository-url>
cd imf-gadget-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the project root and add the following:

```plaintext
DATABASE_URL="your-postgres-url"
JWT_SECRET="your-jwt-secret"
```

### 4. Run Database Migrations

```bash
npx prisma migrate dev
```

### 5. Start the Development Server

```bash
npm run dev
```

## Deployment

The API is deployed on Vercel. To deploy your own instance:

1. Fork this repository
2. Sign up on Vercel
3. Import your repository
4. Set up environment variables in Vercel dashboard
5. Deploy!

## Status Codes

- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Internal Server Error
