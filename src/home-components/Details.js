import React, { useState, useEffect } from 'react';
import NavBar from '../global-components/NavBar';
import { Link } from 'react-router-dom';
import './Details.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Carousel, Form, Jumbotron } from 'react-bootstrap';
import Comments from './Comments';

const axios = require('axios').default;

export default function Details({ match }) {
	// console.log(match.params);
	const id = match.params.id;
	const [details, setDetails] = useState();
	const [isClicked, setIsClicked] = useState(false);

	const url = `https://seefood-backend.herokuapp.com/recipes/${id}`;
	useEffect(() => {
		axios
			.get(url)
			.then((res) => {
				setDetails(res.data);
			})
			.catch(console.error);
	}, []);

	// console.log(details);
	// console.log(id)
	// console.log(details.directions);

	useEffect(() => {}, [details]);

	if (details) {
		console.log(details);

		const toggleClick = (index) => {
			let mappedOut = details.directions.map((index) => {
				return details.directions.index == index
					? { ...details.directions, isClicked: !details.directions.isClicked }
					: { ...details.directions };
			});
			setIsClicked(!isClicked);
		};

		return (
			<div>
				<div className='titleImageContainer'>
					<h1 className='itemTitleBanner'>{details.title}</h1>
					<h3 className='inspiration'> Inspired by {details.inspiredBy}</h3>
					<img className='mainPhoto' src={details.image} alt={details.title} />
					<div className='sideBarOne'>
						<Link className='return' to={'/home'}>
							<Button variant='info'>Return to Feed</Button>
						</Link>
					</div>
					{/* <Button variant='info'>Post a Recipe</Button> */}
				</div>
				<div className='informationBody'>
					<div className='ingredientList'>
						<h1 className='ingredientTitle'>Ingredients: </h1>
						<ul>
							{details.ingredients.map((step, index) => {
								return <li>{step}</li>;
							})}
						</ul>
					</div>
					<div className='directionList'>
						<h1 className='directionTitle'>Directions:</h1>
						<ul>
							{details.directions.map((step, index) => {
								return (
									<li className='directionListItem'>
										<div>
											<h6
												className={`step ${isClicked ? 'strike' : null}`}
												onClick={toggleClick}>
												Step {index + 1}
											</h6>{' '}
											{step}
										</div>
									</li>
								);
							})}
						</ul>
					</div>
				</div>

				<br></br>

				<Comments details={details} />
			</div>
		);
	} else {
		return <h1>Loading</h1>;
	}
}
