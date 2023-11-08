import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import CardDisplay from 'components/CardDisplay';
import { CSVRow } from 'interfaces/interface';

const data: CSVRow[] = [
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

const setupCardDisplay = (data: CSVRow[]) => {
	render(<CardDisplay data={data} />);

	const cards = screen.getAllByTestId('card');
	return { cards };
};

test('CardDisplay displays correct number of cards', () => {
	const { cards } = setupCardDisplay(data);
	expect(cards).toHaveLength(data.length);
});

test('CardDisplay displays data correctly', () => {
	const { cards } = setupCardDisplay(data);

	data.forEach((item, index) => {
		const card = cards[index];

		expect(card).toHaveTextContent(item.name);
		expect(card).toHaveTextContent(item.city);
		expect(card).toHaveTextContent(item.country);
		expect(card).toHaveTextContent(item.favorite_sport);
	});
});
