import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { tokenState as tokenStateAtom } from '../landing-page-components/LandingCarousel';
import { atom, useRecoilState, useRecoilValue } from 'recoil';
import { Button, Form } from 'react-bootstrap';
import './RecipeCreate.css';
import { Link } from 'react-router-dom';

const RecipeCreate = () => {
	const [token, setToken] = useRecoilState(tokenStateAtom);
	const [recipe, setRecipe] = useState({});
	const [updated, setUpdated] = useState({
		title: null,
		directions: [null],
	});

	const handleSubmit = (event) => {
		event.preventDefault();
		const arrrecipe = recipe['directions'].split('.');
		const tempData = { ...recipe };

		tempData['directions'] = arrrecipe;

		setUpdated(tempData);
	};

	useEffect(() => {
		if (updated.title !== null) {
			axios({
				url: `https://seefood-backend.herokuapp.com/recipes`,
				method: 'POST',
				data: updated,
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
		}
	}, [updated]);

	function handleInput(event) {
		const input = { ...recipe };
		input[event.target.id] = event.target.value;
		setRecipe(input);
	}

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
				<Button variant='primary' type='submit' /* as={Link} to='/home' */>
					Submit
				</Button>
			</Form>
			{/* <button onClick={handleSubmit}></button> */}
		</div>
	);
};

export default RecipeCreate;
