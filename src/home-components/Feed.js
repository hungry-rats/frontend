import React, { useState, useEffect } from 'react';
import Card from './Card';

export default function Feed({ data }) {
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
