import express from 'express';
import { userRouter } from './routes/api';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api/users', userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});