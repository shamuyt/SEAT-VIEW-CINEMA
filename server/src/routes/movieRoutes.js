import { Router } from 'express';
import { createMovie, getMovieWithSeats, getMovies } from '../controllers/movieController.js';
import { isAdmin, protect } from '../middleware/auth.js';

const router = Router();
router.get('/', getMovies);
router.get('/:id', getMovieWithSeats);
router.post('/', protect, isAdmin, createMovie);

export default router;
