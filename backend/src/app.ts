import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import filesRouter from './routes/files.routes';

const app = express();
const port = 3000;

app.use(cors({ origin: 'https://fullstack-csv-search.vercel.app' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', filesRouter);

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});

export default app;
