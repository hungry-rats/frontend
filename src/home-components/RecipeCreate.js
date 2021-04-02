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
            <h1>POST RECIPE</h1>
            <button onClick={handleSubmit}></button>
        </div>
    );
};

export default RecipeCreate;