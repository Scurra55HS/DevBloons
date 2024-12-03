import { Router } from 'express';
import { loginUser, registerUser } from '../controllers/authController.js';
import { protect, authorize } from '../middlewares/authMiddleware.js';


const router = Router();

router.post('/login', loginUser);
router.post('/register', protect, authorize(['responsavel']), registerUser);


export default router;
