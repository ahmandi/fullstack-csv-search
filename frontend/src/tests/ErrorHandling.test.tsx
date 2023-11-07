import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent, act } from '@testing-library/react';

import FileUpload from 'components/FileUpload';

const mockOnUpload = jest.fn();

test('displays an error for non-CSV file', () => {

	render(<FileUpload onUpload={mockOnUpload} />);
	const fileInput = screen.getByTestId('file-test-input');
	const file = new File(['content'], 'test.txt', { type: 'text/plain' });

	fireEvent.change(fileInput, { target: { files: [file] } });

	const errorMessage = screen.getByText('Please select a CSV file');
	expect(errorMessage).toBeInTheDocument();

	expect(mockOnUpload).not.toHaveBeenCalled();
});

test('displays an error when no file is selected', () => {
  render(<FileUpload onUpload={mockOnUpload} />);
  const uploadButton = screen.getByText('Upload File');

  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    fireEvent.click(uploadButton);
  });

  const errorMessage = screen.getByText('Please select a CSV file first.');
  expect(errorMessage).toBeInTheDocument();
});