import React, { useState, useEffect, useForceUpdate } from 'react';
import axios from 'axios';
import { Button, Carousel, Form, Jumbotron } from 'react-bootstrap';
import { tokenState as tokenStateAtom } from '../landing-page-components/LandingCarousel';
import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';

const Comments = (props) => {
	const [token, setToken] = useRecoilState(tokenStateAtom);
	const [comment, setComment] = useState({
		post: null,
		recipeId: null,
	});
	const [recipeInfo, setRecipeInfo] = useState([]);
	const recipeId = props.details._id;
	let mapNewComments = [];

	useEffect(() => {
		setComment({
			recipeId: recipeId,
		});
	}, []);

	let mapComments = props.details.comments.map((comment) => {
		return (
			<div>
				<p style={{ color: 'red' }}>{comment.post}</p>
				<p>{comment.author}</p>
				<p>{comment.timeOfPost}</p>
			</div>
		);
	});

	useEffect(() => {
		let mapNewComments = recipeInfo.map((comment) => {
			return (
				<div>
					<p style={{ color: 'red' }}>{comment.post}</p>
					<p>{comment.author}</p>
				</div>
			);
		});
	}, [recipeInfo]);

	const post = () => {
		axios({
			url: `https://seefood-backend.herokuapp.com/${recipeId}/comments/create`,
			method: 'POST',
			data: comment,
			headers: {
				'content-type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		});
	};

	const update = () => {
		axios({
			url: `https://seefood-backend.herokuapp.com/${recipeId}/comments`,
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
			.then((res) => {
				setRecipeInfo(res.data);
			})
			.catch(console.error);
	};

	const handleComment = (event) => {
		setComment({
			post: event.target.value,
			recipeId: comment.recipeId,
		});
	};

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
						post();
						setTimeout(() => {
							update();
						}, 1000);
					}}>
					Submit
				</Button>
			</div>
			{mapNewComments}
			{mapComments}
		</div>
	);
};

export default Comments;
