import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { tokenState as tokenStateAtom } from '../landing-page-components/LandingCarousel';
import { atom, useRecoilState, useRecoilValue } from 'recoil';
import { Button, Form } from 'react-bootstrap';
import './RecipeCreate.css';

const RecipeCreate = () => {
	const [token, setToken] = useRecoilState(tokenStateAtom);
	const [recipe, setRecipe] = useState({});

	console.log(token);

	const handleSubmit = (event) => {
		event.preventDefault();

		axios({
			url: `https://seefood-backend.herokuapp.com/recipes`,
			method: 'POST',
			data: recipe,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	};

	// function handleInformation(event) {
	// 	setRecipe({
	// 		title: event.target.value,
	// 		author: event.target.value,
	// 		inspiredBy: event.target.value,
	// 		allergies: event.target.value,
	// 		image: event.target.value,
	// 		ingredients: [event.target.value],
	// 		directions: [event.target.value],
	// 	});
	// }

	function handleInput(event) {
		// event.preventDefault();
		const input = { ...recipe };
		input[event.target.id] = event.target.value;
		setRecipe(input);
		// console.log(event.target.id);
	}

	// function submittest() {
	// 	event.preventDefault();
	// 	console.log(recipe);
	// }

	return (
		<div>
			<h1>New recipie</h1>
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId='title' onChange={handleInput}>
					<Form.Label>Title</Form.Label>
					<Form.Control placeholder='Enter title' />
				</Form.Group>
				<Form.Group controlId='inspiredBy' onChange={handleInput}>
					<Form.Label>Inspired By</Form.Label>
					<Form.Control placeholder='Enter Origin' />
				</Form.Group>
				<Form.Group controlId='image' onChange={handleInput}>
					<Form.Label>Image Link</Form.Label>
					<Form.Control placeholder='Enter link to the image' />
				</Form.Group>
				<Form.Group controlId='ingridients' onChange={handleInput}>
					<Form.Label>Ingridients</Form.Label>
					<Form.Control
						placeholder='Enter Ingridients'
						style={{ height: '200px' }}
					/>
				</Form.Group>
				<Form.Group controlId='directions' onChange={handleInput}>
					<Form.Label>Directions</Form.Label>
					<Form.Control
						placeholder='Enter Instructions'
						style={{ height: '200px' }}
					/>
				</Form.Group>
				<Button variant='primary' type='submit'>
					Submit
				</Button>
			</Form>
			{/* <button onClick={handleSubmit}></button> */}
		</div>
	);
};

export default RecipeCreate;
