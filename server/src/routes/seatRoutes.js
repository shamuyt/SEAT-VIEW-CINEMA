import { Router } from 'express';
import { saveFavoriteSeat, updateSeatStatus } from '../controllers/seatController.js';
import { isAdmin, protect } from '../middleware/auth.js';

const router = Router();
router.patch('/:id', protect, isAdmin, updateSeatStatus);
router.post('/favorite', protect, saveFavoriteSeat);

export default router;
