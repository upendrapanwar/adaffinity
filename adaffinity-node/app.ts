import express, { Application } from 'express';
import cors from "cors"
import bodyParser from 'body-parser';
import routes from './app/routes/auth.routes';
import errorMiddleware from './app/middlewares/errorMiddleware/errorMiddleware';

const app: Application = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.use(
    "/" + process.env.UPLOAD_DIR,
    express.static(__dirname + "/" + process.env.UPLOAD_DIR)
);
// Routes
app.use('/auth',routes);

// Global error handler
app.use(errorMiddleware);

export default app;