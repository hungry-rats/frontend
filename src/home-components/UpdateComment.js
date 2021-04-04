import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { tokenState as tokenStateAtom } from '../landing-page-components/LandingCarousel';
import { useRecoilState } from 'recoil';
import axios from 'axios';

const UpdateComment = ({ match }) => {
    const [token, setToken] = useRecoilState(tokenStateAtom);
		const [show, setShow] = useState(true);
		const [updateComment, setUpdateComment] = useState({});

		const handleClose = () => setShow(false);
		const handleShow = () => setShow(true);

		console.log(match.params)

		function handleInput(event) {
			// event.preventDefault();
			const input = { ...updateComment };
			input[event.target.id] = event.target.value;
			setUpdateComment(input);
			// console.log(event.target.id);
		}

		const submitUpdate = () => {
			axios({
				url: `https://seefood-backend.herokuapp.com/${match.params.recipeId}/comments/${match.params.id}/edit`,
				method: 'PUT',
				data: updateComment,
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
		};

		console.log(updateComment);

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
						<Modal.Title>Update Comment</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form>
							<Form.Group controlId='post' onChange={handleInput}>
								<Form.Label>Post</Form.Label>
								<Form.Control type='text' placeholder='Enter Post Update' />
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
						<Button
							variant='primary'
							as={Link}
							to='/user'
							onClick={submitUpdate}>
							Submit
						</Button>
					</Modal.Footer>
				</Modal>
			</>
		);
};

export default UpdateComment;