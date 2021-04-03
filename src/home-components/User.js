import React, { useState, useEffect } from 'react';
import { tokenState as tokenStateAtom } from '../landing-page-components/LandingCarousel';
import { useRecoilState } from 'recoil';
import axios from 'axios';

const User = () => {
	const [token, setToken] = useRecoilState(tokenStateAtom);
    const [userRecipes, setUserRecipes] = useState([])
	console.log(token);

	useEffect(() => {
		axios({
			url: `https://seefood-backend.herokuapp.com/users/recipes`,
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`,
			}
		})
        .then((res) => {
			setUserRecipes(res.data);
		});
	}, []);

    const mapRecipes = userRecipes.map((recipe) => {
        return (
            <h1>{recipe.title}</h1>
        )
    })

    console.log(userRecipes);

	return (
		<div>
			<h1>{mapRecipes}</h1>
		</div>
	);
};

export default User;
