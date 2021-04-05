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
// import RecipeCreate from './home-components/RecipeCreate';
import { atom, useRecoilState, useRecoilValue } from 'recoil';
import { userState as userStateAtom } from './landing-page-components/LandingCarousel';
import { tokenState as tokenStateAtom } from './landing-page-components/LandingCarousel';
import About from './global-components/About';
import Contact from './global-components/Contact';
import RecipeCreate from './home-components/RecipeCreate';
import User from './home-components/User';
import UpdateRecipe from './home-components/UpdateRecipe';
import UpdateComment from './home-components/UpdateComment';

function App() {
	const [token, setToken] = useRecoilState(tokenStateAtom);

	if (token === null) {
		return (
			<div className='App'>
				<Route path='/' exact render={() => <LandingCarousel />} />

				<Route path='/login' exact render={() => <Login />} />

				<Route path='/about' exact component={About} />

				<Route path='/contact' exact component={Contact} />
			</div>
		);
	} else {
		return (
			<div className='App'>
				<NavBar />

				<Route path='/about' exact component={About} />
				<Route path='/contact' exact component={Contact} />
				<Route path='/home' exact render={() => <Home />} />
				<Route path='/user' exact render={() => <User />} />
				<Route path='/recipes/:id' exact component={Details} />
				<Route path='/createrecipe' exact component={RecipeCreate} />
				<Route path='/update/:id' exact component={UpdateRecipe} />
				<Route
					path='/update/comment/:recipeId/:id'
					exact
					component={UpdateComment}
				/>
			</div>
		);
	}
}

export default App;
