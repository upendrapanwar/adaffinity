import express from 'express';
import errorMiddleware from './app/middlewares/errorMiddleware/errorMiddleware';

const app = express();

app.use(express.json());

// Routes
//app.use('/api', exampleRoutes);

// Global error handler
app.use(errorMiddleware);

export default app;