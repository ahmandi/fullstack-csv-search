import { useState } from 'react';
import parseCSV from 'utils/csv-parser';
import { uploadCSV } from 'api';
import ErrorHandling from 'components/ErrorHandling';
import { CSVRow } from 'interfaces/interface';
import './styles.css';

interface FileUploadProps {
	onUpload: (data: CSVRow[]) => void;
}

function FileUpload({ onUpload }: FileUploadProps) {
	const [selectedFile, setSelectedFile] = useState<File | null>(null);
	const [error, setError] = useState<string>('');

	const handleFileChange = (file: File) => {
		if (file.name.endsWith('.csv')) {
			setSelectedFile(file);
		} else {
			setError('Please select a CSV file');
		}
	};

	const handleUpload = async () => {
		if (!selectedFile) {
			setError('Please select a CSV file first.');
			return;
		}

		try {
			const parsedData = await parseCSV(selectedFile);

			uploadCSV(selectedFile);
			onUpload(parsedData);
			setSelectedFile(null);
			setError('');
		} catch (error) {
			console.log(error);
			setError('An error occurred while uploading the file.');
		}
	};

	return (
		<div className="d-flex">
			{error && <ErrorHandling error={error} />}{' '}
			<div className="mobile-flex">
				<input
					id="file-input"
					data-testid="file-test-input"
					type="file"
					accept=".csv"
					className="custom-file-input"
					onChange={(e) => {
						if (e.target.files && e.target.files.length > 0) {
							handleFileChange(e.target.files[0]);
						}
					}}
				/>
				<button onClick={handleUpload}>Upload File</button>
			</div>
		</div>
	);
}

export default FileUpload;
