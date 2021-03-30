import react from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';
import LandingCarousel from './landing-page-components/LandingCarousel';
// import LandingNavBar from './landing-page-components/LandingNavBar';
import NavBar from './global-components/NavBar';
import Home from './home-components/Home';
import Details from './home-components/Details';
import { atom, useRecoilState, useRecoilValue } from "recoil"
import { userState as userStateAtom } from './landing-page-components/LandingCarousel'

function App() {

	const [user, setUser] = useRecoilState(userStateAtom)

	console.log(user)

	if (user === false) {
		return (
			<div className='App'>
				<Route path='/' exact render={() => <LandingCarousel />} />

				<Route path='/home' exact render={() => <Home />} />
				{/* <LandingCarousel/> */}
				{/* <NavBar /> */}
				{/* turnary will go here LOGED IN OR NOT */}
			</div>
		);
	} else {
		return (
			<div>
				<Route path='/' exact render={() => <Home />} />
				<Route path='/:id' exact component={Details} />
			</div>
		);
	}
}

export default App;
