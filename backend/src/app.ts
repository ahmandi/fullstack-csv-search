import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import filesRouter from './routes/files.routes';

const app = express();
const port = process.env.BASE_URL || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', filesRouter);

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});

export default app;
