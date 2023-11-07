import { DataItem } from 'interfaces/interface';

const parseCSV = async (file: File): Promise<DataItem[]> => {
	return new Promise<DataItem[]>((resolve, reject) => {
		const reader = new FileReader();

		reader.onload = (event) => {
            if (event.target && typeof event.target.result === 'string') {
              const fileContent = event.target.result;
				const lines = fileContent.split('\n');

				const data = lines.slice(1).map((line) => {
					const values = line.split(',').map((value) => value.trim());

					if (values.every((value) => value === '')) {
						return null;
					}

					const item: DataItem = {
						name: values[0] || '',
						city: values[1] || '',
						country: values[2] || '',
						favorite_sport: values[3] || '',
					};

					return item;
				});

				const filteredData = data.filter((item) => item !== null) as DataItem[];

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
