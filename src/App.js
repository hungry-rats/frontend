import react from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';
import NavBar from './global-components/NavBar';
import Home from './home-components/Home';
import Details from './home-components/Details';

function App() {
	return (
		<div className='App'>
			<NavBar />
			{/* turnary will go here LOGED IN OR NOT */}
			<Route path='/home' exact render={() => <Home />} />
			<Route path='/:id' exact component={Details} />
		</div>
	);
}

export default App;
