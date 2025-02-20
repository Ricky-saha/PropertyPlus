# PropertyPlus - Real Estate Platform
## Project Description
A modern real estate platform built with MERN stack that connects property buyers with owners directly. Features real-time chat and seamless property management.

## Features

- User Authentication & Authorization
- Property Listing Management
- Real-time Chat using Socket.io
- State Management with Zustand
- Database Management with Prisma ORM
- Image Upload & Management
- Responsive Design

## Tech Stack

### Frontend
- React.js
- JavaScript
- SCSS
- Zustand (State Management)
- Socket.io-client
- Axios
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB
- Prisma (ORM)
- Socket.io
- JWT Authentication
- cloudinary 

## Screenshots

### Homepage
![HomePage](https://github.com/user-attachments/assets/817221c0-0b9f-4e70-a13a-ef6207972d48)

### Property Lists
![Property List](https://github.com/user-attachments/assets/51e40672-6435-4da4-81df-a3db959b8c59)

### Property Details
![Property Details](https://github.com/user-attachments/assets/7a47ec34-1c43-4d85-b2d9-f719cf243227)


### Chat Interface
![Chat Interface](https://github.com/user-attachments/assets/485c83f6-38e0-434b-94e1-23f9c644005b)


### Profile Page
![Profile Page](https://github.com/user-attachments/assets/6f88a470-fd57-49ee-9b2b-6c5419d892ef)



## Getting Started

### Prerequisites

- Node.js 17.0 or later
- MongoDB
- npm

### Installation

1. Clone the repository
```bash
git clone =https://github.com/Ricky-saha/PropertyPlus
cd propertyplus
```

2. Install Dependencies
```bash
# Backend dependencies
cd api
npm install

# Frontend dependencies
cd client
npm install

# socket dependencies
cd socket
npm install
```

3. Configure Environment Variables

Create `.env` files in backend directories:

```env
# Backend .env
DATABASE_URL=""
JWT_SECRET_KEY = 
CLIENT_URL = http://localhost:5173


5. Start Development Servers
```bash
# Start backend server
cd api
nodemon app.js

# Start socket server
cd socket
nodemon app.js

# Start frontend server
cd client
npm run dev
```



## Key Features

### Property Management
- Create, read, update, and delete property listings
- Upload multiple property images
- Advanced search and filtering
- Property favorites system

### Real-time Chat
- Instant messaging between buyers and sellers
- Message status indicators
- Chat history preservation
- Real-time notifications

### User Dashboard
- Property listing management
- Chat conversations
- Profile management


## State Management with Zustand

The application uses Zustand for state management. Example store structure:


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


- [React Documentation](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Prisma](https://www.prisma.io/)
- [Socket.io](https://socket.io/)
