export const BASE_URL =
	process.env.REACT_APP_BASE_URL || 'http://localhost:3000';

export const uploadCSV = async (file: File) => {
	const formData = new FormData();
	formData.append('file', file);

	const response = await fetch(`${BASE_URL}/api/files`, {
		method: 'POST',
		body: formData,
	});

	return response.json();
};
