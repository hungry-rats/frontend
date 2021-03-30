import react from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';
import LandingCarousel from './landing-page-components/LandingCarousel';
// import LandingNavBar from './landing-page-components/LandingNavBar';
import NavBar from './global-components/NavBar';
import Home from './home-components/Home';
import Details from './home-components/Details';

function App() {
	return (
		<div className='App'>
			<Route path='/' exact render={() => <LandingCarousel />} />
			{/* <LandingCarousel/> */}
			{/* <NavBar /> */}
			{/* turnary will go here LOGED IN OR NOT */}
			<Route path='/home' exact render={() => <Home />} />
			<Route path='/:id' exact component={Details} />
		</div>
	);
}

export default App;
