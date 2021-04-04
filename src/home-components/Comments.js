import React, { useState, useEffect, useForceUpdate } from 'react';
import axios from 'axios';
import { Button, Carousel, Form, Jumbotron } from 'react-bootstrap';
import { tokenState as tokenStateAtom } from '../landing-page-components/LandingCarousel';
import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom'


const Comments = (props) => {
	const [token, setToken] = useRecoilState(tokenStateAtom);
	const [comment, setComment] = useState({
		post: null,
		recipeId: null,
	})
	const [recipeInfo, setRecipeInfo] = useState([])
	const recipeId = props.details._id;
	let mapNewComments = []

	useEffect(() => {
		setComment({
			recipeId: recipeId,
		})
	}, [])
	
	// console.log(props.details);
	// console.log(token);
	let mapComments = props.details.comments.map((comment) => {
		// console.log(props.details.author.username);
		return (
			<div>
				<p style={{ color: 'red' }}>{comment.post}</p>
				<p>{comment.author}</p> 
			</div>
		);
	});

	useEffect(() => {
		console.log('hit')
		let mapNewComments = recipeInfo.map((comment) => {
			return (
				<div>
					<p style={{ color: 'red' }}>{comment.post}</p>
					<p>{comment.author}</p>
				</div>
			);
		});
		console.log(mapNewComments)
		
	}, [recipeInfo])

	const post = () => {
		axios({
			url: `https://seefood-backend.herokuapp.com/${recipeId}/comments/create`,
			method: 'POST',
			data: comment,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
	};

	const update = () => {
		// useEffect(() => {
			axios({
				url: `https://seefood-backend.herokuapp.com/60689c00ffc3671a3eb5d67c/comments`,
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
				.then((res) => {
					setRecipeInfo(res.data);
				})
				.catch(console.error);
		// }, [])
	}

	console.log(recipeInfo)

	const handleComment = (event) => {
		setComment({
			post: event.target.value,
			recipeId: comment.recipeId
		})
	}
	console.log(comment)
	
	return (
		<div>
			<div className='commentContainer'>
				<h3 className='commentBanner'>Add a Comment:</h3>
				<input
					type='text'
					className='commentForm'
					onChange={handleComment}></input>
				<Button
					className='commentSubmitButton'
					variant='info'
					onClick={() => {
						post()
						setTimeout(() => {
							update()
						}, 1000)
					}}
					// onClick={update}
					>
					Submit
				</Button>
			</div>
			{mapNewComments}
			{mapComments}
		</div>
	);
};

export default Comments;
