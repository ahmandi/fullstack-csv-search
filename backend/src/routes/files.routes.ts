import { Router, Request, Response } from 'express';
import multer from 'multer';
import fs from 'fs';
import { uploadedData } from '../controllers/files.controller';
import { searchData } from '../controllers/files.controller';
import csvParser from '../utils/csv-parser';

const router = Router();

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'uploads/');
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	},
});

const upload = multer({ storage });

router.post(
	'/api/files',
	upload.single('file'),
	async (req: Request, res: Response) => {
		console.log('Req:', req);
		console.log('Req:', res);

		if (!req.file) {
			console.log('Res for !req.file:', res);
			return res.status(500).json({ message: 'No file uploaded' });
		}

		const uploadedFile = req.file;

		console.log(uploadedFile);

		const targetPath = `uploads/${uploadedFile.originalname}`;

		fs.rename(uploadedFile.path, targetPath, async (err) => {
			if (err) {
				return res.status(500).json({ message: 'Error while saving the file' });
			}

			try {
				const parsedData = csvParser(targetPath);
				uploadedData.length = 0;
				Array.prototype.push.apply(uploadedData, await parsedData);
				res.status(200).json({ message: 'The file was uploaded successfully' });
			} catch (error) {
				res.status(500).json({ message: 'Error while parsing the file' });
			}
		});
	}
);

router.get('/api/users', (req: Request, res: Response) => {
	const searchQuery = req.query.q as string;

	if (!uploadedData) {
		return res.status(500).json({ message: 'No file upload' });
	}

	if (searchQuery === '') {
		res.status(200).json({ data: uploadedData });
	}

	const filteredData = searchData(searchQuery, uploadedData);

	res.status(200).json({ data: filteredData });
});

export default router;
