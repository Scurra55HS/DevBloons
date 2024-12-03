import { Router } from 'express';
import { createModule, getModules, updateModule, deleteModule, getModule } from '../controllers/moduleController.js';

const router = Router();

router.post('/', createModule);
router.get('/', getModules);
router.get('/:id', getModule)
router.put('/:id', updateModule); 
router.delete('/:id', deleteModule); 

export default router;

