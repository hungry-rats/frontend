import React, { useState, useEffect } from 'react';
import NavBar from '../global-components/NavBar';
import "./Details.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Carousel, Form, Jumbotron } from "react-bootstrap";



const axios = require('axios').default;


export default function Details({ match }) {
	// console.log(match.params);
	const id = match.params.id;
	const [details, setDetails] = useState();

	const url = `http://localhost:8000/recipes/${id}`;
	useEffect(() => {
		axios
			.get(url)
			.then((res) => {
				setDetails(res.data);
			})
			.catch(console.error);
	}, []);

	console.log(details);

	useEffect(() => {}, [details]);

	if (details) {
		console.log(details);

		return (
			<div>
				<NavBar />
				<div className="titleImageContainer">
					<h1 className="itemTitleBanner">{details.title}</h1>
					<img className="mainPhoto" src={details.image} alt={details.title} />
					<div className="sideBarOne">PLACEHOLDER</div>
					<Button variant="info">Post a Recipe</Button>
					
				</div>
				<div className="informationBody">
					<div className ="ingredientList">
						<h1 className="ingredientTitle">Ingredients: </h1>
						<ul>
							{details.information[0].ingredients.map((step, index) => {
								return (
									<li>
										{step}
									</li>
								);
							})}
						</ul>
								<div className="commentContainer">
							<h3 className="commentBanner">Add a Comment:
							</h3>
							<input type="text" className="commentForm">
							</input>
							<Button className="commentSubmitButton" variant="info">Submit</Button>
							
						</div>
					</div>
					<div className="directionList">
						<h1 className="directionTitle">Directions:</h1>
						<ul>
							{details.information[0].directions.map((step, index) => {
								return (
									<li className= "directionListItem">
										<h6 className="step">Step {index+1}</h6> {step}
									</li>
								);
							})}
						</ul>
					</div>

				</div>

				<br></br>
			


			</div>
		);
	} else {
		return <h1>Loading</h1>;
	}
}
