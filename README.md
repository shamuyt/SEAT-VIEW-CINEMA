# SeatView Cinema

SeatView Cinema is a full-stack theatre booking preview platform that lets users inspect a realistic 3D cinema hall and evaluate the on-screen experience from every seat before booking.

## Tech Stack

- **Frontend:** React + Vite + Tailwind CSS
- **3D Engine:** Three.js with React Three Fiber + Drei
- **Backend:** Node.js + Express
- **Database:** MongoDB + Mongoose

## Features

- Netflix/BookMyShow-inspired dark themed landing page with movie cards.
- 3D theatre viewer with:
  - projection screen playing a trailer video texture,
  - realistic hall surfaces, projector, ambient + spot lights,
  - orbit controls for free movement.
- Interactive seat map:
  - clickable seats,
  - smooth camera transitions to seat eye-level,
  - perspective/viewing simulation based on distance and side angle.
- Floating seat insight panel displays:
  - seat number and row,
  - distance from screen,
  - viewing rating,
  - screen-angle distortion estimate.
- Seat statuses (available/booked/unavailable) with color coding.
- “Book This Seat” deep-link style redirect to BookMyShow domain.
- Optional auth for signup/login and favorite-seat persistence.
- Admin panel for movie uploads and generated theatre layout.

## Project Structure

```bash
seatview-cinema/
├── client/                 # React + Tailwind + R3F UI
│   ├── src/
│   │   ├── components/     # Navbar, 3D scene, cards, loading
│   │   ├── pages/          # Home, Viewer, Auth, Admin
│   │   ├── hooks/          # Axios API client
│   │   ├── store/          # Zustand app state
│   │   └── styles/         # Tailwind entry
│   └── ...
├── server/                 # Express API + Mongo models
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   └── data/           # Seeder for demo movies/seats
│   └── .env.example
└── package.json            # Root scripts for monorepo
```

## Run Locally

### 1) Prerequisites
- Node.js 18+
- MongoDB running locally (or any accessible MongoDB URI)

### 2) Install dependencies

```bash
npm install
npm run install:all
```

### 3) Configure environment

```bash
cp server/.env.example server/.env
```

Update `MONGO_URI` and `JWT_SECRET` if needed.

### 4) Start frontend + backend

```bash
npm run dev
```

- Frontend: `http://localhost:5173`
- API: `http://localhost:5000`

## API Endpoints

- `GET /api/movies` – list movies
- `GET /api/movies/:id` – get movie + seat map
- `POST /api/auth/signup` – signup
- `POST /api/auth/login` – login
- `POST /api/movies` – admin create movie (+ seat generation)
- `PATCH /api/seats/:id` – admin update seat status
- `POST /api/seats/favorite` – save user favorite seat
- `POST /api/admin/layout` – admin replace theatre layout

## Notes

- On first server boot, demo movies and theatre seats are auto-seeded.
- Booking action opens BookMyShow homepage with query params to simulate deep-link context.
- Viewer uses camera FOV shifts and seat-position math to mimic distance/angle effects.
