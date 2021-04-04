import React, { useState, useEffect } from 'react';
import { tokenState as tokenStateAtom } from '../landing-page-components/LandingCarousel';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap'

const User = () => {
	const [token, setToken] = useRecoilState(tokenStateAtom);
    const [userRecipes, setUserRecipes] = useState([])
	const [userComments, setUserComments] = useState([])
    const [recipeId, setRecipeId] = useState()
	const [commentId, setCommentId] = useState()
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
				url: `https://seefood-backend.herokuapp.com/comments`,
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}).then((res) => {
				setUserComments(res.data);
			});
		}, []);

		console.log(userComments);
		console.log(userRecipes)

    useEffect(() => {
        axios({
					url: `https://seefood-backend.herokuapp.com/recipes/${recipeId}`,
					method: 'DELETE',
					credentials: 'include',
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
    }, [recipeId])

	useEffect(() => {
		axios({
			url: `https://seefood-backend.herokuapp.com/${recipeId}/comments/${commentId}/delete`,
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	}, [commentId])

    const mapRecipes = userRecipes.map((recipe) => {
        return (
					<Col sm={4} style={{ 'margin-right': '500px' }}>
						<div style={{ width: 500, 'margin-right': '500px' }}>
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
					</Col>
				);
    })


	const mapComments = userComments.map((comment) => {
		return (
			<Col sm={12} style={{ 'margin-left': '500px',}}>
				<div
					className='comments'
					style={{ 'margin-left': '500px' }}>
					<p>{comment.post}</p>
					<Button /* as={Link} to='/user' */ onClick={() => {
						setCommentId(comment._id)
					}}>Delete</Button>
					<Button as={Link} to={`update/comment/${comment.recipeId}/${comment._id}`}>Update</Button>
				</div>
			</Col>
		);
	})

    console.log(userRecipes);

	return (
		<div>
            {/* <updateModal /> */}
			<h1>{mapRecipes}</h1>
			<h1>{mapComments}</h1>
		</div>
	);
};

export default User;
