import express from 'express';
import {
    register
} from '../controllers/auth.controller';

const auth = express.Router();

// Define routes
auth.post('/signup', register);


export default auth;