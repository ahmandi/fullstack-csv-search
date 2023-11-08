import csv from 'csv-parser';
import * as fs from 'fs';
import { CSVRow } from '../controllers/files.controller';

const csvParser = async (filePath: string): Promise<CSVRow[]> => {
	return new Promise<CSVRow[]>((resolve, reject) => {
		const data: CSVRow[] = [];

		fs
			.createReadStream(filePath)
			.pipe(csv())
			.on('data', (row) => {
				Object.keys(row).forEach((key) => {
					if (typeof row[key] === 'string') {
						row[key] = row[key].trim();
					}
				});

				data.push(row);
			})
			.on('end', () => resolve(data))
			.on('error', (error) => reject(error));
	});
};

export default csvParser;
