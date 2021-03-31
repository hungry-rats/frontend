import React from 'react';
import Details from './Details';
import { Link } from 'react-router-dom';

export default function Card({ item }) {
	return (
		<div>
			<Link to={`recipes/${item._id}`}>
				<div className='card'>
					<div className='card-title'>
						<h3>{item.title}</h3>
					</div>
					<div className='card-image'>
						<img src={item.image} alt={item.title} />
					</div>
				</div>
			</Link>
		</div>
	);
}
