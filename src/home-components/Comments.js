import React from 'react';
import axios from 'axios';
import { Button, Carousel, Form, Jumbotron } from 'react-bootstrap';
import { tokenState as tokenStateAtom } from '../landing-page-components/LandingCarousel';
import { useRecoilState } from 'recoil';

const Comments = (props) => {
	const [token, setToken] = useRecoilState(tokenStateAtom);
	console.log(props.details);
	const recipeId = props.details._id;

	console.log(token)

	const mapComments = props.details.comments.map((comment) => {
		// console.log(props.details.author.username);
		return (
			<div>
				<p style={{ color: 'red' }}>{comment.post}</p>
				<p>{comment.author}</p>
				{/* <button>Delete Comment</button> */}
			</div>
		);
	});

	const post = () => {
		axios({
			url: `https://seefood-backend.herokuapp.com/${recipeId}/comments/create`,
			method: 'POST',
			data: {post: "test"},
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
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
