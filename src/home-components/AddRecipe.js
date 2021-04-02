import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function AddRecipe() {
	return (
		<div>
			<Link to={`/createrecipe`}>
				<Button variant='dark'>Create New Recipe</Button>
			</Link>
		</div>
	);
}
