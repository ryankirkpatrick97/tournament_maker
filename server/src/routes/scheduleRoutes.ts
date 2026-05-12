import { Router } from 'express';
import { generateSchedule, getSchedule } from '../controllers/scheduleController';

const router = Router();

// Route to generate a new schedule
router.post('/generate', generateSchedule);

// Route to get the current schedule
router.get('/', getSchedule);

export default router;