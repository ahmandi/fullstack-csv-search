import './styles.css';
import { DataItem } from 'interfaces/interface';

interface CardDisplayProps {
	data: DataItem[];
}

function CardDisplay({ data }: CardDisplayProps) {
	return (
		<div className="card-container">
			{data.map((item, index) => (
				<div className="grid__item" data-testid="card" key={index}>
					<div>Name: {item.name}</div>
					<div>City: {item.city}</div>
					<div>Country: {item.country}</div>
					<div>Favorite Sport: {item.favorite_sport}</div>
				</div>
			))}
		</div>
	);
}

export default CardDisplay;
