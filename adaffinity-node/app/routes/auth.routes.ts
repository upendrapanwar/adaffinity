import express from 'express';
import {
    register
} from '../controllers/auth.controller';

const router = express.Router();

// Define routes
router.post('/signup', register);

export default router;