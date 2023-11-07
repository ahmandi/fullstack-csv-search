import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from 'components/Home';
import GlobalStyle from './styles/GlobalStyles';

function App() {
	return (
		<>
			<GlobalStyle />
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
