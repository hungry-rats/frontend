import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeStyle from './Home.css';
import { atom, useRecoilState } from 'recoil';
import { Button, Form, Col } from 'react-bootstrap';

export const searchState = atom({
	key: 'searchState',
	defalut: '',
});

export default function SearchBar() {
	const [input, setInput] = useState('');
	const [search, setSearch] = useRecoilState(searchState);

	function handleSubmit(e) {
		e.preventDefault();
		setSearch(input);
	}

	return (
		<form onSubmit={handleSubmit} className='searchSpace'>
			<input
				className='searchLine'
				type='text'
				placeholder='Search by name'
				onChange={(e) => setInput(e.target.value)}
			/>
			<input type='submit' value='Submit' className='searchButton' />
		</form>
	);
}
