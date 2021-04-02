import React from 'react';
import Details from './Details';
import { Link } from 'react-router-dom';
import HomeStyle from './Home.css';
import './Card.css';

export default function Card({ item }) {
	return (
		<div>
			<Link to={`recipes/${item._id}`}>
				<div className='card'>
					<div>
						<h3 className='cardTitle grow'>{item.title}</h3>
					</div>
					<div>
						<img className='cardImage' src={item.image} alt={item.title} />
					</div>
				</div>
			</Link>
		</div>
	);
}
