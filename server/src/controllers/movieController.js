import Movie from '../models/Movie.js';
import Seat from '../models/Seat.js';
import { buildSeats } from '../data/seed.js';

export const getMovies = async (_req, res) => {
  const movies = await Movie.find().sort({ createdAt: -1 });
  res.json(movies);
};

export const createMovie = async (req, res) => {
  const movie = await Movie.create(req.body);
  const seats = buildSeats(movie._id);
  await Seat.insertMany(seats);
  res.status(201).json(movie);
};

export const getMovieWithSeats = async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  if (!movie) return res.status(404).json({ message: 'Movie not found' });

  const seats = await Seat.find({ movieId: movie._id }).sort({ row: 1, number: 1 });
  return res.json({ movie, seats });
};
