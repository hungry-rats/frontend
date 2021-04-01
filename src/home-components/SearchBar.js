import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeStyle from './Home.css';
import { atom, useRecoilState } from 'recoil';
import { Button, Form, Col } from 'react-bootstrap';
// import searchState from './Home';

export const searchState = atom({
	key: 'searchState',
	defalut: '',
});

export default function SearchBar() {
	const [input, setInput] = useState('');
	const [search, setSearch] = useRecoilState(searchState);

	console.log('input', input, 'search', search);
	function handleSubmit(e) {
		e.preventDefault();
		setSearch(input);
	}

	return (
		<form onSubmit={handleSubmit} className='searchSpace'>
			<input type='submit' value='Submit' />
			<input
				className='searchLine'
				type='text'
				placeholder='Search by name'
				onChange={(e) => setInput(e.target.value)}
			/>
		</form>
	);
}
{
	/* <Form.Row
				className='allign-items-left'
				onChange={(e) => setInput(e.target.value)}
				onSubmit={handleSubmit}>
				<Col xs={2} className='margin-right: 10px'>
					<Button type='submit' onSubmit={handleSubmit}>
						Submit
					</Button>
				</Col>
				<Col xs={10}>
					<Form.Label htmlFor='inlineFormInput' srOnly>
						Name
					</Form.Label>
					<Form.Control type='search' placeholder='Search by Name' />
				</Col>
			</Form.Row> */
}
