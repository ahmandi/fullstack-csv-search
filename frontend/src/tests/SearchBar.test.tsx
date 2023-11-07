import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';

import SearchBar from 'components/SearchBar';

const onSearch = jest.fn();

const data = [
	{
		name: 'John Doe',
		city: 'New York',
		country: 'USA',
		favorite_sport: 'Basketball',
	},
	{
		name: 'Jane Smith',
		city: 'London',
		country: 'UK',
		favorite_sport: 'Football',
	},
];

const setupSearchBar = () => {
	render(<SearchBar data={data} onSearch={onSearch} />);

	const input = screen.getByPlaceholderText('Search...');

	const searchButton = screen.getByText('Search');

	return { input, searchButton };
};

test('SearchBar filters data correctly', () => {
	const { input, searchButton } = setupSearchBar();
	fireEvent.change(input, { target: { value: 'John' } });
	fireEvent.click(searchButton);
	expect(onSearch).toHaveBeenCalledWith([
		{
			name: 'John Doe',
			city: 'New York',
			country: 'USA',
			favorite_sport: 'Basketball',
		},
	]);
});

test('Empty Search Does Not Filter Data', () => {
	const { input, searchButton } = setupSearchBar();
	fireEvent.change(input, { target: { value: '' } });
	fireEvent.click(searchButton);
	expect(onSearch).toHaveBeenCalledWith(data);
});
