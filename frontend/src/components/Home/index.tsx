import { useState } from 'react';
import SearchBar from 'components/SearchBar';
import FileUpload from 'components/FileUpload';
import CardDisplay from 'components/CardDisplay';
import { CSVRow } from 'interfaces/interface';
import './styles.css';
import Footer from 'components/Footer/Footer';

function Home() {
	const [uploadedData, setUploadedData] = useState<CSVRow[]>([]);
	const [filteredData, setFilteredData] = useState<CSVRow[]>(uploadedData);

	const handleDataUpload = (data: CSVRow[]) => {
		setUploadedData(data);
		setFilteredData(data);
	};

	const handleSearch = (filteredData: CSVRow[]) => {
		setFilteredData(filteredData);
	};

	return (
		<>
			<div className="container">
				<div className="first-half">
					<h1 className="title">PartnersData Loader</h1>
					<FileUpload onUpload={handleDataUpload} />
					<SearchBar data={uploadedData} onSearch={handleSearch} />
				</div>
				<div className="card-display-container">
					<CardDisplay data={filteredData} />
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Home;
