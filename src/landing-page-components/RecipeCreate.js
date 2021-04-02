import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const RecipeCreate = () => {
    const [recipe, setRecipe] = useState({
        title: "Hopefully Final Test 2",
        author: "jen the genius"
    })

    const handleSubmit = (event) => {
        event.preventDefault();

        axios({
					url: `http://localhost:8000/recipes`,
					method: 'POST',
					data: recipe,
					headers: {
						Authorization:
							'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNjVhYWU4OTdhZTBjMDY3MTIyMTE2YyIsImlhdCI6MTYxNzM3MzYwNCwiZXhwIjoxNjE3NDA5NjA0fQ.91SNseVG1VwAgHA9Cxd1OZYJUK5dpLxAxEDoQfDYLqA',
					},
				});}

    return (
        <div>
            <h1>hello world</h1>
            <button onClick={handleSubmit}></button>
        </div>
    );
};

export default RecipeCreate;