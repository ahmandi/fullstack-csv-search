export interface CSVRow {
	[key: string]: string;
}

const uploadedData: CSVRow[] = [];

const searchData = (searchQuery: string, data: CSVRow[]): CSVRow[] => {
	if (!searchQuery) {
		return data;
	}

	if (!data || data.length === 0) {
		return [];
	}

	const filteredData = data.filter((item) => {
		return Object.values(item).some((value) => {
			return value.toLowerCase().includes(searchQuery);
		});
	});

	return filteredData;
};

export { uploadedData, searchData };
