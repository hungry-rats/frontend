import React, { useState, useEffect } from 'react';
import Feed from './Feed';
import Filters from './Filters';
import SearchBar from './SearchBar';
import AddRecipe from './AddRecipe';
import NavBar from '../global-components/NavBar';
import HomeStyle from './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { atom, useRecoilState } from 'recoil';
import RecipeCreate from './RecipeCreate';
import { tokenState as tokenStateAtom } from '../landing-page-components/LandingCarousel';

const axios = require('axios').default;

export const searchState = atom({
	key: 'searchState',
	defalut: '',
});

export default function Home() {
	const [token, setToken] = useRecoilState(tokenStateAtom);
	const [data, setData] = useState();
	const [search, setSearch] = useRecoilState(searchState);

	const url = `https://seefood-backend.herokuapp.com/recipes/`;

	useEffect(() => {}, [data]);

	useEffect(() => {
		if (search !== null && search !== undefined && search !== '') {
			axios
				.get(url)
				.then((res) =>
					setData(
						res.data.filter((item) =>
							item.title.toLowerCase().includes(search.toLowerCase())
						)
					)
				)
				.catch(console.error);
		} else {
			axios
				.get(url)
				.then((res) => {
					setData(res.data);
				})
				.catch(console.error);
		}
	}, [search]);

	if (data) {
		return (
			<div>
				<div className='Home'>
					<div className='Search'>
						<SearchBar />
					</div>
					<div className='Filters'>
						<Filters />
					</div>
					<div className='Feed'>
						<Feed data={data} />
					</div>
					<div className='UserInput'>
						<AddRecipe />
					</div>
				</div>
			</div>
		);
	} else {
		return <h1>Loading</h1>;
	}
}
