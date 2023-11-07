import { useState } from 'react';
import SearchBar from 'components/SearchBar';
import FileUpload from 'components/FileUpload';
import CardDisplay from 'components/CardDisplay';
import { DataItem } from 'interfaces/interface';
import './styles.css';
import Footer from 'components/Footer/Footer';

function Home() {
	const [uploadedData, setUploadedData] = useState<DataItem[]>([]);
	const [filteredData, setFilteredData] = useState<DataItem[]>(uploadedData);

	const handleDataUpload = (data: DataItem[]) => {
		setUploadedData(data);
		setFilteredData(data);
	};

	const handleSearch = (filteredData: DataItem[]) => {
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
