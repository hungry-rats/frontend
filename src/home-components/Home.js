import React, { useState, useEffect } from 'react';
import Feed from './Feed';
import Filters from './Filters';
import SearchBar from './SearchBar';
const axios = require('axios').default;

export default function Home() {
	const [data, setData] = useState();

	const url = `http://localhost:8000/seefood/`;
	useEffect(() => {
		axios
			.get(url)
			.then((res) => {
				setData(res.data);
			})
			.catch(console.error);
	}, []);

	console.log(data);

	useEffect(() => {}, [data]);
	if (data) {
		return (
			<div>
				test
				<Filters />
				<SearchBar />
				<Feed data={data} />
			</div>
		);
	} else {
		return <h1>Loading</h1>;
	}
}
