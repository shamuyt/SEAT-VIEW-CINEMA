# 🎬 Seat View Cinema – Complete Project Documentation

> **Seat View Cinema** is an interactive 3D web application that transforms the traditional movie ticket booking experience by allowing users to preview the actual view from any cinema seat before purchasing a ticket.


# 📖 About the Project

When booking movie tickets online, users are usually presented with only a **2D seating layout**.

Although seats appear available, users have **no way of knowing**:

- How far the screen is
- Whether another row blocks the view
- Whether the viewing angle is comfortable
- Whether the selected seat provides a premium experience

This often leads to poor seat selection and an unsatisfactory theatre experience.

Seat View Cinema solves this problem by introducing a **real-time 3D cinema preview system** where users can explore the theatre, select any seat, and instantly view the movie screen exactly as they would in real life.

Instead of imagining the experience, users can actually preview it before booking.

---

# ❓ Why This Project?

Modern booking websites provide:

- Seat availability
- Ticket prices
- Show timings

However, they do **not** provide the most important factor:

> **"How will the movie actually look from my seat?"**

This project bridges that gap.

The application combines **3D graphics**, **camera simulation**, and **interactive seat selection** to create an immersive booking experience.

---

# 🎯 Objectives

The primary objectives of Seat View Cinema are:

- Improve the online ticket booking experience
- Help users choose better seats
- Simulate a real theatre environment
- Provide accurate viewing perspectives
- Increase booking confidence
- Reduce customer dissatisfaction
- Demonstrate the power of 3D visualization in web applications

---

# 🚀 Technology Stack

## Frontend

| Technology | Purpose |
|------------|----------|
| React.js | Component-based UI |
| Tailwind CSS | Responsive styling |
| HTML5 | Page structure |
| CSS3 | Styling |
| JavaScript (ES6+) | Application logic |

---

## 3D Graphics

| Technology | Purpose |
|------------|----------|
| Three.js | Rendering Engine |
| React Three Fiber | React wrapper for Three.js |
| Drei | Utility Components |
| OrbitControls | Camera movement |
| GLTF Loader | Importing 3D models |
| Raycaster | Detect mouse clicks on 3D objects |

---

## Backend

| Technology | Purpose |
|------------|----------|
| Node.js | Runtime |
| Express.js | REST API |

---

## Database

MongoDB

Stores

- Users
- Theatre information
- Seat availability
- Booking history
- Favourite seats

---

## Authentication

- JWT
- bcrypt

---

## Tools Used

- Visual Studio Code
- Git
- GitHub
- npm
- Blender (Cinema Models)
- Chrome DevTools

---

# 🏗 Overall System Architecture

```
                        USER

                          │

                          ▼

                 React Frontend

                          │

         ┌─────────────────────────┐
         │                         │
         ▼                         ▼

  Three.js Scene             REST API

         │                         │

         ▼                         ▼

 Seat Selection Engine      Node.js Server

         │                         │

         ▼                         ▼

 Camera Controller          MongoDB Database

         │

         ▼

 Screen Perspective

         │

         ▼

 Viewing Analysis

         │

         ▼

 Booking System
```

---

# 🧩 Project Modules

## Module 1

### Landing Page

Displays

- Movie information
- Theatre information
- Start Preview button

---

## Module 2

### 3D Theatre Environment

Responsible for rendering

- Theatre floor
- Walls
- Roof
- Projection screen
- Lighting
- Seats

---

## Module 3

### Seat Generation Engine

Automatically creates

- Seat rows
- Seat numbering
- Available seats
- Booked seats

---

## Module 4

### Seat Selection System

Handles

- Click detection
- Seat highlighting
- Seat status
- Seat information

---

## Module 5

### Camera Controller

Moves the camera

- To selected seat
- Eye level
- Looks toward screen

Creates realistic viewing experience.

---

## Module 6

### Viewing Analysis

Calculates

- Distance
- Vertical angle
- Horizontal angle
- Comfort rating

---

## Module 7

### Booking Module

Handles

- Selected seats
- Theatre details
- Redirect to booking website

---

## Module 8

### Authentication

Provides

- Registration
- Login
- User Profile
- Favourite Seats

# 🧠 Algorithms Used

## Raycasting Algorithm

Used to determine which seat the user clicked.

---

## Camera Interpolation

Smoothly moves the camera to the selected seat.

---

## Distance Calculation

Calculates distance between

Camera ↔ Screen

---

## Viewing Angle Calculation

Computes

- Horizontal angle
- Vertical angle

---

## Seat State Management

Tracks

- Available
- Selected
- Booked

---

# 📂 Folder Structure

```
SeatViewCinema/

├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── assets/
│   │   ├── styles/
│   │   └── App.jsx
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── models/
│   └── server.js
│
├── public/
├── README.md
└── package.json
```

---

# 🗄 Database Collections

### Users

- Name
- Email
- Password
- Favourite Seats

---

### Theatres

- Theatre Name
- Rows
- Columns

---

### Bookings

- User ID
- Seat Number
- Movie
- Date

---

# 🌟 Key Features

- Interactive 3D Theatre
- Real-Time Seat Preview
- Accurate Camera Perspective
- Smart Seat Selection
- Seat Deselection
- Comfort Rating
- Viewing Angle Analysis
- Responsive UI
- User Authentication
- Ticket Booking Integration
- Performance Optimized
- Modern User Experience

---

# 🚀 Future Scope

- AI-based Seat Recommendation
- VR Theatre Preview
- AR Mobile Experience
- Multiplayer Seat Selection
- Live Booking Synchronization
- Multiple Theatre Templates
- Online Payments
- Admin Dashboard
- Analytics Dashboard
- Mobile App (Android & iOS)

---

# 🎓 Learning Outcomes

Through this project, I gained practical experience in:

- React.js application development
- Three.js 3D graphics
- React Three Fiber
- Camera mathematics and transformations
- Raycasting and object interaction
- State management
- REST API development
- MongoDB integration
- JWT authentication
- Performance optimization
- Responsive UI design
- Git and GitHub collaboration

---
---

# 🔐 User Authentication System

To provide a personalized and secure experience, Seat View Cinema includes a complete authentication system that allows users to create an account, log in securely, and save their preferences.

### ✨ Features

- 👤 User Registration
- 🔑 Secure Login
- 🔒 Password Hashing (bcrypt)
- 🛡 JWT Authentication
- 💾 Save Favourite Seats
- 👤 Personalized User Profile
- 🚪 Logout Functionality
- 📱 Responsive Authentication Interface

### Workflow

```
User Opens Website
        │
        ▼
 Login / Register
        │
        ▼
 Credentials Validated
        │
        ▼
 Password Encrypted
        │
        ▼
 JWT Token Generated
        │
        ▼
 User Session Created
        │
        ▼
 Access Granted
        │
        ▼
 User Can Preview & Save Favourite Seats
```

### Authentication Preview

<p align="center">
  <img src="https://github.com/user-attachments/assets/e9dbb940-bf81-4969-84b7-f1165f868297" alt="Seat View Cinema Authentication" width="900">
</p>

The authentication module ensures that every user's preferences, selected seats, and future bookings are securely managed. Passwords are encrypted before storage using **bcrypt**, while **JWT (JSON Web Tokens)** are used to maintain secure user sessions across the application.

---
# 🏁 Conclusion

Seat View Cinema demonstrates how **3D visualization can enhance real-world booking systems** by allowing users to make informed decisions before purchasing tickets. The project integrates modern web technologies with immersive graphics to simulate a realistic cinema experience. From building the 3D theatre and implementing interactive seat selection to optimizing camera movement and user authentication, the project showcases end-to-end full-stack development and practical problem-solving, making it a strong portfolio project in web development, computer graphics, and user experience design.
