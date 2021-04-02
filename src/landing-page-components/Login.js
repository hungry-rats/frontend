import React from 'react';
import { useState, useEffect } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { userState as userStateAtom } from '../landing-page-components/LandingCarousel';
import { tokenState as tokenStateAtom } from '../landing-page-components/LandingCarousel';
import { useRecoilState } from 'recoil';
import axios from 'axios';

const Login = (props) => {
	const history = useHistory();
	const [user, setUser] = useRecoilState(userStateAtom);
	const [token, setToken] = useRecoilState(tokenStateAtom);
	const [show, setShow] = useState(false);
	const [userData, setUserData] = useState({
		username: null,
		password: null,
	});

	console.log(token);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	useEffect(() => {
		setShow(true);
	}, []);

	//Handle Submit Here
	function handleSubmit(event) {
		event.preventDefault();
		loginFunction();
		// console.log(event.target);
	}

	function handleUserName(event) {
		setUserData({
			username: event.target.value,
			password: userData.password,
		});
	}

	function handlePassword(event) {
		setUserData({
			username: userData.username,
			password: event.target.value,
		});
	}

	const loginFunction = () => {
		axios({
			url: `http://localhost:8000/signin`,
			method: 'POST',
			data: userData,
		})
			.then(({ data }) => {
				console.log(data);
				setToken(data.token);
			})
			.then(() => {
				history.push('/home');
			});
	};
	console.log(token);

	// console.log(props.token)

	return (
		<div onload={handleShow}>
			<Modal
				show={show}
				onHide={handleClose}
				backdrop='static'
				keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>
						<h1>Sign in</h1>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={handleSubmit}>
						<Form.Group
							controlId='formBasicUsername'
							onSubmit={handleSubmit}
							onChange={handleUserName}>
							<Form.Label>Username</Form.Label>
							<Form.Control type='Username' placeholder='Enter Username' />
						</Form.Group>

						<Form.Group controlId='formBasicPassword' onChange={handlePassword}>
							<Form.Label>Password</Form.Label>
							<Form.Control type='password' placeholder='Password' />
						</Form.Group>
						<Button
							variant='primary'
							type='submit'
							// as={Link}
							// to='/'
							/* onClick={() => {
								setUser(true);
							}} */
						>
							Submit
						</Button>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose} as={Link} to='/'>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default Login;
