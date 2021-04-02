import react from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';
import LandingCarousel from './landing-page-components/LandingCarousel';
// import LandingNavBar from './landing-page-components/LandingNavBar';
import NavBar from './global-components/NavBar';
import Home from './home-components/Home';
import Details from './home-components/Details';
import Login from './landing-page-components/Login';
import { atom, useRecoilState, useRecoilValue } from 'recoil';
import { userState as userStateAtom } from './landing-page-components/LandingCarousel';
import RecipeCreate from './landing-page-components/RecipeCreate'
import { tokenState as tokenStateAtom } from './landing-page-components/LandingCarousel';

function App() {
	const [user, setUser] = useRecoilState(userStateAtom);
	const [token, setToken] = useRecoilState(tokenStateAtom);

	console.log(token)

	if (token === null) {
		return (
			<div className='App'>
				<RecipeCreate />
				<Route path='/' exact render={() => <LandingCarousel />} />

				<Route path='/login' exact render={() => <Login />} />

				<Route path='/home' exact render={() => <Home />} />

				<Route path='/recipes/:id' exact component={Details} />

				{/* <LandingCarousel/> */}
				{/* <NavBar /> */}
				{/* turnary will go here LOGED IN OR NOT */}
			</div>
		);
	} else {
		return (
			<div>
				<NavBar />
				<Route path='/' exact render={() => <Home />} />
				<Route path='/recipes/:id' exact component={Details} />
			</div>
		);
	}
}

export default App;
