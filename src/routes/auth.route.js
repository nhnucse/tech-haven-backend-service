import { Router } from 'express';
import { shopRgistration } from '../controllers/auth.controller.js';

const router = Router();

router.post('/register', shopRgistration);

export default router;