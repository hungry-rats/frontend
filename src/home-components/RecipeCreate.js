import React from 'react';
import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import './RecipeCreate.css';
import axios from 'axios';

console.log('recipie');

const RecipeCreate = () => {
	const [recipe, setRecipe] = useState({
		title: 'Hopefully Final Test 2',
		author: 'jen the genius',
	});

	const handleSubmit = (event) => {
		event.preventDefault();

		axios({
			url: `http://localhost:8000/recipes`,
			method: 'POST',
			data: recipe,
			headers: {
				Authorization:
					'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNjVhYWU4OTdhZTBjMDY3MTIyMTE2YyIsImlhdCI6MTYxNzM3MzYwNCwiZXhwIjoxNjE3NDA5NjA0fQ.91SNseVG1VwAgHA9Cxd1OZYJUK5dpLxAxEDoQfDYLqA',
			},
		});
	};

	return (
		<div>
			<h1>New recipie</h1>
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId='title'>
					<Form.Label>Title</Form.Label>
					<Form.Control placeholder='Enter title' />
				</Form.Group>
				<Form.Group controlId='inspiredBy'>
					<Form.Label>Inspired By</Form.Label>
					<Form.Control placeholder='Enter Origin' />
				</Form.Group>
				<Form.Group controlId='imageSource'>
					<Form.Label>Image Link</Form.Label>
					<Form.Control placeholder='Enter link to the image' />
				</Form.Group>
				<Form.Group controlId='ingridients'>
					<Form.Label>Image Link</Form.Label>
					<Form.Control placeholder='Enter Ingridients' />
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
