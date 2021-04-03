import React from 'react';
import axios from 'axios';
import { Button, Carousel, Form, Jumbotron } from 'react-bootstrap';

const Comments = (props) => {
	console.log(props.details);
	const recipeId = props.details._id;

	const mapComments = props.details.comments.map((comment) => {
		return (
			<div>
				<p style={{ color: 'red' }}>{comment.post}</p>
			</div>
		);
	});

	const post = () => {
		axios.post(
			`https://seefood-backend.herokuapp.com/${recipeId}/comments/create`,
			{
				post: 'TEST POST FROM REACT',
			}
		);
	};

	// 	axios({
	// 		url: `https://seefood-backend.herokuapp.com/recipes`,
	// 		method: 'POST',
	// 		data: recipe,
	// 		headers: {
	// 			Authorization: `Bearer ${token}`,
	// 		},
	// 	});
	// };

	// console.log(mapComments)

	return (
		<div>
			<div className='commentContainer'>
				<h3 className='commentBanner'>Add a Comment:</h3>
				<input type='text' className='commentForm'></input>
				<Button className='commentSubmitButton' variant='info' onClick={post}>
					Submit
				</Button>
			</div>
			{mapComments}
		</div>
	);
};

export default Comments;
