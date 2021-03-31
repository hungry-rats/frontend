import React, { useState, useEffect } from 'react';
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

	useEffect(() => {}, [details]);

	if (details) {
		console.log(details);
		return (
			<div>
				<h1>{details.title}</h1>
				<img src={details.image} alt={details.title} />

				<h1>Ingredients</h1>
				<ul>
					{details.information[0].ingredients.map((step, index) => {
						return (
							<li>
								{index}. {step}
							</li>
						);
					})}
				</ul>

				<h1>Directions</h1>
				<ul>
					{details.information[0].directions.map((step, index) => {
						return (
							<li>
								{index}. {step}
							</li>
						);
					})}
				</ul>

				<br></br>
				
			</div>
		);
	} else {
		return <h1>Loading</h1>;
	}
}
