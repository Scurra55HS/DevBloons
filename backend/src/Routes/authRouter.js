import { Router } from 'express';
import { registerUser } from '../Controllers/AuthController.js';

const router = Router();

router.post('/register', registerUser);

export default router;
