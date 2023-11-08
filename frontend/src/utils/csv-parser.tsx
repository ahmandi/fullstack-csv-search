import { CSVRow } from 'interfaces/interface';

const parseCSV = async (file: File): Promise<CSVRow[]> => {
	return new Promise<CSVRow[]>((resolve, reject) => {
		const reader = new FileReader();

		reader.onload = (event) => {
			if (event.target && typeof event.target.result === 'string') {
				const fileContent = event.target.result;
				const lines = fileContent.split('\n');
				const header = lines[0].split(',').map((value) => value.trim());

				const data = lines.slice(1).map((line) => {
					const values = line.split(',').map((value) => value.trim());

					if (values.every((value) => value === '')) {
						return null;
					}

					const item: CSVRow = {};

					header.forEach((columnName, index) => {
						item[columnName] = values[index] || '';
					});

					return item;
				});

				const filteredData = data.filter((item) => item !== null) as CSVRow[];

				resolve(filteredData);
			} else {
				reject(new Error('Failed to read the file content.'));
			}
		};

		reader.onerror = (event) => {
			reject(new Error('Failed to read the file.'));
		};

		const blob = new Blob([file]);
		reader.readAsText(blob);
	});
};

export default parseCSV;
