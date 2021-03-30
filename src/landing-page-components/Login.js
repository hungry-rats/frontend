import React from 'react';
import { useState, useEffect } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { userState as userStateAtom } from '../landing-page-components/LandingCarousel';
import { useRecoilState } from 'recoil';

const Login = () => {
    const [user, setUser] = useRecoilState(userStateAtom);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() =>{
        setShow(true)
    }, [])

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
						<Form>
							<Form.Group controlId='formBasicEmail'>
								<Form.Label>Email address</Form.Label>
								<Form.Control type='email' placeholder='Enter email' />
							</Form.Group>

							<Form.Group controlId='formBasicPassword'>
								<Form.Label>Password</Form.Label>
								<Form.Control type='password' placeholder='Password' />
							</Form.Group>
							<Button
								variant='primary'
								type='submit'
								onClick={handleClose}
								as={Link}
								to='/'
								onClick={() => {
									setUser(true);
								}}>
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
    }

export default Login;