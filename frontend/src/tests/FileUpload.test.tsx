import { render, screen, fireEvent } from '@testing-library/react';
import FileUpload from 'components/FileUpload';

const mockOnUpload = jest.fn();

test('handles CSV file upload', () => {
	render(<FileUpload onUpload={mockOnUpload} />);
	const fileInput = screen.getByTestId('file-test-input') as HTMLInputElement;

	const csvContent =
		'name,city,country,favorite_sport\nJohn Doe,New York,USA,Basketball';
	const csvBlob = new Blob([csvContent], { type: 'text/csv' });
	const csvFile = new File([csvBlob], 'data.csv');

	fireEvent.change(fileInput, { target: { files: [csvFile] } });

	const uploadButton = screen.getByText('Upload File');
	fireEvent.click(uploadButton);
});
