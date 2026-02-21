import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import { connectDB } from './config/db.js';
import { sampleMovies, buildSeats } from './data/seed.js';
import Movie from './models/Movie.js';
import Seat from './models/Seat.js';
import adminRoutes from './routes/adminRoutes.js';
import authRoutes from './routes/authRoutes.js';
import movieRoutes from './routes/movieRoutes.js';
import seatRoutes from './routes/seatRoutes.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/api/health', (_req, res) => res.json({ status: 'ok' }));
app.use('/api/auth', authRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/seats', seatRoutes);
app.use('/api/admin', adminRoutes);

const seedIfEmpty = async () => {
  const movieCount = await Movie.countDocuments();
  if (movieCount > 0) return;

  const movies = await Movie.insertMany(sampleMovies);
  for (const movie of movies) {
    await Seat.insertMany(buildSeats(movie._id));
  }
  console.log('Seeded sample movies and seats');
};

const PORT = process.env.PORT || 5000;

connectDB().then(async () => {
  await seedIfEmpty();
  app.listen(PORT, () => console.log(`Server running on ${PORT}`));
});
