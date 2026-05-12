import { Request, Response } from 'express';
import { schedulerService } from '../services/schedulerService';

export const generateSchedule = async (req: Request, res: Response) => {
    try {
        const players = req.body.players;
        const schedule = await schedulerService.createSchedule(players);
        res.status(200).json(schedule);
    } catch (error) {
        res.status(500).json({ message: 'Error generating schedule', error });
    }
};

export const getSchedule = async (req: Request, res: Response) => {
    try {
        const schedule = await schedulerService.getCurrentSchedule();
        res.status(200).json(schedule);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching schedule', error });
    }
};