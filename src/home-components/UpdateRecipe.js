import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { tokenState as tokenStateAtom } from '../landing-page-components/LandingCarousel';
import { useRecoilState } from 'recoil';
import axios from 'axios';

const UpdateRecipe = ({ match }) => {
    const [token, setToken] = useRecoilState(tokenStateAtom);
    const [show, setShow] = useState(true);
    const [updateRecipe, setUpdateRecipe] = useState({})

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

    // console.log(match.params.id)

    function handleInput(event) {
		// event.preventDefault();
		const input = { ...updateRecipe };
		input[event.target.id] = event.target.value;
		setUpdateRecipe(input);
		// console.log(event.target.id);
	}

    const submitUpdate = () => {
        axios({
			url: `https://seefood-backend.herokuapp.com/recipes/${match.params.id}/edit`,
			method: 'PUT',
			data: updateRecipe,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
    }

    console.log(updateRecipe)


		return (
			<>
				<Modal
					// centered
					size='lg'
					show={show}
					onHide={handleClose}
					backdrop='static'
					keyboard={false}>
					<Modal.Header closeButton>
						<Modal.Title>Update</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form>
							<Form.Group controlId='title' onChange={handleInput}>
								<Form.Label>Title</Form.Label>
								<Form.Control type='text' placeholder='Enter Title Update' />
							</Form.Group>

							<Form.Group controlId='inspiredBy' onChange={handleInput}>
								<Form.Label>Inspired By</Form.Label>
								<Form.Control
									type='text'
									placeholder='Enter inspiredBy Update'
								/>
							</Form.Group>

							<Form.Group controlId='allergies' onChange={handleInput}>
								<Form.Label>Allergies</Form.Label>
								<Form.Control
									type='text'
									placeholder='Enter allergies Update'
								/>
							</Form.Group>

							<Form.Group controlId='image' onChange={handleInput}>
								<Form.Label>Image</Form.Label>
								<Form.Control type='text' placeholder='Enter image Update' />
							</Form.Group>

							<Form.Group controlId='ingredients' onChange={handleInput}>
								<Form.Label>Ingredients</Form.Label>
								<Form.Control
									type='text'
									placeholder='Enter ingredients Update'
								/>
							</Form.Group>

							<Form.Group controlId='directions' onChange={handleInput}>
								<Form.Label>Directions</Form.Label>
								<Form.Control
									type='text'
									placeholder='Enter directions Update'
								/>
							</Form.Group>
						</Form>
					</Modal.Body>
					<Modal.Footer>
						<Button
							variant='secondary'
							onClick={handleClose}
							as={Link}
							to='/user'>
							Close
						</Button>
						<Button variant='primary' as={Link} to='/user' onClick={submitUpdate}>
							Submit
						</Button>
					</Modal.Footer>
				</Modal>
			</>
		);
};

export default UpdateRecipe;