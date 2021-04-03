import React, { useState, useEffect } from 'react';
import { tokenState as tokenStateAtom } from '../landing-page-components/LandingCarousel';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const User = () => {
	const [token, setToken] = useRecoilState(tokenStateAtom);
    const [userRecipes, setUserRecipes] = useState([])
    const [recipeId, setRecipeId] = useState()
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

    useEffect(() => {
        axios({
					url: `http://localhost:8000/recipes/${recipeId}`,
					method: 'DELETE',
					credentials: 'include',
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
    }, [recipeId])

    const mapRecipes = userRecipes.map((recipe) => {
        return (
					<div>
						<h1>{recipe.title}</h1>
						<Button
							onClick={() => {
								setRecipeId(recipe._id);
							}}>
							Delete
						</Button>
						<Button as={Link} to={`update/${recipe._id}`}>
							Update
						</Button>
					</div>
				);
    })

    console.log(userRecipes);

	return (
		<div>
            <updateModal />
			<h1>{mapRecipes}</h1>
		</div>
	);
};

export default User;
