import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { tokenState as tokenStateAtom } from '../landing-page-components/LandingCarousel';
import { atom, useRecoilState, useRecoilValue } from 'recoil';

const RecipeCreate = () => {
    const [token, setToken] = useRecoilState(tokenStateAtom);
    const [recipe, setRecipe] = useState({
        title: "TESTTESTTESTTEST",
        author: "user 1",
    })

    console.log(token)

    const handleSubmit = (event) => {
        event.preventDefault();

        axios({
					url: `http://localhost:8000/recipes`,
					method: 'POST',
					data: recipe,
					headers: {
						Authorization:
							`Bearer ${token}`,
					},
				});}

    function handleInformation(event) {
		setRecipe({
			title: event.target.value,
			author: event.target.value,
			inspiredBy: event.target.value,
            allergies: event.target.value,
            image: event.target.value,
            ingredients: [event.target.value],
            directions: [event.target.value]
		});
	}

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

