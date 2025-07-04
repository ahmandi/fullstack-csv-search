import './styles.css';

import { useState } from 'react';
import { CSVRow } from 'interfaces/interface';
import { BASE_URL } from 'api';
import ErrorHandling from 'components/ErrorHandling';

interface SearchBarProps {
	data: CSVRow[];
	onSearch: (filteredData: CSVRow[]) => void;
}

function SearchBar({ data, onSearch }: SearchBarProps) {
	const [searchText, setSearchText] = useState('');
	const [error, setError] = useState<string>('');

	const handleSearch = async () => {
		const searchTextLower = searchText.toLowerCase().trim();

		const filteredData = data.filter((item) => {
			return Object.values(item).some((value) => {
				return value.toLowerCase().includes(searchTextLower);
			});
		});

		onSearch(filteredData);

		try {
			const response = await fetch(`${BASE_URL}/api/users?q=${searchTextLower}`);
			if (response.ok) {
				const result = await response.json();
				onSearch(result.data);
			} else {
				console.error('Search failed:', response.statusText);
				setError(`Search failed: ${response.statusText}`);
				onSearch([]);
			}
		} catch (error) {
			if (
				error instanceof Error &&
				error.message === 'net::ERR_CONNECTION_REFUSED'
			) {
				setError('Error while searching: Connection Refused');
			} else {
				setError('Error while searching');
			}
		}
	};

	return (
		<div className="search-bar">
			{error && <ErrorHandling error={error} />}{' '}
			<div>
				<input
					type="text"
					placeholder="Search..."
					value={searchText}
					onChange={(e) => setSearchText(e.target.value)}
				/>
				<button onClick={handleSearch}>Search</button>
			</div>
		</div>
	);
}

export default SearchBar;
