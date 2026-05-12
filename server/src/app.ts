import express from 'express';
import bodyParser from 'body-parser';
import scheduleRoutes from './routes/scheduleRoutes';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/schedule', scheduleRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});