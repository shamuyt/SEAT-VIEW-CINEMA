import { Router } from 'express';
import { updateLayout } from '../controllers/adminController.js';
import { isAdmin, protect } from '../middleware/auth.js';

const router = Router();
router.post('/layout', protect, isAdmin, updateLayout);

export default router;
