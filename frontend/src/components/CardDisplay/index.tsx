import './styles.css';
import { CSVRow } from 'interfaces/interface';

interface CardDisplayProps {
	data: CSVRow[];
}

function CardDisplay({ data }: CardDisplayProps) {
	return (
		<div className="card-container">
			{data.map((row, index) => (
				<div className="grid__item" data-testid="card" key={index}>
					{Object.keys(row).map((header) => (
						<div key={header}>
							{header}: {row[header]}
						</div>
					))}
				</div>
			))}
		</div>
	);
}

export default CardDisplay;
