type DataItem = {
	name: string;
	city: string;
	country: string;
	favorite_sport: string;
};

const uploadedData: DataItem[] = [];

const searchData = (searchQuery: string, data: DataItem[]): DataItem[] => {
	if (!searchQuery) {
		return data;
	}

	if (!data || data.length === 0) {
		return [];
	}

	const filteredData = data.filter((item) => {
		return (
			item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
			item.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
			item.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
			item.favorite_sport.toLowerCase().includes(searchQuery.toLowerCase())
		);
	});

	return filteredData;
};

export { uploadedData, searchData };
