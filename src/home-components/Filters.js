import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';

const onChange = () => {
	console.log('onChange was called!');
};

const onSubmit = () => {
	console.log('submited');
};

export default function Filters() {
	// const [formData, setFormData] = useState({
	// 	username: null,
	// 	email: null,
	// 	password: null,
	// });
	return (
		<div>
			Filters
			<Form>
				<Form.Check type='checkbox' label='Checkbox' onChange={onChange} />
				<Form.Check type='switch' label='Switch' onChange={onChange} />
				<Form.Switch label='Switch 2' onChange={onChange} />
			</Form>
			<Button variant='dark' nClick={onSubmit}>
				Dark
			</Button>
		</div>
	);
}
