import express from 'express';
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js';
import cookieParser from 'cookie-parser';
import taskRouter from './routes/task.routes.js'

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use("/api", authRoutes);
app.use("/api", taskRouter);
app.use(cookieParser);

export default app;