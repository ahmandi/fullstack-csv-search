import request from 'supertest';
import app from './app';
import path from 'path';
import { expect } from 'chai';

const csvFilePath = path.resolve(__dirname, 'utils/csvtest.csv');

describe('POST /api/files', () => {
	it('should upload a CSV file and return a success message', async () => {
		const response = await request(app)
			.post('/api/files')
			.attach('file', csvFilePath);

		expect(response.status).to.equal(200);
		expect(response.body.message).to.equal('The file was uploaded successfully');
	});

	it('should handle errors when no file is uploaded', async () => {
		const response = await request(app).post('/api/files').expect(500);

		expect(response.body.message).to.equal('No file uploaded');
	});
});
