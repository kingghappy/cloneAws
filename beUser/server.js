import express from 'express';
import cors from 'cors';

import authRouter from './routes/auth.route.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', authRouter)

app.listen(3000, () => {
    console.log('Server started on port 3000');
})