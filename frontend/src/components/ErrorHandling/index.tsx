import './styles.css';

interface ErrorHandlingProps {
	error: string;
}

function ErrorHandling({ error }: ErrorHandlingProps) {
	return <div className="error">{error && <p>{error}</p>}</div>;
}

export default ErrorHandling;
