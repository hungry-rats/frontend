import React, { useState, useEffect } from 'react';
import Card from './Card';
import { tokenState as tokenStateAtom } from '../landing-page-components/LandingCarousel';
import { useRecoilState } from 'recoil';

export default function Feed({ data }) {
	const [token, setToken] = useRecoilState(tokenStateAtom);
	// console.log(data);
	// console.log(token)

	if (!data) {
		return (
			<div>
				<h3>Loading</h3>
			</div>
		);
	} else {
		return (
			<div>
				{data.map((item) => {
					// console.log(item);
					return (
						<div key={item._id}>
							<Card item={item} />
						</div>
					);
				})}
			</div>
		);
	}
}
